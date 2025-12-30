
import React from 'react';

const Manufacturing: React.FC = () => {
  const scrollToRFQ = () => {
    document.getElementById('rfq-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const processSteps = [
    { title: 'Harvest', desc: 'Sourcing liquid natural latex from certified rubber plantations.', icon: '🌳' },
    { title: 'Processing', desc: 'Centrifuging and stabilization of raw latex for purity.', icon: '🧪' },
    { title: 'Foaming', desc: 'Dunlop foaming process with precise air-to-latex ratios.', icon: '💨' },
    { title: 'Curing', desc: 'High-temp vulcanization for structural core integrity.', icon: '🔥' }
  ];

  const qcSteps = [
    { label: 'Raw Input', desc: 'Purity and moisture checks on incoming latex batches.', icon: '📥' },
    { label: 'In-Process', desc: 'Real-time density and temperature monitoring.', icon: '⚙️' },
    { label: 'Final Inspection', desc: 'ILD, tensile, and dimensional audit per spec.', icon: '🔍' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[500px] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920" 
            alt="Factory Interior" 
            className="w-full h-full object-cover opacity-90 transition-transform duration-[10000ms] scale-105"
            style={{ transform: 'scale(1.05)' }}
          />
          <div className="absolute inset-0 bg-[#1B4332]/85 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-4xl reveal">
            <span className="inline-block px-3 py-1 bg-[#40916C] text-[10px] font-black uppercase tracking-[0.3em] mb-6 rounded shadow-lg">Primary Manufacturing Hub</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1]">
              Manufacturing Excellence from <br />Plantation to Finished Product.
            </h1>
            <p className="text-xl text-gray-200 mb-10 font-medium tracking-wide max-w-2xl">
              Vertically integrated natural latex manufacturing built for consistency, scale, and global compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Vertically Integrated Model */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center max-w-6xl mx-auto">
            <div className="reveal-left">
              <h4 className="text-[#40916C] font-bold text-[11px] tracking-[0.4em] uppercase mb-8">Structural Advantage</h4>
              <h2 className="text-4xl font-black text-[#1B4332] mb-10 leading-tight uppercase">Integrated Value Chain.</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Eco-Latex operates as a primary manufacturer. By controlling every stage—from the liquid latex in the plantation to the final export-ready package—we eliminate supply chain fragmentation, ensuring world-class consistency for our B2B partners.
              </p>
              <div className="space-y-6">
                 {['Direct Raw Sourcing', 'In-House Vulcanization', 'Custom Component Fabrication', 'Bespoke Private Label Assembly'].map((item, idx) => (
                   <div key={idx} className="flex items-center gap-4 group">
                      <div className="w-8 h-px bg-[#40916C] group-hover:w-12 transition-all"></div>
                      <span className="text-xs font-black uppercase tracking-widest text-[#1B4332]">{item}</span>
                   </div>
                 ))}
              </div>
            </div>
            <div className="reveal-right bg-gray-50 p-12 rounded-[3rem] border border-gray-100 flex flex-col items-center justify-center">
               <div className="relative w-full aspect-square border-2 border-dashed border-[#1B4332]/10 rounded-2xl p-10 flex flex-col justify-between">
                  <div className="flex justify-between">
                     <span className="text-2xl">🌲</span>
                     <span className="text-2xl">🏭</span>
                  </div>
                  <div className="flex items-center justify-center">
                     <div className="w-32 h-32 bg-[#1B4332] rounded-full flex items-center justify-center shadow-2xl relative">
                        <div className="absolute inset-0 rounded-full border border-white/20 animate-ping"></div>
                        <span className="text-white font-black text-xs uppercase tracking-widest text-center">Vertical<br/>Link</span>
                     </div>
                  </div>
                  <div className="flex justify-between">
                     <span className="text-2xl">📦</span>
                     <span className="text-2xl">🚢</span>
                  </div>
               </div>
               <p className="mt-10 text-[9px] font-black text-gray-400 uppercase tracking-[0.4em] text-center">Seamless Quality Control Workflow</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Raw Material & Latex Processing */}
      <section className="py-32 bg-gray-50 reveal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
             <h4 className="text-[#40916C] font-bold text-[11px] tracking-[0.4em] uppercase mb-6">Process Engineering</h4>
             <h2 className="text-4xl font-black text-[#1B4332] mb-6 tracking-tight uppercase">Technical Processing Flow</h2>
          </div>
          <div className="max-w-6xl mx-auto relative">
             <div className="absolute top-1/2 left-0 w-full h-px bg-gray-200 -translate-y-1/2 hidden lg:block -z-0"></div>
             <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 reveal-stagger">
                {processSteps.map((step, idx) => (
                  <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center relative z-10 hover-lift transition-all group">
                     <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:bg-[#1B4332] group-hover:text-white transition-colors duration-500">{step.icon}</div>
                     <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Step 0{idx+1}</span>
                     <h4 className="text-xs font-black text-[#1B4332] uppercase tracking-widest mb-4">{step.title}</h4>
                     <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed italic">{step.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Section 3: Foam Technologies & Engineering */}
      <section className="py-32 bg-white overflow-hidden reveal">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center max-w-6xl mx-auto">
             <div className="reveal-left bg-[#1B4332] p-16 rounded-[4rem] text-white relative">
                <div className="absolute top-0 right-0 p-12 opacity-5 rotate-12 scale-150">
                   <span className="text-[100px] font-black leading-none">CORE</span>
                </div>
                <h3 className="text-3xl font-black mb-8 leading-tight">Advanced Core <br />Foam Engineering.</h3>
                <p className="text-gray-300 text-lg font-light leading-relaxed mb-10">
                  Our facility specializes in complex core configurations. From uniform mono-zones to precision-mapped multi-zone systems, we use proprietary molding techniques to control density and ILD variations across high-volume production runs.
                </p>
                <div className="grid grid-cols-2 gap-8">
                   {[
                     { t: 'Density Control', d: '65 - 95 kg/m³' },
                     { t: 'Zoning Precision', d: 'Up to 7 Zones' },
                     { t: 'Infusion Options', d: 'Natural Graphite' },
                     { t: 'Cell Structure', d: 'Pure Open-Cell' }
                   ].map((item, i) => (
                     <div key={i}>
                        <h4 className="text-[10px] font-black text-[#74C69D] uppercase tracking-widest mb-1">{item.t}</h4>
                        <p className="text-white font-black text-sm uppercase">{item.d}</p>
                     </div>
                   ))}
                </div>
             </div>
             <div className="reveal-right flex flex-col items-center">
                <div className="w-full aspect-[4/3] bg-gray-50 rounded-3xl p-10 flex items-center justify-center group overflow-hidden border border-gray-100">
                   <img src="https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover rounded-xl shadow-lg transition-transform duration-1000 group-hover:scale-110" alt="Latex Core" />
                </div>
                <p className="mt-8 text-[10px] font-black text-[#1B4332] uppercase tracking-[0.4em] italic text-center">Precision Pin-Core Perforation Matrix</p>
             </div>
          </div>
        </div>
      </section>

      {/* Section 4: Product Manufacturing & Assembly */}
      <section className="py-32 bg-gray-50 reveal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
             <h2 className="text-4xl font-black text-[#1B4332] mb-6 tracking-tight uppercase">Multi-Line Production Capability</h2>
             <p className="text-gray-400 font-medium text-sm uppercase tracking-widest">Repeatable Consistency Across Categories</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
             {[
               { title: 'Mattress & Sheets', desc: 'Large format continuous processing and curing lines.', icon: '🛌' },
               { title: 'Ergonomic Pillows', desc: 'Precision molding for classic and functional profiles.', icon: '☁️' },
               { title: 'Bedding Finishing', desc: 'GOTS certified quilting and cover assembly modules.', icon: '🧵' },
               { title: 'Yoga & Lifestyle', desc: 'Eco-safe surface finishing and mat fabrication.', icon: '🧘' },
               { title: 'Pet Solutions', desc: 'Heavy-duty fabric integration and multi-layer beds.', icon: '🐾' },
               { title: 'Private Label OEM', desc: 'Bespoke branding and custom spec packaging lines.', icon: '🏷️' }
             ].map((line, idx) => (
               <div key={idx} className="bg-white p-12 rounded-[2.5rem] shadow-sm hover-lift transition-all group border border-transparent hover:border-[#1B4332]/5">
                  <div className="text-4xl mb-8 group-hover:scale-110 transition-transform">{line.icon}</div>
                  <h4 className="text-sm font-black text-[#1B4332] uppercase tracking-widest mb-4">{line.title}</h4>
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed italic">{line.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Section 5: Quality Control & Testing */}
      <section className="py-32 bg-white reveal">
        <div className="container mx-auto px-6 text-center">
          <h4 className="text-[#40916C] font-bold text-[11px] tracking-[0.4em] uppercase mb-8">Internal Verification</h4>
          <h2 className="text-4xl font-black text-[#1B4332] mb-24 uppercase tracking-widest">Quality Control Framework</h2>
          <div className="max-w-4xl mx-auto relative">
             <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-50 -translate-y-1/2 hidden md:block"></div>
             <div className="grid md:grid-cols-3 gap-16 relative z-10">
                {qcSteps.map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center group">
                     <div className="w-24 h-24 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center text-4xl mb-8 shadow-sm group-hover:border-[#40916C] group-hover:shadow-2xl transition-all duration-500">
                        {step.icon}
                     </div>
                     <h4 className="text-xs font-black text-[#1B4332] uppercase tracking-[0.2em] mb-4">{step.label}</h4>
                     <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest italic max-w-[200px] leading-relaxed">{step.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Section 6: Value Addition & Finishing */}
      <section className="py-32 bg-gray-50 overflow-hidden reveal">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center max-w-6xl mx-auto">
             <div className="reveal-left order-2 lg:order-1">
                <div className="bg-white p-12 md:p-20 rounded-[3rem] shadow-xl border border-gray-100 flex flex-col justify-center min-h-[400px]">
                   <h3 className="text-2xl font-black text-[#1B4332] mb-10 uppercase tracking-widest">Finishing Capabilities</h3>
                   <div className="space-y-6">
                      {[
                        'Custom Cutting & Contouring', 'Logo Embossing & Branding',
                        'Certified Cover Integration', 'Multilingual Care Labeling',
                        'Bespoke Sizing Verification', 'Micro-Perforation Adjustments'
                      ].map((c, i) => (
                        <div key={i} className="flex items-center gap-4 group">
                           <div className="w-5 h-5 bg-[#40916C]/10 rounded flex items-center justify-center text-[#1B4332] group-hover:bg-[#1B4332] group-hover:text-white transition-colors">
                              <span className="text-[10px]">✓</span>
                           </div>
                           <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">{c}</span>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
             <div className="reveal-right order-1 lg:order-2">
                <h4 className="text-[#40916C] font-bold text-[11px] tracking-[0.4em] uppercase mb-8">Ready for Retail</h4>
                <h2 className="text-4xl font-black text-[#1B4332] mb-10 leading-tight uppercase">Value Addition & <br />Finishing Facility.</h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-8 font-medium">
                  We don't just ship foam. Our specialized finishing facility handles the transition from industrial components to retail-ready products, offering complete flexibility for brand specifications.
                </p>
                <div className="pt-8 border-t border-gray-200">
                   <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">100% Private Label Ready</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Section 7: Packaging & Export Readiness */}
      <section className="py-32 bg-white reveal">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-[#1B4332] mb-20 uppercase tracking-widest">Global Export Packaging Options</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
             {[
               { title: 'Flat Pack', icon: '🪵', desc: 'Standard heavy-duty industrial palletizing.' },
               { title: 'Vacuum Rolled', icon: '🌀', desc: 'Space-optimized for high-volume shipping.' },
               { title: 'Master Cartons', icon: '📦', desc: 'Reinforced corrugated boxes for LCL transit.' },
               { title: 'Branded Retail', icon: '🏷️', desc: 'Display-ready boxes and custom inserts.' }
             ].map((pkg, idx) => (
               <div key={idx} className="p-10 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-[#1B4332] transition-all group">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{pkg.icon}</div>
                  <h4 className="text-xs font-black text-[#1B4332] group-hover:text-white uppercase tracking-widest mb-4">{pkg.title}</h4>
                  <p className="text-gray-400 group-hover:text-gray-300 text-[10px] font-bold uppercase tracking-widest leading-relaxed italic">{pkg.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Section 8: Traceability & Documentation */}
      <section className="py-32 bg-[#1B4332] text-white overflow-hidden reveal shadow-3xl">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center max-w-6xl mx-auto">
             <div className="reveal-left">
                <h2 className="text-4xl font-black mb-10 tracking-tight leading-tight uppercase">Traceability & <br />Audit Readiness.</h2>
                <p className="text-gray-300 text-lg font-light leading-relaxed mb-12">
                   Eco-Latex operates with a total documentation framework. Every batch of liquid latex, every vulcanization cycle, and every finishing stage is logged in our digital traceability system, ready for customer audits and regulatory reviews.
                </p>
                <div className="flex items-center gap-12">
                   <div>
                      <div className="text-4xl font-black text-[#74C69D] mb-1">100%</div>
                      <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">Batch Log Trail</span>
                   </div>
                   <div>
                      <div className="text-4xl font-black text-[#74C69D] mb-1">Audit</div>
                      <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">24/7 Readiness</span>
                   </div>
                </div>
             </div>
             <div className="reveal-right flex justify-center">
                <div className="w-full max-w-md aspect-square rounded-[3rem] border border-white/20 p-12 flex flex-col items-center justify-center text-center group bg-white/5 backdrop-blur-sm">
                   <div className="text-7xl mb-10 group-hover:rotate-12 transition-transform duration-500">📋</div>
                   <h4 className="text-xl font-black uppercase tracking-widest mb-4">Export Documentation</h4>
                   <p className="text-gray-400 text-sm font-light uppercase tracking-widest leading-relaxed">COA, PL, Invoice, and Certification Packs provided with every container.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Section 9: Manufacturing Locations */}
      <section className="py-32 bg-white reveal">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
             <h2 className="text-3xl font-black text-[#1B4332] mb-20 text-center uppercase tracking-widest">Strategic Facility Locations</h2>
             <div className="grid lg:grid-cols-2 gap-12">
                <div className="p-16 bg-gray-50 rounded-[3rem] border border-gray-100 hover-lift transition-all">
                   <h4 className="text-[#40916C] font-black text-[11px] uppercase tracking-[0.4em] mb-8">Latex Core Factory</h4>
                   <p className="text-gray-800 font-black text-2xl mb-6 leading-tight uppercase">Lalan Eco-Latex <br />Lot 72, Phase III, KEPZ</p>
                   <p className="text-gray-400 text-xs font-black uppercase tracking-widest leading-relaxed border-t border-gray-200 pt-8 italic">
                      Specialized in large-format foam production and continuous vulcanization cycles.
                   </p>
                   <p className="mt-4 text-[10px] font-black text-[#1B4332] uppercase tracking-widest">Katunayake, Sri Lanka</p>
                </div>
                <div className="p-16 bg-gray-50 rounded-[3rem] border border-gray-100 hover-lift transition-all border-t-4 border-[#1B4332]">
                   <h4 className="text-[#40916C] font-black text-[11px] uppercase tracking-[0.4em] mb-8">Value Addition Facility</h4>
                   <p className="text-gray-800 font-black text-2xl mb-6 leading-tight uppercase">Lalan Eco-Latex <br />42, Old Avisawella Road</p>
                   <p className="text-gray-400 text-xs font-black uppercase tracking-widest leading-relaxed border-t border-gray-200 pt-8 italic">
                      Specialized in cutting, molding, cover assembly, and export-ready final packing.
                   </p>
                   <p className="mt-4 text-[10px] font-black text-[#1B4332] uppercase tracking-widest">Welivita, Sri Lanka</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Section 10: B2B CTA */}
      <section id="rfq-section" className="py-32 bg-white reveal">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-[#1B4332] rounded-[3rem] p-12 md:p-24 text-white text-center shadow-3xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-[#74C69D] opacity-20"></div>
             <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-tight uppercase leading-tight">Partner with a Certified <br />Natural Latex Manufacturer</h2>
             <p className="text-gray-300 text-lg font-light leading-relaxed mb-16 max-w-2xl mx-auto">
               Need specific production details or technical datasheets? Connect with our manufacturing team to discuss your enterprise requirements.
             </p>
             <div className="flex flex-wrap justify-center gap-8">
               <button className="bg-[#40916C] text-white px-10 py-5 rounded-lg font-black text-[11px] uppercase tracking-[0.3em] hover:bg-white hover:text-[#1B4332] transition-all hover-lift shadow-2xl">
                 Request Manufacturing Details
               </button>
               <button onClick={scrollToRFQ} className="bg-white/5 border border-white/20 text-white px-10 py-5 rounded-lg font-black text-[11px] uppercase tracking-[0.3em] hover:bg-white hover:text-[#1B4332] transition-all hover-lift backdrop-blur-md">
                 Request Enterprise Quote
               </button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manufacturing;
