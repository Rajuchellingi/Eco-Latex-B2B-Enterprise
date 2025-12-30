
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden flex items-center">
      {/* Background with improved overlay */}
      <div className="absolute inset-0 z-0 scale-105 transition-transform duration-[4000ms] ease-out" style={{ transform: isLoaded ? 'scale(1)' : 'scale(1.1)' }}>
        <img 
          src="https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80&w=1920" 
          alt="Natural Latex Plantation" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-white">
        <div className="max-w-4xl">
          <div 
            className={`inline-flex items-center px-4 py-1.5 bg-[#40916C]/90 text-white text-[10px] font-bold tracking-[0.3em] uppercase rounded-full mb-8 shadow-lg border border-white/10 transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
             Primary Manufacturer & Export Partner
          </div>
          <h1 
            className={`text-5xl md:text-7xl font-black leading-[1.1] mb-8 tracking-tight transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Certified Natural <br /> 
            <span className="text-[#74C69D]">Latex Engineering.</span>
          </h1>
          <p 
            className={`text-lg md:text-xl text-gray-200 mb-12 leading-relaxed font-normal max-w-2xl transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Empowering global sleep brands with certified natural latex manufacturing, custom-spec private labeling, and seamless export logistics from source to destination.
          </p>
          
          <div className={`flex flex-wrap gap-5 transition-all duration-700 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button 
              onClick={() => document.getElementById('rfq-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#40916C] hover:bg-white hover:text-[#1B4332] text-white px-10 py-4 rounded font-extrabold text-sm uppercase tracking-widest transition-all hover:shadow-[0_20px_50px_rgba(27,67,50,0.3)] hover-lift press-scale"
            >
              Request Bulk Quote
            </button>
            <button className="bg-white/10 hover:bg-white hover:text-[#1B4332] backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded font-extrabold text-sm uppercase tracking-widest transition-all hover-lift press-scale">
              Download Catalog
            </button>
          </div>
        </div>

        {/* Floating scroll indicator */}
        <div className={`absolute bottom-10 left-6 hidden lg:flex flex-col items-center transition-opacity duration-1000 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#74C69D] to-transparent animate-pulse"></div>
          <span className="text-[9px] uppercase font-bold tracking-[0.5em] text-white/40 rotate-90 mt-10 origin-left">Explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
