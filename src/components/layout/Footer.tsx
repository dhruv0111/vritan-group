import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import VritanMark from '@/assets/logos/vritan-mark.svg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-400"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={VritanMark}
                alt="Vritan Group"
                className="w-9 h-9 text-slate-400"
              />
              <span className="text-lg font-semibold text-white">
                Vritan <span className="text-brand-accent">Group</span>
              </span>
            </div>

            <p className="max-w-md leading-relaxed">
              Building the future through innovation and integrity.
              A global holding company focused on technology,
              research, and long-term capital creation.
            </p>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/companies" className="hover:text-white transition-colors">
                  Companies
                </Link>
              </li>
              <li>
                <Link to="/vision" className="hover:text-white transition-colors">
                  Vision
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="hover:text-white transition-colors">
                  Leadership
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal / compliance micro-text */}
        <div className="mt-12 text-xs text-slate-500 leading-relaxed max-w-4xl mx-auto text-center">
          Vritan Group operates with a long-term governance mindset.
          We prioritize ethical AI development, data privacy readiness,
          regulatory compliance, and responsible capital allocation.
          Information provided is for general informational purposes only
          and does not constitute investment advice.
        </div>

        {/* Bottom copyright */}
        <div className="mt-10 pt-8 border-t border-white/10 text-center text-sm text-slate-500">
          © {currentYear} Vritan Group. All rights reserved.
        </div>

      </div>
    </motion.footer>
  );
}
