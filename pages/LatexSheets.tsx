
import React, { useState } from 'react';

const LatexSheets: React.FC = () => {
  const [performanceTab, setPerformanceTab] = useState<'mono' | 'seven'>('mono');

  const scrollToRFQ = () => {
    document.getElementById('rfq-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const densityChart = [
    { firmness: 'Super Soft', density: '60 - 65', ild: '11 - 15' },
    { firmness: 'Soft', density: '65 - 70', ild: '16 - 20' },
    { firmness: 'Medium Soft', density: '70 - 75', ild: '21 - 25' },
    { firmness: 'Medium', density: '75 - 80', ild: '26 - 30' },
    { firmness: 'Medium Firm', density: '80 - 85', ild: '31 - 35' },
    { firmness: 'Firm', density: '85 - 90', ild: '36 - 40' },
    { firmness: 'Extra Firm', density: '90 - 95', ild: '41 - 45' },
    { firmness: 'XX Firm', density: '95+', ild: '46+' },
  ];

  const packingMethods = [
    { icon: '📜', name: 'Rolled Vacuum Pack', desc: 'Space-optimized for containers' },
    { icon: '⬛', name: 'Flat Pack', desc: 'Standard palletized storage' },
    { icon: '🛍️', name: 'Polysac (Rice Bag)', desc: 'Economic bulk protection' },
    { icon: '🪵', name: 'Wooden Pallet', desc: 'Heavy-duty industrial handling' },
    { icon: '📦', name: 'Corrugated Box', desc: 'Premium retail-ready shipping' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[550px] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1629738553831-f40c3080c53c?auto=format&fit=crop&q=80&w=1920" 
            alt="Latex Sheets" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B4332] via-[#1B4332]/70 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-3xl reveal">
            <span className="inline-block px-3 py-1 bg-[#40916C] text-[10px] font-black uppercase tracking-[0.3em] mb-6 rounded">Sleep with Nature</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1]">
              Customize your <br />sleeping comfort.
            </h1>
            <p className="text-xl text-gray-200 mb-10 font-medium tracking-wide">Sustainably sourced latex foam engineered for private label manufacturing and global distribution.</p>
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

      {/* Trust Strip */}
      <section className="py-12 bg-gray-50 border-b border-gray-100 reveal">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { icon: '🌱', label: 'Chemical-free' },
              { icon: '🛡️', label: 'Hypoallergenic' },
              { icon: '💨', label: 'Breathable' },
              { icon: '🏗️', label: 'Durable support' },
              { icon: '♻️', label: 'Sustainable choice' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <span className="text-2xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</span>
                <span className="text-[10px] font-black text-[#1B4332] uppercase tracking-widest">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1: Essence */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="reveal-left">
              <h4 className="text-[#40916C] font-bold text-[11px] tracking-[0.4em] uppercase mb-8">Material Excellence</h4>
              <h2 className="text-4xl font-black text-[#1B4332] mb-10 leading-tight">Experience the Essence <br />of Eco Latex Foam.</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Eco-Latex sheets are the pinnacle of natural comfort. Utilizing the proven Dunlop manufacturing process, we create latex cores that offer unparalleled resilience and breathability.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed font-medium">
                Designed for brands that refuse to compromise on purity, our sheets provide a chemical-free foundation for premium sleep systems.
              </p>
            </div>
            <div className="reveal-right">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative group">
                <img src="https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80&w=1200" alt="Latex Texture" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[#1B4332]/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Performance Levels */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 reveal">
            <h2 className="text-4xl font-black text-[#1B4332] mb-6 tracking-tight">Eco Latex Foam Performance Levels</h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">Choose between uniform consistency and targeted orthopedic support.</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center mb-16 gap-6 reveal">
              <button 
                onClick={() => setPerformanceTab('mono')}
                className={`px-12 py-5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  performanceTab === 'mono' ? 'bg-[#1B4332] text-white shadow-2xl scale-105' : 'bg-white text-gray-400 border border-gray-100 hover:bg-gray-50'
                }`}
              >
                Mono Zone Latex Foam
              </button>
              <button 
                onClick={() => setPerformanceTab('seven')}
                className={`px-12 py-5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  performanceTab === 'seven' ? 'bg-[#1B4332] text-white shadow-2xl scale-105' : 'bg-white text-gray-400 border border-gray-100 hover:bg-gray-50'
                }`}
              >
                7-Zone Multizone Foam
              </button>
            </div>

            <div className="bg-white rounded-[3rem] shadow-xl p-10 md:p-20 overflow-hidden relative">
              <div key={performanceTab} className="grid lg:grid-cols-2 gap-16 items-center animate-mega-slide">
                <div>
                  <h3 className="text-3xl font-black text-[#1B4332] mb-8 uppercase tracking-tight">
                    {performanceTab === 'mono' ? 'Uniform Structural Support' : 'Targeted Spinal Alignment'}
                  </h3>
                  <ul className="space-y-6">
                    {(performanceTab === 'mono' 
                      ? [
                        'Uniform support with single hole pattern across the entire core.',
                        'Quick response resilience with instant recovery force.',
                        'Stable firmness ideal for back and stomach sleepers.',
                        'Cost-effective solution for premium organic bedding lines.'
                      ] 
                      : [
                        'Seven distinct firmness zones mapped to body pressure points.',
                        'Enhanced pressure relief for shoulders, hips, and lower back.',
                        'Customized perforation sizes for targeted density variations.',
                        'Optimized spinal alignment for side sleepers and orthopedic care.'
                      ]
                    ).map((bullet, idx) => (
                      <li key={idx} className="flex gap-4 group">
                        <span className="w-6 h-6 rounded-full bg-[#1B4332]/5 flex items-center justify-center text-[#40916C] font-black text-[10px] group-hover:bg-[#1B4332] group-hover:text-white transition-colors">0{idx+1}</span>
                        <p className="text-gray-600 font-medium leading-relaxed">{bullet}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <div className="bg-[#1B4332]/5 rounded-2xl p-8 border border-dashed border-[#1B4332]/20">
                    <img 
                      src={performanceTab === 'mono' 
                        ? "https://images.unsplash.com/photo-1553152531-b98a2fc8d3bf?auto=format&fit=crop&q=80&w=600" 
                        : "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600"
                      } 
                      className="rounded-xl shadow-lg mix-blend-multiply opacity-80" 
                      alt="Product Diagram" 
                    />
                    {performanceTab === 'seven' && (
                      <div className="mt-8 flex justify-between px-2">
                        {[1,2,3,4,5,6,7].map(z => (
                          <div key={z} className="flex flex-col items-center">
                            <div className="w-6 h-6 bg-[#1B4332] rounded flex items-center justify-center text-white text-[8px] font-bold">{z}</div>
                            <span className="text-[6px] uppercase font-bold text-gray-400 mt-2">Zone</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Comparison Table */}
      <section className="py-32 bg-white reveal">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-black text-[#1B4332] mb-12 text-center">Summary Comparison Table</h2>
            <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-lg">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#1B4332] text-white">
                    <th className="p-8 text-[11px] font-black uppercase tracking-[0.2em]">Feature</th>
                    <th className="p-8 text-[11px] font-black uppercase tracking-[0.2em]">Mono-Zone Latex</th>
                    <th className="p-8 text-[11px] font-black uppercase tracking-[0.2em]">7-Zone Latex</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-medium text-gray-600">
                  <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors group">
                    <td className="p-8 font-black text-[#1B4332] uppercase text-[10px] tracking-widest">Support Type</td>
                    <td className="p-8">Uniform consistency</td>
                    <td className="p-8">Zoned orthopedic response</td>
                  </tr>
                  <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors group">
                    <td className="p-8 font-black text-[#1B4332] uppercase text-[10px] tracking-widest">Spinal Alignment</td>
                    <td className="p-8">Standard</td>
                    <td className="p-8">Optimized (Postural care)</td>
                  </tr>
                  <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors group">
                    <td className="p-8 font-black text-[#1B4332] uppercase text-[10px] tracking-widest">Pressure Relief</td>
                    <td className="p-8">High</td>
                    <td className="p-8">Maximum (Targeted)</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors group bg-gray-50/50">
                    <td className="p-8 font-black text-[#1B4332] uppercase text-[10px] tracking-widest">Best For</td>
                    <td className="p-8">Back/Stomach sleepers, Consistent feel</td>
                    <td className="p-8">Side sleepers, Pressure sensitivity</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Density Chart */}
      <section className="py-32 bg-gray-50 reveal">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <h2 className="text-3xl font-black text-[#1B4332] uppercase tracking-tight">Eco-Latex Standard Density Chart</h2>
              <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Revised Date: August 2025</div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="pb-6 text-[10px] font-black uppercase text-gray-400 tracking-widest">Firmness Level</th>
                    <th className="pb-6 text-[10px] font-black uppercase text-gray-400 tracking-widest">Density Range (kg/m³)</th>
                    <th className="pb-6 text-[10px] font-black uppercase text-gray-400 tracking-widest text-center">ILD Range (lb)</th>
                  </tr>
                </thead>
                <tbody className="text-xs font-bold text-[#1B4332] uppercase tracking-wider">
                  {densityChart.map((row, idx) => (
                    <tr key={idx} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 group relative">
                      <td className="py-5 font-black flex items-center gap-3">
                        <span className="w-1 h-3 bg-[#40916C] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        {row.firmness}
                      </td>
                      <td className="py-5 text-gray-500">{row.density}</td>
                      <td className="py-5 text-center bg-gray-50/50 rounded group-hover:bg-[#1B4332]/5 transition-colors">{row.ild}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8 p-6 bg-[#1B4332]/5 rounded-xl border border-[#1B4332]/10 flex items-start gap-5">
              <span className="text-xl">🔬</span>
              <p className="text-[10px] font-medium text-gray-500 leading-relaxed uppercase tracking-widest">
                Testing Note: Sample size 4" x 15" x 15", ISO 2439 Test Method "A", 40% for 30 seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Graphite Infused */}
      <section className="py-32 bg-white reveal">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-[#1B4332] rounded-[3rem] p-12 md:p-24 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12 scale-150">
               <span className="text-[150px] font-black leading-none">FR</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-20 relative z-10">
              <div className="reveal-left">
                <div className="inline-block px-4 py-1.5 bg-[#74C69D] text-[#1B4332] text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-8">
                  FR Compliance Technology
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-tight">Latex infused with <br />Natural Graphite.</h2>
                <p className="text-gray-300 text-lg font-light leading-relaxed mb-12">
                  Our graphite-infused natural latex provides advanced fire-retardant (FR) properties without the use of harsh chemicals. Maintain your organic profile while meeting global safety standards.
                </p>
                <div className="grid grid-cols-2 gap-8">
                   {[
                     { title: 'Vegan-friendly', icon: '🍃' },
                     { title: 'FR Compliant', icon: '🔥' },
                     { title: 'Comfort & Durable', icon: '💪' },
                     { title: 'Organic Certified', icon: '📜' }
                   ].map((f, idx) => (
                     <div key={idx} className="flex items-center gap-4">
                        <span className="text-2xl">{f.icon}</span>
                        <span className="text-[10px] font-black uppercase tracking-widest">{f.title}</span>
                     </div>
                   ))}
                </div>
              </div>
              <div className="reveal-right flex flex-col justify-center">
                 <div className="aspect-square bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center p-10 group overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1553152531-b98a2fc8d3bf?auto=format&fit=crop&q=80&w=600" className="w-full grayscale mix-blend-screen opacity-50 group-hover:scale-110 transition-transform duration-1000" alt="Graphite Latex" />
                 </div>
                 <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#74C69D] mt-8 text-center italic">Advanced material science for global distributors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Packing Methods */}
      <section className="py-32 bg-gray-50 reveal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-[#1B4332] mb-6 tracking-tight">Packing Methods</h2>
            <p className="text-gray-500 font-medium tracking-widest uppercase text-[10px]">Can be customized as per customer requirement</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 reveal-stagger max-w-6xl mx-auto">
             {packingMethods.map((method, idx) => (
               <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover-lift flex flex-col items-center text-center transition-all group">
                  <div className="text-4xl mb-6 group-hover:rotate-12 transition-transform">{method.icon}</div>
                  <h4 className="text-[10px] font-black text-[#1B4332] uppercase tracking-widest mb-3 leading-tight">{method.name}</h4>
                  <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">{method.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Section 7: B2B Customization */}
      <section className="py-32 bg-white reveal">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
            <div className="reveal-left">
              <h4 className="text-[#40916C] font-bold text-[11px] tracking-[0.4em] uppercase mb-8">B2B Customization</h4>
              <h2 className="text-4xl font-black text-[#1B4332] mb-10 tracking-tight">Private Label Core <br />Manufacturing</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-12">
                We provide complete OEM/ODM solutions for latex sheets, allowing brands to control every technical aspect of their product portfolio.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                {[
                  'Bespoke Dimensions', 'Custom Thickness (1cm - 15cm)',
                  'Firmness / ILD Adjustments', 'Zone Configuration Mapping',
                  'Graphite Infusion Layer', 'Custom Packaging Formats',
                  'Brand-Specific Labeling', 'Export Certification Docs'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group cursor-default">
                    <div className="w-5 h-5 rounded border border-[#1B4332]/20 flex items-center justify-center group-hover:bg-[#1B4332] transition-colors">
                      <span className="text-white text-[10px] opacity-0 group-hover:opacity-100">✓</span>
                    </div>
                    <span className="text-xs font-black text-[#1B4332] uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-right">
              <div className="bg-gray-50 p-12 rounded-[2.5rem] border border-gray-100 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#40916C]/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                 <h3 className="text-xl font-black text-[#1B4332] mb-8 uppercase tracking-widest">Engineering Check</h3>
                 <p className="text-gray-500 text-sm leading-relaxed mb-10 font-medium italic">"Every batch is tested against your specific brand standard before export clearance."</p>
                 <button onClick={scrollToRFQ} className="text-[#1B4332] font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-4 hover:gap-6 transition-all">
                    Inquire for Specs <span>→</span>
                 </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Compliance Block */}
      <section className="py-24 bg-gray-50 border-y border-gray-100 reveal">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black text-[#1B4332] mb-16 uppercase tracking-widest">Quality, safety, and sustainability assured</h2>
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
             <div className="text-xl font-black tracking-tighter">GOTS ORGANIC</div>
             <div className="text-xl font-black tracking-tighter">OEKO-TEX®</div>
             <div className="text-xl font-black tracking-tighter">LGA TESTED</div>
             <div className="text-xl font-black tracking-tighter">ECO-INSTITUT</div>
             <div className="text-xl font-black tracking-tighter">ISPA MEMBER</div>
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
                <p className="text-gray-300 font-light mb-12">Submit your requirements to our engineering desk for a tailored quotation and technical data sheets.</p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl group-hover:bg-[#74C69D] group-hover:text-[#1B4332] transition-all">🕒</span>
                    <span className="text-[10px] font-black uppercase tracking-widest">Response within business hours</span>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl group-hover:bg-[#74C69D] group-hover:text-[#1B4332] transition-all">🏗️</span>
                    <span className="text-[10px] font-black uppercase tracking-widest">Custom samples available</span>
                  </div>
                </div>
              </div>
              <div className="pt-12 border-t border-white/10 mt-12">
                 <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Export Headquarters</p>
                 <p className="text-sm font-medium mt-2">Katunayake Export Processing Zone, SL</p>
              </div>
            </div>
            <div className="lg:w-2/3 bg-white p-12 md:p-20">
               <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Company Name</label>
                    <input type="text" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#1B4332] outline-none transition-all font-medium text-sm" placeholder="e.g. Northern Sleep Ltd." />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input type="email" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#1B4332] outline-none transition-all font-medium text-sm" placeholder="business@company.com" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Intended Use</label>
                    <select className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#1B4332] outline-none transition-all font-medium text-sm uppercase tracking-wider appearance-none">
                       <option>Brand Owner</option>
                       <option>Hospitality Group</option>
                       <option>Export Distributor</option>
                       <option>Hospital Equipment</option>
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Product Type</label>
                    <select className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#1B4332] outline-none transition-all font-medium text-sm uppercase tracking-wider appearance-none">
                       <option>Mono Zone Latex</option>
                       <option>7-Zone Multizone</option>
                       <option>Graphite Infused (FR)</option>
                    </select>
                 </div>
                 <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Message / Specs</label>
                    <textarea rows={5} className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#1B4332] outline-none transition-all font-medium text-sm" placeholder="Dimensions, thickness, density requirements..."></textarea>
                 </div>
                 <div className="md:col-span-2 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex gap-4">
                       <label className="flex items-center gap-3 cursor-pointer group">
                          <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-[#1B4332] focus:ring-[#1B4332]" />
                          <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest group-hover:text-[#1B4332] transition-colors">I accept Terms of Trade</span>
                       </label>
                    </div>
                    <button className="bg-[#1B4332] text-white px-12 py-5 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#2D5A27] transition-all hover-lift press-scale shadow-xl w-full md:w-auto">
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

export default LatexSheets;
