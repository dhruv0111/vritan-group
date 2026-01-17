import './globals.css';
import { ThemeProvider } from '../context/ThemeContext';
import PageTransition from '../components/animations/PageTransition';

export const metadata = {
  title: {
    default: 'Vritan Group',
    template: '%s | Vritan Group',
  },
  description:
    'Vritan Group is a global holding company building AI-driven, future-ready businesses.',
  openGraph: {
    title: 'Vritan Group',
    description: 'Building the future through innovation and integrity.',
    url: 'https://vritangroup.com',
    siteName: 'Vritan Group',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-950 transition-colors">
        <ThemeProvider>
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
