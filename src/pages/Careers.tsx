import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Careers() {
  return (
    <main className="pt-24">

      {/* HERO */}
      <section className="py-28 px-6 bg-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Careers at Vritan Group
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Join a group of companies building long-term value across technology,
          AI, research, and capital.
        </p>
      </section>

      {/* REGION SELECT */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <Link
            to="/jobs?region=Global"
            className="p-10 rounded-2xl bg-white border hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-bold mb-4">🌍 Global Roles</h2>
            <p className="text-slate-600">
              Remote and international opportunities across our portfolio.
            </p>
          </Link>

          <Link
            to="/jobs?region=USA"
            className="p-10 rounded-2xl bg-white border hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-bold mb-4">🇺🇸 USA Roles</h2>
            <p className="text-slate-600">
              Roles based in the United States with full compliance.
            </p>
          </Link>
        </div>
      </section>

    </main>
  );
}








// import { ArrowRight, Globe, Heart, TrendingUp, Users } from 'lucide-react';

// export default function Careers() {
//   const benefits = [
//     {
//       icon: TrendingUp,
//       title: 'Growth & Development',
//       description: 'Continuous learning opportunities, mentorship programs, and career advancement paths.',
//     },
//     {
//       icon: Heart,
//       title: 'Work-Life Balance',
//       description: 'Flexible arrangements and policies that respect personal time and commitments.',
//     },
//     {
//       icon: Users,
//       title: 'Collaborative Culture',
//       description: 'Work alongside exceptional professionals in an environment that values diverse perspectives.',
//     },
//     {
//       icon: Globe,
//       title: 'Global Impact',
//       description: 'Contribute to meaningful work that affects industries and communities worldwide.',
//     },
//   ];

//   const openings = [
//     {
//       company: 'Vritan Technologies',
//       positions: [
//         { title: 'Senior Software Engineer', location: 'Remote', type: 'Full-time' },
//         { title: 'Product Manager', location: 'New York, NY', type: 'Full-time' },
//         { title: 'DevOps Engineer', location: 'Remote', type: 'Full-time' },
//       ],
//     },
//     {
//       company: 'Vritan AI Labs',
//       positions: [
//         { title: 'ML Research Scientist', location: 'San Francisco, CA', type: 'Full-time' },
//         { title: 'AI Safety Researcher', location: 'Remote', type: 'Full-time' },
//         { title: 'NLP Engineer', location: 'London, UK', type: 'Full-time' },
//       ],
//     },
//     {
//       company: 'Vritan Capital',
//       positions: [
//         { title: 'Investment Analyst', location: 'New York, NY', type: 'Full-time' },
//         { title: 'Portfolio Manager', location: 'Singapore', type: 'Full-time' },
//       ],
//     },
//     {
//       company: 'Vritan Research',
//       positions: [
//         { title: 'Research Fellow', location: 'Cambridge, MA', type: 'Full-time' },
//         { title: 'Data Scientist', location: 'Remote', type: 'Full-time' },
//       ],
//     },
//   ];

//   return (
//     <div className="min-h-screen pt-20">
//       <section className="py-24 px-6 lg:px-8 bg-white">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
//             Join Our Mission
//           </h1>
//           <p className="text-xl text-gray-600 leading-relaxed">
//             We're seeking exceptional individuals who share our commitment to building enduring institutions
//             and creating meaningful impact. Explore opportunities across our portfolio companies.
//           </p>
//         </div>
//       </section>

//       <section className="py-20 px-6 lg:px-8 bg-gray-50">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
//             Why Vritan Group
//           </h2>
//           <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
//             <p>
//               Working at Vritan Group means joining a community of people who think long-term, act with integrity,
//               and measure success by more than financial metrics. Our culture is built on excellence, collaboration,
//               and a genuine commitment to making positive contributions.
//             </p>
//             <p>
//               We offer the resources and stability of a large organization with the autonomy and impact typically
//               found in smaller companies. Our portfolio structure means you can work on meaningful problems while
//               benefiting from cross-company learning and collaboration.
//             </p>
//             <p>
//               We invest in our people. From professional development programs to mentorship opportunities, we're
//               committed to helping you grow throughout your career. We believe that when our people succeed,
//               our companies succeed.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 px-6 lg:px-8 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
//             What We Offer
//           </h2>
//           <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
//             Comprehensive benefits and a culture that supports your growth
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {benefits.map((benefit) => (
//               <div key={benefit.title} className="text-center">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-50 rounded-xl mb-6">
//                   <benefit.icon className="w-8 h-8 text-amber-600" strokeWidth={1.5} />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">
//                   {benefit.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   {benefit.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-20 px-6 lg:px-8 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
//             Open Positions
//           </h2>
//           <div className="space-y-12">
//             {openings.map((company) => (
//               <div key={company.company}>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-6">
//                   {company.company}
//                 </h3>
//                 <div className="space-y-4">
//                   {company.positions.map((position) => (
//                     <div
//                       key={position.title}
//                       className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white rounded-xl hover:shadow-md transition-shadow border border-gray-200"
//                     >
//                       <div className="mb-4 md:mb-0">
//                         <h4 className="text-lg font-semibold text-gray-900 mb-2">
//                           {position.title}
//                         </h4>
//                         <div className="flex flex-wrap gap-3 text-sm text-gray-600">
//                           <span>{position.location}</span>
//                           <span>•</span>
//                           <span>{position.type}</span>
//                         </div>
//                       </div>
//                       <button className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors text-sm">
//                         <span>Apply Now</span>
//                         <ArrowRight className="w-4 h-4" />
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-20 px-6 lg:px-8 bg-gray-900 text-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-8">
//             Don't See the Right Role?
//           </h2>
//           <p className="text-xl text-gray-300 leading-relaxed mb-10">
//             We're always interested in connecting with exceptional people. Send us your resume and a note
//             about what you're looking for, and we'll keep you in mind for future opportunities.
//           </p>
//           <button className="inline-flex items-center space-x-2 px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-medium rounded-lg transition-colors">
//             <span>Submit General Application</span>
//             <ArrowRight className="w-5 h-5" />
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }
