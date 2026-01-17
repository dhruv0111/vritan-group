import { Link } from 'react-router-dom';
import MotionFade from '../ui/Motion.Fade';

export default function CareersSection() {
  return (
    <section className="py-28 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto text-center">
        <MotionFade>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Build the Future With Us
          </h2>
        </MotionFade>

        <MotionFade>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            We’re always looking for principled, curious people who want to build
            meaningful things.
          </p>
        </MotionFade>

        <Link
        to="/careers"
        className="
            inline-flex items-center justify-center
            min-h-[48px] px-10 py-4
            bg-brand-accent text-gray-900
            font-semibold rounded-lg
            shadow-lg shadow-brand-accent/30
            hover:bg-brand-accentHover hover:-translate-y-0.5
            transition-all duration-300
        "
        >
        View Opportunities
        </Link>
      </div>
    </section>
  );
}
