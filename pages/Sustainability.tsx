
import React from 'react';

const Sustainability: React.FC = () => {
  const scrollToRFQ = () => {
    document.getElementById('rfq-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[550px] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80&w=1920" 
            alt="Natural Latex Plantation" 
            className="w-full h-full object-cover opacity-90 transition-transform duration-[10000ms] scale-105"
            style={{ transform: 'scale(1.05)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B4332]/95 via-[#1B4332]/60 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-3xl reveal">
            <span className="inline-block px-3 py-1 bg-[#40916C] text-[10px] font-black uppercase tracking-[0.3em] mb-6 rounded shadow-lg italic">Audit-Ready Framework</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1]">
              Sustainability Built <br />into Every Layer.
            </h1>
            <p className="text-xl text-gray-200 mb-10 font-medium tracking-wide max-w-2xl">
              From responsible sourcing to certified manufacturing — sustainability as a system, not a slogan.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Sustainability Philosophy */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center max-w-6xl mx-auto">
            <div className="reveal-left">
              <h4 className="text-[#40916C] font-bold text-[11px] tracking-[0.4em] uppercase mb-8">Core Foundation</h4>
              <h2 className="text-4xl font-black text-[#1B4332] mb-10 leading-tight">An Operational <br />Framework for Purity.</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                At Eco-Latex, sustainability is not a marketing overlay; it is the structural foundation of our B2B operations. We believe that true environmental responsibility begins at the source—the rubber tree—and must be maintained through every mechanical and chemical process in our facility.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed font-medium italic border-l-4 border-[#40916C] pl-8">
                "We provide our global partners with products that are not only high-performing but are also fully compliant with the most stringent global environmental audits."
              </p>
            </div>
            <div className="reveal-right">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] relative group">
                <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200" alt="Plantation" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[#1B4332]/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Responsible Sourcing */}
      <section className="py-32 bg-gray-50 reveal">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2 order-2 lg:order-1">
                 <div className="grid grid-cols-2 gap-6">
                    {[
                      { title: 'Renewable Harvest', desc: 'Sourced from managed rubber plantations with long-term crop rotation.', icon: '🌳' },
                      { title: 'Chemical-Free Raw', desc: 'Raw latex harvested without harmful preservatives or toxic stabilizers.', icon: '🧪' },
                      { title: 'Local Sourcing', desc: 'Minimized transport footprint through regional supply chain integration.', icon: '📍' },
                      { title: 'Ecosystem Balance', desc: 'Supporting agricultural practices that maintain soil health and biodiversity.', icon: '🌱' }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm group hover-lift transition-all">
                        <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                        <h4 className="text-[11px] font-black text-[#1B4332] uppercase tracking-widest mb-2">{item.title}</h4>
                        <p className="text-gray-400 text-[11px] font-medium leading-relaxed uppercase">{item.desc}</p>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2">
                 <h4 className="text-[#40916C] font-bold text-[11px] tracking-[0.4em] uppercase mb-8">Supply Chain Integrity</h4>
                 <h2 className="text-4xl font-black text-[#1B4332] mb-10 leading-tight">Responsible Raw <br />Material Sourcing.</h2>
                 <p className="text-gray-500 text-lg leading-relaxed font-medium">
                   Our vertical integration starts in the plantation. By working directly with certified growers, we ensure the raw latex arriving at our factory meets GOLS (Global Organic Latex Standard) requirements from day one.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Water Management */}
      <section className="py-32 bg-white overflow-hidden reveal">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center max-w-6xl mx-auto">
             <div className="reveal-left">
                <h4 className="text-[#40916C] font-bold text-[11px] tracking-[0.4em] uppercase mb-8">Operational Control</h4>
                <h2 className="text-4xl font-black text-[#1B4332] mb-10 leading-tight">Water Management <br />& Effluent Systems.</h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-10">
                  Latex processing is water-intensive. To mitigate this, we have implemented a closed-loop water treatment system that recycled up to 40% of production water and ensures all discharged water exceeds local environmental safety standards.
                </p>
                <div className="space-y-6">
                   {[
                     'Closed-Loop Recycling Systems',
                     'Biological Effluent Treatment Plants (ETP)',
                     'Constant pH and Purity Monitoring',
                     'Zero-Toxic Discharge Protocols'
                   ].map((item, idx) => (
                     <div key={idx} className="flex items-center gap-4 group">
                        <div className="w-6 h-px bg-[#40916C] group-hover:w-10 transition-all"></div>
                        <span className="text-xs font-black text-[#1B4332] uppercase tracking-widest">{item}</span>
                     </div>
                   ))}
                </div>
             </div>
             <div className="reveal-right bg-[#1B4332] p-16 rounded-[4rem] text-white flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 opacity-20 pointer-events-none">
                   <svg className="w-full h-full" viewBox="0 0 100 100">
                      <path d="M0,50 Q25,30 50,50 T100,50 V100 H0 Z" fill="currentColor" />
                   </svg>
                </div>
                <div className="w-24 h-24 rounded-full border-2 border-[#74C69D] flex items-center justify-center mb-8 relative z-10">
                   <span className="text-4xl">💧</span>
                </div>
                <h4 className="text-xl font-black mb-4 uppercase tracking-widest relative z-10 text-[#74C69D]">Resource Efficiency</h4>
                <p className="text-gray-300 text-sm font-light leading-relaxed max-w-xs relative z-10">
                  Measurable process control ensuring every liter of water used is accounted for and responsibly treated.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Section 4: Energy & Emissions */}
      <section className="py-32 bg-gray-50 reveal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-3xl font-black text-[#1B4332] uppercase tracking-widest mb-6">Energy & Emissions Management</h2>
            <p className="text-gray-400 font-medium text-sm max-w-2xl mx-auto uppercase tracking-widest">ESG-Focused Production Engineering</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
             {[
               { title: 'Biomass Boilers', desc: 'Utilizing carbon-neutral fuel sources for steam generation during vulcanization cycles.', icon: '🔥' },
               { title: 'RF Dryer Systems', desc: 'High-efficiency Radio Frequency drying reduces overall energy consumption per unit by 30%.', icon: '📡' },
               { title: 'Emission Filtration', desc: 'Advanced scrubber systems to ensure air exhaust meets ISO and local environmental standards.', icon: '🌬️' }
             ].map((item, idx) => (
               <div key={idx} className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100 hover-lift transition-all">
                  <div className="text-4xl mb-8">{item.icon}</div>
                  <h4 className="text-sm font-black text-[#1B4332] uppercase tracking-widest mb-4 pb-4 border-b border-gray-100">{item.title}</h4>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest leading-relaxed italic">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Section 5: Waste Reduction */}
      <section className="py-32 bg-white reveal">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-[#1B4332] rounded-[3rem] p-12 md:p-24 text-white overflow-hidden relative shadow-3xl">
             <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/4"></div>
             <div className="grid lg:grid-cols-2 gap-20 relative z-10">
                <div className="reveal-left">
                   <h2 className="text-4xl font-black mb-10 tracking-tight leading-tight uppercase">Waste Reduction & <br />Circular Practices.</h2>
                   <p className="text-gray-300 text-lg font-light leading-relaxed mb-12">
                     Waste in a latex facility is a resource in the wrong place. We operate a circular strategy that minimizes production off-cuts and maximizes the utility of every gram of natural latex.
                   </p>
                   <ul className="space-y-6">
                      {[
                        { t: 'Off-cut Upcycling', d: 'Production trimmings are repurposed for secondary industrial components.' },
                        { t: 'Packaging Optimization', d: 'Reduced use of single-use plastics through innovative bulk stacking.' },
                        { t: 'Zero-Waste Goal', d: 'Continuous auditing to reduce landfill contribution to absolute minimum.' }
                      ].map((item, i) => (
                        <li key={i} className="flex gap-6 group">
                           <span className="text-[#74C69D] font-black text-xl group-hover:scale-150 transition-transform">↺</span>
                           <div>
                              <h4 className="text-xs font-black uppercase tracking-widest text-white">{item.t}</h4>
                              <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mt-1">{item.d}</p>
                           </div>
                        </li>
                      ))}
                   </ul>
                </div>
                <div className="reveal-right flex items-center justify-center">
                   <div className="w-full aspect-square border-2 border-dashed border-white/20 rounded-3xl flex flex-col items-center justify-center group transition-colors hover:border-[#74C69D]/40 p-12 text-center">
                      <span className="text-6xl mb-8 group-hover:rotate-180 transition-transform duration-1000">♻️</span>
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#74C69D]">Circular Production Loop</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Section 6: Chemical-Free & Health-Safe */}
      <section className="py-32 bg-gray-50 reveal">
        <div className="container mx-auto px-6 text-center">
          <h4 className="text-[#40916C] font-bold text-[11px] tracking-[0.4em] uppercase mb-8">Human Safety Standards</h4>
          <h2 className="text-4xl font-black text-[#1B4332] mb-20 tracking-tight uppercase">Chemical-Free & Health-Safe Production</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
             {[
               { title: 'Zero Synthetics', d: 'Free from SBR and petroleum-based foams.', i: '🚫' },
               { title: 'Low VOC', d: 'Tested for minimal off-gassing and air purity.', i: '🌬️' },
               { title: 'Hypoallergenic', d: 'Naturally resistant to dust mites and bacteria.', i: '🛡️' },
               { title: 'Phthalate Free', d: 'No harmful plasticizers or softening agents.', i: '❌' }
             ].map((item, idx) => (
               <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm flex flex-col items-center border border-transparent hover:border-[#1B4332]/5 hover-lift transition-all">
                  <div className="text-3xl mb-6">{item.i}</div>
                  <h4 className="text-xs font-black text-[#1B4332] uppercase tracking-widest mb-4">{item.title}</h4>
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest leading-relaxed italic">{item.d}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Section 7: Certifications & Compliance */}
      <section className="py-24 bg-white border-y border-gray-100 reveal">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black text-[#1B4332] mb-16 uppercase tracking-widest">Audit-Ready Compliance & Standards</h2>
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
             <div className="text-xl font-black tracking-tighter">GOLS ORGANIC</div>
             <div className="text-xl font-black tracking-tighter">GOTS ORGANIC</div>
             <div className="text-xl font-black tracking-tighter">OEKO-TEX® 100</div>
             <div className="text-xl font-black tracking-tighter">ECO-INSTITUT</div>
             <div className="text-xl font-black tracking-tighter">LGA TESTED</div>
             <div className="text-xl font-black tracking-tighter">ISO 14001</div>
          </div>
        </div>
      </section>

      {/* Section 8: Responsible Packaging & Logistics */}
      <section className="py-32 bg-gray-50 reveal">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center max-w-6xl mx-auto">
            <div className="reveal-left order-2 lg:order-1">
               <div className="bg-white p-16 rounded-[3rem] shadow-xl border border-gray-100 flex flex-col items-center text-center">
                  <div className="text-6xl mb-10">📦</div>
                  <h4 className="text-xl font-black text-[#1B4332] mb-6 uppercase tracking-widest">Logistics Efficiency</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 font-medium">
                    Our vacuum-compression technology allows us to fit up to 3x more product into a single container compared to traditional packing.
                  </p>
                  <div className="w-full flex justify-between items-center py-6 border-y border-gray-100 text-[10px] font-black uppercase tracking-widest">
                     <span className="text-gray-400">Carbon Footprint / Unit</span>
                     <span className="text-[#40916C]">Optimized (-60%)</span>
                  </div>
               </div>
            </div>
            <div className="reveal-right order-1 lg:order-2">
              <h4 className="text-[#40916C] font-bold text-[11px] tracking-[0.4em] uppercase mb-8">Downstream Sustainability</h4>
              <h2 className="text-4xl font-black text-[#1B4332] mb-10 leading-tight uppercase">Responsible Packaging <br />& Logistics Efficiency.</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-10">
                Sustainability doesn't stop at the factory gate. We engineer our export packaging to maximize FCL (Full Container Load) utilization, drastically reducing the carbon footprint per delivered unit for our B2B partners.
              </p>
              <div className="grid grid-cols-2 gap-6">
                 {[
                   'Space-Optimized Cartons', 'Reduced Plastic Liners', 'Recyclable Kraft Wrapping', 'Strategic Palletization'
                 ].map((item, idx) => (
                   <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-[#40916C]/10 rounded flex items-center justify-center text-[#1B4332]">
                         <span className="text-[10px]">✓</span>
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#1B4332]">{item}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Commitment to Continuous Improvement */}
      <section className="py-32 bg-white reveal">
        <div className="container mx-auto px-6 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-[#1B4332] mb-10 tracking-tight uppercase">Commitment to Continuous Improvement</h2>
          <p className="text-gray-500 text-lg leading-relaxed font-medium mb-12">
            Sustainability is a journey of measurement and optimization. We are committed to regular third-party audits and ongoing technological investment to further reduce our resource intensity while maintaining the world-class quality our B2B partners expect.
          </p>
          <div className="w-20 h-1 bg-[#1B4332] mx-auto opacity-20"></div>
        </div>
      </section>

      {/* Section 10: B2B Trust CTA */}
      <section id="rfq-section" className="py-32 bg-white reveal">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-[#1B4332] rounded-[3rem] p-12 md:p-24 text-white text-center shadow-3xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-[#74C69D] opacity-20"></div>
             <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-tight uppercase">Sustainable Manufacturing <br />for Long-Term Partnerships</h2>
             <p className="text-gray-300 text-lg font-light leading-relaxed mb-16 max-w-2xl mx-auto">
               Align your brand with a manufacturer that prioritizes transparency, audit-readiness, and environmental integrity.
             </p>
             <div className="flex flex-wrap justify-center gap-8">
               <button className="bg-[#40916C] text-white px-10 py-5 rounded-lg font-black text-[11px] uppercase tracking-[0.3em] hover:bg-white hover:text-[#1B4332] transition-all hover-lift shadow-2xl">
                 Request Sustainability Documentation
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

export default Sustainability;
