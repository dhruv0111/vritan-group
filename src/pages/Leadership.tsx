import { Linkedin } from 'lucide-react';

export default function Leadership() {
  const leaders = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Chief Executive Officer',
      bio: 'Sarah brings over 20 years of experience in technology and corporate governance. Prior to joining Vritan Group, she served as COO of a Fortune 500 technology company and held leadership positions at major research institutions.',
      expertise: ['Strategic Planning', 'Corporate Governance', 'Technology Innovation'],
    },
    {
      name: 'Michael Torres',
      title: 'Chief Financial Officer',
      bio: 'Michael oversees all financial operations and capital allocation decisions. With extensive experience in investment banking and corporate finance, he ensures disciplined financial management across our portfolio.',
      expertise: ['Capital Allocation', 'Financial Strategy', 'Risk Management'],
    },
    {
      name: 'Dr. Aisha Patel',
      title: 'Chief Technology Officer',
      bio: 'Aisha leads technology strategy across our portfolio companies. A renowned computer scientist with a background in AI research, she ensures we remain at the forefront of technological innovation.',
      expertise: ['Artificial Intelligence', 'Software Architecture', 'Innovation Strategy'],
    },
    {
      name: 'James Morrison',
      title: 'Chief Operating Officer',
      bio: 'James oversees day-to-day operations and ensures operational excellence across all entities. His background in scaling global organizations brings critical expertise to our growing portfolio.',
      expertise: ['Operations Management', 'Process Optimization', 'Organizational Design'],
    },
  ];

  const advisors = [
    {
      name: 'Prof. Robert Williams',
      role: 'Senior Advisor, Research Strategy',
    },
    {
      name: 'Lisa Zhang',
      role: 'Advisor, Capital Markets',
    },
    {
      name: 'Dr. Marcus Johnson',
      role: 'Advisor, Technology & Innovation',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Leadership
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our leadership team combines deep expertise with a shared commitment to principled management
            and long-term value creation. Together, they guide our portfolio companies toward excellence.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
            Executive Team
          </h2>
          <div className="space-y-16">
            {leaders.map((leader) => (
              <div key={leader.name} className="flex flex-col md:flex-row gap-8 bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {leader.name}
                      </h3>
                      <p className="text-lg text-amber-600 font-medium">
                        {leader.title}
                      </p>
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Linkedin className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {leader.bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-amber-50 text-amber-700 text-sm font-medium rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Advisory Board
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            We're fortunate to work with distinguished advisors who provide strategic guidance and industry expertise.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advisors.map((advisor) => (
              <div key={advisor.name} className="p-6 bg-gray-50 rounded-xl text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {advisor.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {advisor.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Our Approach to Leadership
          </h2>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              We believe effective leadership requires both vision and humility. Our leaders are selected not just
              for their expertise, but for their alignment with our values and their commitment to long-term thinking.
            </p>
            <p>
              Diversity of thought and background strengthens our decision-making. Our team brings perspectives from
              technology, finance, research, and operations, ensuring well-rounded strategic guidance.
            </p>
            <p>
              We foster a culture of transparency and open dialogue, where the best ideas can emerge regardless of
              hierarchy. This approach has proven essential to navigating complexity and making sound decisions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
