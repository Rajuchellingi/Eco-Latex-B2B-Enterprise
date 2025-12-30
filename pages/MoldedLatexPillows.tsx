
import React, { useState } from 'react';

const MoldedLatexPillows: React.FC = () => {
  const [activeType, setActiveType] = useState<'classic' | 'contour' | 'ventilated'>('classic');

  const scrollToRFQ = () => {
    document.getElementById('rfq-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const pillowTypes = {
    classic: {
      title: 'Classic Molded Support',
      bullets: [
        'Traditional shape with uniform cell structure.',
        'Immediate response resilience for head and neck.',
        'Consistent density across the entire pillow core.',
        'Ideal for back and stomach sleepers seeking traditional feel.'
      ],
      img: 'https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?auto=format&fit=crop&q=80&w=800'
    },
    contour: {
      title: 'Ergonomic Contour / Cervical',
      bullets: [
        'Anatomically mapped dual-height design.',
        'Engineered to align the cervical spine.',
        'Targeted pressure relief for chronic neck sensitivity.',
        'Best for side sleepers and orthopedic care programs.'
      ],
      img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=800'
    },
    ventilated: {
      title: 'Advanced Ventilated Design',
      bullets: [
        'Micro-pin core technology for maximum airflow.',
        'Thermal neutral sleeping surface.',
        'Rapid moisture dissipation through open channels.',
        'Premium solution for hot climates and hospitality luxury.'
      ],
      img: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80&w=800'
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[550px] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=1920" 
            alt="Molded Latex Macro" 
            className="w-full h-full object-cover opacity-80 transition-transform duration-[10000ms] scale-105"
            style={{ transform: 'scale(1.05)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B4332] via-[#1B4332]/70 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-3xl reveal">
            <span className="inline-block px-3 py-1 bg-[#40916C] text-[10px] font-black uppercase tracking-[0.3em] mb-6 rounded">Orthopedic Engineering</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1]">
              Molded Latex Pillows for <br />Targeted Support
            </h1>
            <p className="text-xl text-gray-200 mb-10 font-medium tracking-wide">
              Ergonomically engineered natural latex pillows for private-label bedding and hospitality programs.
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

      {/* Section 1: Ergonomic Design (Core Story) */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center max-w-6xl mx-auto">
            <div className="reveal-left">
              <h4 className="text-[#40916C] font-bold text-[11px] tracking-[0.4em] uppercase mb-8">Anatomical Precision</h4>
              <h2 className="text-4xl font-black text-[#1B4332] mb-10 leading-tight">Science-Backed <br />Cervical Alignment.</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Our molded pillows are not just accessories; they are structural orthopedic tools. By utilizing high-purity natural latex and precision molds, we create cores that maintain their shape and support level for years.
              </p>
              <ul className="space-y-6">
                {[
                  { title: 'Spinal Alignment', desc: 'Maintains the natural curve of the neck throughout all sleep phases.' },
                  { title: 'Pressure Point Relief', desc: 'Reduces surface tension on the ears, neck, and shoulders.' },
                  { title: 'Instant Resilience', desc: 'Unlike memory foam, natural latex reacts instantly to every head movement.' }
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="text-[#1B4332] font-black">✓</span>
                    <div>
                      <h4 className="text-xs font-black text-[#1B4332] uppercase tracking-widest mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal-right relative">
              <div className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100 flex items-center justify-center relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#40916C]/5 rounded-full blur-3xl -mr-10 -mt-10"></div>
                 {/* Decorative contour lines placeholder */}
                 <div className="relative w-full aspect-[4/3] border-2 border-dashed border-[#1B4332]/10 rounded-2xl flex items-center justify-center">
                    <svg className="w-4/5 h-4/5 text-[#1B4332]/5" viewBox="0 0 200 100">
                       <path d="M10,80 Q50,20 100,80 T190,80" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                       <path d="M10,60 Q50,0 100,60 T190,60" fill="none" stroke="currentColor" strokeWidth="1" />
                    </svg>
                    <span className="absolute bottom-6 text-[8px] font-black text-gray-400 uppercase tracking-[0.4em]">Ergonomic Contour Mapping</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Performance Options (Interactive) */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-black text-[#1B4332] mb-6 tracking-tight">Performance Configuration</h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium uppercase text-[10px] tracking-widest">Available for Private Label & OEM Programs</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center mb-16 gap-4 reveal">
              {(['classic', 'contour', 'ventilated'] as const).map((type) => (
                <button 
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={`px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                    activeType === type ? 'bg-[#1B4332] text-white shadow-2xl scale-105' : 'bg-white text-gray-400 border border-gray-100 hover:bg-gray-50'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)} Design
                </button>
              ))}
            </div>

            <div className="bg-white rounded-[3rem] shadow-xl p-10 md:p-20 overflow-hidden relative">
              <div key={activeType} className="grid lg:grid-cols-2 gap-16 items-center animate-mega-slide">
                <div className="order-2 lg:order-1">
                  <h3 className="text-3xl font-black text-[#1B4332] mb-8 uppercase tracking-tight">{pillowTypes[activeType].title}</h3>
                  <ul className="space-y-6">
                    {pillowTypes[activeType].bullets.map((bullet, idx) => (
                      <li key={idx} className="flex gap-4 group">
                        <span className="w-1.5 h-1.5 bg-[#40916C] rounded-full mt-2 group-hover:scale-150 transition-transform"></span>
                        <p className="text-gray-600 font-medium leading-relaxed">{bullet}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-12 flex gap-4">
                    <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Standard Firmness: Medium</span>
                    <span className="text-gray-200">|</span>
                    <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Response: Instant</span>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="rounded-2xl overflow-hidden shadow-lg aspect-video">
                    <img src={pillowTypes[activeType].img} className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" alt={activeType} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Firmness & Height Options */}
      <section className="py-32 bg-white reveal">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-[#1B4332] mb-12 uppercase tracking-widest">Configuration Matrix</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Firmness Bands</h4>
              <div className="flex flex-col gap-4">
                {[
                  { label: 'Soft', best: 'Mixed Sleepers' },
                  { label: 'Medium', best: 'Back Sleepers' },
                  { label: 'Firm', best: 'Side Sleepers' }
                ].map((f, i) => (
                  <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex justify-between items-center group hover:bg-[#1B4332] transition-colors cursor-pointer">
                    <span className="text-sm font-black text-[#1B4332] group-hover:text-white uppercase tracking-widest">{f.label}</span>
                    <span className="text-[9px] font-black text-[#40916C] group-hover:text-[#74C69D] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Best for: {f.best}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Height Profiles</h4>
              <div className="flex flex-col gap-4">
                {[
                  { h: 'Low Loft (4")', use: 'Stomach Sleepers' },
                  { h: 'Mid Loft (5")', use: 'Universal Use' },
                  { h: 'High Loft (6")', use: 'Side Sleepers' }
                ].map((h, i) => (
                  <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex justify-between items-center group hover:bg-[#1B4332] transition-colors cursor-pointer">
                    <span className="text-sm font-black text-[#1B4332] group-hover:text-white uppercase tracking-widest">{h.h}</span>
                    <span className="text-[9px] font-black text-[#40916C] group-hover:text-[#74C69D] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Optimal for: {h.use}</span>
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
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
             <div className="reveal-left bg-[#1B4332] p-16 rounded-[3rem] text-white relative">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                   <span className="text-9xl font-black">Air</span>
                </div>
                <h3 className="text-3xl font-black mb-8 leading-tight">Micro-Pin Core <br />Technology.</h3>
                <p className="text-gray-300 text-lg font-light leading-relaxed mb-10">
                  Each pillow core features thousands of molded pin-holes that create an active ventilation system. As the head moves, stale air is pushed out and fresh air is drawn in, maintaining a thermal-neutral sleeping environment.
                </p>
                <div className="flex items-center gap-6">
                   <div className="flex flex-col">
                      <div className="text-2xl font-black">100%</div>
                      <span className="text-[8px] font-black uppercase tracking-widest text-[#74C69D]">Natural Latex</span>
                   </div>
                   <div className="w-px h-10 bg-white/10"></div>
                   <div className="flex flex-col">
                      <div className="text-2xl font-black">Open-Cell</div>
                      <span className="text-[8px] font-black uppercase tracking-widest text-[#74C69D]">Breathable Structure</span>
                   </div>
                </div>
             </div>
             <div className="reveal-right flex flex-col items-center">
                <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center relative shadow-2xl border border-gray-100 group">
                   <div className="absolute inset-0 border-[20px] border-[#40916C]/5 rounded-full animate-ping"></div>
                   <div className="text-6xl group-hover:scale-110 transition-transform duration-700">💨</div>
                </div>
                <p className="mt-12 text-[10px] font-black text-[#1B4332] uppercase tracking-[0.4em] text-center italic">Self-Ventilating Matrix for Hospitality Hygiene Standards</p>
             </div>
          </div>
        </div>
      </section>

      {/* Section 5: Standard Sizes (Export-Ready) */}
      <section className="py-32 bg-white reveal">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-[#1B4332] mb-12 text-center uppercase tracking-widest">Export Standard Sizing</h2>
            <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-lg">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="p-8 text-[10px] font-black text-gray-400 uppercase tracking-widest">Market Format</th>
                    <th className="p-8 text-[10px] font-black text-gray-400 uppercase tracking-widest">Dimensions (cm)</th>
                    <th className="p-8 text-[10px] font-black text-gray-400 uppercase tracking-widest">Dimensions (in)</th>
                  </tr>
                </thead>
                <tbody className="text-xs font-bold text-[#1B4332] uppercase tracking-wider">
                  <tr className="border-b border-gray-50 hover:bg-[#1B4332]/5 transition-colors group">
                    <td className="p-8 font-black sticky left-0 bg-white group-hover:bg-[#1B4332]/5 uppercase">Standard EU</td>
                    <td className="p-8 text-gray-500">60 x 40 x 12</td>
                    <td className="p-8 text-gray-500">23.6 x 15.7 x 4.7</td>
                  </tr>
                  <tr className="border-b border-gray-50 hover:bg-[#1B4332]/5 transition-colors group">
                    <td className="p-8 font-black sticky left-0 bg-white group-hover:bg-[#1B4332]/5 uppercase">King Size</td>
                    <td className="p-8 text-gray-500">70 x 40 x 14</td>
                    <td className="p-8 text-gray-500">27.5 x 15.7 x 5.5</td>
                  </tr>
                  <tr className="hover:bg-[#1B4332]/5 transition-colors group">
                    <td className="p-8 font-black sticky left-0 bg-white group-hover:bg-[#1B4332]/5 uppercase">Cervical Contour</td>
                    <td className="p-8 text-gray-500">60 x 38 x 10/12</td>
                    <td className="p-8 text-gray-500">23.6 x 15.0 x 3.9/4.7</td>
                  </tr>
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
                   <span className="text-3xl group-hover:rotate-12 transition-transform">🧼</span>
                   <h4 className="text-sm font-black text-[#1B4332] uppercase tracking-widest">Cover Maintenance</h4>
                </div>
                <ul className="space-y-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                   <li>• Removable & machine washable</li>
                   <li>• Gentle cycle 30°C recommended</li>
                   <li>• Air dry to prevent fiber stress</li>
                   <li>• Do not iron inner protector</li>
                </ul>
             </div>
             <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100 hover-lift transition-all group border-t-4 border-[#1B4332]">
                <div className="flex items-center gap-4 mb-8">
                   <span className="text-3xl group-hover:rotate-12 transition-transform">🧪</span>
                   <h4 className="text-sm font-black text-[#1B4332] uppercase tracking-widest">Latex Core Care</h4>
                </div>
                <ul className="space-y-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                   <li>• Naturally dust-mite resistant</li>
                   <li>• Do not machine wash the core</li>
                   <li>• Keep away from direct sunlight</li>
                   <li>• Spot clean only if necessary</li>
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
              <h2 className="text-4xl font-black text-[#1B4332] mb-10 tracking-tight">Enterprise OEM <br />Packaging Options.</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-12">
                We provide complete end-to-end retail readiness for pillow brands, from custom fabric covers to vacuum-sealed display boxes.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { title: 'Vacuum Polybag', icon: '🛍️' },
                  { title: 'Branded Display Box', icon: '📦' },
                  { title: 'Fabric Dust Bag', icon: '🧶' },
                  { title: 'One-Color Print Box', icon: '🎨' }
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
                   'Custom Logo Fabric Label', 'Brand-Specific Outer Covers',
                   'UPC/EAN Barcode Inclusion', 'Master Carton Branding',
                   'Multi-Language Spec Sheets', 'Optional Retail Inserts'
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
                <h2 className="text-3xl font-black mb-8 leading-tight tracking-tight">Request Specifications / Bulk Quote</h2>
                <p className="text-gray-300 font-light mb-12">Submit your pillow project requirements. Our dedicated B2B engineering desk will respond within 24 business hours.</p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl group-hover:bg-[#74C69D] group-hover:text-[#1B4332] transition-all">📋</span>
                    <span className="text-[10px] font-black uppercase tracking-widest">Custom Mold Review</span>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl group-hover:bg-[#74C69D] group-hover:text-[#1B4332] transition-all">🚢</span>
                    <span className="text-[10px] font-black uppercase tracking-widest">Global Export Pricing</span>
                  </div>
                </div>
              </div>
              <div className="pt-12 border-t border-white/10 mt-12 text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
                Eco-Latex B2B Division
              </div>
            </div>
            <div className="lg:w-2/3 bg-white p-12 md:p-20">
               <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => { e.preventDefault(); alert('Inquiry sent. Our B2B desk will contact you shortly.'); }}>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Company Name</label>
                    <input type="text" required className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332] outline-none transition-all font-medium text-sm" placeholder="e.g. Nordic Bedding" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input type="email" required className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332] outline-none transition-all font-medium text-sm" placeholder="procurement@company.com" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Pillow Type</label>
                    <select className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#1B4332] outline-none transition-all font-medium text-sm appearance-none uppercase tracking-widest">
                       <option>Classic Molded</option>
                       <option>Contour / Cervical</option>
                       <option>Ventilated Design</option>
                       <option>Custom Mold Request</option>
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Preferred Firmness</label>
                    <select className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#1B4332] outline-none transition-all font-medium text-sm appearance-none uppercase tracking-widest">
                       <option>Medium (Standard)</option>
                       <option>Soft</option>
                       <option>Firm</option>
                    </select>
                 </div>
                 <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Sizing & Est. Volume</label>
                    <textarea rows={5} required className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#1B4332] outline-none transition-all font-medium text-sm" placeholder="Describe size breakdown and monthly/yearly volume expectations..."></textarea>
                 </div>
                 <div className="md:col-span-2 flex flex-col md:flex-row justify-between items-center gap-8">
                    <label className="flex items-center gap-3 cursor-pointer group">
                       <input type="checkbox" required className="w-5 h-5 rounded border-gray-300 text-[#1B4332] focus:ring-[#1B4332]" />
                       <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest group-hover:text-[#1B4332] transition-colors">Accept B2B Terms</span>
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

export default MoldedLatexPillows;
