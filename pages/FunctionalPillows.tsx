
import React, { useState } from 'react';

const FunctionalPillows: React.FC = () => {
  const [activeType, setActiveType] = useState<number>(0);

  const scrollToRFQ = () => {
    document.getElementById('rfq-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const pillowTypes = [
    {
      label: 'Orthopedic / Cervical',
      title: 'Advanced Spinal Corrective Support',
      desc: 'Engineered with a dual-height contour to maintain the natural cervical curve. Ideal for rehabilitative sleep programs and orthopedic bedding lines.',
      benefits: ['Spinal Alignment', 'Pressure Relief', 'Neck Stability'],
      img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=800'
    },
    {
      label: 'Neck Support',
      title: 'Ergonomic Neck Cradle',
      desc: 'Specifically designed for targeted occipital and cervical support, reducing muscle tension in the upper trapezius and neck regions.',
      benefits: ['Trapezius Relief', 'Muscle Recovery', 'Posture Correction'],
      img: 'https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?auto=format&fit=crop&q=80&w=800'
    },
    {
      label: 'Contour Support',
      title: 'Multi-Zone Comfort Mapping',
      desc: 'Featuring specialized density zones to adapt to multiple sleeping positions while maintaining consistent head-to-shoulder transition.',
      benefits: ['Zone Mapping', 'Motion Isolation', 'Adaptive Loft'],
      img: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80&w=800'
    },
    {
      label: 'Travel / Compact',
      title: 'Portable Ergonomic Integrity',
      desc: 'A compact format that retains the technical performance of full-sized orthopedic latex. Designed for high-frequency travelers and hospitality kits.',
      benefits: ['Compact Design', 'Lightweight Portability', 'Instant Resilience'],
      img: 'https://images.unsplash.com/photo-1553152531-b98a2fc8d3bf?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[550px] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581578731522-aa02d87e07e6?auto=format&fit=crop&q=80&w=1920" 
            alt="Functional Pillow Macro" 
            className="w-full h-full object-cover opacity-80 transition-transform duration-[10000ms] scale-105"
            style={{ transform: 'scale(1.05)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B4332] via-[#1B4332]/70 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-3xl reveal">
            <span className="inline-block px-3 py-1 bg-[#40916C] text-[10px] font-black uppercase tracking-[0.3em] mb-6 rounded">Technical Bedding Solutions</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1]">
              Functional Pillows Engineered for <br />Targeted Support
            </h1>
            <p className="text-xl text-gray-200 mb-10 font-medium tracking-wide">
              Purpose-built latex pillow solutions for posture support, recovery, and specialized sleep needs.
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

      {/* Section 1: Function-Led Design */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center max-w-6xl mx-auto">
            <div className="reveal-left">
              <h4 className="text-[#40916C] font-bold text-[11px] tracking-[0.4em] uppercase mb-8">Clinical Ergonomics</h4>
              <h2 className="text-4xl font-black text-[#1B4332] mb-10 leading-tight">Postural Correction <br />& Recovery Science.</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Functional pillows are the intersection of physiotherapy and sleep engineering. Every curve is mathematically calculated to redistribute pressure and realign the cervical spine, providing a recovery-focused environment.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                {[
                  'Posture Correction', 'Pressure Redistribution', 'Accelerated Recovery', 'Spinal Decompression'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-2 h-2 rounded-full bg-[#40916C]"></div>
                    <span className="text-xs font-black text-[#1B4332] uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-right relative">
              <div className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#40916C]/5 rounded-full blur-3xl -mr-10 -mt-10"></div>
                 <div className="relative w-full aspect-[4/3] rounded-2xl flex items-center justify-center border-2 border-dashed border-[#1B4332]/10">
                    <svg className="w-4/5 h-4/5 text-[#1B4332]/10" viewBox="0 0 200 120">
                      {/* Diagram of neck support zones */}
                      <path d="M20,100 Q60,20 100,60 T180,60" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" />
                      <circle cx="60" cy="55" r="8" fill="currentColor" opacity="0.2" />
                      <circle cx="140" cy="60" r="10" fill="currentColor" opacity="0.2" />
                    </svg>
                    <div className="absolute top-1/4 left-1/4 flex flex-col items-center">
                       <span className="w-2 h-2 bg-[#40916C] rounded-full animate-ping"></span>
                       <span className="text-[7px] font-black text-gray-400 mt-2 tracking-widest">CERVICAL ZONE</span>
                    </div>
                    <span className="absolute bottom-6 text-[8px] font-black text-gray-400 uppercase tracking-[0.4em]">Orthopedic Mapping</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Interactive Type Switcher */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-black text-[#1B4332] mb-6 tracking-tight uppercase">B2B Core Functional Range</h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium text-[10px] uppercase tracking-widest">Configurable for Private Label Manufacturing</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center mb-16 p-2 bg-white rounded-2xl shadow-sm border border-gray-100 reveal relative overflow-hidden">
              <div 
                className="absolute top-2 bottom-2 h-[calc(100%-16px)] bg-[#1B4332] rounded-xl transition-all duration-500 ease-in-out"
                style={{ 
                  left: `calc(${activeType * (100 / 4)}% + 8px)`,
                  width: `calc(${100 / 4}% - 16px)`
                }}
              ></div>
              {pillowTypes.map((type, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveType(idx)}
                  className={`flex-1 py-4 text-[9px] font-black uppercase tracking-widest relative z-10 transition-colors duration-300 ${
                    activeType === idx ? 'text-white' : 'text-gray-400 hover:text-[#1B4332]'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>

            <div className="bg-white rounded-[3rem] shadow-xl p-10 md:p-20 overflow-hidden relative border border-gray-100 min-h-[500px] flex items-center">
              <div key={activeType} className="grid lg:grid-cols-2 gap-16 items-center animate-mega-slide">
                <div>
                  <span className="text-[#40916C] font-black text-[10px] tracking-widest uppercase block mb-4">SPECIFICATION 0{activeType + 1}</span>
                  <h3 className="text-3xl font-black text-[#1B4332] mb-8 uppercase tracking-tight leading-tight">{pillowTypes[activeType].title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-10 font-medium">{pillowTypes[activeType].desc}</p>
                  <div className="space-y-4">
                    {pillowTypes[activeType].benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                         <div className="w-1.5 h-1.5 bg-[#40916C] rounded-full group-hover:scale-150 transition-transform"></div>
                         <span className="text-xs font-black text-[#1B4332] uppercase tracking-widest">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                   <img src={pillowTypes[activeType].img} alt={pillowTypes[activeType].label} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-[#1B4332]/10 group-hover:bg-transparent transition-colors"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Support & Fit Options */}
      <section className="py-32 bg-white reveal">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-black text-[#1B4332] mb-4 uppercase tracking-widest">Fit Configuration</h2>
            <p className="text-gray-400 font-medium">Selectable technical profiles for wholesale procurement.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
             <div className="space-y-8">
                <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Firmness Bands</h4>
                <div className="flex gap-4">
                  {['Soft', 'Medium', 'Firm'].map((f, i) => (
                    <div key={i} className="flex-1 p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center group hover:bg-[#1B4332] cursor-pointer transition-all">
                       <span className="text-xs font-black text-[#1B4332] group-hover:text-white uppercase tracking-widest">{f}</span>
                       <div className="mt-4 text-[7px] font-black text-[#40916C] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Select for Specs</div>
                    </div>
                  ))}
                </div>
             </div>
             <div className="space-y-8">
                <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Height Profiles</h4>
                <div className="flex gap-4">
                  {['Low (4")', 'Med (5")', 'High (6")'].map((h, i) => (
                    <div key={i} className="flex-1 p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center group hover:bg-[#1B4332] cursor-pointer transition-all">
                       <span className="text-xs font-black text-[#1B4332] group-hover:text-white uppercase tracking-widest">{h}</span>
                       <div className="mt-4 text-[7px] font-black text-[#40916C] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Optimal Alignment</div>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Section 4: Material & Airflow Technology */}
      <section className="py-32 bg-gray-50 overflow-hidden reveal">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center max-w-6xl mx-auto">
             <div className="reveal-left bg-[#1B4332] p-16 rounded-[3rem] text-white relative">
                <h3 className="text-3xl font-black mb-8 leading-tight">Cellular Airflow <br />Matrix.</h3>
                <p className="text-gray-300 text-lg font-light leading-relaxed mb-10">
                  Our natural latex cores utilize an open-cell molecular structure, supplemented by a precision-molded pin-core matrix. This allows for constant air exchange, preventing thermal buildup during sleep.
                </p>
                <div className="flex items-center gap-12">
                   <div className="flex flex-col">
                      <span className="text-3xl font-black mb-1">100%</span>
                      <span className="text-[8px] font-black text-[#74C69D] uppercase tracking-widest">Natural Latex</span>
                   </div>
                   <div className="flex flex-col">
                      <span className="text-3xl font-black mb-1">Zero</span>
                      <span className="text-[8px] font-black text-[#74C69D] uppercase tracking-widest">Synthetics</span>
                   </div>
                </div>
             </div>
             <div className="reveal-right flex flex-col items-center">
                <div className="relative w-64 h-64 flex items-center justify-center">
                   <div className="absolute inset-0 border border-[#1B4332]/5 rounded-full animate-ping"></div>
                   <div className="absolute inset-10 border border-[#1B4332]/10 rounded-full animate-pulse"></div>
                   <div className="text-6xl group-hover:scale-110 transition-transform duration-700">💨</div>
                   {/* Animated arrows using CSS */}
                   <div className="absolute top-0 flex flex-col items-center animate-bounce">
                      <div className="w-0.5 h-10 bg-gradient-to-t from-[#40916C] to-transparent"></div>
                      <span className="text-[7px] font-bold text-[#40916C] mt-2 tracking-widest">EXHAUST</span>
                   </div>
                </div>
                <p className="mt-16 text-[10px] font-black text-[#1B4332] uppercase tracking-[0.4em] text-center italic">Self-Ventilating Open-Cell Structure</p>
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
                    <th className="p-8 text-[10px] font-black text-gray-400 uppercase tracking-widest sticky left-0 bg-gray-50">Market Type</th>
                    <th className="p-8 text-[10px] font-black text-gray-400 uppercase tracking-widest">Standard (cm)</th>
                    <th className="p-8 text-[10px] font-black text-gray-400 uppercase tracking-widest">Large (cm)</th>
                    <th className="p-8 text-[10px] font-black text-gray-400 uppercase tracking-widest">Height (cm)</th>
                  </tr>
                </thead>
                <tbody className="text-xs font-bold text-[#1B4332] uppercase tracking-wider">
                  {[
                    { label: 'Cervical Contour', std: '60 x 40', lrg: '70 x 40', h: '10/12' },
                    { label: 'Traditional Mold', std: '60 x 40', lrg: '70 x 45', h: '12' },
                    { label: 'Travel Support', std: '30 x 30', lrg: '35 x 35', h: '8' },
                    { label: 'Posture Base', std: '55 x 35', lrg: '65 x 40', h: '9/11' }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-[#1B4332]/5 transition-colors group">
                      <td className="p-8 font-black sticky left-0 bg-white group-hover:bg-transparent">{row.label}</td>
                      <td className="p-8 text-gray-500">{row.std}</td>
                      <td className="p-8 text-gray-500">{row.lrg}</td>
                      <td className="p-8 text-center bg-gray-50/30 font-black">{row.h}</td>
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
                   <h4 className="text-sm font-black text-[#1B4332] uppercase tracking-widest">Latex Core Care</h4>
                </div>
                <ul className="space-y-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                   <li className="flex gap-4"><span>—</span> Do not machine wash</li>
                   <li className="flex gap-4"><span>—</span> Keep away from direct UV</li>
                   <li className="flex gap-4"><span>—</span> Naturally anti-bacterial</li>
                   <li className="flex gap-4"><span>—</span> Spot clean with mild agents</li>
                </ul>
             </div>
             <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100 hover-lift transition-all group border-t-4 border-[#1B4332]">
                <div className="flex items-center gap-4 mb-8">
                   <span className="text-3xl group-hover:rotate-12 transition-transform duration-500">🧺</span>
                   <h4 className="text-sm font-black text-[#1B4332] uppercase tracking-widest">Cover Maintenance</h4>
                </div>
                <ul className="space-y-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                   <li className="flex gap-4"><span>—</span> Machine washable 30°C</li>
                   <li className="flex gap-4"><span>—</span> Low tumble dry permitted</li>
                   <li className="flex gap-4"><span>—</span> Do not use bleach</li>
                   <li className="flex gap-4"><span>—</span> Permanent press cycle</li>
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
                We offer end-to-end B2B services for brand owners, allowing for complete customization of functional profiles and retail-ready aesthetics.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { title: 'Vacuum Rolled', icon: '🌀' },
                  { title: 'Branded Polybags', icon: '🛍️' },
                  { title: 'Export Cartons', icon: '📦' },
                  { title: 'Technical Inserts', icon: '📄' }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-start group">
                    <span className="text-3xl mb-4 group-hover:-translate-y-2 transition-transform duration-300">{item.icon}</span>
                    <span className="text-[9px] font-black text-[#1B4332] uppercase tracking-[0.2em]">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-right bg-gray-50 p-16 rounded-[3rem] border border-gray-100">
               <h4 className="font-black text-[#1B4332] text-xs uppercase tracking-widest mb-10 pb-4 border-b border-gray-200">Private Label Options</h4>
               <ul className="space-y-6">
                 {[
                   'Custom Woven Brand Labels', 'Fabric Choice (Bamboo/Tencel)',
                   'UPC/Barcode Pre-Applied', 'Multilingual Care Labels',
                   'Master Carton Branding', 'Proprietary Shape Molding'
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
             <div className="text-xl font-black tracking-tighter">ECO-INSTITUT</div>
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
                <p className="text-gray-300 font-light mb-12">Submit your technical requirements. Our B2B engineering desk will contact you within business hours.</p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl group-hover:bg-[#74C69D] group-hover:text-[#1B4332] transition-all duration-300">🏢</span>
                    <span className="text-[10px] font-black uppercase tracking-widest">Custom Material Sampling</span>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl group-hover:bg-[#74C69D] group-hover:text-[#1B4332] transition-all duration-300">🚢</span>
                    <span className="text-[10px] font-black uppercase tracking-widest">Global Export Logistics</span>
                  </div>
                </div>
              </div>
              <div className="pt-12 border-t border-white/10 mt-12 text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
                Eco-Latex B2B Division
              </div>
            </div>
            <div className="lg:w-2/3 bg-white p-12 md:p-20">
               <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => { e.preventDefault(); alert('Your functional pillow inquiry has been sent.'); }}>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Company Name</label>
                    <input type="text" required className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332] outline-none transition-all font-medium text-sm" placeholder="e.g. Wellness Bedding Ltd." />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input type="email" required className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332] outline-none transition-all font-medium text-sm" placeholder="business@company.com" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Pillow Type</label>
                    <select className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#1B4332] outline-none transition-all font-medium text-sm appearance-none uppercase tracking-widest">
                       <option>Orthopedic / Cervical</option>
                       <option>Neck Support</option>
                       <option>Contour Support</option>
                       <option>Travel / Compact</option>
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Firmness</label>
                    <select className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#1B4332] outline-none transition-all font-medium text-sm appearance-none uppercase tracking-widest">
                       <option>Medium (Standard)</option>
                       <option>Soft</option>
                       <option>Firm</option>
                    </select>
                 </div>
                 <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Specifications & Vol.</label>
                    <textarea rows={5} required className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#1B4332] outline-none transition-all font-medium text-sm" placeholder="Required sizes, custom labels, monthly volume expectations..."></textarea>
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

export default FunctionalPillows;
