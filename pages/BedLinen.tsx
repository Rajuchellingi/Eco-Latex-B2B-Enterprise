
import React, { useState } from 'react';

const BedLinen: React.FC = () => {
  const [fabricTab, setFabricTab] = useState<'cotton' | 'bamboo'>('cotton');
  const [sizeTab, setSizeTab] = useState<'eu' | 'usa'>('eu');

  const scrollToRFQ = () => {
    document.getElementById('rfq-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const euSizes = [
    { type: 'Bed Sheet', size: '240 x 260', fitted: '90 x 200 + 30' },
    { type: 'Duvet Cover', size: '140 x 200', fitted: '200 x 220' },
    { type: 'Pillowcase', size: '50 x 70', fitted: '80 x 80' },
  ];

  const usaSizes = [
    { type: 'Bed Sheet', size: '66" x 96"', fitted: '39" x 75" + 15"' },
    { type: 'Duvet Cover', size: '68" x 86"', fitted: '90" x 92"' },
    { type: 'Pillowcase', size: '20" x 26"', fitted: '20" x 36"' },
  ];

  const colors = [
    { name: 'Ivory', hex: '#FDF5E6' },
    { name: 'Stone', hex: '#D2B48C' },
    { name: 'Sage', hex: '#BC8F8F' },
    { name: 'Deep Forest', hex: '#1B4332' },
    { name: 'Cloud Gray', hex: '#DCDCDC' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[550px] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1920" 
            alt="Bed Linen" 
            className="w-full h-full object-cover opacity-90 transition-transform duration-[10000ms] scale-105"
            style={{ transform: 'scale(1.05)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B4332]/95 via-[#1B4332]/60 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-3xl reveal">
            <span className="inline-block px-3 py-1 bg-[#40916C] text-[10px] font-black uppercase tracking-[0.3em] mb-6 rounded">Premium Collection</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1]">
              Organic Bed Linen <br />Collections
            </h1>
            <p className="text-xl text-gray-200 mb-10 font-medium tracking-wide">
              Certified fabrics engineered for hotels, wellness brands, and private-label bedding programs.
            </p>
            <div className="flex flex-wrap gap-5">
              <button onClick={scrollToRFQ} className="bg-[#40916C] hover:bg-white hover:text-[#1B4332] text-white px-10 py-5 rounded font-black text-xs uppercase tracking-widest transition-all shadow-xl hover-lift press-scale">
                Request Bulk Quote
              </button>
              <button className="bg-white/10 border border-white/20 text-white px-10 py-5 rounded font-black text-xs uppercase tracking-widest transition-all hover:bg-white hover:text-[#1B4332] hover-lift press-scale backdrop-blur-sm">
                Download Bed Linen Catalog
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Fabric Collections Switcher */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2 reveal-left">
                <h4 className="text-[#40916C] font-bold text-[11px] tracking-[0.4em] uppercase mb-8">Fabric Intelligence</h4>
                <h2 className="text-4xl font-black text-[#1B4332] mb-12 tracking-tight">Material Excellence</h2>
                
                <div className="space-y-4 mb-12">
                  <button 
                    onClick={() => setFabricTab('cotton')}
                    className={`w-full text-left p-6 rounded-2xl transition-all border ${fabricTab === 'cotton' ? 'bg-[#1B4332] text-white border-[#1B4332] shadow-xl translate-x-4' : 'bg-gray-50 text-gray-500 border-gray-100 hover:bg-white hover:border-[#40916C]'}`}
                  >
                    <span className="block text-[10px] font-black uppercase tracking-widest mb-1 opacity-60">Collection 01</span>
                    <span className="text-lg font-black uppercase tracking-tight">Organic Cotton – TC 400</span>
                  </button>
                  <button 
                    onClick={() => setFabricTab('bamboo')}
                    className={`w-full text-left p-6 rounded-2xl transition-all border ${fabricTab === 'bamboo' ? 'bg-[#1B4332] text-white border-[#1B4332] shadow-xl translate-x-4' : 'bg-gray-50 text-gray-500 border-gray-100 hover:bg-white hover:border-[#40916C]'}`}
                  >
                    <span className="block text-[10px] font-black uppercase tracking-widest mb-1 opacity-60">Collection 02</span>
                    <span className="text-lg font-black uppercase tracking-tight">Lyocell Bamboo – TC 300</span>
                  </button>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                  <p className="text-[10px] font-black text-[#40916C] uppercase tracking-widest mb-2">Target Market</p>
                  <p className="text-[#1B4332] font-bold text-sm">
                    {fabricTab === 'cotton' ? 'Luxury Hotels / Premium Brands / Sustainable Wellness' : 'Premium Brands / Warm or Humid Climates / Hypoallergenic Needs'}
                  </p>
                </div>
              </div>

              <div className="lg:w-1/2 reveal-right">
                <div className="bg-white rounded-[3rem] p-12 shadow-2xl border border-gray-50 min-h-[500px] flex flex-col justify-center animate-mega-slide" key={fabricTab}>
                  <div className="aspect-video rounded-2xl overflow-hidden mb-10 shadow-lg">
                    <img 
                      src={fabricTab === 'cotton' ? "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800" : "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=800"} 
                      alt="Fabric Detail" 
                      className="w-full h-full object-cover transition-transform duration-[5000ms] hover:scale-110"
                    />
                  </div>
                  <h3 className="text-2xl font-black text-[#1B4332] mb-6 uppercase tracking-tight">
                    {fabricTab === 'cotton' ? 'Superior 400 Thread Count' : 'Sustainable Lyocell Finish'}
                  </h3>
                  <ul className="space-y-4">
                    {(fabricTab === 'cotton' 
                      ? ['Extreme Durability for Hotel Laundry', 'Crisp & Breathable Matte Finish', '100% GOTS Certified Organic', 'High Tensile Strength Fiber']
                      : ['Superior Moisture Management', 'Silky Smooth Hypoallergenic Feel', 'Natural Antibacterial Properties', 'Sustainable Eco-Loop Production']
                    ).map((f, i) => (
                      <li key={i} className="flex items-center gap-4 text-gray-500 font-medium">
                        <span className="w-1.5 h-1.5 bg-[#40916C] rounded-full"></span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Product Range */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 reveal">
            <h2 className="text-4xl font-black text-[#1B4332] mb-6 tracking-tight">Product Range Scope</h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">Complete linen systems engineered for enterprise bulk procurement.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 reveal-stagger">
            {['Bed Sheets', 'Fitted Sheets', 'Duvet Covers', 'Pillowcases'].map((item, idx) => (
              <div key={idx} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all hover-lift border border-transparent hover:border-[#40916C]/20 group">
                <div className="h-48 bg-gray-100 overflow-hidden relative">
                   <img src={`https://images.unsplash.com/photo-1581578731522-aa02d87e07e6?auto=format&fit=crop&q=80&w=400&sig=${idx}`} alt={item} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                   <div className="absolute inset-0 bg-black/10"></div>
                </div>
                <div className="p-8">
                  <h4 className="text-lg font-black text-[#1B4332] mb-4 uppercase tracking-widest">{item}</h4>
                  <ul className="text-[10px] font-black text-gray-400 uppercase tracking-widest space-y-2">
                    <li>• TC 400 / TC 300 Options</li>
                    <li>• Custom Sizes Available</li>
                    <li>• Private Label Ready</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Color Palette */}
      <section className="py-32 bg-white reveal">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-[#1B4332] mb-12 uppercase tracking-widest">Enterprise Color Palette</h2>
          <div className="flex flex-wrap justify-center gap-10 max-w-4xl mx-auto">
            {colors.map((color, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div 
                  className="w-20 h-20 rounded-full border border-gray-100 shadow-inner mb-4 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: color.hex }}
                ></div>
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{color.name}</span>
              </div>
            ))}
          </div>
          <p className="mt-16 text-gray-400 font-medium italic text-sm">Custom dyeing and brand-specific shades available on request for high-volume orders.</p>
        </div>
      </section>

      {/* Section 4: Standard Sizes */}
      <section className="py-32 bg-gray-50 reveal">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
              <div>
                <h2 className="text-3xl font-black text-[#1B4332] uppercase tracking-tight mb-2">Export Sizing Tables</h2>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">International Configuration Standards</p>
              </div>
              <div className="flex bg-white p-1 rounded-xl shadow-sm border border-gray-100">
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
                    <th className="p-8 text-[10px] font-black text-gray-400 uppercase tracking-widest sticky left-0 bg-gray-50">Product Type</th>
                    <th className="p-8 text-[10px] font-black text-gray-400 uppercase tracking-widest">Standard Size</th>
                    <th className="p-8 text-[10px] font-black text-gray-400 uppercase tracking-widest">Fitted / Alternative</th>
                  </tr>
                </thead>
                <tbody className="text-xs font-bold text-[#1B4332] uppercase tracking-wider animate-reveal">
                  {(sizeTab === 'eu' ? euSizes : usaSizes).map((row, idx) => (
                    <tr key={idx} className="border-b border-gray-50 last:border-0 hover:bg-[#1B4332]/5 transition-colors group">
                      <td className="p-8 font-black sticky left-0 bg-white group-hover:bg-[#1B4332]/5">{row.type}</td>
                      <td className="p-8 text-gray-500">{row.size}</td>
                      <td className="p-8 text-gray-500">{row.fitted}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Care & Maintenance */}
      <section className="py-32 bg-white reveal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-black text-[#1B4332] uppercase tracking-widest mb-4">Care & Maintenance</h2>
            <p className="text-gray-400 font-medium text-sm">Protocol for longevity and fiber preservation.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="p-12 rounded-[2.5rem] bg-gray-50 border border-gray-100 group hover-lift transition-all">
               <h4 className="text-sm font-black text-[#1B4332] uppercase tracking-widest mb-8 flex items-center gap-4">
                 <span className="text-2xl">🌱</span> Organic Cotton
               </h4>
               <ul className="space-y-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
                 <li className="flex gap-4"><span>—</span> Warm machine wash 40°C</li>
                 <li className="flex gap-4"><span>—</span> Tumble dry medium heat</li>
                 <li className="flex gap-4"><span>—</span> Warm iron if required</li>
                 <li className="flex gap-4"><span>—</span> Wash with like colors</li>
               </ul>
            </div>
            <div className="p-12 rounded-[2.5rem] bg-gray-50 border border-gray-100 group hover-lift transition-all border-t-4 border-[#1B4332]">
               <h4 className="text-sm font-black text-[#1B4332] uppercase tracking-widest mb-8 flex items-center gap-4">
                 <span className="text-2xl">🎋</span> Bamboo Lyocell
               </h4>
               <ul className="space-y-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
                 <li className="flex gap-4"><span>—</span> Cold or gentle wash 30°C</li>
                 <li className="flex gap-4"><span>—</span> Low heat or line dry</li>
                 <li className="flex gap-4"><span>—</span> Cool iron only</li>
                 <li className="flex gap-4"><span>—</span> Do not use bleach</li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Packaging & Private Label */}
      <section className="py-32 bg-gray-50 reveal">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center max-w-6xl mx-auto">
            <div className="reveal-left">
              <h2 className="text-4xl font-black text-[#1B4332] mb-10 tracking-tight">Private Label & <br />Export Packaging</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-12">
                We provide a complete turnkey solution for brand owners, covering everything from the internal silk labels to the final master carton configuration.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  'Custom Silk Labels', 'Barcoded Hangtags', 
                  'Branded Inserts', 'Retail-Ready Polybags', 
                  'Size Stickers', 'Master Carton Branding'
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
            <div className="reveal-right bg-white p-16 rounded-[3rem] shadow-xl border border-gray-100">
               <div className="text-6xl mb-10">📦</div>
               <h4 className="text-xl font-black text-[#1B4332] mb-6 uppercase tracking-widest">Export Specs</h4>
               <p className="text-gray-500 text-sm leading-relaxed mb-8 font-medium">
                 All linen orders are packed in heavy-duty corrugated cartons with moisture-barrier liners for long-haul maritime transport.
               </p>
               <div className="flex justify-between items-center pt-8 border-t border-gray-100">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Container Readiness</span>
                  <span className="text-[#1B4332] font-black text-xs">LCL / FCL COMPLIANT</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Quality & Certifications */}
      <section className="py-24 bg-white border-y border-gray-100 reveal">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-black text-[#1B4332] mb-16 uppercase tracking-widest">Quality, Safety & Sustainability Assured</h2>
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
             <div className="text-xl font-black tracking-tighter">GOTS ORGANIC</div>
             <div className="text-xl font-black tracking-tighter">OEKO-TEX® 100</div>
             <div className="text-xl font-black tracking-tighter">BCI COTTON</div>
             <div className="text-xl font-black tracking-tighter">ISPA MEMBER</div>
             <div className="text-xl font-black tracking-tighter">ISO 9001:2015</div>
          </div>
        </div>
      </section>

      {/* Section 8: B2B RFQ */}
      <section id="rfq-section" className="py-32 bg-white reveal">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row shadow-3xl rounded-[3rem] overflow-hidden">
            <div className="lg:w-1/3 bg-[#1B4332] p-16 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-black mb-8 leading-tight tracking-tight">Request Specifications / Bulk Quote</h2>
                <p className="text-gray-300 font-light mb-12">Dedicated B2B team will respond within business hours to your linen procurement inquiry.</p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl group-hover:bg-[#74C69D] group-hover:text-[#1B4332] transition-all">📋</span>
                    <span className="text-[10px] font-black uppercase tracking-widest">Custom Fabric Sampling</span>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl group-hover:bg-[#74C69D] group-hover:text-[#1B4332] transition-all">🏭</span>
                    <span className="text-[10px] font-black uppercase tracking-widest">Direct Factory Pricing</span>
                  </div>
                </div>
              </div>
              <div className="pt-12 border-t border-white/10 mt-12 text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
                Eco-Latex B2B Division
              </div>
            </div>
            <div className="lg:w-2/3 bg-white p-12 md:p-20">
               <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => { e.preventDefault(); alert('Inquiry received. A specialist will contact you shortly.'); }}>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Company Name</label>
                    <input type="text" required className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332] outline-none transition-all font-medium text-sm" placeholder="e.g. Grand Plaza Hotels" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input type="email" required className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332] outline-none transition-all font-medium text-sm" placeholder="procurement@brand.com" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Fabric Choice</label>
                    <select className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#1B4332] outline-none transition-all font-medium text-sm uppercase tracking-widest appearance-none">
                       <option>Organic Cotton (TC 400)</option>
                       <option>Bamboo Lyocell (TC 300)</option>
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Product Category</label>
                    <select className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#1B4332] outline-none transition-all font-medium text-sm uppercase tracking-widest appearance-none">
                       <option>Full Collection</option>
                       <option>Bed Sheets Only</option>
                       <option>Duvet Covers Only</option>
                       <option>Pillowcases Only</option>
                    </select>
                 </div>
                 <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Specifications & Volume</label>
                    <textarea rows={5} required className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#1B4332] outline-none transition-all font-medium text-sm" placeholder="Estimated quantity, size breakdown, custom color needs..."></textarea>
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

export default BedLinen;
