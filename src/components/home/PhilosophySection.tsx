import MotionFade from '../ui/Motion.Fade';

export default function PhilosophySection() {
  return (
    <section className="py-28 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-4xl mx-auto text-center">
        <MotionFade>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Our Philosophy
          </h2>
        </MotionFade>

        <MotionFade>
          <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
            We believe meaningful progress happens when technology,
            people, and purpose move together. We build institutions
            designed to endure — not chase short-term trends.
          </p>
        </MotionFade>
      </div>
    </section>
  );
}
