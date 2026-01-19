import { caseStudies } from '../data/caseStudies';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CaseStudies() {
  return (
    <div className="pt-24">

      {/* HERO */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-amber-600 mb-4">
            Case Studies
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8">
            How Our AI Agents Solve <br /> Real Business Problems
          </h1>
          <p className="text-xl text-slate-600">
            Representative engagements showing how AI agents improve efficiency,
            decision-making, and operations.
          </p>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto space-y-12">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className="bg-white rounded-2xl p-10 border shadow-sm hover:shadow-lg transition"
            >
              <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
                <div>
                  <p className="text-sm text-amber-600 font-medium mb-2">
                    {cs.industry}
                  </p>
                  <h2 className="text-3xl font-bold text-slate-900">
                    {cs.title}
                  </h2>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition text-sm"
                >
                  Discuss Similar Use-Case
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Block title="Problem" items={[cs.problem]} />
                <Block title="Solution" items={cs.solution} />
                <Block title="Results" items={cs.results} />
              </div>

              <div className="mt-6 text-sm text-slate-500">
                Tech Stack: {cs.stack.join(' • ')}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-slate-900 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Want Similar Results for Your Business?
        </h2>
        <p className="text-slate-300 mb-10 max-w-2xl mx-auto">
          We design AI agents tailored to your workflows, systems, and goals.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-10 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition"
        >
          Book Free AI Assessment
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </div>
  );
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-slate-900 mb-4">
        {title}
      </h3>
      <ul className="space-y-2 text-slate-600">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
