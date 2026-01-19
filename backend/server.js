const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config({ path: __dirname + '/.env' });

const app = express();

/* ================= MIDDLEWARE ================= */
app.use(cors({ 
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true 
}));
app.use(express.json({ limit: '10mb' }));

// Basic security headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  next();
});

/* ================= EMAIL SETUP ================= */
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  pool: true, // Use pooled connections for better performance
  maxConnections: 5,
  maxMessages: 10,
});

// Verify once on server start
transporter.verify((err) => {
  if (err) {
    console.error('❌ Email not ready:', err.message);
  } else {
    console.log('✅ Email server ready');
  }
});

/* ================= HELPER FUNCTIONS ================= */
const CONTACTS_FILE = path.join(__dirname, 'contacts.json');

async function saveContact(contactData) {
  try {
    let contacts = [];
    
    try {
      const data = await fs.readFile(CONTACTS_FILE, 'utf8');
      contacts = JSON.parse(data);
    } catch (err) {
      // File doesn't exist, start with empty array
      if (err.code !== 'ENOENT') throw err;
    }

    const contact = {
      id: Date.now(),
      ...contactData,
      submittedAt: new Date().toISOString(),
    };

    contacts.push(contact);
    await fs.writeFile(CONTACTS_FILE, JSON.stringify(contacts, null, 2));
    
    return contact;
  } catch (err) {
    console.error('❌ Failed to save contact:', err.message);
    throw err;
  }
}

