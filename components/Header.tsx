
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PRODUCT_CATEGORIES, COLORS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT US', path: '/about' },
    { label: 'WHAT WE DO', path: '/what-we-do' },
    { label: 'PRODUCTS', path: '/products', hasMega: true },
    { label: 'SUSTAINABILITY', path: '/sustainability' },
    { label: 'CERTIFICATIONS', path: '/certifications' },
    { label: 'MANUFACTURING', path: '/manufacturing' },
    { label: 'GALLERY', path: '/gallery' },
    { label: 'CONTACT', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-gray-100 ${isScrolled ? 'shadow-lg' : ''}`}>
      {/* Row 1: Utility Bar */}
      <div className={`transition-all duration-300 ${isScrolled ? 'py-2 border-b-0' : 'py-3 border-b border-gray-50'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <div className="w-9 h-9 bg-[#1B4332] rounded-full flex items-center justify-center mr-3 transition-transform group-hover:scale-105">
              <span className="text-white font-bold text-[10px]">EL</span>
            </div>
            <span className="text-lg font-extrabold tracking-tight text-[#1B4332]">ECO-LATEX</span>
          </Link>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-5 text-[12px] font-semibold text-gray-500 uppercase tracking-wider">
              <Link to="/contact" className="hover:text-[#1B4332] transition-colors">Contact Us</Link>
              <a href="#" className="hover:text-[#1B4332] transition-colors">Download Catalog</a>
              <a href="#" className="hover:text-[#1B4332] transition-colors">Webmail</a>
            </div>
            <button 
              onClick={() => document.getElementById('rfq-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#1B4332] text-white px-4 py-2 rounded text-[12px] hover:bg-[#2D5A27] transition-all hover:shadow-md press-scale font-bold uppercase tracking-widest"
            >
              Request Quote
            </button>
          </div>
        </div>
      </div>

      {/* Row 2: Main Navigation */}
      <nav className={`hidden lg:block transition-all duration-300 ${isScrolled ? 'py-1' : 'py-3'}`}>
        <div className="container mx-auto px-6">
          <ul className="flex items-center space-x-7">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || (item.hasMega && location.pathname.startsWith('/products'));
              return (
                <li 
                  key={item.label} 
                  className="relative group"
                  onMouseEnter={() => item.hasMega && setIsMegaMenuOpen(true)}
                  onMouseLeave={() => item.hasMega && setIsMegaMenuOpen(false)}
                >
                  <Link 
                    to={item.path}
                    className={`text-[11px] font-extrabold tracking-widest uppercase transition-all flex items-center py-2 ${
                      isActive ? 'text-[#1B4332]' : 'text-gray-600 hover:text-[#1B4332]'
                    }`}
                  >
                    {item.label}
                    {item.hasMega && <span className="ml-1 text-[8px] opacity-60">▼</span>}
                  </Link>
                  {/* Underline effect */}
                  <div className={`absolute bottom-0 left-0 h-[2px] bg-[#1B4332] transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></div>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mega Menu */}
      <div 
        className={`absolute left-0 right-0 top-full bg-white shadow-2xl transition-all duration-500 transform origin-top border-t border-gray-50 ${
          isMegaMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
        }`}
        onMouseEnter={() => setIsMegaMenuOpen(true)}
        onMouseLeave={() => setIsMegaMenuOpen(false)}
      >
        <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCT_CATEGORIES.map((cat, idx) => (
            <Link 
              key={idx} 
              to={cat.path} 
              className={`group p-5 hover:bg-gray-50 rounded-lg transition-all border-l-2 ${
                location.pathname === cat.path ? 'bg-gray-50 border-[#1B4332]' : 'border-transparent hover:border-[#1B4332]'
              } flex flex-col justify-center`}
            >
              <h4 className={`font-bold text-sm mb-1 group-hover:translate-x-1 transition-transform ${
                location.pathname === cat.path ? 'text-[#1B4332]' : 'text-[#1B4332]'
              }`}>{cat.name}</h4>
              <p className="text-[10px] text-gray-400 uppercase tracking-[0.15em] font-medium leading-tight">{cat.description}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-50 py-4 border-t border-gray-100">
          <div className="container mx-auto px-6 flex justify-between items-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            <span>Enterprise B2B Manufacturing Solutions</span>
            <Link to="/products" className="text-[#1B4332] hover:underline">View All Specifications →</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
