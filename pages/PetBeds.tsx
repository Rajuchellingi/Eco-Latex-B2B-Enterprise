
import React, { useState } from 'react';

const PetBeds: React.FC = () => {
  const [activeType, setActiveType] = useState<number>(0);

  const scrollToRFQ = () => {
    document.getElementById('rfq-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const bedTypes = [
    {
      label: 'Flat Cushion',
      title: 'Universal Comfort System',
      desc: 'A versatile low-profile design featuring a high-density natural latex slab. Ideal for active breeds and crate integration.',
      benefits: ['Instant Recovery Force', 'Crate-Ready Dimensions', 'Seamless Core Slab'],
      img: 'https://images.unsplash.com/photo-1591946614421-1d978fc4b445?auto=format&fit=crop&q=80&w=800'
    },
    {
      label: 'Bolstered / Nest',
      title: 'Protective Boundary Support',
      desc: 'Designed with elevated latex or natural fiber bolsters to provide head support and a sense of security for smaller or anxious pets.',
      benefits: ['Calming Perimeter', 'Cervical Support', 'Integrated Bolster Stability'],
      img: 'https://images.unsplash.com/photo-1541599540903-21b1284fa147?auto=format&fit=crop&q=80&w=800'
    },
    {
      label: 'Orthopedic Support',
      title: 'Advanced Joint Recovery',
      desc: 'Multi-layer construction utilizing varied latex densities to maximize pressure relief for senior pets or heavy breeds.',
      benefits: ['Zero Pressure Points', 'Hip & Joint Alignment', 'Medical Grade Resilience'],
      img: 'https://images.unsplash.com/photo-1541829070764-84a7d30dee62?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[550px] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1591946614421-1d978fc4b445?auto=format&fit=crop&q=80&w=1920" 
            alt="Premium Pet Bed" 
            className="w-full h-full object-cover opacity-80 transition-transform duration-[10000ms] scale-105"
            style={{ transform: 'scale(1.05)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B4332] via-[#1B4332]/70 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-3xl reveal">
            <span className="inline-block px-3 py-1 bg-[#40916C] text-[10px] font-black uppercase tracking-[0.3em] mb-6 rounded shadow-lg">Eco-Premium Pet Solutions</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1]">
              Eco-Friendly Pet Beds Built <br />for Comfort & Durability
            </h1>
            <p className="text-xl text-gray-200 mb-10 font-medium tracking-wide">
              Natural, chemical-free pet bedding solutions for private labels, retailers, and global distributors.
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

      {/* Section 1: Material & Comfort System */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center max-w-6xl mx-auto">
            <div className="reveal-left">
              <h4 className="text-[#40916C] font-bold text-[11px] tracking-[0.4em] uppercase mb-8">Canine & Feline Orthopedics</h4>
              <h2 className="text-4xl font-black text-[#1B4332] mb-10 leading-tight">Superior Support for <br />Every Body Size.</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Pets spend up to 80% of their lives resting. Our natural latex cores provide a consistent, temperature-neutral surface that protects joints from floor-impact while allowing for natural air exchange within the foam matrix.
              </p>
              <div className="flex items-center gap-6 mb-12">
                 <div className="px-6 py-3 border-2 border-[#40916C] text-[#40916C] font-black text-[10px] uppercase tracking-widest rounded-full">
                    Chemical-Free & Hypoallergenic
                 </div>
              </div>
              <div className="space-y-6">
                {[
                  { title: 'Joint Protection', desc: 'Distributes weight evenly to prevent calluses and pressure sores.' },
                  { title: 'Thermal Neutrality', desc: 'Natural latex does not trap heat like synthetic memory foam.' },
                  { title: 'Odor Resistance', desc: 'Inherent antimicrobial properties reduce pet-related bacteria.' }
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
              <div className="bg-gray-50 p-12 rounded-[3rem] border border-gray-100 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#40916C]/5 rounded-full blur-3xl -mr-10 -mt-10"></div>
                 <div className="relative w-full aspect-square bg-white rounded-2xl flex items-center justify-center p-12 group shadow-inner border border-gray-100">
                    <div className="text-8xl group-hover:scale-110 transition-transform duration-700">🐾</div>
                    <div className="absolute inset-0 border-2 border-dashed border-[#1B4332]/5 rounded-2xl m-6"></div>
                    <span className="absolute bottom-10 text-[9px] font-black text-[#1B4332] uppercase tracking-[0.4em]">LATEX CORE ARCHITECTURE</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Pet Bed Types Switcher */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-black text-[#1B4332] mb-6 tracking-tight uppercase">Product Architecture Range</h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium text-[10px] uppercase tracking-widest">Optimized for Enterprise Bulk Tendering</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center mb-16 p-2 bg-white rounded-2xl shadow-sm border border-gray-100 reveal relative overflow-hidden">
              <div 
                className="absolute top-2 bottom-2 h-[calc(100%-16px)] bg-[#1B4332] rounded-xl transition-all duration-500 ease-in-out"
                style={{ 
                  left: `calc(${activeType * (100 / 3)}% + 8px)`,
                  width: `calc(${100 / 3}% - 16px)`
                }}
              ></div>
              {bedTypes.map((type, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveType(idx)}
                  className={`flex-1 py-4 text-[10px] font-black uppercase tracking-widest relative z-10 transition-colors duration-300 ${
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
                  <span className="text-[#40916C] font-black text-[10px] tracking-widest uppercase block mb-4">DESIGN CONFIG 0{activeType + 1}</span>
                  <h3 className="text-3xl font-black text-[#1B4332] mb-8 uppercase tracking-tight leading-tight">{bedTypes[activeType].title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-10 font-medium">{bedTypes[activeType].desc}</p>
                  <div className="space-y-4">
                    {bedTypes[activeType].benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                         <div className="w-1.5 h-1.5 bg-[#40916C] rounded-full group-hover:scale-150 transition-transform"></div>
                         <span className="text-xs font-black text-[#1B4332] uppercase tracking-widest">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-2xl shadow-lg aspect-video">
                   <img src={bedTypes[activeType].img} alt={bedTypes[activeType].label} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-[#1B4332]/10 group-hover:bg-transparent transition-colors"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Size & Support Options */}
      <section className="py-32 bg-white reveal">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-black text-[#1B4332] mb-4 uppercase tracking-widest">Client Configurator</h2>
            <p className="text-gray-400 font-medium">Bespoke technical profiles for wholesale procurement.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
             <div className="space-y-8">
                <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Pet Size Profiles</h4>
                <div className="flex gap-4 flex-wrap">
                  {['Small', 'Medium', 'Large', 'Extra Large'].map((s, i) => (
                    <div key={i} className="flex-1 min-w-[120px] p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center group hover:bg-[#1B4332] cursor-pointer transition-all">
                       <span className="text-[10px] font-black text-[#1B4332] group-hover:text-white uppercase tracking-widest">{s}</span>
                    </div>
                  ))}
                </div>
             </div>
             <div className="space-y-8">
                <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Core Support Level</h4>
                <div className="flex gap-4">
                  {[
                    { label: 'Standard', best: 'Active Breeds' },
                    { label: 'Orthopedic', best: 'Senior Pets' }
                  ].map((sl, i) => (
                    <div key={i} className="flex-1 p-6 bg-gray-50 rounded-2xl border border-gray-100 text-center group hover:bg-[#1B4332] cursor-pointer transition-all">
                       <span className="text-[10px] font-black text-[#1B4332] group-hover:text-white uppercase tracking-widest">{sl.label}</span>
                       <div className="mt-4 text-[7px] font-black text-[#40916C] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Best for: {sl.best}</div>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Section 4: Cover Fabrics & Hygiene */}
      <section className="py-32 bg-gray-50 overflow-hidden reveal">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center max-w-6xl mx-auto">
             <div className="reveal-left bg-[#1B4332] p-16 rounded-[3rem] text-white relative">
                <h3 className="text-3xl font-black mb-8 leading-tight">Fabric Intelligence <br />& Hygiene.</h3>
                <p className="text-gray-300 text-lg font-light leading-relaxed mb-10">
                  Every cover fabric is selected for high tensile strength to withstand pet claws while maintaining extreme breathability. Our zipper systems are recessed to prevent floor scratching and curious pets.
                </p>
                <div className="grid grid-cols-2 gap-8">
                   {[
                     { title: 'Removable Covers', icon: '🧼' },
                     { title: 'Odor Neutral', icon: '🌬️' },
                     { title: 'Tear Resistant', icon: '💪' },
                     { title: 'Anti-Microbial', icon: '🧪' }
                   ].map((item, idx) => (
                     <div key={idx} className="flex items-center gap-4">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="text-[9px] font-black uppercase tracking-widest text-[#74C69D]">{item.title}</span>
                     </div>
                   ))}
                </div>
             </div>
             <div className="reveal-right flex flex-col items-center">
                <div className="relative w-64 h-64 flex items-center justify-center">
                   <div className="absolute inset-0 border border-[#1B4332]/5 rounded-full animate-ping"></div>
                   <div className="absolute inset-10 border border-[#1B4332]/10 rounded-full"></div>
                   <div className="text-6xl group-hover:scale-110 transition-transform duration-700">🚿</div>
                </div>
                <p className="mt-16 text-[10px] font-black text-[#1B4332] uppercase tracking-[0.4em] text-center italic">Machine Washable Solutions for Modern Pet Care</p>
             </div>
          </div>
        </div>
      </section>

      {/* Section 5: Standard Sizes Table */}
      <section className="py-32 bg-white reveal">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-[#1B4332] mb-12 text-center uppercase tracking-widest">Export Dimension Standards</h2>
            <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-sm">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="p-8 text-[10px] font-black text-gray-400 uppercase tracking-widest sticky left-0 bg-gray-50">Size Category</th>
                    <th className="p-8 text-[10px] font-black text-gray-400 uppercase tracking-widest">Dimensions (cm)</th>
                    <th className="p-8 text-[10px] font-black text-gray-400 uppercase tracking-widest">Dimensions (in)</th>
                    <th className="p-8 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">Typical Breed</th>
                  </tr>
                </thead>
                <tbody className="text-xs font-bold text-[#1B4332] uppercase tracking-wider">
                  {[
                    { label: 'Small', cm: '60 x 45 x 10', in: '24 x 18 x 4', breed: 'Feline / Terrier' },
                    { label: 'Medium', cm: '80 x 60 x 12', in: '31 x 24 x 5', breed: 'Beagle / Spaniel' },
                    { label: 'Large', cm: '100 x 75 x 15', in: '39 x 30 x 6', breed: 'Retriever / Lab' },
                    { label: 'XL', cm: '120 x 90 x 18', in: '47 x 35 x 7', breed: 'Great Dane / Mastiff' }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-[#1B4332]/5 transition-colors group">
                      <td className="p-8 font-black sticky left-0 bg-white group-hover:bg-transparent">{row.label}</td>
                      <td className="p-8 text-gray-500">{row.cm}</td>
                      <td className="p-8 text-gray-500">{row.in}</td>
                      <td className="p-8 text-center bg-gray-50/30 font-black text-[#40916C]">{row.breed}</td>
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
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
             <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100 hover-lift transition-all group">
                <div className="flex items-center gap-4 mb-8">
                   <span className="text-3xl group-hover:rotate-12 transition-transform duration-500">🧼</span>
                   <h4 className="text-sm font-black text-[#1B4332] uppercase tracking-widest">Washing Guidance</h4>
                </div>
                <ul className="space-y-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                   <li className="flex gap-4"><span>—</span> Removable cover wash 30°C</li>
                   <li className="flex gap-4"><span>—</span> Do not bleach fabric</li>
                   <li className="flex gap-4"><span>—</span> Tumble dry low setting</li>
                   <li className="flex gap-4"><span>—</span> Latex core is spot-clean only</li>
                </ul>
             </div>
             <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100 hover-lift transition-all group border-t-4 border-[#1B4332]">
                <div className="flex items-center gap-4 mb-8">
                   <span className="text-3xl group-hover:rotate-12 transition-transform duration-500">⏳</span>
                   <h4 className="text-sm font-black text-[#1B4332] uppercase tracking-widest">Longevity & Hygiene</h4>
                </div>
                <ul className="space-y-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                   <li className="flex gap-4"><span>—</span> Occasional airing recommended</li>
                   <li className="flex gap-4"><span>—</span> Naturally anti-fungal</li>
                   <li className="flex gap-4"><span>—</span> Retains shape for 10+ years</li>
                   <li className="flex gap-4"><span>—</span> Sustainable end-of-life disposal</li>
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
              <h2 className="text-4xl font-black text-[#1B4332] mb-10 tracking-tight leading-tight uppercase">Private Label & <br />Export Logisitics.</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-12 font-medium">
                Our pet bedding division offers a turnkey OEM solution from bespoke density adjustments to FCL/LCL export shipping configurations.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { title: 'Compressed Pack', icon: '🌀' },
                  { title: 'Custom Branded Box', icon: '📦' },
                  { title: 'Fabric Dust Bag', icon: '🛍️' },
                  { title: 'Branded Inserts', icon: '📄' }
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
                   'Custom Woven Brand Labels', 'Fabric Selection (Tweed/Suede/Canvas)',
                   'UPC/EAN Barcode Tagging', 'Internal Silk Sizing Tabs',
                   'Master Carton Logistics Branding', 'Proprietary Shape Prototyping'
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
                <p className="text-gray-300 font-light mb-12">Submit your pet bedding project requirements. Our dedicated B2B team will contact you within 24 business hours.</p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl group-hover:bg-[#74C69D] group-hover:text-[#1B4332] transition-all duration-300">🏢</span>
                    <span className="text-[10px] font-black uppercase tracking-widest">Custom Foam Prototyping</span>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl group-hover:bg-[#74C69D] group-hover:text-[#1B4332] transition-all duration-300">🚢</span>
                    <span className="text-[10px] font-black uppercase tracking-widest">International Export Freight</span>
                  </div>
                </div>
              </div>
              <div className="pt-12 border-t border-white/10 mt-12 text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
                Eco-Latex Pet Division
              </div>
            </div>
            <div className="lg:w-2/3 bg-white p-12 md:p-20">
               <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => { e.preventDefault(); alert('Your pet bed inquiry has been submitted.'); }}>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Company Name</label>
                    <input type="text" required className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#1B4332] outline-none transition-all font-medium text-sm" placeholder="e.g. Premium Pets Wholesale" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input type="email" required className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#1B4332] outline-none transition-all font-medium text-sm" placeholder="procurement@brand.com" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Bed Type</label>
                    <select className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#1B4332] outline-none transition-all font-medium text-sm appearance-none uppercase tracking-widest">
                       <option>Flat Cushion</option>
                       <option>Bolstered / Nest</option>
                       <option>Orthopedic Support</option>
                       <option>Full Collection Batch</option>
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Primary Size Range</label>
                    <select className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#1B4332] outline-none transition-all font-medium text-sm appearance-none uppercase tracking-widest">
                       <option>Small / Medium Mix</option>
                       <option>Large / XL Mix</option>
                       <option>Full Size Sorter</option>
                       <option>Custom Dimension Request</option>
                    </select>
                 </div>
                 <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Volume & Private Label Specs</label>
                    <textarea rows={5} required className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-[#1B4332] outline-none transition-all font-medium text-sm" placeholder="Describe monthly volume, custom fabric requirements, branding needs..."></textarea>
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

export default PetBeds;
