import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        ${scrolled
          ? 'bg-white/90 backdrop-blur shadow-sm py-3'
          : 'bg-white py-5'}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <span className="w-8 h-8 bg-brand-dark text-white rounded-md flex items-center justify-center">
            VG
          </span>
          <span className="text-gray-900">
            Vritan <span className="text-brand-accent">Group</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link to="/" className="hover:text-gray-900 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-900 transition">
            About
          </Link>
          <Link to="/companies" className="hover:text-gray-900 transition">
            Companies
          </Link>
          <Link to="/vision" className="hover:text-gray-900 transition">
            Vision
          </Link>
          <Link to="/careers" className="hover:text-gray-900 transition">
            Careers
          </Link>

          {/* Primary CTA */}
          <Link
            to="/contact"
            className="
              ml-4
              inline-flex items-center justify-center
              min-h-[40px] px-4 py-2
              bg-brand-dark text-white
              rounded-md font-medium
              hover:bg-brand-darker
              transition-all duration-200
            "
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
