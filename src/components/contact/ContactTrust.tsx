export default function ContactTrust() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

        <TrustItem
          title="Business-First Approach"
          text="We focus on real workflows, ROI, and measurable impact."
        />

        <TrustItem
          title="Custom-Built AI Agents"
          text="No templates. Every solution is designed for your systems."
        />

        <TrustItem
          title="Privacy & Security"
          text="Your data stays yours. No reuse. No resale."
        />

      </div>
    </section>
  );
}

function TrustItem({ title, text }: { title: string; text: string }) {
  return (
    <div className="p-6">
      <h3 className="text-lg font-semibold text-slate-900 mb-2">
        {title}
      </h3>
      <p className="text-slate-600">
        {text}
      </p>
    </div>
  );
}
