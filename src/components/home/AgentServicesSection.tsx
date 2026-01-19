import MotionFade from '../ui/Motion.Fade';
import { Link } from 'react-router-dom';
import { Brain, MessageSquare, Settings, TrendingUp } from 'lucide-react';

const services = [
  {
    name: 'Customer Support AI Agents',
    description:
      'AI agents that handle customer queries across chat, email, and WhatsApp — 24/7.',
    icon: MessageSquare,
  },
  {
    name: 'Sales & Lead Qualification Agents',
    description:
      'AI agents that qualify leads, answer product questions, and update CRM automatically.',
    icon: TrendingUp,
  },
  {
    name: 'Internal Operations Agents',
    description:
      'AI assistants for HR, policy queries, reporting, and internal knowledge.',
    icon: Settings,
  },
  {
    name: 'Custom Business AI Agents',
    description:
      'Tailor-made AI agents built around your data, tools, and workflows.',
    icon: Brain,
  },
];

export default function AgentServicesSection() {
  return (
    <section className="py-24 sm:py-28 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">

        <MotionFade>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-slate-900">
            AI Agents We Build for Businesses
          </h2>
        </MotionFade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {services.map((service, i) => (
            <MotionFade key={service.name} delay={i * 0.1}>
              <Link
                to="/ai-agents"
                className="
                  block
                  p-8 md:p-10
                  rounded-2xl
                  bg-[#0f172a] text-white
                  shadow-sm hover:shadow-xl
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <service.icon className="w-12 h-12 text-[#f59e0b] mb-6" />

                <h3 className="text-xl font-semibold mb-3">
                  {service.name}
                </h3>

                <p className="text-slate-300 leading-relaxed">
                  {service.description}
                </p>
              </Link>
            </MotionFade>
          ))}
        </div>
      </div>
    </section>
  );
}











// import MotionFade from '../ui/Motion.Fade';
// import { companies } from '../../data/companies';
// import { Link } from 'react-router-dom';

// export default function CompaniesSection() {
//   return (
//     <section className="py-24 sm:py-28 px-6 bg-slate-50">
//       <div className="max-w-7xl mx-auto">
//         <MotionFade>
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-900">
//             Our Companies
//           </h2>
//         </MotionFade>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
//           {companies.map((company, i) => (
//             <MotionFade key={company.name} delay={i * 0.1}>
//               <Link
//                 to="/companies"
//                     className="
//                     block
//                     p-6 sm:p-8 md:p-10
//                     rounded-2xl

//                     bg-[#0f172a] text-white

//                     shadow-sm hover:shadow-xl
//                     hover:-translate-y-1
//                     transition-all duration-300
//                     "

//               >
//                 <company.icon className="w-12 h-12 text-[#f59e0b] mb-66" />
//                 <h3 className="text-2xl font-semibold mb-3 text-white">
//                   {company.name}
//                 </h3>
//                 <p className="text-slate-300 leading-relaxed">
//                   {company.description}
//                 </p>
//               </Link>
//             </MotionFade>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