async function sendEmailNotification(contactData) {
  const { name, email, company, message, timeline } = contactData;

  // Email to YOU (business owner)
  const adminEmail = transporter.sendMail({
    from: `"Vritan Group Website" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    replyTo: email, // CRITICAL: This lets you reply directly to the client
    subject: `🔔 New AI Assessment Request from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e293b;">New Lead Submission</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="background: #f8fafc;">
            <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold;">Name</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold;">Email</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0;">
              <a href="mailto:${email}">${email}</a>
            </td>
          </tr>
          <tr style="background: #f8fafc;">
            <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold;">Company</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0;">${company || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold;">Timeline</td>
            <td style="padding: 12px; border: 1px solid #e2e8f0;">${timeline}</td>
          </tr>
        </table>
        <div style="margin-top: 20px; padding: 16px; background: #f1f5f9; border-radius: 8px;">
          <h3 style="margin-top: 0; color: #475569;">Message:</h3>
          <p style="white-space: pre-wrap; color: #334155;">${message}</p>
        </div>
        <p style="color: #64748b; font-size: 12px; margin-top: 20px;">
          Submitted: ${new Date().toLocaleString()}
        </p>
      </div>
    `,
  });

  // Confirmation to CLIENT
  const clientEmail = transporter.sendMail({
    from: `"Vritan Group" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'We received your AI assessment request',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e293b;">Thank You, ${name}!</h2>
        <p style="color: #475569; line-height: 1.6;">
          We've received your request for an AI assessment and our team is reviewing your information.
        </p>
        <div style="background: #f0fdf4; border-left: 4px solid #22c55e; padding: 16px; margin: 20px 0;">
          <p style="margin: 0; color: #166534;">
            <strong>Next Steps:</strong> Our AI specialists will reach out within <strong>24 hours</strong> 
            to discuss your needs and timeline.
          </p>
        </div>
        <p style="color: #64748b; font-size: 14px;">
          In the meantime, feel free to reply to this email if you have any questions.
        </p>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
        <p style="color: #94a3b8; font-size: 12px;">
          Best regards,<br/>
          <strong>Vritan Group Team</strong>
        </p>
      </div>
    `,
  });

  // Send both emails in parallel
  return Promise.allSettled([adminEmail, clientEmail]);
}

/* ================= INPUT VALIDATION ================= */
function validateContactInput(data) {
  const { name, email, message } = data;
  
  if (!name || !email || !message) {
    return { valid: false, error: 'Missing required fields' };
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, error: 'Invalid email format' };
  }

  // Length validation
  if (name.length > 100 || message.length > 2000) {
    return { valid: false, error: 'Input too long' };
  }

  return { valid: true };
}

/* ================= CONTACT ENDPOINT ================= */
app.post('/contact', async (req, res) => {
  try {
    const { name, email, company, message, timeline } = req.body;

    // Validate input
    const validation = validateContactInput(req.body);
    if (!validation.valid) {
      return res.status(400).json({
        success: false,
        error: validation.error,
      });
    }

    const contactData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company?.trim() || '',
      message: message.trim(),
      timeline: timeline || 'Exploring options',
    };

    // Save to file
    await saveContact(contactData);

    /* ---- RESPOND TO CLIENT IMMEDIATELY ---- */
    res.status(200).json({
      success: true,
      message: 'Contact request received successfully',
    });

    /* ---- SEND EMAILS IN BACKGROUND (non-blocking) ---- */
    sendEmailNotification(contactData)
      .then((results) => {
        results.forEach((result, i) => {
          if (result.status === 'fulfilled') {
            console.log(`✅ Email ${i + 1} sent successfully`);
          } else {
            console.error(`❌ Email ${i + 1} failed:`, result.reason?.message);
          }
        });
      })
      .catch((err) => {
        console.error('❌ Email process failed:', err.message);
      });

  } catch (err) {
    console.error('❌ Server error:', err);
    res.status(500).json({
      success: false,
      error: 'Internal server error. Please try again.',
    });
  }
});

/* ================= HEALTH CHECK ================= */
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

/* ================= 404 HANDLER ================= */
app.use((req, res) => {
  res.status(404).json({ success: false, error: 'Route not found' });
});

/* ================= ERROR HANDLER ================= */
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ success: false, error: 'Something went wrong' });
});

/* ================= GRACEFUL SHUTDOWN ================= */
process.on('SIGTERM', () => {
  console.log('SIGTERM received, closing server gracefully...');
  transporter.close();
  process.exit(0);
});

/* ================= SERVER START ================= */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});





// const express = require('express');
// const cors = require('cors');
// const fs = require('fs');
// const nodemailer = require('nodemailer');
// require('dotenv').config({ path: __dirname + '/.env' });

// const app = express();

// /* ================= MIDDLEWARE ================= */
// app.use(cors({ origin: 'http://localhost:5173' }));
// app.use(express.json());

// /* ================= EMAIL SETUP ================= */
// const transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// // Verify once on server start
// transporter.verify((err) => {
//   if (err) {
//     console.error('❌ Email not ready:', err.message);
//   } else {
//     console.log('✅ Email server ready');
//   }
// });

// /* ================= CONTACT ENDPOINT ================= */
// app.post('/contact', async (req, res) => {
//   try {
//     const { name, email, company, message, timeline } = req.body;

//     if (!name || !email || !message) {
//       return res.status(400).json({
//         success: false,
//         error: 'Missing required fields',
//       });
//     }

//     const filePath = 'contacts.json';

//     if (!fs.existsSync(filePath)) {
//       fs.writeFileSync(filePath, JSON.stringify([]));
//     }

//     const contacts = JSON.parse(fs.readFileSync(filePath, 'utf8'));

//     const contact = {
//       id: Date.now(),
//       name,
//       email,
//       company,
//       message,
//       timeline,
//       submittedAt: new Date().toISOString(),
//     };

//     contacts.push(contact);
//     fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2));

//     /* ---- RESPOND TO CLIENT IMMEDIATELY ---- */
//     res.status(200).json({
//       success: true,
//       message: 'Contact request received',
//     });

//     /* ---- SEND EMAILS IN BACKGROUND ---- */
//     (async () => {
//       try {
//         // Email to YOU
//         await transporter.sendMail({
//           from: `"Vritan Group Website" <${process.env.EMAIL_USER}>`,
//           to: process.env.EMAIL_USER,
//           subject: 'New AI Assessment Request',
//           html: `
//             <h3>New Lead</h3>
//             <p><strong>Name:</strong> ${name}</p>
//             <p><strong>Email:</strong> ${email}</p>
//             <p><strong>Company:</strong> ${company}</p>
//             <p><strong>Timeline:</strong> ${timeline}</p>
//             <p>${message}</p>
//           `,
//         });

//         // Confirmation to client
//         await transporter.sendMail({
//           from: `"Vritan Group" <${process.env.EMAIL_USER}>`,
//           to: email,
//           subject: 'We received your request',
//           html: `
//             <p>Hi ${name},</p>
//             <p>Thanks for contacting Vritan Group.</p>
//             <p>Our AI team will reach out within <strong>24 hours</strong>.</p>
//             <br/>
//             <p>— Vritan Group</p>
//           `,
//         });

//         console.log('✅ Contact emails sent');
//       } catch (err) {
//         console.error('❌ Email failed:', err.message);
//       }
//     })();

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       success: false,
//       error: 'Server error',
//     });
//   }
// });

// /* ================= SERVER START ================= */
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Backend running on http://localhost:${PORT}`);
// });















// const express = require('express');
// const cors = require('cors');
// const fs = require('fs');
// const nodemailer = require('nodemailer');

// require('dotenv').config();

// const app = express();

// /* -------------------- MIDDLEWARE -------------------- */
// app.use(cors({ origin: 'http://localhost:5173' }));
// app.use(express.json());

// /* -------------------- HEALTH CHECK -------------------- */
// app.get('/', (req, res) => {
//   res.json({ status: 'API running' });
// });

// /* -------------------- CONTACT ENDPOINT -------------------- */
// app.post('/contact', (req, res) => {
//   try {
//     const { name, email, company, message, timeline } = req.body;

//     // Basic validation
//     if (!name || !email || !message) {
//       return res.status(400).json({
//         success: false,
//         error: 'Missing required fields',
//       });
//     }

//     const filePath = './contacts.json';

//     const contacts = JSON.parse(fs.readFileSync(filePath, 'utf8'));

//     const newContact = {
//       id: Date.now(),
//       name,
//       email,
//       company: company || '',
//       message,
//       timeline: timeline || 'Not specified',
//       createdAt: new Date().toISOString(),
//     };

//     contacts.push(newContact);

//     fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2));

//     return res.status(200).json({
//       success: true,
//       message: 'Contact request received',
//     });

//   } catch (error) {
//     console.error('CONTACT API ERROR:', error);

//     return res.status(500).json({
//       success: false,
//       error: 'Internal server error',
//     });
//   }
// });

// /* -------------------- SERVER START -------------------- */
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`✅ Backend running on http://localhost:${PORT}`);
// });
