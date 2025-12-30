
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, Download, Mail } from 'lucide-react';
import { PRODUCT_CATEGORIES, COLORS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSub, setActiveMobileSub] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

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
      {/* Row 1: Utility Bar (Mobile & Desktop) */}
      <div className={`transition-all duration-300 ${isScrolled ? 'py-2 border-b-0' : 'py-3 border-b border-gray-50'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <div className="w-8 h-8 md:w-9 md:h-9 bg-[#1B4332] rounded-full flex items-center justify-center mr-2 md:mr-3 transition-transform group-hover:scale-105">
              <span className="text-white font-bold text-[9px] md:text-[10px]">EL</span>
            </div>
            <span className="text-base md:text-lg font-extrabold tracking-tight text-[#1B4332]">ECO-LATEX</span>
          </Link>

          <div className="flex items-center space-x-3 md:space-x-6">
            <div className="hidden md:flex items-center space-x-5 text-[12px] font-semibold text-gray-500 uppercase tracking-wider">
              <Link to="/contact" className="hover:text-[#1B4332] transition-colors">Contact Us</Link>
              <a href="#" className="hover:text-[#1B4332] transition-colors">Catalog</a>
            </div>
            
            <button 
              onClick={() => document.getElementById('rfq-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#1B4332] text-white px-3 py-2 md:px-4 md:py-2 rounded text-[10px] md:text-[12px] hover:bg-[#2D5A27] transition-all hover:shadow-md press-scale font-bold uppercase tracking-widest hidden sm:block"
            >
              Request Quote
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#1B4332] hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Row 2: Main Navigation (Desktop Only) */}
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
                    {item.hasMega && <ChevronDown size={10} className="ml-1 opacity-60" />}
                  </Link>
                  <div className={`absolute bottom-0 left-0 h-[2px] bg-[#1B4332] transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></div>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Desktop Mega Menu */}
      <div 
        className={`absolute left-0 right-0 top-full bg-white shadow-2xl transition-all duration-500 transform origin-top border-t border-gray-50 hidden lg:block ${
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
              <h4 className={`font-bold text-sm mb-1 group-hover:translate-x-1 transition-transform text-[#1B4332]`}>{cat.name}</h4>
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

      {/* Mobile Sidebar Menu */}
      <div className={`fixed inset-0 top-[56px] md:top-[65px] bg-white z-[60] lg:hidden transition-transform duration-300 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col overflow-y-auto pb-20">
          <div className="flex flex-col p-6 space-y-2">
            {navItems.map((item) => (
              <div key={item.label}>
                <div className="flex justify-between items-center">
                  <Link 
                    to={item.path}
                    className={`text-lg font-black uppercase tracking-widest py-4 ${location.pathname === item.path ? 'text-[#1B4332]' : 'text-gray-400'}`}
                  >
                    {item.label}
                  </Link>
                  {item.hasMega && (
                    <button 
                      onClick={() => setActiveMobileSub(!activeMobileSub)}
                      className="p-4 text-[#1B4332]"
                    >
                      <ChevronDown className={`transition-transform duration-300 ${activeMobileSub ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>
                
                {/* Mobile Submenu for Products */}
                {item.hasMega && activeMobileSub && (
                  <div className="bg-gray-50 rounded-2xl p-4 mt-2 grid gap-4 animate-mega-slide">
                    {PRODUCT_CATEGORIES.map((cat, idx) => (
                      <Link 
                        key={idx} 
                        to={cat.path}
                        className="flex flex-col border-b border-gray-100 last:border-0 pb-3 last:pb-0"
                      >
                        <span className="text-xs font-black text-[#1B4332] uppercase tracking-widest">{cat.name}</span>
                        <span className="text-[9px] text-gray-400 uppercase tracking-wider">{cat.description}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-auto p-6 bg-gray-50 border-t border-gray-100">
            <div className="grid gap-4">
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.getElementById('rfq-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full bg-[#1B4332] text-white py-5 rounded-xl font-black text-xs uppercase tracking-widest"
              >
                Request Bulk Quote
              </button>
              <div className="flex justify-between items-center px-2">
                 <a href="mailto:info@eco-latex.com" className="text-gray-400 p-3 hover:text-[#1B4332]"><Mail size={20} /></a>
                 <a href="#" className="text-gray-400 p-3 hover:text-[#1B4332]"><Download size={20} /></a>
                 <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest">v1.0.0 Global</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
