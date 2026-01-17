import { useParams, Link } from 'react-router-dom';
import { jobs } from '../data/job';

export default function JobDetail() {
  const { id } = useParams();
  const job = jobs.find(j => j.id === id);

  if (!job) return null;

  return (
    <main className="pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
        <p className="text-slate-600 mb-8">{job.company}</p>

        <h3 className="font-semibold mb-2">Responsibilities</h3>
        <ul className="list-disc pl-6 mb-6">
          {job.responsibilities.map(r => <li key={r}>{r}</li>)}
        </ul>

        <h3 className="font-semibold mb-2">Requirements</h3>
        <ul className="list-disc pl-6 mb-8">
          {job.requirements.map(r => <li key={r}>{r}</li>)}
        </ul>

        <Link
          to={`/apply/${job.id}`}
          className="inline-block px-8 py-4 bg-brand-dark text-white rounded-lg"
        >
          Apply Now
        </Link>
      </div>
    </main>
  );
}
