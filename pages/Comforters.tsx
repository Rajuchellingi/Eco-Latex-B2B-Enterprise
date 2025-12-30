
import React, { useState } from 'react';

const Comforters: React.FC = () => {
  const [comforterType, setComforterType] = useState<'bamboo' | 'wool'>('bamboo');
  const [sizeTab, setSizeTab] = useState<'eu' | 'usa'>('eu');

  const scrollToRFQ = () => {
    document.getElementById('rfq-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const euSizes = [
    { type: 'Single', size: '140 x 200', weight: '800g - 1200g' },
    { type: 'Double', size: '200 x 220', weight: '1400g - 1800g' },
    { type: 'King', size: '240 x 220', weight: '1800g - 2200g' },
    { type: 'Super King', size: '260 x 240', weight: '2200g - 2600g' },
  ];

  const usaSizes = [
    { type: 'Twin', size: '68" x 86"', weight: '1.8 lbs - 2.5 lbs' },
    { type: 'Full/Queen', size: '90" x 92"', weight: '3.0 lbs - 3.8 lbs' },
    { type: 'King', size: '106" x 92"', weight: '4.0 lbs - 4.8 lbs' },
    { type: 'Cal King', size: '104" x 94"', weight: '4.0 lbs - 5.0 lbs' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[550px] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1920" 
            alt="Comforter Background" 
            className="w-full h-full object-cover opacity-90 transition-transform duration-[10000ms] scale-105"
            style={{ transform: 'scale(1.05)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B4332]/95 via-[#1B4332]/60 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-3xl reveal">
            <span className="inline-block px-3 py-1 bg-[#40916C] text-[10px] font-black uppercase tracking-[0.3em] mb-6 rounded shadow-lg">Sleep with Nature</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1]">
              Comforters Engineered for <br />All-Season Performance
            </h1>
            <p className="text-xl text-gray-200 mb-10 font-medium tracking-wide max-w-2xl">
              Natural fill options designed for hotels, wellness brands, and private-label bedding programs.
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

      {/* Section 1: Comforter Types Switcher */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2 reveal-left">
                <h4 className="text-[#40916C] font-bold text-[11px] tracking-[0.4em] uppercase mb-8">Fill Technology</h4>
                <h2 className="text-4xl font-black text-[#1B4332] mb-12 tracking-tight">Comforter Type Selector</h2>
                
                <div className="flex p-2 bg-gray-50 rounded-2xl border border-gray-100 mb-12 relative overflow-hidden">
                   <div 
                    className={`absolute top-2 left-2 bottom-2 w-[calc(50%-8px)] bg-[#1B4332] rounded-xl transition-transform duration-500 ease-in-out ${
                      comforterType === 'wool' ? 'translate-x-full' : 'translate-x-0'
                    }`}
                  ></div>
                  <button 
                    onClick={() => setComforterType('bamboo')}
                    className={`flex-1 py-5 text-[10px] font-black uppercase tracking-[0.3em] relative z-10 transition-colors ${
                      comforterType === 'bamboo' ? 'text-white' : 'text-gray-400'
                    }`}
                  >
                    Bamboo Fill
                  </button>
                  <button 
                    onClick={() => setComforterType('wool')}
                    className={`flex-1 py-5 text-[10px] font-black uppercase tracking-[0.3em] relative z-10 transition-colors ${
                      comforterType === 'wool' ? 'text-white' : 'text-gray-400'
                    }`}
                  >
                    Wool Fill
                  </button>
                </div>

                <div className="space-y-8 animate-reveal" key={comforterType}>
                   {[
                     { label: 'Thermal Control', desc: comforterType === 'bamboo' ? 'Excellent for hot sleepers with moisture-wicking properties.' : 'Natural insulation for cold climates with temperature adaptation.' },
                     { label: 'Breathability', desc: 'Allows consistent air circulation through fiber matrix.' },
                     { label: 'Eco Sourcing', desc: comforterType === 'bamboo' ? 'Sustainable Bamboo Lyocell fibers.' : 'Certified ethically sourced natural wool.' },
                     { label: 'Softness & Feel', desc: comforterType === 'bamboo' ? 'Silky, drape-like feel for a luxurious sleep surface.' : 'Soft, bouncy loft with traditional insulation feel.' }
                   ].map((item, idx) => (
                     <div key={idx} className="flex gap-6 group cursor-default">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#40916C] mt-2 group-hover:scale-150 transition-transform"></div>
                        <div>
                           <h4 className="text-[11px] font-black text-[#1B4332] uppercase tracking-widest mb-1">{item.label}</h4>
                           <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
              </div>

              <div className="lg:w-1/2 reveal-right">
                <div className="relative group rounded-[3rem] overflow-hidden shadow-2xl">
                  <img 
                    src={comforterType === 'bamboo' ? "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=800" : "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=800"} 
                    alt="Fabric Detail" 
                    className="w-full h-full object-cover transition-transform duration-[10000ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#1B4332]/10"></div>
                  <div className="absolute bottom-10 left-10 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-white/20 max-w-[280px]">
                    <span className="block text-[9px] font-black text-[#40916C] uppercase tracking-widest mb-2">Technical Detail</span>
                    <p className="text-[#1B4332] font-bold text-xs leading-relaxed uppercase tracking-wider">
                      {comforterType === 'bamboo' ? 'Lyocell fiber matrix for instant cooling and moisture wicking.' : 'Crimped wool fibers create natural air pockets for insulation.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Performance & Feel */}
      <section className="py-32 bg-gray-50 reveal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-[#1B4332] mb-6 tracking-tight">Performance Matrix</h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">B2B comparative analysis for hospitality and retail specification desks.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
             {[
               { title: 'Warmth Balance', icon: '🌡️', bamboo: 'Light to Medium', wool: 'Medium to Heavy' },
               { title: 'Breathability', icon: '💨', bamboo: 'Extreme', wool: 'High' },
               { title: 'Sustainability', icon: '🌱', bamboo: 'Rapidly Renewable', wool: 'Biodegradable Fill' },
               { title: 'Hand-Feel', icon: '✨', bamboo: 'Silky/Cool', wool: 'Fluffy/Loft' }
             ].map((item, idx) => (
               <div key={idx} className="bg-white p-10 rounded-[2rem] shadow-sm border border-transparent hover:border-[#40916C]/20 hover-lift transition-all group">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                  <h4 className="text-sm font-black text-[#1B4332] uppercase tracking-widest mb-6">{item.title}</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                       <span className="text-gray-400">Bamboo</span>
                       <span className="text-[#1B4332]">{item.bamboo}</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                       <span className="text-gray-400">Wool</span>
                       <span className="text-[#1B4332]">{item.wool}</span>
                    </div>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Section 3: GSM / TOG Options */}
      <section className="py-32 bg-white reveal">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-[#1B4332] mb-12 text-center uppercase tracking-tight">Warmth Specification Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: 'Lightweight', gsm: '150 - 200 GSM', bestFor: 'Tropical Regions / Summer Use', icon: '☀️' },
                { label: 'Medium Weight', gsm: '300 - 350 GSM', bestFor: 'Temperate Regions / All-Season', icon: '🌤️' },
                { label: 'Extra Warm', gsm: '450 - 500 GSM', bestFor: 'Cold Regions / Winter Selection', icon: '❄️' }
              ].map((opt, idx) => (
                <div key={idx} className="p-10 bg-gray-50 rounded-2xl border border-gray-100 relative group cursor-pointer hover:bg-[#1B4332] transition-colors overflow-hidden">
                   <div className="absolute top-4 right-4 text-2xl group-hover:opacity-20 transition-opacity">{opt.icon}</div>
                   <h4 className="text-lg font-black text-[#1B4332] group-hover:text-white mb-2 uppercase tracking-tight">{opt.label}</h4>
                   <p className="text-[10px] font-black text-[#40916C] group-hover:text-[#74C69D] uppercase tracking-widest mb-6">{opt.gsm}</p>
                   <p className="text-xs text-gray-500 group-hover:text-gray-300 font-medium italic">{opt.bestFor}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Construction & Diagrams */}
      <section className="py-32 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center max-w-6xl mx-auto">
            <div className="reveal-left">
              <h2 className="text-4xl font-black text-[#1B4332] mb-10 tracking-tight">Construction Architecture</h2>
              <div className="space-y-10">
                {[
                  { title: 'Baffle Box Quilting', desc: 'Even distribution prevents fill migration and cold spots.' },
                  { title: 'Double Edge Binding', desc: 'Durable perimeter stitching designed for hotel wash cycles.' },
                  { title: 'Natural Outer Fabric', desc: 'Certified breathable cotton or bamboo shell options.' },
                  { title: 'Corner Security Loops', desc: 'Standard integrated loops for duvet cover synchronization.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-8 group">
                    <span className="text-2xl font-black text-gray-200 group-hover:text-[#40916C] transition-colors">0{idx+1}</span>
                    <div>
                      <h4 className="text-sm font-black text-[#1B4332] uppercase tracking-widest mb-2">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-right">
              <div className="bg-[#1B4332] p-12 md:p-20 rounded-[3rem] relative overflow-hidden flex items-center justify-center">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
                 {/* Visual placeholder for Baffle Box Diagram */}
                 <div className="relative z-10 w-full aspect-square border-2 border-dashed border-white/20 rounded-2xl flex items-center justify-center group">
                    <div className="grid grid-cols-3 grid-rows-3 gap-2 w-48 h-48 group-hover:scale-110 transition-transform duration-500">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className="bg-white/10 rounded border border-white/10"></div>
                      ))}
                    </div>
                    <span className="absolute bottom-6 text-[9px] font-black text-[#74C69D] uppercase tracking-[0.4em]">Baffle Box Configuration</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Standard Sizes */}
      <section className="py-32 bg-white reveal">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
              <div>
                <h2 className="text-3xl font-black text-[#1B4332] uppercase tracking-tight mb-2">Export Sizing Standards</h2>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Hospitality & Retail Dimensions</p>
              </div>
              <div className="flex bg-gray-50 p-1 rounded-xl shadow-sm border border-gray-100">
                <button 
                  onClick={() => setSizeTab('eu')}
                  className={`px-8 py-3 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${sizeTab === 'eu' ? 'bg-[#1B4332] text-white shadow-lg' : 'text-gray-400 hover:text-[#1B4332]'}`}
                >
                  EU Standards (cm)
                </button>
                <button 
                  onClick={() => setSizeTab('usa')}
                  className={`px-8 py-3 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${sizeTab === 'usa' ? 'bg-[#1B4332] text-white shadow-lg' : 'text-gray-400 hover:text-[#1B4332]'}`}
                >
                  USA Standards (in)
                </button>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden" key={sizeTab}>
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="p-8 text-[10px] font-black text-gray-400 uppercase tracking-widest sticky left-0 bg-gray-50">Market Size</th>
                    <th className="p-8 text-[10px] font-black text-gray-400 uppercase tracking-widest">Dimensions</th>
                    <th className="p-8 text-[10px] font-black text-gray-400 uppercase tracking-widest">Fill Weight Range</th>
                  </tr>
                </thead>
                <tbody className="text-xs font-bold text-[#1B4332] uppercase tracking-wider animate-reveal">
                  {(sizeTab === 'eu' ? euSizes : usaSizes).map((row, idx) => (
                    <tr key={idx} className="border-b border-gray-50 last:border-0 hover:bg-[#1B4332]/5 transition-colors group">
                      <td className="p-8 font-black sticky left-0 bg-white group-hover:bg-[#1B4332]/5">{row.type}</td>
                      <td className="p-8 text-gray-500">{row.size}</td>
                      <td className="p-8 text-gray-500">{row.weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Care & Maintenance */}
      <section className="py-32 bg-gray-50 reveal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-black text-[#1B4332] uppercase tracking-widest mb-4">Care & Maintenance</h2>
            <p className="text-gray-400 font-medium text-sm">Industrial protocol for longevity.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="p-12 rounded-[2.5rem] bg-white shadow-sm border border-gray-100 group hover-lift transition-all">
               <h4 className="text-sm font-black text-[#1B4332] uppercase tracking-widest mb-8 flex items-center gap-4">
                 <span className="text-2xl">🎋</span> Bamboo Care
               </h4>
               <ul className="space-y-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
                 <li className="flex gap-4"><span>—</span> Cold gentle machine wash</li>
                 <li className="flex gap-4"><span>—</span> Low tumble dry or line dry</li>
                 <li className="flex gap-4"><span>—</span> Shake to restore loft</li>
                 <li className="flex gap-4"><span>—</span> No bleach or harsh agents</li>
               </ul>
            </div>
            <div className="p-12 rounded-[2.5rem] bg-white shadow-sm border border-gray-100 group hover-lift transition-all border-t-4 border-[#1B4332]">
               <h4 className="text-sm font-black text-[#1B4332] uppercase tracking-widest mb-8 flex items-center gap-4">
                 <span className="text-2xl">🐑</span> Wool Care
               </h4>
               <ul className="space-y-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
                 <li className="flex gap-4"><span>—</span> Professional clean recommended</li>
                 <li className="flex gap-4"><span>—</span> Occasional airing in shade</li>
                 <li className="flex gap-4"><span>—</span> Spot clean with wool detergent</li>
                 <li className="flex gap-4"><span>—</span> Avoid high heat agitation</li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Packaging & Private Label */}
      <section className="py-32 bg-white reveal">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center max-w-6xl mx-auto">
            <div className="reveal-left">
              <h2 className="text-4xl font-black text-[#1B4332] mb-10 tracking-tight">Private Label & <br />Export Logisitics</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-12">
                We provide a turnkey OEM solution from custom quilting patterns to final export packaging.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  'Custom Sewn Labels', 'Branded Fabric Inserts', 
                  'UPC / Barcode Ready', 'Master Carton Branding', 
                  'Custom Quilting Patterns', 'Size Specific Stickers'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    <div className="w-5 h-5 bg-[#40916C]/10 rounded flex items-center justify-center text-[#1B4332] group-hover:bg-[#1B4332] group-hover:text-white transition-colors">
                       <span className="text-[10px]">✓</span>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#1B4332]">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-12 text-[10px] font-black uppercase tracking-widest text-gray-400">Packaging customized per customer requirement</p>
            </div>
            <div className="reveal-right bg-gray-50 p-16 rounded-[3rem] border border-gray-100 flex flex-col items-center text-center">
               <div className="text-6xl mb-10">📦</div>
               <h4 className="text-xl font-black text-[#1B4332] mb-6 uppercase tracking-widest">Container Optimization</h4>
               <p className="text-gray-500 text-sm leading-relaxed mb-8 font-medium">
                 Our vacuum-rolled or flat-stacked palletizing options are engineered to maximize FCL/LCL space for international shipping efficiency.
               </p>
               <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-[#40916C] animate-pulse"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Quality & Certifications */}
      <section className="py-24 bg-gray-50 border-y border-gray-100 reveal">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black text-[#1B4332] mb-16 uppercase tracking-widest">Quality, Safety & Sustainability Assured</h2>
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
             <div className="text-xl font-black tracking-tighter">GOTS ORGANIC</div>
             <div className="text-xl font-black tracking-tighter">OEKO-TEX® 100</div>
             <div className="text-xl font-black tracking-tighter">ECO-INSTITUT</div>
             <div className="text-xl font-black tracking-tighter">ISPA MEMBER</div>
             <div className="text-xl font-black tracking-tighter">ISO 9001:2015</div>
          </div>
        </div>
      </section>

      {/* Section 9: B2B RFQ */}
      <section id="rfq-section" className="py-32 bg-white reveal">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row shadow-3xl rounded-[3rem] overflow-hidden border border-gray-50">
            <div className="lg:w-1/3 bg-[#1B4332] p-16 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-black mb-8 leading-tight tracking-tight">Request Specifications / Bulk Quote</h2>
                <p className="text-gray-300 font-light mb-12">Submit your project requirements. A dedicated B2B team will respond within business hours.</p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl group-hover:bg-[#74C69D] group-hover:text-[#1B4332] transition-all">📋</span>
                    <span className="text-[10px] font-black uppercase tracking-widest">Technical Data Sheets</span>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl group-hover:bg-[#74C69D] group-hover:text-[#1B4332] transition-all">🏭</span>
                    <span className="text-[10px] font-black uppercase tracking-widest">Factory Direct Pricing</span>
                  </div>
                </div>
              </div>
              <div className="pt-12 border-t border-white/10 mt-12 text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
                Lalan Eco-Latex Exports
              </div>
            </div>
            <div className="lg:w-2/3 bg-white p-12 md:p-20">
               <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => { e.preventDefault(); alert('Inquiry sent. Our export desk will contact you shortly.'); }}>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Company Name</label>
                    <input type="text" required className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#1B4332] outline-none transition-all font-medium text-sm" placeholder="e.g. Nordic Sleep Retail" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input type="email" required className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#1B4332] outline-none transition-all font-medium text-sm" placeholder="business@company.com" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Comforter Type</label>
                    <select className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#1B4332] outline-none transition-all font-medium text-sm appearance-none uppercase tracking-widest">
                       <option>Bamboo Fill</option>
                       <option>Wool Fill</option>
                       <option>Hybrid Selection</option>
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Warmth Level</label>
                    <select className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#1B4332] outline-none transition-all font-medium text-sm appearance-none uppercase tracking-widest">
                       <option>Lightweight (150-200 GSM)</option>
                       <option>Medium (300-350 GSM)</option>
                       <option>Extra Warm (450-500 GSM)</option>
                    </select>
                 </div>
                 <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Required Sizes & Est. Volume</label>
                    <textarea rows={5} required className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#1B4332] outline-none transition-all font-medium text-sm" placeholder="Describe size breakdown and monthly/yearly volume expectations..."></textarea>
                 </div>
                 <div className="md:col-span-2 flex flex-col md:flex-row justify-between items-center gap-8">
                    <label className="flex items-center gap-3 cursor-pointer group">
                       <input type="checkbox" required className="w-5 h-5 rounded border-gray-300 text-[#1B4332] focus:ring-[#1B4332]" />
                       <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest group-hover:text-[#1B4332] transition-colors">Accept Trade Terms</span>
                    </label>
                    <button type="submit" className="bg-[#1B4332] text-white px-12 py-5 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#2D5A27] transition-all hover-lift press-scale shadow-xl w-full md:w-auto">
                       Submit RFQ
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

export default Comforters;
