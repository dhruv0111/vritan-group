export default function Vision() {
  const principles = [
    {
      title: 'Technology for Good',
      description: 'We believe technology should serve humanity\'s highest aspirations. Our technology companies are built to solve meaningful problems and create genuine value, not to maximize engagement or exploit attention.',
    },
    {
      title: 'Responsible AI',
      description: 'Artificial intelligence represents one of humanity\'s most powerful tools. We commit to developing AI that is safe, ethical, and beneficial—advancing capability while prioritizing human welfare and dignity.',
    },
    {
      title: 'Capital with Purpose',
      description: 'Capital is a tool for progress when allocated wisely. We invest with patience and discipline, supporting businesses and innovations that create sustainable value and positive externalities.',
    },
    {
      title: 'Knowledge as Foundation',
      description: 'Fundamental research expands the boundaries of human understanding. We support inquiry-driven investigation across disciplines, believing that knowledge is valuable for its own sake and as the foundation for innovation.',
    },
  ];

  const commitments = [
    'Build institutions that can endure for generations',
    'Make decisions based on principles, not prevailing trends',
    'Measure success by impact and contribution, not just financial metrics',
    'Maintain transparency and accountability in all operations',
    'Support and develop exceptional talent across our organizations',
    'Engage responsibly with communities, governments, and stakeholders',
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Our Vision
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We envision a future where technology serves humanity's highest aspirations, where capital flows
            to its most productive uses, and where rigorous research expands the boundaries of human knowledge.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            A Different Approach
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              In an era of quarterly thinking and short-term optimization, we take a fundamentally different approach.
              We build for decades, not months. We optimize for impact, not attention. We measure ourselves by the
              enduring value we create, not by the metrics that dominate today's headlines.
            </p>
            <p>
              This isn't about rejecting progress or innovation. On the contrary, it's about enabling the kind of
              patient, thoughtful work that produces genuine breakthroughs. The most important advances—in technology,
              science, and human understanding—come from sustained effort guided by clear principles.
            </p>
            <p>
              We believe that companies can be both profitable and principled, that growth can be both rapid and
              sustainable, and that success can be measured in ways that extend beyond financial returns to include
              positive contributions to society.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
            Guiding Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {principles.map((principle) => (
              <div key={principle.title} className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  {principle.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Our Commitments
          </h2>
          <div className="space-y-5">
            {commitments.map((commitment) => (
              <div key={commitment} className="flex items-start">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-4 flex-shrink-0" />
                <p className="text-lg text-gray-300 leading-relaxed">
                  {commitment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Looking Forward
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              The challenges facing humanity—from climate change to inequality, from technological disruption
              to geopolitical instability—require institutions that can think and act over long time horizons.
            </p>
            <p>
              We don't claim to have all the answers. But we are committed to asking the right questions, making
              thoughtful decisions, and building organizations that can contribute meaningfully to progress.
            </p>
            <p>
              Our vision is ambitious but grounded. We aim to build lasting institutions that create value for
              stakeholders while contributing to the broader advancement of human capability and understanding.
              This is the work of decades, and we're prepared for that journey.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
