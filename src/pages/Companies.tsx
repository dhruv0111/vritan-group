import {
  Building2,
  Brain,
  TrendingUp,
  BookOpen,
  Globe,
  Users,
  Target,
  Lightbulb,
} from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Companies() {
  const companies = [
    {
      name: 'Vritan Technologies',
      tagline: 'Enterprise Software & Systems',
      description:
        'Building mission-critical software platforms and digital infrastructure for complex enterprises.',
      icon: Building2,
      gradient: 'from-indigo-500/20 to-indigo-900/40',
      areas: [
        'Enterprise Software Engineering',
        'Cloud Infrastructure',
        'Digital Transformation',
        'Systems Integration',
      ],
    },
    {
      name: 'Vritan AI Labs',
      tagline: 'Responsible Artificial Intelligence',
      description:
        'Advancing AI research with a focus on safety, ethics, and real-world impact.',
      icon: Brain,
      gradient: 'from-emerald-500/20 to-emerald-900/40',
      areas: [
        'Machine Learning Research',
        'Natural Language Systems',
        'AI Safety & Ethics',
        'Applied AI Solutions',
      ],
    },
    {
      name: 'Vritan Capital',
      tagline: 'Long-Term Capital Allocation',
      description:
        'Disciplined capital management focused on compounding value over decades.',
      icon: TrendingUp,
      gradient: 'from-amber-500/20 to-amber-900/40',
      areas: [
        'Portfolio Management',
        'Strategic Investments',
        'Capital Allocation',
        'Financial Advisory',
      ],
    },
    {
      name: 'Vritan Research',
      tagline: 'Independent Research & Knowledge',
      description:
        'Supporting fundamental research and long-term knowledge creation.',
      icon: BookOpen,
      gradient: 'from-sky-500/20 to-sky-900/40',
      areas: [
        'Fundamental Research',
        'Cross-Disciplinary Studies',
        'Publications',
        'Academic Partnerships',
      ],
    },
  ];

  const strengths = [
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Operating with awareness of global markets and cultures.',
    },
    {
      icon: Users,
      title: 'Exceptional Talent',
      description: 'World-class teams across technology, research, and capital.',
    },
    {
      icon: Target,
      title: 'Strategic Discipline',
      description: 'Focused decision-making guided by long-term principles.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation with Rigor',
      description: 'Bold ideas supported by strong execution and governance.',
    },
  ];

  return (
    <main className="pt-24">

      {/* ================= HERO ================= */}
      <section className="py-28 px-6 bg-gradient-to-b from-slate-50 to-white">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-xs uppercase tracking-widest text-brand-accent mb-4">
            Our Companies
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            A Portfolio Designed to Endure
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Independent companies united by long-term thinking, disciplined
            execution, and shared principles.
          </p>
        </motion.div>
      </section>

      {/* ================= COMPANIES ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto space-y-28">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`grid md:grid-cols-2 gap-16 items-center ${
                index % 2 !== 0 ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              {/* TEXT */}
              <div>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand-dark mb-6">
                  <company.icon className="w-7 h-7 text-white" />
                </div>

                <h2 className="text-3xl font-bold text-slate-900 mb-2">
                  {company.name}
                </h2>

                <p className="text-sm uppercase tracking-wide text-brand-accent mb-6">
                  {company.tagline}
                </p>

                <p className="text-slate-700 leading-relaxed mb-8">
                  {company.description}
                </p>

                <ul className="space-y-3">
                  {company.areas.map((area) => (
                    <li key={area} className="flex items-start">
                      <span className="mt-2 mr-3 w-1.5 h-1.5 rounded-full bg-brand-accent" />
                      <span className="text-slate-700">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* IMAGE / VISUAL */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className={`relative w-full aspect-square rounded-3xl overflow-hidden bg-gradient-to-br ${company.gradient}`}
              >
                <div className="absolute inset-0 bg-noise opacity-30" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= STRENGTHS ================= */}
      <section className="py-28 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Our Collective Strengths
          </motion.h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-16">
            Shared capabilities that strengthen every company in the Vritan Group.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {strengths.map((strength, i) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand-dark mb-6">
                  <strength.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {strength.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {strength.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
