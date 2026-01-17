import { Brain, Building2, TrendingUp, BookOpen } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface Company {
  name: string;
  description: string;
  icon: LucideIcon;
}

export const companies: Company[] = [
  {
    name: 'Vritan Technologies',
    description: 'AI software, cloud platforms, and enterprise systems.',
    icon: Building2,
  },
  {
    name: 'Vritan Labs',
    description: 'Research and emerging technology innovation.',
    icon: Brain,
  },
  {
    name: 'Vritan Capital',
    description: 'Strategic investments and long-term capital.',
    icon: TrendingUp,
  },
  {
    name: 'Vritan Media',
    description: 'Brand, digital, and creative solutions.',
    icon: BookOpen,
  },
];
