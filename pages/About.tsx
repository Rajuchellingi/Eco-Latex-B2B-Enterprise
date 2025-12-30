
import React, { useState } from 'react';

const About: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const products = [
    { name: 'Organic Mattress Core', category: 'Latex Foam', img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=600' },
    { name: 'Certified Topper', category: 'Bedding', img: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=600' },
    { name: 'Contour Pillow', category: 'Pillows', img: 'https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?auto=format&fit=crop&q=80&w=600' },
    { name: 'Natural Yoga Mat', category: 'Lifestyle', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600' },
    { name: 'Organic Pet Bed', category: 'Pet', img: 'https://images.unsplash.com/photo-1591946614421-1d978fc4b445?auto=format&fit=crop&q=80&w=600' },
    { name: 'Premium Bed Linen', category: 'Bedding', img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=600' },
  ];

  const filteredProducts = activeFilter === 'All' ? products : products.filter(p => p.category === activeFilter);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[500px] w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80&w=1920" 
            alt="Eco Plantation" 
            className="w-full h-full object-cover transition-transform duration-[10000ms] scale-110 group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B4332]/90 via-[#1B4332]/50 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-4xl reveal">
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
              About <br /><span className="text-[#74C69D]">Eco-Latex</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-medium leading-relaxed max-w-2xl">
              Certified organic bedding manufacturing rooted in deep sustainability and premium private-label engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="reveal-left">
              <h4 className="text-[#40916C] font-bold text-[11px] tracking-[0.4em] uppercase mb-8">Credibility & Heritage</h4>
              <h2 className="text-4xl md:text-6xl font-black text-[#1B4332] mb-10 leading-[1.05] tracking-tight">Our Story began in 2010.</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                The journey of Eco-Latex began in 2010 with 25 dedicated workers and a mission to become a leading manufacturer of high-quality latex foam for the organic bedding industry.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-12 font-medium">
                Driven by a commitment to sustainability and excellence, we evolved from a small core team into a vertically integrated manufacturer serving global markets with certified natural solutions.
              </p>

              {/* Timeline Vertical Rail */}
              <div className="relative pl-10 border-l-[1px] border-gray-100 space-y-16 reveal-stagger">
                <div className="relative">
                  <div className="absolute -left-[45px] top-1.5 w-2 h-2 rounded-full bg-[#1B4332] outline outline-[8px] outline-white shadow-sm"></div>
                  <h4 className="font-black text-[#1B4332] uppercase tracking-[0.2em] text-xs mb-2">2010 • Foundation</h4>
                  <p className="text-sm text-gray-400 font-medium leading-relaxed">Inception with 25 specialists in natural latex vulcanization.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[45px] top-1.5 w-2 h-2 rounded-full bg-gray-200 outline outline-[8px] outline-white shadow-sm"></div>
                  <h4 className="font-black text-[#1B4332] uppercase tracking-[0.2em] text-xs mb-2">Full-Line Evolution</h4>
                  <p className="text-sm text-gray-400 font-medium leading-relaxed">Transitioned to certified organic mattress and finished bedding manufacturing.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[45px] top-1.5 w-2 h-2 rounded-full bg-gray-200 outline outline-[8px] outline-white shadow-sm"></div>
                  <h4 className="font-black text-[#1B4332] uppercase tracking-[0.2em] text-xs mb-2">Sustainability Scale</h4>
                  <p className="text-sm text-gray-400 font-medium leading-relaxed">Global recognition through GOTS and GOLS certifications for operational excellence.</p>
                </div>
              </div>
            </div>
            <div className="reveal-right relative">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-3xl group">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Manufacturing Story" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-12 -left-12 bg-white p-12 rounded-[2rem] shadow-2xl hidden xl:block border border-gray-50">
                 <div className="flex items-center gap-6">
                    <div className="text-6xl font-black text-[#1B4332] tracking-tighter">14</div>
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 leading-tight">Years of <br />Market <br />Leadership</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Standards Block */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16 reveal">
            <h2 className="text-3xl font-black text-[#1B4332] mb-6">Certified GOTS Manufacturer</h2>
            <p className="text-gray-500 font-medium leading-relaxed">
              Eco-Latex has evolved into a full-line manufacturer of organic mattresses and bedding products certified by GOTS (Global Organic Textile Standard) and other premium global audit bodies.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 reveal-stagger">
             {[
               { name: 'GOTS Organic', desc: 'Textile Certification' },
               { name: 'GOLS Organic', desc: 'Latex Certification' },
               { name: 'OEKO-TEX 100', desc: 'Safety Standard' },
               { name: 'ECO-INSTITUT', desc: 'Purity Tested' },
               { name: 'ISPA MEMBER', desc: 'Industry Leadership' }
             ].map((cert, idx) => (
               <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center hover-lift border border-transparent hover:border-[#40916C]/20 transition-all group">
                  <div className="w-16 h-16 bg-[#1B4332]/5 rounded-full mb-6 flex items-center justify-center group-hover:bg-[#1B4332] transition-colors">
                    <span className="text-[#1B4332] group-hover:text-white text-xs font-black">✓</span>
                  </div>
                  <span className="font-black text-[11px] text-[#1B4332] tracking-widest uppercase mb-1">{cert.name}</span>
                  <p className="text-[9px] text-gray-400 uppercase font-bold tracking-wider">{cert.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Private Label Manufacturing Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="bg-[#1B4332] rounded-[3rem] overflow-hidden shadow-3xl flex flex-col lg:flex-row reveal">
            <div className="lg:w-1/2 p-12 md:p-24 text-white reveal-left">
              <h4 className="text-[#74C69D] font-bold text-[11px] tracking-[0.4em] uppercase mb-8">B2B Specialization</h4>
              <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight tracking-tight">100% Private Label Solutions</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-12 font-light">
                Eco-Latex manufactures mattresses, covers, and components exclusively for individual brands. Our vertically integrated system allows for complete design freedom without compromising manufacturing integrity.
              </p>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h4 className="font-black text-xs uppercase tracking-widest text-[#74C69D] border-b border-[#74C69D]/20 pb-3">What you can customize</h4>
                  <ul className="space-y-4 text-sm font-medium text-gray-100">
                    <li className="flex gap-3"><span>—</span> Density & Core Mapping</li>
                    <li className="flex gap-3"><span>—</span> Bespoke Knitted Covers</li>
                    <li className="flex gap-3"><span>—</span> Functional Additives</li>
                    <li className="flex gap-3"><span>—</span> Retail Packaging Formats</li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <h4 className="font-black text-xs uppercase tracking-widest text-[#74C69D] border-b border-[#74C69D]/20 pb-3">Why it matters for brands</h4>
                  <ul className="space-y-4 text-sm font-medium text-gray-100">
                    <li className="flex gap-3"><span>—</span> Supply Chain Consistency</li>
                    <li className="flex gap-3"><span>—</span> Audit-Ready Compliance</li>
                    <li className="flex gap-3"><span>—</span> Brand Exclusivity</li>
                    <li className="flex gap-3"><span>—</span> Direct Factory Margins</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative min-h-[500px] reveal-right">
               <img src="https://images.unsplash.com/photo-1541829070764-84a7d30dee62?auto=format&fit=crop&q=80&w=1200" className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 mix-blend-overlay" alt="Private Label Partner" />
               <div className="absolute inset-0 bg-[#1B4332]/40 backdrop-blur-[2px]"></div>
               <div className="absolute inset-0 flex items-center justify-center p-20">
                  <div className="text-center">
                    <div className="w-24 h-24 border-2 border-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
                       <span className="text-white text-4xl">★</span>
                    </div>
                    <h3 className="text-white text-3xl font-black uppercase tracking-widest">Global Export Readiness</h3>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Operations section */}
      <section className="py-32 bg-gray-50 reveal">
        <div className="container mx-auto px-6 text-center mb-20">
          <h2 className="text-4xl font-black text-[#1B4332] mb-6 tracking-tight">Operational Sustainability</h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">Our systems are engineered to minimize resource intensity while maximizing the purity of the natural latex output.</p>
        </div>
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            { icon: '💧', title: 'Water Management', desc: 'Responsible treatment and closed-loop systems ensuring zero toxic output.' },
            { icon: '🔥', title: 'Biomass Boiler', desc: 'Carbon-neutral steam generation for the vulcanization processes.' },
            { icon: '📡', title: 'RF Dryer System', desc: 'Radio Frequency drying for moisture control and core consistency.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-16 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all hover-lift flex flex-col items-center text-center group border border-gray-100">
              <span className="text-6xl mb-10 transition-transform duration-500 group-hover:scale-110">{item.icon}</span>
              <h3 className="text-xl font-black text-[#1B4332] mb-5 uppercase tracking-widest">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Ecosystem Capability Gallery */}
      <section className="py-32 bg-white reveal">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-10">
            <div className="max-w-xl">
              <h4 className="text-[#40916C] font-black text-[10px] tracking-[0.4em] uppercase mb-4">Complete Inventory</h4>
              <h2 className="text-4xl md:text-5xl font-black text-[#1B4332] mb-6 tracking-tight">Product Ecosystem</h2>
              <p className="text-gray-500 font-medium leading-relaxed">An extensive B2B range covering the entire bedding lifecycle, from raw core to finished retail accessories.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {['All', 'Bedding', 'Pillows', 'Latex Foam', 'Lifestyle', 'Pet'].map(filter => (
                <button 
                  key={filter} 
                  onClick={() => setActiveFilter(filter)}
                  className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                    activeFilter === filter ? 'bg-[#1B4332] text-white shadow-xl translate-y-[-2px]' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-stagger">
            {filteredProducts.map((p, idx) => (
              <div key={idx} className="group relative rounded-[2rem] overflow-hidden shadow-lg aspect-[4/5] hover-lift">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[10px] font-black text-[#74C69D] uppercase tracking-[0.3em] mb-4">{p.category}</span>
                  <h4 className="text-white text-3xl font-black mb-6">{p.name}</h4>
                  <button className="bg-white/10 hover:bg-white hover:text-[#1B4332] backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest py-3 px-6 rounded-lg self-start transition-all">View Specs</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond the Bedroom Section */}
      <section className="py-32 bg-[#1B4332]/5 reveal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-[#1B4332] mb-6 tracking-tight">Beyond the Bedroom</h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">Extending the benefits of chemical-free, environmentally responsible natural latex to lifestyle and pet sectors.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: 'Functional Lifestyle', desc: 'Travel pillows and support cushions designed for ergonomic health.', img: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80&w=400' },
              { title: 'Natural Yoga Mats', desc: 'Superior grip and chemical-free material for conscious wellness practices.', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400' },
              { title: 'Eco Pet Beds', desc: 'Durable, orthopaedic support for pets using certified natural cores.', img: 'https://images.unsplash.com/photo-1591946614421-1d978fc4b445?auto=format&fit=crop&q=80&w=400' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all group">
                <div className="h-64 overflow-hidden">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={item.title} />
                </div>
                <div className="p-10">
                  <h4 className="text-xl font-black text-[#1B4332] mb-4 uppercase tracking-widest">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities & Locations Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-stretch">
            <div className="reveal-left flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-black text-[#1B4332] mb-12 tracking-tight leading-[1.1]">Strategic Manufacturing <br />Infrastructure</h2>
              <div className="space-y-16">
                <div className="group border-l-[1px] border-gray-100 pl-10 hover:border-[#40916C] transition-colors">
                  <h4 className="text-[#40916C] font-black text-[11px] uppercase tracking-[0.4em] mb-4">Our Latex Factory</h4>
                  <p className="text-gray-800 font-black text-lg mb-2">Lalan Eco-Latex</p>
                  <p className="text-gray-400 text-sm leading-relaxed">Lot 72, Phase III, KEPZ, Katunayake, Sri Lanka</p>
                </div>
                <div className="group border-l-[1px] border-gray-100 pl-10 hover:border-[#40916C] transition-colors">
                  <h4 className="text-[#40916C] font-black text-[11px] uppercase tracking-[0.4em] mb-4">Value Addition Factory</h4>
                  <p className="text-gray-800 font-black text-lg mb-2">Lalan Eco-Latex</p>
                  <p className="text-gray-400 text-sm leading-relaxed">42, Old Avisawella Road, Welivita, Sri Lanka</p>
                </div>
                <div className="pt-10">
                  <a href="https://eco-latex.com" className="text-[#1B4332] font-black text-sm uppercase tracking-[0.3em] hover:text-[#40916C] transition-all flex items-center gap-4 group">
                    Visit Official Portal <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="reveal-right">
              <div className="h-full min-h-[550px] bg-[#1B4332] rounded-[3rem] overflow-hidden relative shadow-3xl">
                 <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-multiply transition-transform duration-[15000ms] hover:scale-110" alt="Map Hub" />
                 <div className="absolute inset-0 flex items-center justify-center p-12 text-center text-white">
                    <div>
                       <div className="w-24 h-24 bg-white/10 backdrop-blur-3xl rounded-full flex items-center justify-center mb-10 mx-auto animate-pulse">
                          <div className="w-8 h-8 bg-[#74C69D] rounded-full shadow-[0_0_20px_#74C69D]"></div>
                       </div>
                       <h3 className="text-3xl font-black mb-6 uppercase tracking-widest">Global Export Hub</h3>
                       <p className="max-w-xs mx-auto text-gray-300 font-medium leading-relaxed uppercase text-[10px] tracking-widest">Katunayake & Welivita Facilities</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B CTA Section */}
      <section className="py-32 bg-[#1B4332] text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto reveal">
            <h2 className="text-4xl md:text-6xl font-black mb-12 leading-tight tracking-tight">Work with Eco-Latex as your private label manufacturing partner.</h2>
            <div className="flex flex-wrap justify-center gap-8">
              <button 
                onClick={() => document.getElementById('rfq-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#40916C] text-white px-12 py-6 rounded-lg font-black text-[12px] uppercase tracking-[0.3em] hover:bg-white hover:text-[#1B4332] transition-all hover-lift shadow-2xl"
              >
                Request Quote
              </button>
              <button className="bg-white/5 border border-white/20 text-white px-12 py-6 rounded-lg font-black text-[12px] uppercase tracking-[0.3em] hover:bg-white hover:text-[#1B4332] transition-all hover-lift backdrop-blur-md">
                Download Catalog
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
