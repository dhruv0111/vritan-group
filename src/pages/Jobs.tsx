import { Link, useSearchParams } from 'react-router-dom';
import { jobs } from '../data/job';

export default function Jobs() {
  const [params] = useSearchParams();
  const region = params.get('region');

  const filtered = jobs.filter(j =>
    region ? j.region === region : true
  );

  return (
    <main className="pt-24 px-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {filtered.map(job => (
          <Link
            key={job.id}
            to={`/jobs/${job.id}`}
            className="block p-6 rounded-xl bg-white border hover:shadow-md"
          >
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-slate-600">
              {job.company} • {job.location}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
