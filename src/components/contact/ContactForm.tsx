import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
  /* ================= STATE ================= */
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    timeline: 'Exploring options',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

  /* ================= HANDLERS ================= */
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (error) setError(null);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

      const res = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      let data;
      try {
        data = await res.json();
      } catch {
        throw new Error('Invalid server response');
      }

      if (!res.ok) {
        throw new Error(data.error || `Request failed (${res.status})`);
      }

      if (!data.success) {
        throw new Error(data.error || 'Request failed');
      }

      setSuccess(true);

      // Reset form after short delay
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
          timeline: 'Exploring options',
        });
      }, 500);

    } catch (err: any) {
      console.error('Contact form error:', err);
      
      if (err.name === 'AbortError') {
        setError('Request timeout. Please check your connection and try again.');
      } else if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError')) {
        setError('Connection error. Please check your internet and try again.');
      } else {
        setError(err.message || 'Something went wrong. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  }

  function resetForm() {
    setSuccess(false);
    setError(null);
  }

  /* ================= UI ================= */
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl border shadow-sm">

        <AnimatePresence mode="wait">
          {success ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                className="mx-auto mb-6 w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl"
              >
                ✅
              </motion.div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Request Received!
              </h3>
              <p className="text-slate-600 mb-2">
                Thank you for contacting us, <strong>{formData.name.split(' ')[0]}</strong>.
              </p>
              <p className="text-slate-600 mb-8">
                Our team will reach out within <strong>24 hours</strong>.
              </p>

              <button
                onClick={resetForm}
                className="px-6 py-2 text-sm text-slate-600 hover:text-slate-900 transition"
              >
                ← Submit another request
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">
                  Get Started
                </h2>
                <p className="text-slate-600">
                  Tell us about your AI needs and we'll be in touch soon.
                </p>
              </div>

              <Field label="Full Name" required>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  maxLength={100}
                  required
                  disabled={loading}
                />
              </Field>

              <Field label="Work Email" required>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  maxLength={100}
                  required
                  disabled={loading}
                />
              </Field>

              <Field label="Company Name">
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Acme Inc."
                  maxLength={100}
                  disabled={loading}
                />
              </Field>

              <Field label="What would you like an AI agent to help with?" required>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your needs, challenges, or goals..."
                  maxLength={2000}
                  required
                  disabled={loading}
                />
                <div className="text-xs text-slate-400 mt-1 text-right">
                  {formData.message.length}/2000
                </div>
              </Field>

              <Field label="Estimated Timeline">
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  disabled={loading}
                >
                  <option>Exploring options</option>
                  <option>Within 1–3 months</option>
                  <option>Immediate</option>
                </select>
              </Field>

              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-sm text-red-700 text-center">{error}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 rounded-lg font-semibold transition-all ${
                  loading
                    ? 'bg-slate-400 cursor-not-allowed'
                    : 'bg-slate-900 hover:bg-slate-800 text-white hover:shadow-lg'
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Submitting…
                  </span>
                ) : (
                  'Submit Request'
                )}
              </button>

              <p className="text-xs text-slate-500 text-center">
                🔒 Your information is secure. No spam. No sales pressure.
              </p>
            </motion.form>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

/* ================= FIELD COMPONENT ================= */
function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2 text-slate-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
      <style>{`
        input, textarea, select {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          font-size: 15px;
          transition: all 0.2s;
          background: white;
        }
        input:disabled, textarea:disabled, select:disabled {
          background: #f9fafb;
          cursor: not-allowed;
          opacity: 0.6;
        }
        input:focus, textarea:focus, select:focus {
          outline: none;
          border-color: #f59e0b;
          box-shadow: 0 0 0 3px rgba(245,158,11,0.1);
        }
        textarea {
          resize: vertical;
          min-height: 100px;
        }
        select {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}








// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function ContactForm() {
//   /* ================= STATE ================= */
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [company, setCompany] = useState('');
//   const [message, setMessage] = useState('');
//   const [timeline, setTimeline] = useState('Exploring options');

//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//   /* ================= SUBMIT ================= */
//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();

//     setLoading(true);
//     setError(null);

//     try {
//       const res = await fetch(`${API_BASE_URL}/contact`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           name,
//           email,
//           company,
//           message,
//           timeline,
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok || !data.success) {
//         throw new Error(data.error || 'Request failed');
//       }

//       setSuccess(true);

//       // Reset form
//       setName('');
//       setEmail('');
//       setCompany('');
//       setMessage('');
//       setTimeline('Exploring options');

//     } catch (err) {
//       setError('Something went wrong. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   }

//   /* ================= UI ================= */
//   return (
//     <section className="py-24 px-6 bg-slate-50">
//       <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl border shadow-sm">

//         <AnimatePresence>
//           {success ? (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="text-center py-12"
//             >
//               <motion.div
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ type: 'spring', stiffness: 200 }}
//                 className="mx-auto mb-4 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center"
//               >
//                 ✅
//               </motion.div>

//               <h3 className="text-2xl font-bold text-slate-900 mb-3">
//                 Request received
//               </h3>
//               <p className="text-slate-600">
//                 Our team will contact you within <strong>24 hours</strong>.
//               </p>
//             </motion.div>
//           ) : (
//             <form onSubmit={handleSubmit} className="space-y-6">

//               <Field label="Full Name">
//                 <input value={name} onChange={e => setName(e.target.value)} required />
//               </Field>

//               <Field label="Work Email">
//                 <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
//               </Field>

//               <Field label="Company Name">
//                 <input value={company} onChange={e => setCompany(e.target.value)} />
//               </Field>

//               <Field label="What would you like an AI agent to help with?">
//                 <textarea rows={4} value={message} onChange={e => setMessage(e.target.value)} required />
//               </Field>

//               <Field label="Estimated timeline">
//                 <select value={timeline} onChange={e => setTimeline(e.target.value)}>
//                   <option>Exploring options</option>
//                   <option>Within 1–3 months</option>
//                   <option>Immediate</option>
//                 </select>
//               </Field>

//               {error && (
//                 <p className="text-sm text-red-600 text-center">{error}</p>
//               )}

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className={`w-full py-4 rounded-lg font-semibold transition
//                   ${loading
//                     ? 'bg-slate-400 cursor-not-allowed'
//                     : 'bg-slate-900 hover:bg-slate-800 text-white'}
//                 `}
//               >
//                 {loading ? 'Submitting…' : 'Submit Request'}
//               </button>

//               <p className="text-xs text-slate-500 text-center">
//                 No spam. No sales pressure.
//               </p>

//             </form>
//           )}
//         </AnimatePresence>

//       </div>
//     </section>
//   );
// }

// /* ================= FIELD ================= */
// function Field({ label, children }: { label: string; children: React.ReactNode }) {
//   return (
//     <div>
//       <label className="block text-sm font-medium mb-2">{label}</label>
//       {children}
//       <style>{`
//         input, textarea, select {
//           width: 100%;
//           padding: 12px 14px;
//           border: 1px solid #e5e7eb;
//           border-radius: 8px;
//         }
//         input:focus, textarea:focus, select:focus {
//           outline: none;
//           border-color: #f59e0b;
//           box-shadow: 0 0 0 2px rgba(245,158,11,0.15);
//         }
//       `}</style>
//     </div>
//   );
// }



// import { useState } from 'react';

// export default function ContactForm() {
//   // ---------------- STATE ----------------
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [company, setCompany] = useState('');
//   const [message, setMessage] = useState('');
//   const [timeline, setTimeline] = useState('Exploring options');

//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//   // ---------------- SUBMIT ----------------
//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();

//     if (loading) return;

//     setLoading(true);
//     setError(null);

//     try {
//       const res = await fetch(`${API_BASE_URL}/contact`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name, email, company, message, timeline }),
//       });

//       const data = await res.json();

//       if (!res.ok || !data.success) {
//         throw new Error(data.message || 'Request failed');
//       }

//       setSuccess(true);


//       // reset form
//       setName('');
//       setEmail('');
//       setCompany('');
//       setMessage('');
//       setTimeline('Exploring options');

//     } catch (err: any) {
//       setError(err.message || 'Something went wrong. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   }

//   // ---------------- UI ----------------
//   return (
//     <section className="py-24 px-6 bg-slate-50">
//       <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl border shadow-sm">

//         {success ? (
//           <div className="text-center py-14">
//             <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
//               <span className="text-3xl">✓</span>
//             </div>

//             <h3 className="text-2xl font-bold text-slate-900 mb-3">
//               Request received
//             </h3>

//             <p className="text-slate-600 max-w-md mx-auto">
//               Thanks for reaching out. Our AI team will review your request and
//               contact you within <strong>24 hours</strong>.
//             </p>
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit} className="space-y-6">

//             <Field label="Full Name">
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </Field>

//             <Field label="Work Email">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </Field>

//             <Field label="Company Name">
//               <input
//                 type="text"
//                 value={company}
//                 onChange={(e) => setCompany(e.target.value)}
//               />
//             </Field>

//             <Field label="What would you like an AI agent to help with?">
//               <textarea
//                 rows={4}
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 required
//               />
//             </Field>

//             <Field label="Estimated timeline">
//               <select
//                 value={timeline}
//                 onChange={(e) => setTimeline(e.target.value)}
//               >
//                 <option>Exploring options</option>
//                 <option>Within 1–3 months</option>
//                 <option>Immediate</option>
//               </select>
//             </Field>

//             {error && (
//               <p className="text-sm text-red-600 text-center">{error}</p>
//             )}

//             <button
//               type="submit"
//               disabled={loading}
//               className={`
//                 w-full py-4 rounded-lg font-semibold transition
//                 ${loading
//                   ? 'bg-slate-400 cursor-not-allowed'
//                   : 'bg-slate-900 hover:bg-slate-800 text-white'}
//               `}
//             >
//               {loading ? 'Submitting…' : 'Submit Request'}
//             </button>

//             <p className="text-xs text-slate-500 text-center">
//               No spam. No sales pressure.
//             </p>
//           </form>
//         )}
//       </div>
//     </section>
//   );
// }

// // ---------------- FIELD WRAPPER ----------------
// function Field({
//   label,
//   children,
// }: {
//   label: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div>
//       <label className="block text-sm font-medium mb-2">{label}</label>
//       {children}

//       <style>{`
//         input, textarea, select {
//           width: 100%;
//           padding: 12px 14px;
//           border: 1px solid #e5e7eb;
//           border-radius: 8px;
//           font-size: 15px;
//         }
//         input:focus, textarea:focus, select:focus {
//           outline: none;
//           border-color: #f59e0b;
//           box-shadow: 0 0 0 2px rgba(245,158,11,0.15);
//         }
//       `}</style>
//     </div>
//   );
// }



// import { useState } from 'react';

// export default function ContactForm() {
//   const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     setStatus('loading');

//     const form = e.currentTarget;
//     const formData = new FormData(form);

//     const payload = {
//       name: formData.get('name'),
//       email: formData.get('email'),
//       company: formData.get('company'),
//       message: formData.get('message'),
//       timeline: formData.get('timeline'),
//     };

//     try {
//       const res = await fetch('http://localhost:5000/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload),
//       });

//       if (!res.ok) throw new Error();

//       setStatus('success');
//       form.reset();
//     } catch {
//       setStatus('error');
//     }
//   }

//   return (
//     <section className="py-24 px-6 bg-slate-50">
//       <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl border shadow-sm">

//         {status === 'success' ? (
//           <SuccessState />
//         ) : (
//           <form onSubmit={handleSubmit} className="space-y-6">

//             <Field label="Full Name">
//               <input name="name" required placeholder="Your name" />
//             </Field>

//             <Field label="Work Email">
//               <input name="email" type="email" required placeholder="you@company.com" />
//             </Field>

//             <Field label="Company Name">
//               <input name="company" required placeholder="Company or organization" />
//             </Field>

//             <Field label="What would you like an AI agent to help with?">
//               <textarea
//                 name="message"
//                 rows={4}
//                 required
//                 placeholder="Customer support, sales, internal workflows, etc."
//               />
//             </Field>

//             <Field label="Estimated timeline">
//               <select name="timeline">
//                 <option>Exploring options</option>
//                 <option>Within 1–3 months</option>
//                 <option>Immediate</option>
//               </select>
//             </Field>

//             <button
//               disabled={status === 'loading'}
//               className="w-full px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition disabled:opacity-60"
//             >
//               {status === 'loading' ? 'Submitting...' : 'Submit Request'}
//             </button>

//             {status === 'error' && (
//               <p className="text-sm text-red-600 text-center">
//                 Something went wrong. Please try again.
//               </p>
//             )}

//             <p className="text-xs text-slate-500 text-center">
//               We usually respond within 24 hours. No spam. No sales pressure.
//             </p>
//           </form>
//         )}
//       </div>
//     </section>
//   );
// }

// /* ---------- Success UI ---------- */

// function SuccessState() {
//   return (
//     <div className="text-center space-y-4">
//       <h3 className="text-2xl font-bold text-slate-900">
//         Request Received ✅
//       </h3>
//       <p className="text-slate-600">
//         Thanks for reaching out. Our team will review your request and contact you within 24 hours.
//       </p>
//       <p className="text-sm text-slate-500">
//         You can safely close this page.
//       </p>
//     </div>
//   );
// }

// /* ---------- Field Wrapper ---------- */

// function Field({ label, children }: { label: string; children: React.ReactNode }) {
//   return (
//     <div>
//       <label className="block text-sm font-medium text-slate-700 mb-2">
//         {label}
//       </label>
//       {children}
//       <style>{`
//         input, textarea, select {
//           width: 100%;
//           padding: 12px 14px;
//           border: 1px solid #e5e7eb;
//           border-radius: 8px;
//           font-size: 15px;
//         }
//         input:focus, textarea:focus, select:focus {
//           border-color: #f59e0b;
//           box-shadow: 0 0 0 2px rgba(245,158,11,0.15);
//           outline: none;
//         }
//       `}</style>
//     </div>
//   );
// }






// export default function ContactForm() {
//   return (
//     <section className="py-24 px-6 bg-slate-50">
//       <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl border shadow-sm">

//         <form
//           className="space-y-6"
//           onSubmit={async (e) => {
//             e.preventDefault();

//             const form = e.currentTarget;
//             const formData = new FormData(form);

//             const payload = {
//               name: formData.get('name'),
//               email: formData.get('email'),
//               company: formData.get('company'),
//               message: formData.get('message'),
//               timeline: formData.get('timeline'),
//             };

//             try {
//               const res = await fetch('http://localhost:5000/contact', {
//                 method: 'POST',
//                 headers: {
//                   'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(payload),
//               });

//               if (res.ok) {
//                 alert('Request submitted successfully. We will contact you within 24 hours.');
//                 form.reset();
//               } else {
//                 alert('Submission failed. Please try again.');
//               }
//             } catch (err) {
//               alert('Server error. Please try again later.');
//             }
//           }}
//         >

//           <Field label="Full Name">
//             <input
//               name="name"
//               type="text"
//               placeholder="Your name"
//               required
//             />
//           </Field>

//           <Field label="Work Email">
//             <input
//               name="email"
//               type="email"
//               placeholder="you@company.com"
//               required
//             />
//           </Field>

//           <Field label="Company Name">
//             <input
//               name="company"
//               type="text"
//               placeholder="Company or organization"
//               required
//             />
//           </Field>

//           <Field label="What would you like an AI agent to help with?">
//             <textarea
//               name="message"
//               rows={4}
//               placeholder="Customer support, sales, internal workflows, etc."
//               required
//             />
//           </Field>

//           <Field label="Estimated timeline">
//             <select name="timeline">
//               <option value="Exploring options">Exploring options</option>
//               <option value="Within 1–3 months">Within 1–3 months</option>
//               <option value="Immediate">Immediate</option>
//             </select>
//           </Field>

//           <button
//             type="submit"
//             className="
//               w-full
//               mt-4
//               px-8 py-4
//               bg-slate-900 text-white
//               rounded-lg
//               font-semibold
//               hover:bg-slate-800
//               transition
//             "
//           >
//             Submit Request
//           </button>

//           <p className="text-xs text-slate-500 text-center mt-4">
//             We usually respond within 24 hours. No spam. No sales pressure.
//           </p>
//         </form>
//       </div>
//     </section>
//   );
// }

// /* ---------- Reusable Field Wrapper ---------- */

// function Field({
//   label,
//   children,
// }: {
//   label: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div>
//       <label className="block text-sm font-medium text-slate-700 mb-2">
//         {label}
//       </label>

//       <div className="w-full">
//         {children}
//       </div>

//       <style>{`
//         input, textarea, select {
//           width: 100%;
//           padding: 12px 14px;
//           border: 1px solid #e5e7eb;
//           border-radius: 8px;
//           font-size: 15px;
//           outline: none;
//         }

//         input:focus,
//         textarea:focus,
//         select:focus {
//           border-color: #f59e0b;
//           box-shadow: 0 0 0 2px rgba(245,158,11,0.15);
//         }
//       `}</style>
//     </div>
//   );
// }



// export default function ContactForm() {
//   return (
//     <section className="py-24 px-6 bg-slate-50">
//       <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl border shadow-sm">

//         <form className="space-y-6">

//           <Field label="Full Name">
//             <input type="text" placeholder="Your name" />
//           </Field>

//           <Field label="Work Email">
//             <input type="email" placeholder="you@company.com" />
//           </Field>

//           <Field label="Company Name">
//             <input type="text" placeholder="Company or organization" />
//           </Field>

//           <Field label="What would you like an AI agent to help with?">
//             <textarea
//               rows={4}
//               placeholder="Customer support, sales, internal workflows, etc."
//             />
//           </Field>

//           <Field label="Estimated timeline">
//             <select>
//               <option>Exploring options</option>
//               <option>Within 1–3 months</option>
//               <option>Immediate</option>
//             </select>
//           </Field>

//           <button
//             type="submit"
//             className="
//               w-full
//               mt-4
//               px-8 py-4
//               bg-slate-900 text-white
//               rounded-lg
//               font-semibold
//               hover:bg-slate-800
//               transition
//             "
//           >
//             Submit Request
//           </button>

//           <p className="text-xs text-slate-500 text-center mt-4">
//             We usually respond within 24 hours. No spam. No sales pressure.
//           </p>
//         </form>
//       </div>
//     </section>
//   );
// }

// /* ---------- Reusable Field Wrapper ---------- */

// function Field({
//   label,
//   children,
// }: {
//   label: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div>
//       <label className="block text-sm font-medium text-slate-700 mb-2">
//         {label}
//       </label>
//       <div className="w-full">
//         {children}
//       </div>

//       <style>{`
//         input, textarea, select {
//           width: 100%;
//           padding: 12px 14px;
//           border: 1px solid #e5e7eb;
//           border-radius: 8px;
//           font-size: 15px;
//           outline: none;
//         }

//         input:focus,
//         textarea:focus,
//         select:focus {
//           border-color: #f59e0b;
//           box-shadow: 0 0 0 2px rgba(245,158,11,0.15);
//         }
//       `}</style>
//     </div>
//   );
// }
