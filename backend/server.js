const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// -------------------- MIDDLEWARE --------------------
app.use(cors({
  origin: 'http://localhost:5173',
}));
app.use(express.json());

// -------------------- FILE UPLOAD --------------------
const upload = multer({
  dest: 'uploads/',
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

// -------------------- EMAIL SETUP --------------------
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// -------------------- APPLY ENDPOINT --------------------
app.post('/apply', upload.single('resume'), (req, res) => {
  try {
    const filePath = 'applications.json';

    if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]));
    }

    const applications = JSON.parse(
    fs.readFileSync(filePath, 'utf8')
    );


    const application = {
      id: Date.now(),
      name: req.body.name,
      email: req.body.email,
      jobId: req.body.jobId,
      jobTitle: req.body.jobTitle,
      company: req.body.company,
      authorization: req.body.authorization || null,
      resumeFile: req.file?.filename,
      appliedAt: new Date().toISOString(),
    };

    applications.push(application);

    fs.writeFileSync(
      'applications.json',
      JSON.stringify(applications, null, 2)
    );

    // -------------------- EMAIL CONFIRMATION --------------------
    transporter.sendMail({
      from: `"Vritan Group Careers" <${process.env.EMAIL_USER}>`,
      to: application.email,
      subject: `Application Received – ${application.jobTitle}`,
      html: `
        <p>Dear ${application.name},</p>
        <p>Thank you for applying to <strong>${application.jobTitle}</strong> at <strong>${application.company}</strong>.</p>
        <p>Our team will review your application carefully.</p>
        <br/>
        <p>— Vritan Group Talent Team</p>
      `,
    });

    res.status(200).json({ success: true });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Application failed' });
  }
});

// -------------------- SERVER START --------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
