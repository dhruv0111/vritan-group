import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useHeroGsap } from '../animations/useHeroGsap';
import MotionFade from '../ui/Motion.Fade';
import AINetwork from '../ui/AINetwork';
import { usePersonalization } from '../../hooks/usePeronalization';

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useHeroGsap(titleRef, subtitleRef);

  const persona = usePersonalization();

  const headlineMap: Record<string, string> = {
    investor: 'Building Long-Term Value Through Innovation',
    developer: 'Engineering the Future with AI',
    founder: 'Building Enduring Companies',
    default: 'Building the Future Through Innovation',
  };

  return (
    <section className="relative pt-40 pb-32 px-6 overflow-hidden bg-white">
      <AINetwork />

      {/* Glass container for readability */}
      <div
        className="
          relative z-10
          max-w-5xl mx-auto text-center
          bg-white/85 backdrop-blur-sm
          rounded-2xl shadow-lg
          px-6 py-10
          sm:px-8 sm:py-12
          lg:px-10 lg:py-14
        "
      >
        {/* Scope line */}
        <p className="text-sm uppercase tracking-widest text-brand-accent mb-6">
          Technology • AI • Capital • Research
        </p>

        <h1
          ref={titleRef}
          className="
            text-4xl sm:text-5xl md:text-6xl lg:text-[4rem]
            font-extrabold tracking-tight
            text-gray-900 mb-6
          "
        >
          {headlineMap[persona]}
        </h1>

        <p
          ref={subtitleRef}
          className="
            text-lg md:text-xl
            text-gray-600
            mb-12
            max-w-3xl mx-auto
          "
        >
          Vritan Group builds AI-driven, future-ready businesses across
          technology, capital, and digital ecosystems.
        </p>

        <MotionFade>
              <Link
                to="/companies"
                className="
                  inline-flex items-center justify-center gap-2
                  min-h-[48px] px-8 py-4
                  rounded-lg font-semibold

                  bg-[#0f172a] text-white
                  shadow-lg shadow-black/20

                  hover:bg-[#020617]
                  hover:-translate-y-0.5 hover:shadow-xl

                  transition-all duration-300
                "
              >
                <span className="text-white">
                  Explore Our Companies
                </span>
                <ArrowRight className="w-5 h-5 text-white" />
              </Link>

        </MotionFade>
      </div>
    </section>
  );
}





















// import { Link } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';
// import MotionFade from '../ui/MotionFade';
// import AINetwork from '../ui/AINetwork';

// export default function HeroSection() {
//   return (
//     <section className="relative pt-36 pb-28 px-6 lg:px-8 overflow-hidden
//       bg-white dark:bg-gray-950 transition-colors">

//       <AINetwork />

//       <div className="relative max-w-6xl mx-auto text-center">
//         <MotionFade>
//           <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight
//             text-gray-900 dark:text-white mb-8">
//             Building the Future
//             <br />
//             Through Innovation
//             <span className="text-amber-600"> and Integrity</span>
//           </h1>
//         </MotionFade>

//         <MotionFade delay={0.15}>
//           <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300
//             max-w-3xl mx-auto mb-12">
//             Vritan Group is a global holding company building future-ready
//             businesses across AI, technology, capital, and digital ecosystems.
//           </p>
//         </MotionFade>

//         <MotionFade delay={0.3}>
//           <div className="flex justify-center gap-6">
//             <Link
//               to="/companies"
//               className="px-8 py-4 bg-gray-900 dark:bg-white
//                 text-white dark:text-gray-900 rounded-lg font-medium flex items-center gap-2"
//             >
//               Explore Our Companies
//               <ArrowRight className="w-5 h-5" />
//             </Link>

//             <Link
//               to="/vision"
//               className="px-8 py-4 text-gray-700 dark:text-gray-300 font-medium"
//             >
//               Our Vision
//             </Link>
//           </div>
//         </MotionFade>
//       </div>
//     </section>
//   );
// }
