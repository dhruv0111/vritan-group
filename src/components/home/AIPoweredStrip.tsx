export default function AIPoweredStrip() {
  return (
    <section className="relative py-24 px-6 bg-[#0f172a] overflow-hidden">
      {/* Decorative divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-[#f59e0b]/40" />

      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Not Just Chatbots. Real AI Agents.
        </h2>

        <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">
          Our AI agents don’t just respond to questions.
          They connect with your systems, follow business rules,
          and take actions — securely and reliably.
        </p>

      </div>
    </section>
  );
}
