import { Link } from 'react-router-dom';

export default function ApplicationSuccess() {
  return (
    <main className="pt-24 px-6 text-center">
      <h1 className="text-3xl font-bold mb-4">
        Application Submitted
      </h1>
      <p className="text-slate-600 mb-8">
        Thank you for applying. You will receive a confirmation email shortly.
      </p>

      <Link
        to="/careers"
        className="inline-block px-8 py-4 bg-brand-dark text-white rounded-lg"
      >
        Back to Careers
      </Link>
    </main>
  );
}
