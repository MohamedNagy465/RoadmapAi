import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/70 backdrop-blur-lg border-b border-gray-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#5C45FD] rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-indigo-200 group-hover:rotate-6 transition-transform">
            R
          </div>

          <span className="text-gray-900 font-extrabold text-xl tracking-tight">
            Roadmap <span className="text-[#5C45FD]">AI</span>
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-8 text-[14px] font-semibold">

            <li>
              <Link
                to="/"
                className={`transition-all ${
                  isActive('/')
                    ? 'text-[#5C45FD]'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/login"
                className={`transition-all ${
                  isActive('/login')
                    ? 'text-[#5C45FD]'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                Login
              </Link>
            </li>

            <li>
              <Link
                to="/signup"
                className={`transition-all ${
                  isActive('/signup')
                    ? 'text-[#5C45FD]'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                Signup
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}