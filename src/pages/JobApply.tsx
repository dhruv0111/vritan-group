import { useState } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';

import { jobs } from '../data/job';
import { submitApplication } from '../services.ts/applyService';
import LoadingSpinner from '../components/LoadingSpinner';


export default function JobApply() {
  // ✅ strongly typed param
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // ✅ find job
  const job = jobs.find((j) => j.id === id);

  // ✅ HARD GUARD — fixes TS error properly
  if (!job) {
    return <Navigate to="/careers" replace />;
  }

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (!job) return;
      const formData = new FormData(e.currentTarget);
      formData.append('jobId', job.id);
      formData.append('jobTitle', job.title);
      formData.append('company', job.company);

      await submitApplication(formData);

      // ✅ success UX
      navigate('/application-success');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="pt-24 px-6">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl border shadow-sm">

        <h1 className="text-2xl font-bold mb-2">
          Apply for {job.title}
        </h1>

        <p className="text-slate-600 mb-8">
          {job.company} • {job.location}
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Full Name */}
          <label className="block">
            <span className="sr-only">Full Name</span>
            <input
              name="name"
              required
              placeholder="Full Name"
              className="w-full border p-3 rounded-lg
                focus:outline-none focus:ring-2 focus:ring-brand-accent"
            />
          </label>

          {/* Email */}
          <label className="block">
            <span className="sr-only">Email</span>
            <input
              name="email"
              type="email"
              required
              placeholder="Email Address"
              className="w-full border p-3 rounded-lg
                focus:outline-none focus:ring-2 focus:ring-brand-accent"
            />
          </label>

          {/* LinkedIn / GitHub */}
          <label className="block">
            <span className="sr-only">Profile Link</span>
            <input
              name="profile"
              placeholder="LinkedIn or GitHub URL"
              className="w-full border p-3 rounded-lg"
            />
          </label>

          {/* Resume */}
          <label className="block text-sm text-slate-600">
            Resume (PDF)
            <input
              name="resume"
              type="file"
              accept=".pdf"
              required
              className="block w-full mt-2"
            />
          </label>

          {/* USA Compliance */}
          {job.region === 'USA' && (
            <label className="block">
              <span className="sr-only">Work Authorization</span>
              <select
                name="authorization"
                required
                className="w-full border p-3 rounded-lg"
              >
                <option value="">Work Authorization Status</option>
                <option value="US Citizen">US Citizen</option>
                <option value="Green Card">Green Card</option>
                <option value="Visa Holder">Visa Holder</option>
              </select>
            </label>
          )}

          {/* Error */}
          {error && (
            <p className="text-red-600 text-sm" role="alert">
              {error}
            </p>
          )}

          {/* Submit */}
          {loading ? (
            <LoadingSpinner />
          ) : (
            <button
              type="submit"
              className="
                w-full py-3 rounded-lg
                bg-brand-dark text-white font-medium
                hover:bg-brand-darker
                transition
              "
            >
              Submit Application
            </button>
          )}
        </form>
      </div>
    </main>
  );
}
