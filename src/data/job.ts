export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  region: 'USA' | 'Global';
  type: 'Full-time';
  description: string;
  responsibilities: string[];
  requirements: string[];
};

export const jobs: Job[] = [
  {
    id: 'senior-software-engineer',
    title: 'Senior Software Engineer',
    company: 'Vritan Technologies',
    location: 'Remote',
    region: 'Global',
    type: 'Full-time',
    description:
      'Build scalable enterprise systems used by global organizations.',
    responsibilities: [
      'Design scalable architectures',
      'Write high-quality production code',
      'Collaborate with cross-functional teams',
    ],
    requirements: [
      '5+ years experience',
      'Strong system design skills',
      'Experience with cloud platforms',
    ],
  },
  {
    id: 'ml-research-scientist',
    title: 'ML Research Scientist',
    company: 'Vritan AI Labs',
    location: 'San Francisco, CA',
    region: 'USA',
    type: 'Full-time',
    description:
      'Advance machine learning research with real-world impact.',
    responsibilities: [
      'Conduct ML research',
      'Publish findings',
      'Collaborate with engineering teams',
    ],
    requirements: [
      'MS/PhD in related field',
      'Strong ML fundamentals',
      'Research mindset',
    ],
  },
];
