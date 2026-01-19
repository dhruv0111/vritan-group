import { motion } from 'framer-motion';
import { useCountUp } from '../../hooks/useCountUp';
import ai from '@/assets/logos/ai.svg';
import cloud from '@/assets/logos/cloud.svg';
import capital from '@/assets/logos/capital.svg';
import research from '@/assets/logos/research.svg';

const logos = [
  { src: ai, label: 'AI Infrastructure', tooltip: 'Delivery Capability' },
  { src: cloud, label: 'Cloud Platforms', tooltip: 'Delivery Capability' },
  { src: capital, label: 'Capital Partners', tooltip: 'Delivery Capability' },
  { src: research, label: 'Research Networks', tooltip: 'Delivery Capability' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function InvestorTrustStrip() {
  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">
            Trusted by Businesses and Delivery Partners

          </p>
          <p className="text-sm text-slate-400 mb-12">
            Selected partnerships, internal ventures, and governance standards
          </p>
        </motion.div>

        {/* Logos */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {logos.map((logo) => (
            <div
              key={logo.label}
              className="
                relative group
                h-14
                flex items-center justify-center gap-3
                rounded-lg
                bg-white
                border border-slate-200
                shadow-sm
                hover:shadow-md
                transition
              "
            >
              {/* Tooltip */}
              <span
                className="
                  pointer-events-none
                  absolute -top-8
                  opacity-0 group-hover:opacity-100
                  transition
                  text-xs
                  bg-slate-900 text-white
                  px-2 py-1 rounded-md
                "
              >
                {logo.tooltip}
              </span>

              <img
                src={logo.src}
                alt={logo.label}
                className="w-6 h-6"
              />
              <span className="text-sm font-medium text-slate-600">
                {logo.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Stat value="4+" label="AI-Driven Ventures" />
          <Stat value="10+" label="Years of Engineering Experience" />
          <Stat value="100%" label="Client-Focused Delivery" />

        </motion.div>

        {/* Compliance */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 text-xs text-slate-600"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Chip text="Governance-First" />
          <Chip text="Ethical AI" />
          <Chip text="Data Privacy Ready" />
          <Chip text="Long-Term Capital" />
        </motion.div>

      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  const numericValue = parseInt(value.replace('+', '').replace('%', ''));
  const count = useCountUp(numericValue);

  const suffix = value.includes('%') ? '%' : value.includes('+') ? '+' : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl p-8 shadow-sm border"
    >
      <p className="text-4xl font-bold text-slate-900 mb-2">
        {count}
        {suffix}
      </p>
      <p className="text-slate-600">{label}</p>
    </motion.div>
  );
}

function Chip({ text }: { text: string }) {
  return (
    <span className="px-4 py-2 bg-white border rounded-full">
      {text}
    </span>
  );
}


