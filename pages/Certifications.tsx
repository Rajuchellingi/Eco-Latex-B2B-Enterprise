
import React from 'react';

const Certifications: React.FC = () => {
  const scrollToRFQ = () => {
    document.getElementById('rfq-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const productCertMatrix = [
    { category: 'Natural Latex Sheets', certs: ['GOLS', 'OEKO-TEX 100', 'LGA', 'ECO-INSTITUT'] },
    { category: 'Mattress Cores', certs: ['GOLS', 'OEKO-TEX 100', 'LGA', 'ISPA'] },
    { category: 'Molded Pillows', certs: ['GOLS', 'OEKO-TEX 100', 'ECO-INSTITUT'] },
    { category: 'Bed Linen & Comforters', certs: ['GOTS', 'OEKO-TEX 100', 'BCI'] },
    { category: 'Yoga Mats', certs: ['SGS', 'OEKO-TEX 100', 'REACH'] },
    { category: 'Pet Beds', certs: ['OEKO-TEX 100', 'GOLS Core'] },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920" 
            alt="Certification Verification" 
            className="w-full h-full object-cover opacity-90 transition-transform duration-[10000ms] scale-105"
            style={{ transform: 'scale(1.05)' }}
          />
          <div className="absolute inset-0 bg-[#1B4332]/90 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-3xl reveal">
            <span className="inline-block px-3 py-1 bg-[#40916C] text-[10px] font-black uppercase tracking-[0.3em] mb-6 rounded shadow-lg">Global Compliance Hub</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1]">
              Certified for Quality, <br />Safety & Sustainability.
            </h1>
            <p className="text-xl text-gray-200 mb-10 font-medium tracking-wide max-w-2xl">
              Internationally recognized standards that validate our materials, processes, and manufacturing integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Why Certification Matters */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center reveal">
            <h4 className="text-[#40916C] font-bold text-[11px] tracking-[0.4em] uppercase mb-8">B2B Compliance Integrity</h4>
            <h2 className="text-4xl font-black text-[#1B4332] mb-10 leading-tight">A Non-Negotiable Standard <br />for Global Partnerships.</h2>
            <p className="text-gray-500 text-lg leading-relaxed font-medium">
              In the global bedding and textile markets, certifications are more than just labels—they are the bedrock of trust. At Eco-Latex, we maintain a rigorous audit cycle with the world’s leading certification bodies to ensure our B2B partners receive products that are fully compliant with regional regulations and consumer expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Organic & Material Certifications */}
      <section className="py-32 bg-gray-50 reveal">
        <div className="container mx-auto px-6">
          <div className="mb-20">
             <h2 className="text-3xl font-black text-[#1B4332] uppercase tracking-widest mb-4">Organic & Material Standards</h2>
             <div className="w-20 h-1 bg-[#40916C]"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'GOTS Organic', desc: 'Global Organic Textile Standard validates the entire supply chain of organic fibers from field to finished product.', logo: '📜' },
              { name: 'GOLS Organic', desc: 'Global Organic Latex Standard specifies requirements for latex products made from certified organic raw materials.', logo: '🌳' },
              { name: 'FSC Certified', desc: 'Forest Stewardship Council certification ensures that products come from responsibly managed forests.', logo: '🌲' },
              { name: 'Organic Content', desc: 'Third-party verification of the percentage of organic material contained in a finished product.', logo: '✔️' },
              { name: 'Dunlop Method', desc: 'Proven natural vulcanization process ensuring structural integrity without synthetic additives.', logo: '📐' },
              { name: 'ISPA Member', desc: 'International Sleep Products Association membership reflecting our commitment to bedding excellence.', logo: '🛌' }
            ].map((cert, idx) => (
              <div key={idx} className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100 hover-lift transition-all group">
                <div className="text-4xl mb-8 transition-transform group-hover:scale-110">{cert.logo}</div>
                <h4 className="text-lg font-black text-[#1B4332] uppercase tracking-tight mb-4">{cert.name}</h4>
                <p className="text-gray-400 text-xs font-bold leading-relaxed uppercase tracking-wider italic">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Safety & Textile Compliance */}
      <section className="py-32 bg-white reveal">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center max-w-6xl mx-auto">
            <div className="reveal-left">
              <h4 className="text-[#40916C] font-bold text-[11px] tracking-[0.4em] uppercase mb-8">Health & Human Safety</h4>
              <h2 className="text-4xl font-black text-[#1B4332] mb-10 leading-tight uppercase">OEKO-TEX® Standard 100 <br />& Chemical Safety.</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Our materials are tested for harmful substances at every stage of processing. Compliance with OEKO-TEX® Class 1 (the strictest category, safe for infants) ensures that our natural latex and bedding products are free from restricted chemicals and skin-irritants.
              </p>
              <ul className="space-y-6">
                {[
                  'Tested for over 100 harmful substances',
                  'Phthalate and Heavy Metal free',
                  'Low VOC (Volatile Organic Compounds)',
                  'Formaldehyde-free processing'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 group">
                    <div className="w-5 h-5 bg-[#1B4332]/5 rounded flex items-center justify-center text-[#1B4332]">
                       <span className="text-[10px]">✓</span>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1B4332]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal-right flex justify-center">
              <div className="w-full max-w-md aspect-square bg-gray-50 rounded-[4rem] border-2 border-dashed border-[#1B4332]/10 flex flex-col items-center justify-center p-12 text-center group overflow-hidden">
                <div className="text-6xl mb-10 group-hover:rotate-12 transition-transform">🛡️</div>
                <h4 className="text-xl font-black text-[#1B4332] uppercase tracking-widest mb-4">Class 1 Compliance</h4>
                <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest leading-relaxed">
                  Verified safety for sensitive users including infants and orthopedic patients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Environmental Standards */}
      <section className="py-32 bg-gray-50 reveal">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-[#1B4332] rounded-[3rem] p-12 md:p-24 text-white overflow-hidden relative shadow-3xl">
             <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2"></div>
             <div className="grid lg:grid-cols-2 gap-20 relative z-10">
                <div className="reveal-left">
                   <h2 className="text-4xl font-black mb-10 tracking-tight leading-tight uppercase">Responsible Manufacturing <br />& Sustainability.</h2>
                   <p className="text-gray-300 text-lg font-light leading-relaxed mb-12">
                     Our certifications extend into the operational systems of our facility. We manage our environmental footprint through internationally recognized frameworks for water, energy, and waste.
                   </p>
                   <div className="grid grid-cols-2 gap-8">
                      {[
                        { t: 'LGA Tested', d: 'Validates long-term material durability.' },
                        { t: 'ECO Institut', d: 'Tests for emissions and purity standards.' },
                        { t: 'ISO 14001', d: 'Environmental management alignment.' },
                        { t: 'ISO 9001', d: 'Quality management system readiness.' }
                      ].map((item, i) => (
                        <div key={i} className="group">
                           <h4 className="text-xs font-black uppercase tracking-widest text-[#74C69D] mb-2">{item.t}</h4>
                           <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest leading-relaxed italic">{item.d}</p>
                        </div>
                      ))}
                   </div>
                </div>
                <div className="reveal-right flex items-center justify-center">
                   <div className="w-full aspect-square border border-white/20 rounded-3xl flex flex-col items-center justify-center p-12 text-center group hover:bg-white/5 transition-colors">
                      <span className="text-7xl mb-8 group-hover:scale-110 transition-transform">🌍</span>
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#74C69D]">Audit-Ready Infrastructure</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Section 5: QA Framework */}
      <section className="py-32 bg-white reveal">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-[#1B4332] mb-24 uppercase tracking-widest">Quality Assurance Framework</h2>
          <div className="max-w-6xl mx-auto relative">
             {/* Diagram Lines (Desktop) */}
             <div className="absolute top-1/2 left-0 w-full h-px bg-gray-100 -translate-y-1/2 hidden lg:block -z-10"></div>
             
             <div className="grid lg:grid-cols-4 gap-12">
                {[
                  { step: 'Material Sourcing', desc: 'Direct plantation checks and raw latex purity testing.', i: '🌳' },
                  { step: 'Process Control', desc: 'Real-time monitoring of vulcanization and curing temps.', i: '🏭' },
                  { step: 'Batch Testing', desc: 'Density, ILD, and tensile strength lab verification.', i: '🔬' },
                  { step: 'Compliance Pack', desc: 'Final documentation and audit-trail certification.', i: '✅' }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center group">
                     <div className="w-24 h-24 bg-white border-2 border-gray-50 rounded-full flex items-center justify-center text-3xl mb-8 shadow-sm group-hover:border-[#40916C] group-hover:shadow-xl transition-all duration-500">
                        {item.i}
                     </div>
                     <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-2">Step 0{idx+1}</span>
                     <h4 className="text-xs font-black text-[#1B4332] uppercase tracking-[0.2em] mb-4">{item.step}</h4>
                     <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed italic max-w-[200px]">{item.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Section 6: Traceability & Audit Readiness */}
      <section className="py-32 bg-gray-50 reveal">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center max-w-6xl mx-auto">
             <div className="reveal-left order-2 lg:order-1">
                <div className="bg-white p-16 rounded-[3rem] shadow-xl border border-gray-100">
                   <div className="flex items-center gap-6 mb-10">
                      <div className="w-14 h-14 bg-[#1B4332] rounded-2xl flex items-center justify-center text-2xl">📋</div>
                      <h4 className="text-xl font-black text-[#1B4332] uppercase tracking-widest">Digital Documentation</h4>
                   </div>
                   <p className="text-gray-500 text-sm leading-relaxed mb-8 font-medium">
                     We maintain a complete digital audit trail for every B2B order. From plantation batches to final container loading, our traceability system allows for rapid response to buyer compliance inquiries.
                   </p>
                   <div className="space-y-4">
                      {['Batch-Specific Certificates', 'Raw Material Logsheets', 'LGA Performance Reports', 'Custom Export Documentation'].map((doc, i) => (
                        <div key={i} className="flex justify-between items-center py-4 border-b border-gray-50 text-[10px] font-black uppercase tracking-widest">
                           <span className="text-gray-400">{doc}</span>
                           <span className="text-[#40916C]">Available</span>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
             <div className="reveal-right order-1 lg:order-2">
                <h4 className="text-[#40916C] font-bold text-[11px] tracking-[0.4em] uppercase mb-8">Transparency First</h4>
                <h2 className="text-4xl font-black text-[#1B4332] mb-10 leading-tight uppercase">Traceability & <br />Audit Readiness.</h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-8 font-medium">
                  Eco-Latex operates with an open-door policy for our long-term B2B partners. Our facilities are designed to be audit-ready 24/7, reflecting our commitment to transparency in manufacturing.
                </p>
                <div className="pt-8 border-t border-gray-100 flex items-center gap-10">
                   <div>
                      <div className="text-3xl font-black text-[#1B4332] mb-1">100%</div>
                      <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Chain of Custody</span>
                   </div>
                   <div>
                      <div className="text-3xl font-black text-[#1B4332] mb-1">Zero</div>
                      <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Audit Non-Compliance</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Section 7: Certification Matrix by Category */}
      <section className="py-32 bg-white reveal">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
             <h2 className="text-3xl font-black text-[#1B4332] mb-12 text-center uppercase tracking-widest">Compliance Matrix by Category</h2>
             <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-sm">
                <table className="w-full text-left">
                   <thead className="bg-gray-50">
                      <tr className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                         <th className="p-8 sticky left-0 bg-gray-50">Product Category</th>
                         <th className="p-8">Verified Standards</th>
                      </tr>
                   </thead>
                   <tbody className="text-xs font-bold text-[#1B4332] uppercase tracking-wider">
                      {productCertMatrix.map((row, i) => (
                        <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-[#1B4332]/5 transition-colors group">
                           <td className="p-8 font-black sticky left-0 bg-white group-hover:bg-transparent">{row.category}</td>
                           <td className="p-8">
                              <div className="flex flex-wrap gap-2">
                                 {row.certs.map((c, idx) => (
                                   <span key={idx} className="px-3 py-1 bg-gray-100 rounded text-[9px] font-black text-gray-500 uppercase tracking-widest">{c}</span>
                                 ))}
                              </div>
                           </td>
                        </tr>
                      ))}
                   </tbody>
                </table>
             </div>
          </div>
        </div>
      </section>

      {/* Section 8: Global Compliance Statement */}
      <section className="py-32 bg-gray-50 reveal">
        <div className="container mx-auto px-6 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-[#1B4332] mb-10 tracking-tight uppercase leading-tight">Global Export Market Compliance</h2>
          <p className="text-gray-500 text-lg leading-relaxed font-medium mb-12">
            Eco-Latex products are engineered to exceed the regulatory requirements of all major global markets. Whether supplying the European Union, the United Kingdom, or North America, our technical teams ensure every specification—from chemical limits to fire retardancy—is met with absolute precision.
          </p>
          <div className="flex flex-wrap justify-center gap-12 grayscale opacity-40">
             <div className="text-xl font-black">EUROPEAN UNION (CE)</div>
             <div className="text-xl font-black">UNITED KINGDOM (UKCA)</div>
             <div className="text-xl font-black">UNITED STATES (ASTM)</div>
             <div className="text-xl font-black">GLOBAL (ISO)</div>
          </div>
        </div>
      </section>

      {/* Section 9: B2B Trust CTA */}
      <section id="rfq-section" className="py-32 bg-white reveal">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-[#1B4332] rounded-[3rem] p-12 md:p-24 text-white text-center shadow-3xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-[#74C69D] opacity-20"></div>
             <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-tight uppercase">Certification & <br />Compliance Documentation</h2>
             <p className="text-gray-300 text-lg font-light leading-relaxed mb-16 max-w-2xl mx-auto">
               Need specific test reports or certification validity proof? Our B2B compliance desk provides full documentation access for procurement verification.
             </p>
             <div className="flex flex-wrap justify-center gap-8">
               <button className="bg-[#40916C] text-white px-10 py-5 rounded-lg font-black text-[11px] uppercase tracking-[0.3em] hover:bg-white hover:text-[#1B4332] transition-all hover-lift shadow-2xl">
                 Request Certification Documents
               </button>
               <button onClick={scrollToRFQ} className="bg-white/5 border border-white/20 text-white px-10 py-5 rounded-lg font-black text-[11px] uppercase tracking-[0.3em] hover:bg-white hover:text-[#1B4332] transition-all hover-lift backdrop-blur-md">
                 Request Procurement Quote
               </button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;
