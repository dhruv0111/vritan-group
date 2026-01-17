export default function About() {
  const values = [
    {
      title: 'Long-Term Thinking',
      description:
        'We make decisions with decade-long time horizons, prioritizing durable growth over short-term gains.',
    },
    {
      title: 'Integrity',
      description:
        'Ethical conduct and transparency guide every action we take, from strategy to daily execution.',
    },
    {
      title: 'Excellence',
      description:
        'We hold ourselves to the highest standards, continuously improving and never settling for adequate.',
    },
    {
      title: 'Impact',
      description:
        'Success is measured not only in returns, but in meaningful contributions to society and progress.',
    },
  ];

  return (
    <main className="pt-24">

      {/* ================= HERO ================= */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-brand-accent mb-4">
            About Vritan Group
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Building Institutions That Endure
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A global holding company building enduring institutions across
            technology, research, and capital markets.
          </p>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-10">
            Our Story
          </h2>

          <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
            <p>
              Vritan Group was founded on a simple premise: the most valuable
              companies are those built to last — guided by principles rather
              than trends, and measured by impact rather than noise.
            </p>

            <p>
              We began with a conviction that technology, capital, and research
              could be managed differently — with patience, integrity, and a
              genuine commitment to long-term value creation.
            </p>

            <p>
              Today, we manage a focused portfolio of companies that share these
              values while maintaining operational independence and
              entrepreneurial autonomy.
            </p>

            <p>
              Through our subsidiaries across technology, artificial
              intelligence, capital management, and research, we work to
              advance human capability while creating durable value for
              stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-14 text-center">
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-8 rounded-xl bg-slate-50 border border-slate-200 hover:border-brand-accent transition"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR APPROACH ================= */}
      <section className="py-28 px-6 bg-brand-dark">
        <div className="max-w-4xl mx-auto text-center">

          <p className="text-xs uppercase tracking-widest text-brand-accent mb-4">
            Our Approach
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-10">
            Built for Decades, Not Quarters
          </h2>

          <div className="space-y-6 text-lg leading-relaxed max-w-3xl mx-auto">
            <p className="text-slate-300">
              We operate with a long-term mindset, making decisions that may
              not optimize immediate returns but create sustainable value
              over time.
            </p>

            <p className="text-slate-300">
              Portfolio companies receive strategic oversight, financial
              resources, and operational support — while retaining the
              autonomy required to succeed.
            </p>

            <p className="text-slate-300">
              Transparency is fundamental to how we operate. We communicate
              clearly with stakeholders, building trust through consistency
              and honest engagement.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
