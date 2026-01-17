import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0f172a',    // slate-900
          darker: '#020617',  // slate-950
          accent: '#f59e0b',  // amber-500
          accentHover: '#d97706',
        },
      },
    },
  },
  plugins: [],
};

export default config;










// export default {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [],
// };
