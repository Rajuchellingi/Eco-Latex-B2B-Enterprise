
import React, { useState } from 'react';

const YogaMats: React.FC = () => {
  const [activeApp, setActiveApp] = useState<number>(0);

  const scrollToRFQ = () => {
    document.getElementById('rfq-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const applications = [
    {
      label: 'Studio & Instructor',
      title: 'High-Performance Studio Readiness',
      desc: 'Designed for high-frequency use in professional yoga environments. Superior durability and natural antimicrobial properties ensure longevity and hygiene.',
      benefits: ['Industrial Grade Durability', 'Antimicrobial Surface', 'Studio Batch Customization'],
      img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800'
    },
    {
      label: 'Wellness & Retreats',
      title: 'Conscious Luxury Experiences',
      desc: 'Perfect for wellness centers and high-end retreats focusing on chemical-free environments and natural material integrity.',
      benefits: ['100% Eco-Conscious', 'Chemical-Free Scent', 'Premium Tactile Comfort'],
      img: 'https://images.unsplash.com/photo-1599447421416-3414500d1f35?auto=format&fit=crop&q=80&w=800'
    },
    {
      label: 'Retail / Private Label',
      title: 'Turnkey Brand Solutions',
      desc: 'A complete OEM workflow from custom colors to retail-ready packaging, allowing brands to launch premium yoga accessories with ease.',
      benefits: ['Custom Branding Options', 'Retail-Ready Packaging', 'Global Distribution Support'],
      img: 'https://images.unsplash.com/photo-1591343395082-e120087004b4?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const standardSizes = [
    { type: 'Standard Practice', cm: '183 x 61', in: '72 x 24', weight: '2.5kg - 3.2kg' },
    { type: 'Large / Wide', cm: '185 x 68', in: '73 x 27', weight: '3.0kg - 3.8kg' },
    { type: 'Travel Lite', cm: '173 x 61', in: '68 x 24', weight: '1.2kg - 1.8kg' },
    { type: 'Kids / Compact', cm: '150 x 61', in: '59 x 24', weight: '1.8kg - 2.2kg' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[550px] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1920" 
            alt="Yoga Mat Natural Texture" 
            className="w-full h-full object-cover opacity-80 transition-transform duration-[10000ms] scale-105"
            style={{ transform: 'scale(1.05)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B4332] via-[#1B4332]/70 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-3xl reveal">
            <span className="inline-block px-3 py-1 bg-[#40916C] text-[10px] font-black uppercase tracking-[0.3em] mb-6 rounded shadow-lg">Professional Wellness</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1]">
              Natural Latex Yoga Mats <br />for Professional Practice
            </h1>
            <p className="text-xl text-gray-200 mb-10 font-medium tracking-wide">
              Sustainably sourced, non-toxic yoga mats engineered for studios, wellness brands, and private-label programs.
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

      {/* Section 1: Material & Grip Performance */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center max-w-6xl mx-auto">
            <div className="reveal-left">
              <h4 className="text-[#40916C] font-bold text-[11px] tracking-[0.4em] uppercase mb-8">Engineering Grip</h4>
              <h2 className="text-4xl font-black text-[#1B4332] mb-10 leading-tight">Molecular Adhesion <br />& Natural Resilience.</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Unlike synthetic TPE or PVC mats, our natural latex mats offer organic adhesion properties. The molecular structure of high-purity latex provides a superior wet/dry grip that actually improves as the body warms.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'Organic Grip', desc: 'Superior traction without the need for toxic chemical additives.' },
                  { title: 'Shock Absorption', desc: 'High-density cell structure provides joint protection and stability.' },
                  { title: 'Zero Synthetics', desc: '100% biodegradable natural material for conscious practicing.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <span className="text-[#1B4332] font-black">✓</span>
                    <div>
                      <h4 className="text-xs font-black text-[#1B4332] uppercase tracking-widest mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-right relative">
              <div className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100 flex items-center justify-center overflow-hidden">
                 <div className="relative w-full aspect-square bg-white rounded-2xl flex flex-col items-center justify-center p-12 group shadow-inner">
                    <div className="w-full h-1 bg-gray-100 mb-8 rounded-full overflow-hidden">
                       <div className="h-full bg-[#40916C] w-full animate-[pulse_2s_infinite]"></div>
                    </div>
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">🌱</div>
                    <span className="text-[10px] font-black text-[#1B4332] uppercase tracking-[0.4em] text-center">NATURAL LATEX CORE</span>
                    {/* Floating Grip Indicator */}
                    <div className="absolute top-10 right-10 flex flex-col items-center">
                       <div className="w-1 h-8 bg-gradient-to-b from-[#40916C] to-transparent"></div>
                       <span className="text-[7px] font-black text-[#40916C] mt-2 tracking-widest">GRIP+</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Interactive Application Switcher */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-black text-[#1B4332] mb-6 tracking-tight uppercase">B2B Core Applications</h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium text-[10px] uppercase tracking-widest">Optimized for Industry Procurement</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center mb-16 p-2 bg-white rounded-2xl shadow-sm border border-gray-100 reveal relative overflow-hidden">
              <div 
                className="absolute top-2 bottom-2 h-[calc(100%-16px)] bg-[#1B4332] rounded-xl transition-all duration-500 ease-in-out"
                style={{ 
                  left: `calc(${activeApp * (100 / 3)}% + 8px)`,
                  width: `calc(${100 / 3}% - 16px)`
                }}
              ></div>
              {applications.map((app, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveApp(idx)}
                  className={`flex-1 py-4 text-[10px] font-black uppercase tracking-widest relative z-10 transition-colors duration-300 ${
                    activeApp === idx ? 'text-white' : 'text-gray-400 hover:text-[#1B4332]'
                  }`}
                >
                  {app.label}
                </button>
              ))}
            </div>

            <div className="bg-white rounded-[3rem] shadow-xl p-10 md:p-20 overflow-hidden relative border border-gray-100 min-h-[500px] flex items-center">
              <div key={activeApp} className="grid lg:grid-cols-2 gap-16 items-center animate-mega-slide">
                <div>
                  <span className="text-[#40916C] font-black text-[10px] tracking-widest uppercase block mb-4">APPLICATION 0{activeApp + 1}</span>
                  <h3 className="text-3xl font-black text-[#1B4332] mb-8 uppercase tracking-tight leading-tight">{applications[activeApp].title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-10 font-medium">{applications[activeApp].desc}</p>
                  <div className="space-y-4">
                    {applications[activeApp].benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                         <div className="w-1.5 h-1.5 bg-[#40916C] rounded-full group-hover:scale-150 transition-transform"></div>
                         <span className="text-xs font-black text-[#1B4332] uppercase tracking-widest">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                   <img src={applications[activeApp].img} alt={applications[activeApp].label} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-[#1B4332]/10 group-hover:bg-transparent transition-colors"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Thickness, Density & Comfort */}
      <section className="py-32 bg-white reveal">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-black text-[#1B4332] mb-4 uppercase tracking-widest">Comfort Specifications</h2>
            <p className="text-gray-400 font-medium">Selectable technical profiles for wholesale procurement.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
             <div className="space-y-8">
                <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Thickness Profile</h4>
                <div className="flex gap-4">
                  {['Thin (3mm)', 'Std (4mm)', 'Cushion (6mm)'].map((t, i) => (
                    <div key={i} className="flex-1 p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center group hover:bg-[#1B4332] cursor-pointer transition-all">
                       <span className="text-[10px] font-black text-[#1B4332] group-hover:text-white uppercase tracking-widest">{t}</span>
                       <div className="mt-4 text-[7px] font-black text-[#40916C] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Select Spec</div>
                    </div>
                  ))}
                </div>
             </div>
             <div className="space-y-8">
                <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Density Level</h4>
                <div className="flex gap-4">
                  {['Light', 'Medium', 'Heavy'].map((d, i) => (
                    <div key={i} className="flex-1 p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center group hover:bg-[#1B4332] cursor-pointer transition-all">
                       <span className="text-[10px] font-black text-[#1B4332] group-hover:text-white uppercase tracking-widest">{d}</span>
                       <div className="mt-4 text-[7px] font-black text-[#40916C] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Optimal Stability</div>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Section 4: Surface & Stability Diagram */}
      <section className="py-32 bg-gray-50 overflow-hidden reveal">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center max-w-6xl mx-auto">
             <div className="reveal-left bg-[#1B4332] p-16 rounded-[3rem] text-white relative">
                <h3 className="text-3xl font-black mb-8 leading-tight">Stability Architecture.</h3>
                <p className="text-gray-300 text-lg font-light leading-relaxed mb-10">
                  Every mat is finished with a micro-textured surface that maximizes surface area contact. This results in extreme traction on hardwood, laminate, and studio flooring, preventing mat-migration during dynamic transitions.
                </p>
                <div className="flex items-center gap-12">
                   <div className="flex flex-col">
                      <span className="text-3xl font-black mb-1">98%</span>
                      <span className="text-[8px] font-black text-[#74C69D] uppercase tracking-widest">Natural Purity</span>
                   </div>
                   <div className="flex flex-col">
                      <span className="text-3xl font-black mb-1">Zero</span>
                      <span className="text-[8px] font-black text-[#74C69D] uppercase tracking-widest">Slip Force</span>
                   </div>
                </div>
             </div>
             <div className="reveal-right flex flex-col items-center">
                <div className="relative w-64 h-64 flex items-center justify-center">
                   <div className="absolute inset-0 border border-[#1B4332]/5 rounded-full animate-ping"></div>
                   <div className="absolute inset-10 border border-[#1B4332]/10 rounded-full"></div>
                   {/* Animated arrows using SVG for traction */}
                   <svg className="w-32 h-32 text-[#1B4332]/20" viewBox="0 0 100 100">
                     <path d="M50 20 L50 40 M30 50 L10 50 M50 80 L50 60 M70 50 L90 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="animate-pulse" />
                   </svg>
                   <div className="text-6xl group-hover:scale-110 transition-transform duration-700">🧘</div>
                </div>
                <p className="mt-16 text-[10px] font-black text-[#1B4332] uppercase tracking-[0.4em] text-center italic">Anti-Slip Surface Matrix for Professional Safety</p>
             </div>
          </div>
        </div>
      </section>

      {/* Section 5: Standard Sizes Table */}
      <section className="py-32 bg-white reveal">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-[#1B4332] mb-12 text-center uppercase tracking-widest">Standard Export Sizing</h2>
            <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-sm">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="p-8 text-[10px] font-black text-gray-400 uppercase tracking-widest sticky left-0 bg-gray-50">Market Format</th>
                    <th className="p-8 text-[10px] font-black text-gray-400 uppercase tracking-widest">Standard (cm)</th>
                    <th className="p-8 text-[10px] font-black text-gray-400 uppercase tracking-widest">Standard (in)</th>
                    <th className="p-8 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">Avg. Weight</th>
                  </tr>
                </thead>
                <tbody className="text-xs font-bold text-[#1B4332] uppercase tracking-wider">
                  {standardSizes.map((row, i) => (
                    <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-[#1B4332]/5 transition-colors group">
                      <td className="p-8 font-black sticky left-0 bg-white group-hover:bg-transparent">{row.type}</td>
                      <td className="p-8 text-gray-500">{row.cm}</td>
                      <td className="p-8 text-gray-500">{row.in}</td>
                      <td className="p-8 text-center bg-gray-50/30 font-black">{row.weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Care & Hygiene */}
      <section className="py-32 bg-gray-50 reveal">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
             <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100 hover-lift transition-all group">
                <div className="flex items-center gap-4 mb-8">
                   <span className="text-3xl group-hover:rotate-12 transition-transform duration-500">🧼</span>
                   <h4 className="text-sm font-black text-[#1B4332] uppercase tracking-widest">Cleaning Protocol</h4>
                </div>
                <ul className="space-y-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                   <li className="flex gap-4"><span>—</span> Wipe with damp cloth</li>
                   <li className="flex gap-4"><span>—</span> Use mild non-toxic cleaner</li>
                   <li className="flex gap-4"><span>—</span> Air dry in shade only</li>
                   <li className="flex gap-4"><span>—</span> Naturally anti-bacterial</li>
                </ul>
             </div>
             <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100 hover-lift transition-all group border-t-4 border-[#1B4332]">
                <div className="flex items-center gap-4 mb-8">
                   <span className="text-3xl group-hover:rotate-12 transition-transform duration-500">⏳</span>
                   <h4 className="text-sm font-black text-[#1B4332] uppercase tracking-widest">Longevity Tips</h4>
                </div>
                <ul className="space-y-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                   <li className="flex gap-4"><span>—</span> Avoid direct UV sunlight</li>
                   <li className="flex gap-4"><span>—</span> Roll with surface facing out</li>
                   <li className="flex gap-4"><span>—</span> Store in a cool dry place</li>
                   <li className="flex gap-4"><span>—</span> Biodegradable after lifecycle</li>
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
              <h2 className="text-4xl font-black text-[#1B4332] mb-10 tracking-tight leading-tight">Private Label & <br />OEM Readiness.</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-12 font-medium">
                We provide end-to-end manufacturing for yoga brands. From custom color dyeing to final branded packaging, our team handles the technical complexity.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { title: 'Branded Sleeves', icon: '🏷️' },
                  { title: 'Logo Embossing', icon: '✨' },
                  { title: 'Custom Colors', icon: '🎨' },
                  { title: 'Export Cartons', icon: '📦' }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-start group">
                    <span className="text-3xl mb-4 group-hover:-translate-y-2 transition-transform duration-300">{item.icon}</span>
                    <span className="text-[9px] font-black text-[#1B4332] uppercase tracking-[0.2em]">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-right bg-gray-50 p-16 rounded-[3rem] border border-gray-100">
               <h4 className="font-black text-[#1B4332] text-xs uppercase tracking-widest mb-10 pb-4 border-b border-gray-200">Private Label Checklist</h4>
               <ul className="space-y-6">
                 {[
                   'Custom Logo Silk Printing', 'Laser Engraving Options',
                   'Brand-Specific Color Swatches', 'Sustainable Belly Bands',
                   'UPC/Barcode Pre-Applied', 'Master Carton Branding'
                 ].map((c, i) => (
                   <li key={i} className="flex items-center gap-4 group">
                      <div className="w-5 h-5 bg-[#40916C]/10 rounded flex items-center justify-center text-[#1B4332] group-hover:bg-[#1B4332] group-hover:text-white transition-colors">
                         <span className="text-[10px]">✓</span>
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#1B4332]">{c}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Quality & Certifications */}
      <section className="py-24 bg-gray-50 border-y border-gray-100 reveal">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black text-[#1B4332] mb-16 uppercase tracking-widest">Quality, Safety & Sustainability Assured</h2>
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
             <div className="text-xl font-black tracking-tighter">GOLS ORGANIC</div>
             <div className="text-xl font-black tracking-tighter">OEKO-TEX® 100</div>
             <div className="text-xl font-black tracking-tighter">LGA TESTED</div>
             <div className="text-xl font-black tracking-tighter">SGS COMPLIANT</div>
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
                <h2 className="text-3xl font-black mb-8 leading-tight tracking-tight uppercase">Request Specifications / Bulk Quote</h2>
                <p className="text-gray-300 font-light mb-12">Submit your studio or retail project requirements. Our dedicated B2B team will contact you within 24 business hours.</p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl group-hover:bg-[#74C69D] group-hover:text-[#1B4332] transition-all duration-300">🌿</span>
                    <span className="text-[10px] font-black uppercase tracking-widest">Custom Color Matching</span>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl group-hover:bg-[#74C69D] group-hover:text-[#1B4332] transition-all duration-300">🚢</span>
                    <span className="text-[10px] font-black uppercase tracking-widest">Global Export Pricing</span>
                  </div>
                </div>
              </div>
              <div className="pt-12 border-t border-white/10 mt-12 text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
                Eco-Latex B2B Wellness
              </div>
            </div>
            <div className="lg:w-2/3 bg-white p-12 md:p-20">
               <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => { e.preventDefault(); alert('Your yoga mat inquiry has been submitted.'); }}>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Company Name</label>
                    <input type="text" required className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#1B4332] outline-none transition-all font-medium text-sm" placeholder="e.g. Zen Wellness Studios" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input type="email" required className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#1B4332] outline-none transition-all font-medium text-sm" placeholder="procurement@company.com" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Primary Application</label>
                    <select className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#1B4332] outline-none transition-all font-medium text-sm appearance-none uppercase tracking-widest">
                       <option>Studio / Instructor Use</option>
                       <option>Wellness Retreat / Hospitality</option>
                       <option>Retail Brand / Private Label</option>
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Desired Thickness</label>
                    <select className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#1B4332] outline-none transition-all font-medium text-sm appearance-none uppercase tracking-widest">
                       <option>Standard (4mm)</option>
                       <option>Thin (3mm)</option>
                       <option>Extra Cushion (6mm)</option>
                       <option>Custom Request</option>
                    </select>
                 </div>
                 <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Specifications & Vol.</label>
                    <textarea rows={5} required className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#1B4332] outline-none transition-all font-medium text-sm" placeholder="Required sizes, custom logo needs, color preferences, monthly volume expectations..."></textarea>
                 </div>
                 <div className="md:col-span-2 flex flex-col md:flex-row justify-between items-center gap-8">
                    <label className="flex items-center gap-3 cursor-pointer group">
                       <input type="checkbox" required className="w-5 h-5 rounded border-gray-300 text-[#1B4332] focus:ring-[#1B4332]" />
                       <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest group-hover:text-[#1B4332] transition-colors">Accept B2B Export Terms</span>
                    </label>
                    <button type="submit" className="bg-[#1B4332] text-white px-12 py-5 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#2D5A27] transition-all hover-lift press-scale shadow-xl w-full md:w-auto">
                       Send Inquiry
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

export default YogaMats;
