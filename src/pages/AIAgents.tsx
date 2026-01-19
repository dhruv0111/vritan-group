import { Link } from 'react-router-dom';
import {
  Bot,
  Headphones,
  TrendingUp,
  Settings,
  ShieldCheck,
  Workflow,
  ArrowRight,
  Cpu,
} from 'lucide-react';

export default function AIAgents() {
  return (
    <div className="pt-24">

      {/* ================= HERO ================= */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-amber-600 mb-4">
            AI Agents for Business Automation
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
            Custom AI Agents That Work <br className="hidden md:block" />
            Inside Your Business
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
            We design, deploy, and manage production-ready AI agents that automate
            customer support, sales operations, internal workflows, and decision-making —
            securely and tailored to your systems.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition"
            >
              Book Free AI Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href="#capabilities"
              className="inline-flex items-center justify-center px-8 py-4 border border-slate-300 rounded-lg font-semibold text-slate-900 hover:bg-slate-50 transition"
            >
              See Agent Capabilities
            </a>
          </div>
        </div>
      </section>

      {/* ================= DIFFERENTIATION ================= */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">
            Not Chatbots. Real AI Agents.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Feature
              icon={Workflow}
              title="System-Connected"
              text="Agents integrate directly with your CRMs, databases, APIs, and internal tools."
            />
            <Feature
              icon={Cpu}
              title="Action-Taking"
              text="They execute workflows, update systems, and make decisions — not just reply."
            />
            <Feature
              icon={ShieldCheck}
              title="Secure by Design"
              text="Access-controlled, auditable, and privacy-aware from day one."
            />
            <Feature
              icon={Settings}
              title="Custom-Built"
              text="No templates. Each agent is engineered around your business logic."
            />
          </div>
        </div>
      </section>

      {/* ================= AGENT TYPES ================= */}
      <section id="capabilities" className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">
            AI Agents We Build for Businesses
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <AgentCard
              icon={Headphones}
              title="Customer Support AI Agents"
              desc="Handle email, chat, and messaging channels with context awareness, human escalation, and 24/7 availability."
              points={[
                'Email, chat, WhatsApp automation',
                'Context-aware responses',
                'Human handoff & ticketing',
              ]}
            />

            <AgentCard
              icon={TrendingUp}
              title="Sales & Lead Qualification Agents"
              desc="Qualify inbound leads, answer product questions, and update CRMs automatically."
              points={[
                'Lead scoring & routing',
                'CRM updates',
                'Meeting booking',
              ]}
            />

            <AgentCard
              icon={Bot}
              title="Internal Operations Agents"
              desc="Assist teams with knowledge search, reporting, summaries, and internal workflows."
              points={[
                'Internal knowledge base search',
                'Automated reporting',
                'Task orchestration',
              ]}
            />

            <AgentCard
              icon={Settings}
              title="Custom Business AI Agents"
              desc="Purpose-built AI agents designed around your tools, workflows, and data environment."
              points={[
                'Tool-specific integrations',
                'Custom decision logic',
                'Enterprise deployment',
              ]}
            />
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-28 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-amber-500 mb-4 text-center">
            How It Works
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            From Idea to Production AI Agent
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Step number="01" title="Assessment" text="Understand workflows, tools, and data." />
            <Step number="02" title="Design" text="Agent logic, permissions, and guardrails." />
            <Step number="03" title="Build" text="Integrations, LLMs, and infrastructure." />
            <Step number="04" title="Deploy" text="Monitoring, tuning, and scaling." />
          </div>
        </div>
      </section>

      {/* ================= SECURITY ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">
            Built for Security, Scale, and Trust
          </h2>

          <p className="text-xl text-slate-600 mb-12">
            Our AI agents are designed for real production environments —
            not experiments.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Badge text="Ethical AI" />
            <Badge text="Data Privacy Ready" />
            <Badge text="Client-Owned Logic" />
            <Badge text="Audit-Friendly" />
            <Badge text="Enterprise Deployment" />
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-28 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">
            Let’s Design an AI Agent for Your Business
          </h2>

          <p className="text-xl text-slate-600 mb-12">
            In a free assessment, we identify where AI agents can save time,
            reduce costs, or unlock growth.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition"
          >
            Book Free AI Assessment
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}

/* ================= COMPONENTS ================= */

function Feature({ icon: Icon, title, text }: any) {
  return (
    <div className="bg-white p-8 rounded-xl border shadow-sm">
      <Icon className="w-10 h-10 text-amber-600 mb-4" />
      <h3 className="text-xl font-semibold mb-3 text-slate-900">{title}</h3>
      <p className="text-slate-600">{text}</p>
    </div>
  );
}

function AgentCard({ icon: Icon, title, desc, points }: any) {
  return (
    <div className="p-10 rounded-2xl bg-slate-900 text-white hover:-translate-y-1 hover:shadow-xl transition">
      <Icon className="w-10 h-10 text-amber-500 mb-6" />
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-slate-300 mb-6">{desc}</p>
      <ul className="space-y-2 text-slate-300">
        {points.map((p: string) => (
          <li key={p}>• {p}</li>
        ))}
      </ul>
    </div>
  );
}

function Step({ number, title, text }: any) {
  return (
    <div className="text-center">
      <div className="text-amber-500 text-xl font-bold mb-2">{number}</div>
      <h4 className="font-semibold text-lg mb-2">{title}</h4>
      <p className="text-slate-300">{text}</p>
    </div>
  );
}

function Badge({ text }: any) {
  return (
    <span className="px-4 py-2 border rounded-full text-slate-700 bg-white">
      {text}
    </span>
  );
}
