export default function OperatingFocusStrip() {
  return (
    <section className="py-24 bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-[#f59e0b] mb-4">
            AI Agent Capabilities
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our AI Agents Can Handle
          </h2>

          <p className="text-slate-300 max-w-3xl mx-auto">
            Our AI agents are designed to operate inside real business workflows —
            securely, reliably, and at scale.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {[
            'Customer Conversations',
            'Sales & CRM Updates',
            'Internal Knowledge Search',
            'Workflow Automation',
            'Reporting & Insights',
          ].map((item) => (
            <div
              key={item}
              className="
                bg-[#020617]
                border border-white/10
                rounded-xl
                py-6
                text-sm font-semibold
                text-center
                hover:border-[#f59e0b]
                transition
              "
            >
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}








// export default function OperatingFocusStrip() {
//   return (
//     <section className="py-24 bg-[#0f172a] text-white">
//       <div className="max-w-6xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center mb-14">
//           <p className="text-xs uppercase tracking-widest text-[#f59e0b] mb-4">
//             Operating Focus
//           </p>

//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
//             How We Build Enduring Companies
//           </h2>

//           <p className="text-slate-300 max-w-3xl mx-auto">
//             Our companies are built on strong technical foundations,
//             scalable systems, and disciplined execution.
//           </p>
//         </div>

//         {/* Focus cards */}
//         <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
//           {[
//             'AI Systems',
//             'Cloud Platforms',
//             'Data Infrastructure',
//             'Automation',
//             'Secure Software',
//           ].map((item) => (
//             <div
//               key={item}
//               className="
//                 bg-[#020617]
//                 border border-white/10
//                 rounded-xl
//                 py-6
//                 text-sm font-semibold
//                 text-center
//                 text-white
//                 hover:border-[#f59e0b]
//                 transition
//               "
//             >
//               {item}
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }
