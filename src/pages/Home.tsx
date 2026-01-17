import HeroSection from "../components/home/HeroSection";
import PhilosophySection from "../components/home/PhilosophySection";
import CompaniesSection from "../components/home/CompaniesSection";
import AIPoweredStrip from "../components/home/AIPoweredStrip";
import VisionSection from "../components/home/VisionSection";
import CareersSection from "../components/home/CareersSection";
import Vision from "./Vision";
import PageReveal from "../components/ui/PageReveal";
import InvestorTrustStrip from "../components/home/InvestorTrustStrip";
import { useEffect } from "react";
import LeadershipStrip from "../components/home/LeadershipStrip";
import OperatingFocusStrip from "../components/home/OperatingFocusStrip";


  export default function Home() {
  useEffect(() => {
    document.title = 'Vritan Group | Home';
  }, []);  
  return (
    <PageReveal>
      <HeroSection />
      <PhilosophySection />
      <LeadershipStrip />
      <CompaniesSection />
      <InvestorTrustStrip />
      <OperatingFocusStrip />
      <AIPoweredStrip />
      <VisionSection />
      <CareersSection />
    </PageReveal>
  );
}



















// import { Link } from 'react-router-dom';
// import { ArrowRight, Building2, Brain, TrendingUp, BookOpen } from 'lucide-react';

// export default function Home() {
//   const companies = [
//     {
//       name: 'Vritan Technologies',
//       description:
//         'Advanced software solutions and digital transformation for enterprise clients.',
//       icon: Building2,
//     },
//     {
//       name: 'Vritan AI Labs',
//       description:
//         'Pioneering artificial intelligence research and ethical AI development.',
//       icon: Brain,
//     },
//     {
//       name: 'Vritan Capital',
//       description:
//         'Strategic investment and financial services focused on sustainable growth.',
//       icon: TrendingUp,
//     },
//     {
//       name: 'Vritan Research',
//       description:
//         'Independent research institute advancing knowledge across multiple disciplines.',
//       icon: BookOpen,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* ================= HERO ================= */}
//       <section className="pt-36 pb-28 px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto text-center">
//           <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-gray-900 leading-[1.05] mb-8">
//             Building the Future
//             <br />
//             Through Innovation
//             <span className="text-amber-600"> and Integrity</span>
//           </h1>

//           <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
//             Vritan Group is a global holding company focused on building enduring
//             businesses across technology, artificial intelligence, research,
//             and capital markets.
//           </p>

//           <div className="flex items-center justify-center gap-6">
//             <Link
//               to="/companies"
//               className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors text-base"
//             >
//               Explore our companies
//               <ArrowRight className="w-5 h-5" />
//             </Link>

//             <Link
//               to="/vision"
//               className="inline-flex items-center gap-2 px-8 py-4 text-gray-700 hover:text-gray-900 font-medium rounded-lg transition-colors text-base"
//             >
//               Our vision
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ================= PHILOSOPHY ================= */}
//       <section className="py-28 px-6 lg:px-8 bg-gray-50">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-14 text-center">
//             Our Philosophy
//           </h2>

//           <div className="max-w-3xl mx-auto space-y-8 text-gray-700 text-lg leading-relaxed">
//             <p>
//               We build institutions designed to endure. Our approach is grounded
//               in long-term thinking, principled decision-making, and a commitment
//               to value creation beyond quarterly metrics.
//             </p>

//             <p>
//               Through our portfolio, we pursue excellence in software,
//               artificial intelligence, capital allocation, and fundamental
//               research. Each company operates independently while benefiting
//               from shared strategy and governance.
//             </p>

//             <p>
//               Success is measured not only in financial returns, but in the
//               positive, lasting impact our companies create for industries and
//               society.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ================= COMPANIES ================= */}
//       <section className="py-28 px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-20">
//             <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
//               Our Companies
//             </h2>
//             <p className="text-lg text-gray-600">
//               Distinct businesses united by a shared philosophy
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//             {companies.map((company) => (
//               <div
//                 key={company.name}
//                 className="group p-10 rounded-2xl border border-gray-200 hover:border-amber-500 transition-all duration-300 hover:shadow-lg bg-white"
//               >
//                 <company.icon
//                   className="w-12 h-12 text-amber-600 mb-6"
//                   strokeWidth={1.5}
//                 />
//                 <h3 className="text-2xl font-semibold text-gray-900 mb-4">
//                   {company.name}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   {company.description}
//                 </p>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-16">
//             <Link
//               to="/companies"
//               className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium text-lg group"
//             >
//               Explore all companies
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ================= VISION ================= */}
//       <section className="py-28 px-6 lg:px-8 bg-gray-900 text-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
//             Our Vision
//           </h2>
//           <p className="text-lg text-gray-300 leading-relaxed mb-12">
//             We envision a future where technology serves humanity’s highest
//             aspirations, capital flows to its most productive uses, and research
//             expands the boundaries of knowledge.
//           </p>

//           <Link
//             to="/vision"
//             className="inline-flex items-center gap-2 px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors"
//           >
//             Read our full vision
//             <ArrowRight className="w-5 h-5" />
//           </Link>
//         </div>
//       </section>

//       {/* ================= CAREERS ================= */}
//       <section className="py-28 px-6 lg:px-8 bg-amber-50">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">
//             Join Our Mission
//           </h2>
//           <p className="text-lg text-gray-700 leading-relaxed mb-12">
//             We’re looking for exceptional people who want to build enduring
//             institutions and create meaningful impact.
//           </p>

//           <Link
//             to="/careers"
//             className="inline-flex items-center gap-2 px-10 py-4 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors text-lg"
//           >
//             View open positions
//             <ArrowRight className="w-5 h-5" />
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }
