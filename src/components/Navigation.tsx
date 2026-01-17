import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/companies', label: 'Companies' },
    { to: '/vision', label: 'Vision' },
    { to: '/leadership', label: 'Leadership' },
    { to: '/careers', label: 'Careers' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  /* ================= Scroll Detection ================= */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 h-16'
            : 'bg-white/85 backdrop-blur-md border-b border-slate-100 h-20'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">

          {/* ================= BRAND / MONOGRAM ================= */}
          <Link
            to="/"
            className="group flex items-center gap-4 px-2 py-1 rounded-lg transition"
          >
            {/* Monogram */}
            <div
              className={`flex items-center justify-center rounded-md font-bold tracking-tight
                transition-all duration-300
                ${
                  scrolled
                    ? 'h-9 w-9 text-sm'
                    : 'h-11 w-11 text-base'
                }
                bg-slate-900 text-white
                group-hover:scale-110
              `}
            >
              VG
            </div>

            {/* Wordmark */}
            <span
              className={`font-bold tracking-tight text-slate-900 transition-all duration-300
                ${scrolled ? 'text-lg' : 'text-xl'}
              `}
            >
              Vritan
              <span className="text-amber-600"> Group</span>
            </span>
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden md:flex items-center space-x-1 text-sm">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg font-medium transition-all
                  ${
                    isActive(link.to)
                      ? 'text-amber-600 bg-amber-50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-6 py-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition
                  ${
                    isActive(link.to)
                      ? 'text-amber-600 bg-amber-50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
