
import React, { useState } from 'react';

const MattressProtectors: React.FC = () => {
  const [constructionTab, setConstructionTab] = useState<'premium' | 'starter'>('premium');

  const scrollToRFQ = () => {
    document.getElementById('rfq-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const euSizes = [
    { size: 'Single', mattress: '90 x 200', pillow: '50 x 70' },
    { size: 'Double', mattress: '140 x 200', pillow: '50 x 70 (2)' },
    { size: 'King', mattress: '160 x 200', pillow: '50 x 70 (2)' },
    { size: 'Super King', mattress: '180 x 200', pillow: '50 x 70 (2)' },
  ];

  const usaSizes = [
    { size: 'Twin', mattress: '39" x 75"', pillow: '20" x 26"' },
    { size: 'Full', mattress: '54" x 75"', pillow: '20" x 26" (2)' },
    { size: 'Queen', mattress: '60" x 80"', pillow: '20" x 30" (2)' },
    { size: 'King', mattress: '76" x 80"', pillow: '20" x 36" (2)' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[550px] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1920" 
            alt="Mattress Protector" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B4332] via-[#1B4332]/70 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-3xl reveal">
            <span className="inline-block px-3 py-1 bg-[#40916C] text-[10px] font-black uppercase tracking-[0.3em] mb-6 rounded">Sleep with Nature</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1] uppercase">
              LATEX / <br /> Mattress Protector
            </h1>
            <p className="text-xl text-gray-200 mb-10 font-medium tracking-wide">
              Spill-proof, breathable protection for private label bedding programs and hospitality supply.
            </p>
            <div className="flex flex-wrap gap-5">
              <button onClick={scrollToRFQ} className="bg-[#40916C] hover:bg-white hover:text-[#1B4332] text-white px-10 py-5 rounded font-black text-xs uppercase tracking-widest transition-all shadow-xl hover-lift press-scale">
                Request Bulk Quote
              </button>
              <button className="bg-white/10 border border-white/20 text-white px-10 py-5 rounded font-black text-xs uppercase tracking-widest transition-all hover:bg-white hover:text-[#1B4332] hover-lift press-scale backdrop-blur-sm">
                Download Catalog
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Core Product */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="reveal-left">
              <h4 className="text-[#40916C] font-bold text-[11px] tracking-[0.4em] uppercase mb-8">Performance Barrier</h4>
              <h2 className="text-4xl font-black text-[#1B4332] mb-10 leading-tight">Mattress Protector <br />System Core.</h2>
              <div className="space-y-8">
                {[
                  { title: 'Waterproof Barrier', desc: 'Advanced TPU membrane blocks liquid while maintaining airflow.', icon: '💧' },
                  { title: 'Allergy Relief', desc: 'Scientific barrier against dust mites, allergens, and bacteria.', icon: '🛡️' },
                  { title: 'Easy Care', desc: 'Machine washable design for simplified hospitality maintenance.', icon: '🧺' },
                  { title: 'Silent Comfort', desc: 'Specialized lamination prevents crinkly noises during motion.', icon: '🤫' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group hover:translate-x-2 transition-transform duration-300 cursor-default">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-2xl group-hover:bg-[#1B4332] group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-[#1B4332] text-sm uppercase tracking-widest mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-right">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative group">
                <img src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=1200" alt="Protector Detail" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[#1B4332]/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Mattress Encasement */}
      <section className="py-32 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-[#1B4332] rounded-[3rem] p-12 md:p-24 text-white overflow-hidden relative reveal">
            <div className="absolute top-10 right-10">
               <span className="px-4 py-2 bg-[#74C69D] text-[#1B4332] text-[10px] font-black uppercase tracking-widest rounded-full animate-pulse shadow-xl">Upgrade Option</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-20 relative z-10">
              <div className="reveal-left">
                <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-tight">Mattress <br />Encasement.</h2>
                <p className="text-gray-300 text-lg font-light leading-relaxed mb-12">
                  A full-envelopment system that completely envelops the mattress. Engineered for maximum defense against dust mites and bed bugs in high-traffic environments.
                </p>
                <div className="grid grid-cols-2 gap-8">
                   {[
                     { title: 'Total Protection', icon: '🔒' },
                     { title: 'Bed Bug Prevention', icon: '🐜' },
                     { title: 'Hypoallergenic', icon: '🛡️' },
                     { title: 'Durable Design', icon: '🏗️' }
                   ].map((f, idx) => (
                     <div key={idx} className="flex items-center gap-4">
                        <span className="text-2xl">{f.icon}</span>
                        <span className="text-[10px] font-black uppercase tracking-widest">{f.title}</span>
                     </div>
                   ))}
                </div>
              </div>
              <div className="reveal-right flex items-center justify-center">
                <div className="w-full h-full rounded-2xl border-2 border-dashed border-white/20 p-10 flex flex-col items-center justify-center text-center group">
                  <div className="w-32 h-40 border-2 border-white/40 rounded-lg relative overflow-hidden mb-6 group-hover:border-[#74C69D] transition-colors">
                     <div className="absolute inset-0 bg-white/5 group-hover:bg-[#74C69D]/10 transition-colors"></div>
                     <div className="absolute top-2 left-2 right-2 h-1 bg-white/20"></div>
                     <div className="absolute bottom-2 left-2 right-2 h-1 bg-white/20"></div>
                     {/* Animated Zipper */}
                     <div className="absolute top-0 right-1 w-0.5 h-full bg-white/40 group-hover:bg-[#74C69D] transition-all"></div>
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#74C69D]">Fully Sealed Perimeter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Quilted Mattress Pad with Wool */}
      <section className="py-32 bg-white reveal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h4 className="text-[#40916C] font-bold text-[11px] tracking-[0.4em] uppercase mb-4">Sleep Essentials Collection</h4>
            <h2 className="text-4xl font-black text-[#1B4332] tracking-tight">Quilted Mattress Pad with Wool</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
            <div className="reveal-left order-2 lg:order-1">
              <div className="bg-gray-50 p-12 rounded-[2.5rem] border border-gray-100 flex flex-col gap-10">
                {[
                  { title: 'Natural Regulation', desc: 'Wool fibers naturally regulate sleeping temperature across seasons.' },
                  { title: 'Insulation Layer', desc: 'Provides a soft comfort layer that adds breathable loft to any mattress.' },
                  { title: 'Durable Quality', desc: 'Engineered for longevity and consistent performance under daily use.' },
                  { title: 'Eco-Friendly', desc: 'Utilizes sustainable materials for a responsible sleep environment.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-6">
                    <span className="text-[#40916C] font-black">★</span>
                    <div>
                      <h4 className="font-black text-[#1B4332] text-xs uppercase tracking-widest mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-right order-1 lg:order-2">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-xl group">
                <img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=1200" alt="Wool Pad Detail" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Construction Options */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-black text-[#1B4332] mb-6 tracking-tight">Material Specification Modules</h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">Choose between our organic GOTS-certified premium model or our durable Oeko-Tex starter model.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-16 p-2 bg-white rounded-2xl shadow-sm border border-gray-100 reveal relative">
              <div 
                className={`absolute top-2 left-2 bottom-2 w-[calc(50%-8px)] bg-[#1B4332] rounded-xl transition-transform duration-500 ease-in-out ${
                  constructionTab === 'starter' ? 'translate-x-full' : 'translate-x-0'
                }`}
              ></div>
              <button 
                onClick={() => setConstructionTab('premium')}
                className={`flex-1 py-4 text-[10px] font-black uppercase tracking-[0.2em] relative z-10 transition-colors ${
                  constructionTab === 'premium' ? 'text-white' : 'text-gray-400'
                }`}
              >
                Premium Organic Cotton
              </button>
              <button 
                onClick={() => setConstructionTab('starter')}
                className={`flex-1 py-4 text-[10px] font-black uppercase tracking-[0.2em] relative z-10 transition-colors ${
                  constructionTab === 'starter' ? 'text-white' : 'text-gray-400'
                }`}
              >
                Starter Polyester
              </button>
            </div>

            <div key={constructionTab} className="animate-reveal">
              <div className="bg-white p-12 md:p-20 rounded-[3rem] shadow-xl border border-gray-100 grid md:grid-cols-2 gap-16 items-center">
                <div>
                   <h3 className="text-3xl font-black text-[#1B4332] mb-8 uppercase tracking-tight">
                     {constructionTab === 'premium' ? 'The Organic Choice' : 'The Value Choice'}
                   </h3>
                   <p className="text-gray-600 font-medium leading-relaxed mb-10">
                     {constructionTab === 'premium' 
                       ? 'Waterproof TPU membrane sandwiched between GOTS certified organic cotton single jersey (Top: 140 gsm / Bottom: 120 gsm).' 
                       : 'Oeko-Tex 100 certified polyester fabric laminated with advanced waterproof TPU membrane.'}
                   </p>
                   <ul className="space-y-4">
                     {(constructionTab === 'premium' 
                       ? ['Eco-friendly material source', 'Maximum softness & breathability', 'Reliable protection with air circulation', 'GOTS Certified Chain of Custody'] 
                       : ['Affordable bulk protection', 'Heavy-duty durable design', 'Total waterproof barrier', 'Oeko-Tex Standard 100 verified']
                     ).map((b, idx) => (
                       <li key={idx} className="flex items-center gap-4 group">
                          <span className="w-1.5 h-1.5 bg-[#40916C] rounded-full group-hover:scale-150 transition-transform"></span>
                          <span className="text-xs font-black text-[#1B4332] uppercase tracking-widest">{b}</span>
                       </li>
                     ))}
                   </ul>
                </div>
                <div className="bg-gray-50 rounded-2xl aspect-square flex items-center justify-center p-10 overflow-hidden relative">
                   <div className="absolute inset-0 bg-[#1B4332]/5"></div>
                   <div className="relative z-10 text-center">
                      <div className="text-6xl mb-6">🧵</div>
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1B4332]">Cross-Section Specs</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Standard Sizes Tables */}
      <section className="py-32 bg-white reveal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-black text-[#1B4332] uppercase tracking-widest mb-4">Export Standard Sizing</h2>
            <p className="text-gray-500 font-medium tracking-wide uppercase text-[10px]">Configured for international markets</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* EU Table */}
            <div className="space-y-8">
              <h4 className="text-[#1B4332] font-black text-sm uppercase tracking-widest border-b-2 border-[#1B4332]/10 pb-4">Europe Standards (cm)</h4>
              <div className="overflow-x-auto rounded-xl border border-gray-100">
                <table className="w-full text-left">
                  <thead className="bg-gray-50">
                    <tr className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                      <th className="p-6 sticky left-0 bg-gray-50">Size</th>
                      <th className="p-6">Mattress</th>
                      <th className="p-6">Pillowcase</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs font-bold text-[#1B4332] uppercase tracking-wider">
                    {euSizes.map((row, idx) => (
                      <tr key={idx} className="border-t border-gray-50 hover:bg-[#1B4332]/5 transition-colors">
                        <td className="p-6 font-black sticky left-0 bg-white group-hover:bg-[#1B4332]/5">{row.size}</td>
                        <td className="p-6 text-gray-500">{row.mattress}</td>
                        <td className="p-6 text-gray-500">{row.pillow}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* USA Table */}
            <div className="space-y-8">
              <h4 className="text-[#1B4332] font-black text-sm uppercase tracking-widest border-b-2 border-[#1B4332]/10 pb-4">USA Standards (inches)</h4>
              <div className="overflow-x-auto rounded-xl border border-gray-100">
                <table className="w-full text-left">
                  <thead className="bg-gray-50">
                    <tr className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                      <th className="p-6 sticky left-0 bg-gray-50">Size</th>
                      <th className="p-6">Mattress</th>
                      <th className="p-6">Pillowcase</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs font-bold text-[#1B4332] uppercase tracking-wider">
                    {usaSizes.map((row, idx) => (
                      <tr key={idx} className="border-t border-gray-50 hover:bg-[#1B4332]/5 transition-colors">
                        <td className="p-6 font-black sticky left-0 bg-white">{row.size}</td>
                        <td className="p-6 text-gray-500">{row.mattress}</td>
                        <td className="p-6 text-gray-500">{row.pillow}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Upgrade Option & Care */}
      <section className="py-32 bg-gray-50 reveal">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h3 className="text-2xl font-black text-[#1B4332] mb-6 uppercase tracking-widest">Encasement Upgrade & Care Protocols</h3>
            <p className="text-gray-500 font-medium italic">Fully sealed mattress encasements are available for an additional fee, providing absolute defense against bed bugs and allergens.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <div className="bg-white p-12 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all hover-lift group">
               <div className="flex items-center gap-4 mb-8">
                  <span className="text-3xl">🐑</span>
                  <h4 className="text-sm font-black text-[#1B4332] uppercase tracking-widest">Mattress Pad Care</h4>
               </div>
               <ul className="space-y-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
                  <li className="flex gap-4"><span>—</span> Spot clean only</li>
                  <li className="flex gap-4"><span>—</span> Mild wool-safe detergent</li>
                  <li className="flex gap-4"><span>—</span> Rinse with damp cloth</li>
                  <li className="flex gap-4"><span>—</span> Air dry; do not wash</li>
               </ul>
            </div>
            <div className="bg-white p-12 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all hover-lift group border-t-4 border-[#1B4332]">
               <div className="flex items-center gap-4 mb-8">
                  <span className="text-3xl">🧼</span>
                  <h4 className="text-sm font-black text-[#1B4332] uppercase tracking-widest">Protector Care</h4>
               </div>
               <ul className="space-y-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
                  <li className="flex gap-4"><span>—</span> Machine washable</li>
                  <li className="flex gap-4"><span>—</span> Hassle-free maintenance</li>
                  <li className="flex gap-4"><span>—</span> Tumble dry low</li>
                  <li className="flex gap-4"><span>—</span> Permanent press cycle</li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Packaging & Master Carton */}
      <section className="py-32 bg-white reveal">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
            <div className="reveal-left">
              <h2 className="text-4xl font-black text-[#1B4332] mb-10 tracking-tight">Export Packaging <br />Standards.</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-12">
                Our packaging is engineered for global distributors. We provide sturdy, space-optimized master cartons that protect product integrity during long-haul transit.
              </p>
              <div className="grid grid-cols-2 gap-10">
                {[
                  { title: 'Corrugated Box', icon: '📦' },
                  { title: 'Carton Stiffener', icon: '📐' },
                  { title: 'One-Color Print', icon: '🎨' },
                  { title: 'Folded Design', icon: '📐' },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-start group">
                    <span className="text-4xl mb-4 group-hover:-translate-y-2 transition-transform duration-300">{item.icon}</span>
                    <span className="text-[10px] font-black text-[#1B4332] uppercase tracking-widest">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-right">
              <div className="bg-gray-50 p-12 md:p-16 rounded-[3rem] border border-gray-100">
                 <h4 className="font-black text-[#1B4332] text-xs uppercase tracking-widest mb-8 pb-4 border-b border-gray-200">Master Carton Specs</h4>
                 <div className="space-y-8">
                   <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest">
                      <span className="text-gray-400">Protector Capacity</span>
                      <span className="text-[#1B4332]">6 Pieces / Carton</span>
                   </div>
                   <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest">
                      <span className="text-gray-400">Wool Pad Capacity</span>
                      <span className="text-[#1B4332]">3 Pieces / Carton</span>
                   </div>
                   <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest">
                      <span className="text-gray-400">Customization</span>
                      <span className="text-[#40916C]">Branding / Sizing Available</span>
                   </div>
                 </div>
                 <div className="mt-10 p-6 bg-white rounded-2xl border border-gray-100 text-center">
                    <p className="text-[10px] font-medium text-gray-500 uppercase tracking-widest leading-relaxed">
                       Can be customized as per customer requirement for brand identity and retail shelf display.
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Quality / Safety Certificates */}
      <section className="py-24 bg-gray-50 border-y border-gray-100 reveal">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black text-[#1B4332] mb-16 uppercase tracking-widest">Quality, safety, and sustainability assured through</h2>
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
             <div className="text-xl font-black tracking-tighter">GOTS ORGANIC</div>
             <div className="text-xl font-black tracking-tighter">OEKO-TEX® 100</div>
             <div className="text-xl font-black tracking-tighter">LGA TESTED</div>
             <div className="text-xl font-black tracking-tighter">ISPA MEMBER</div>
             <div className="text-xl font-black tracking-tighter">ECO-INSTITUT</div>
          </div>
        </div>
      </section>

      {/* Section 9: RFQ Block */}
      <section id="rfq-section" className="py-32 bg-white reveal">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row shadow-3xl rounded-[3rem] overflow-hidden">
            <div className="lg:w-1/3 bg-[#1B4332] p-16 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-black mb-8 leading-tight tracking-tight">Request Specifications / Bulk Quote</h2>
                <p className="text-gray-300 font-light mb-12">Submit your project requirements for private-label protectors and encasement solutions.</p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl group-hover:bg-[#74C69D] group-hover:text-[#1B4332] transition-all">🕒</span>
                    <span className="text-[10px] font-black uppercase tracking-widest">Dedicated B2B team response</span>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl group-hover:bg-[#74C69D] group-hover:text-[#1B4332] transition-all">🧪</span>
                    <span className="text-[10px] font-black uppercase tracking-widest">Custom material samples</span>
                  </div>
                </div>
              </div>
              <div className="pt-12 border-t border-white/10 mt-12">
                 <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Manufacturing HQ</p>
                 <p className="text-sm font-medium mt-2">KEPZ, Katunayake, Sri Lanka</p>
              </div>
            </div>
            <div className="lg:w-2/3 bg-white p-12 md:p-20">
               <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => { e.preventDefault(); alert('Request sent. Our B2B team will contact you shortly.'); }}>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Company Name</label>
                    <input type="text" required className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332] outline-none transition-all font-medium text-sm" placeholder="e.g. Bedding Global Ltd." />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input type="email" required className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332] outline-none transition-all font-medium text-sm" placeholder="business@company.com" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Product Category</label>
                    <select className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#1B4332] outline-none transition-all font-medium text-sm appearance-none uppercase tracking-widest">
                       <option>Mattress Protector</option>
                       <option>Mattress Encasement</option>
                       <option>Wool Quilted Pad</option>
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Model Choice</label>
                    <select className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#1B4332] outline-none transition-all font-medium text-sm appearance-none uppercase tracking-widest">
                       <option>Premium (Organic Cotton)</option>
                       <option>Starter (Polyester)</option>
                    </select>
                 </div>
                 <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Volume & Requirements</label>
                    <textarea rows={5} required className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332] outline-none transition-all font-medium text-sm" placeholder="Quantity, sizing distribution, private label needs..."></textarea>
                 </div>
                 <div className="md:col-span-2 flex flex-col md:flex-row justify-between items-center gap-8">
                    <label className="flex items-center gap-3 cursor-pointer group">
                       <input type="checkbox" required className="w-5 h-5 rounded border-gray-300 text-[#1B4332] focus:ring-[#1B4332]" />
                       <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest group-hover:text-[#1B4332] transition-colors">I accept export terms</span>
                    </label>
                    <button type="submit" className="bg-[#1B4332] text-white px-12 py-5 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#2D5A27] transition-all hover-lift press-scale shadow-xl w-full md:w-auto">
                       Send RFQ
                    </button>
                 </div>
               </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MattressProtectors;
