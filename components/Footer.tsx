
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-16 mb-24">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-8">
              <div className="w-10 h-10 bg-[#1B4332] rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-black text-[11px]">EL</span>
              </div>
              <span className="text-2xl font-black tracking-tighter text-[#1B4332]">ECO-LATEX</span>
            </Link>
            <p className="text-gray-500 text-[13px] leading-relaxed max-w-sm mb-10 font-medium">
              Eco-Latex is a certified global manufacturer specializing in 100% natural latex products. We provide vertically integrated manufacturing from sourcing to finished private-label bedding solutions.
            </p>
            <div className="flex space-x-6">
              {['LinkedIn', 'Facebook', 'Instagram'].map(social => (
                <div key={social} className="text-[10px] font-black uppercase tracking-widest text-[#1B4332] hover:text-[#40916C] cursor-pointer transition-colors">
                  {social}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-[#1B4332] mb-8 uppercase tracking-[0.3em] text-[10px]">Capabilities</h4>
            <ul className="space-y-5 text-[12px] text-gray-400 font-bold uppercase tracking-wider">
              <li><Link to="/about" className="hover:text-[#1B4332] transition-colors">Our Story</Link></li>
              <li><Link to="/manufacturing" className="hover:text-[#1B4332] transition-colors">Manufacturing</Link></li>
              <li><Link to="/what-we-do" className="hover:text-[#1B4332] transition-colors">Private Label</Link></li>
              <li><Link to="/gallery" className="hover:text-[#1B4332] transition-colors">B2B Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-[#1B4332] mb-8 uppercase tracking-[0.3em] text-[10px]">Compliance</h4>
            <ul className="space-y-5 text-[12px] text-gray-400 font-bold uppercase tracking-wider">
              <li><Link to="/certifications" className="hover:text-[#1B4332] transition-colors">Certifications</Link></li>
              <li><Link to="/sustainability" className="hover:text-[#1B4332] transition-colors">Sustainability</Link></li>
              <li><Link to="/privacy" className="hover:text-[#1B4332] transition-colors">Quality Control</Link></li>
              <li><Link to="/terms" className="hover:text-[#1B4332] transition-colors">Ethics Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-[#1B4332] mb-8 uppercase tracking-[0.3em] text-[10px]">Contact</h4>
            <div className="space-y-8 text-[11px] text-gray-500 leading-relaxed font-medium uppercase tracking-wider">
              <div>
                <span className="block text-[#1B4332] font-black mb-1">Latex Factory</span>
                Lalan Eco-Latex, Lot 72, Phase III, KEPZ, <br />Katunayake, Sri Lanka
              </div>
              <div>
                <span className="block text-[#1B4332] font-black mb-1">Value Addition Factory</span>
                Lalan Eco-Latex, 42, Old Avisawella Road, <br />Welivita, Sri Lanka
              </div>
              <div>
                <a href="mailto:info@eco-latex.com" className="hover:text-[#1B4332]">info@eco-latex.com</a>
              </div>
              <div>
                <a href="https://www.eco-latex.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1B4332]">www.eco-latex.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.4em] text-gray-400 font-black">
          <p>© 2024 ECO-LATEX MANUFACTURING. EXPORT DIVISION.</p>
          <div className="flex space-x-10 mt-6 md:mt-0">
            <Link to="/privacy" className="hover:text-[#1B4332] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#1B4332] transition-colors">Terms of Trade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
