import { Brain, Building2, TrendingUp, BookOpen } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface Company {
  name: string;
  description: string;
  icon: LucideIcon;
}

const services = [
  {
    name: 'Customer Support AI Agent',
    description:
      '24/7 AI agents that handle customer queries across chat, email, and WhatsApp.',
  },
  {
    name: 'Sales & Lead Qualification Agent',
    description:
      'AI agents that qualify leads, answer product questions, and update CRM automatically.',
  },
  {
    name: 'Internal Operations Agent',
    description:
      'Automate HR queries, document search, reporting, and internal workflows.',
  },
  {
    name: 'Custom Business AI Agent',
    description:
      'Tailor-made AI agents built around your data, tools, and processes.',
  },
];
