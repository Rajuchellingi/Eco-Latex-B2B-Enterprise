
import React from 'react';
// Added missing Link import from react-router-dom to resolve "Cannot find name 'Link'" errors
import { Link } from 'react-router-dom';
import { WORKFLOW_STEPS } from '../constants';

const WhatWeDo: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[500px] w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920" 
            alt="Manufacturing Process" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B4332]/95 via-[#1B4332]/60 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-4xl reveal">
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
              Engineering <br /><span className="text-[#74C69D]">Superior Sleep.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-medium leading-relaxed max-w-2xl">
              Certified natural latex and organic bedding manufacturing partner for global brands seeking precision, scale, and sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Core Capabilities Overview */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="reveal-left">
              <h4 className="text-[#40916C] font-bold text-[11px] tracking-[0.4em] uppercase mb-8">Integrated Ecosystem</h4>
              <h2 className="text-4xl md:text-5xl font-black text-[#1B4332] mb-10 tracking-tight leading-tight">
                From Plantation to <br />Precision Product.
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Eco-Latex operates as a vertically integrated manufacturer, controlling the entire value chain from natural latex foam processing to finished organic bedding assembly.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed font-medium">
                Our role is to bridge the gap between raw natural resources and high-performance sleep technology, providing enterprise brands with a reliable, audit-ready manufacturing partner.
              </p>
            </div>
            <div className="reveal-right">
              <div className="bg-gray-50 p-12 md:p-16 rounded-[3rem] border border-gray-100">
                 <div className="space-y-12">
                   {[
                     { title: 'Latex Foam Processing', desc: 'Primary manufacturing of natural latex cores using advanced Dunlop technology.' },
                     { title: 'Organic Bedding Production', desc: 'Precision assembly of GOTS-certified mattresses, toppers, and protectors.' },
                     { title: 'Private Label Manufacturing', desc: 'Bespoke OEM services tailored to unique brand specifications and aesthetics.' }
                   ].map((item, idx) => (
                     <div key={idx} className="flex gap-8 group">
                        <div className="text-3xl font-black text-[#1B4332]/10 group-hover:text-[#40916C] transition-colors duration-500">0{idx+1}</div>
                        <div>
                           <h4 className="text-lg font-black text-[#1B4332] uppercase tracking-widest mb-2">{item.title}</h4>
                           <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                     </div>
                   ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities Grid */}
      <section className="py-32 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24 reveal">
            <h2 className="text-4xl font-black text-[#1B4332] mb-6 tracking-tight">Manufacturing Capabilities</h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">Our facilities are engineered for high-volume precision across multiple latex and bedding categories.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 reveal-stagger">
            {[
              { title: 'Foam Production', icon: '🧪', desc: 'Continuous and molded Dunlop latex processing for cores and sheets.' },
              { title: 'Molded Components', icon: '📐', desc: 'Precision-molded pillows and ergonomic support components.' },
              { title: 'Bedding Assembly', icon: '🧵', desc: 'Full-line mattress and topper construction with custom quilting.' },
              { title: 'Accessory Factory', icon: '✨', desc: 'Lifestyle products including yoga mats and functional lifestyle pillows.' }
            ].map((cap, idx) => (
              <div key={idx} className="bg-white p-12 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all hover-lift border border-transparent hover:border-[#40916C]/20 group">
                <div className="text-5xl mb-8 group-hover:scale-110 transition-transform duration-500">{cap.icon}</div>
                <h3 className="text-lg font-black text-[#1B4332] mb-4 uppercase tracking-widest">{cap.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed font-bold uppercase tracking-wider">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Label & OEM Services */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="bg-[#1B4332] rounded-[3rem] overflow-hidden flex flex-col lg:flex-row reveal shadow-3xl">
            <div className="lg:w-1/2 p-12 md:p-24 text-white reveal-left">
              <h4 className="text-[#74C69D] font-bold text-[11px] tracking-[0.4em] uppercase mb-8">Bespoke Manufacturing</h4>
              <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight tracking-tight">Private Label & <br />OEM Services</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-12 font-light">
                We manufacture exclusively for brands, providing a seamless "factory-to-warehouse" solution for global retailers and distributors.
              </p>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h4 className="font-black text-xs uppercase tracking-widest text-[#74C69D] border-b border-[#74C69D]/20 pb-3">What We Customize</h4>
                  <ul className="space-y-4 text-sm font-medium text-gray-100">
                    <li>• Density Mapping (Soft to Hard)</li>
                    <li>• Custom Zoning Patterns</li>
                    <li>• Proprietary Fabric Covers</li>
                    <li>• Brand-Specific Packaging</li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <h4 className="font-black text-xs uppercase tracking-widest text-[#74C69D] border-b border-[#74C69D]/20 pb-3">Why Brands Choose Us</h4>
                  <ul className="space-y-4 text-sm font-medium text-gray-100">
                    <li>• 100% Brand Exclusivity</li>
                    <li>• Technical Consistency</li>
                    <li>• Audit-Ready Compliance</li>
                    <li>• Scalable Export Logistics</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative min-h-[500px] reveal-right">
               <img src="https://images.unsplash.com/photo-1581578731522-aa02d87e07e6?auto=format&fit=crop&q=80&w=1200" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay grayscale" alt="Private Label Services" />
               <div className="absolute inset-0 bg-[#1B4332]/40 backdrop-blur-[1px]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Compliance */}
      <section className="py-32 bg-gray-50 border-y border-gray-100 reveal">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h4 className="text-[#40916C] font-bold text-[11px] tracking-[0.4em] uppercase mb-6">Audit-Ready Excellence</h4>
            <h2 className="text-4xl font-black text-[#1B4332] mb-8 tracking-tight">Quality & Compliance Readiness</h2>
            <p className="text-gray-500 font-medium leading-relaxed">
              Our quality control system is designed for high-stakes procurement. We maintain rigorous internal testing standards that align with global certification requirements, ensuring every batch meets the specification.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: 'Material Testing', desc: 'Tensile strength, density verification, and indentation force deflection testing.' },
              { title: 'Batch Consistency', desc: 'Continuous monitoring of vulcanization cycles to ensure uniformity across volume runs.' },
              { title: 'Compliance Audit', desc: 'Full transparency and documentation readiness for GOTS, GOLS, and Oeko-Tex audits.' }
            ].map((q, idx) => (
              <div key={idx} className="bg-white p-12 rounded-2xl shadow-sm border-t-4 border-[#1B4332] hover-lift transition-all">
                <h4 className="font-black text-[#1B4332] text-sm uppercase tracking-widest mb-4">{q.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Application & Industry Use */}
      <section className="py-32 bg-white reveal">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black text-[#1B4332] mb-6 tracking-tight">Industry Applications</h2>
              <p className="text-gray-500 font-medium leading-relaxed">Our manufacturing serves a diverse range of sectors, providing specialized latex solutions for various market needs.</p>
            </div>
            <Link to="/contact" className="text-[#1B4332] font-black text-xs uppercase tracking-widest border-b-2 border-[#1B4332] pb-1 hover:text-[#40916C] hover:border-[#40916C] transition-all">Discuss Use Case →</Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 reveal-stagger">
            {[
              { title: 'Mattress Brands', use: 'OEM Core Manufacturing', img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=600' },
              { title: 'Hospitality Groups', use: 'Custom Hotel Bedding', img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=600' },
              { title: 'Wellness Retailers', use: 'Yoga & Ergonomic Tools', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600' },
              { title: 'Export Distributors', use: 'Bulk Core & Sheet Logistics', img: 'https://images.unsplash.com/photo-1553152531-b98a2fc8d3bf?auto=format&fit=crop&q=80&w=600' }
            ].map((app, idx) => (
              <div key={idx} className="group relative rounded-3xl overflow-hidden aspect-[4/5] hover-lift shadow-lg">
                <img src={app.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={app.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332] via-transparent to-transparent opacity-90"></div>
                <div className="absolute inset-0 p-10 flex flex-col justify-end text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-xl font-black mb-2 uppercase tracking-tight">{app.title}</h4>
                  <p className="text-[10px] font-black text-[#74C69D] uppercase tracking-widest">{app.use}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process-Driven Workflow Section */}
      <section className="py-32 bg-gray-50 overflow-hidden reveal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-black text-[#1B4332] mb-6 tracking-tight">Enterprise Workflow</h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">A structured B2B engagement model designed for transparency and reliability.</p>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
             <div className="absolute top-10 left-0 w-full h-[1px] bg-gray-200 -z-10 hidden md:block"></div>
             <div className="grid grid-cols-2 md:grid-cols-7 gap-8 reveal-stagger">
                {WORKFLOW_STEPS.map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center group">
                     <div className="w-20 h-20 bg-white border border-gray-100 rounded-full flex items-center justify-center text-2xl mb-6 shadow-sm group-hover:border-[#40916C] group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                        {step.icon}
                     </div>
                     <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Step 0{idx+1}</span>
                     <h4 className="text-[10px] font-black text-[#1B4332] uppercase tracking-[0.2em]">{step.label}</h4>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Scale & Reliability */}
      <section className="py-32 bg-white reveal">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div className="reveal-left">
                <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200" className="rounded-[3rem] shadow-2xl" alt="Factory Scale" />
             </div>
             <div className="reveal-right">
                <h4 className="text-[#40916C] font-bold text-[11px] tracking-[0.4em] uppercase mb-6">Manufacturing Scale</h4>
                <h2 className="text-4xl font-black text-[#1B4332] mb-10 tracking-tight leading-tight">Scale and Reliability <br />for Global Demand.</h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  Consistency is the foundation of our B2B partnerships. Our production cycles are optimized for large-scale output without compromising the micron-level precision required for premium sleep products.
                </p>
                <div className="grid grid-cols-2 gap-10 border-t border-gray-100 pt-12">
                   <div>
                      <span className="block text-4xl font-black text-[#1B4332] mb-2">100k</span>
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Sq. Ft. Facility</span>
                   </div>
                   <div>
                      <span className="block text-4xl font-black text-[#1B4332] mb-2">24/7</span>
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">QC Monitoring</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* B2B Partnership CTA */}
      <section className="py-32 bg-[#1B4332] text-white">
        <div className="container mx-auto px-6 text-center reveal">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-12 leading-tight tracking-tight">Establish your manufacturing partnership with Eco-Latex.</h2>
            <div className="flex flex-wrap justify-center gap-8">
              <button 
                onClick={() => document.getElementById('rfq-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#40916C] text-white px-12 py-6 rounded-lg font-black text-[12px] uppercase tracking-[0.3em] hover:bg-white hover:text-[#1B4332] transition-all hover-lift shadow-2xl"
              >
                Request Quote
              </button>
              <button className="bg-white/5 border border-white/20 text-white px-12 py-6 rounded-lg font-black text-[12px] uppercase tracking-[0.3em] hover:bg-white hover:text-[#1B4332] transition-all hover-lift backdrop-blur-md">
                Download Catalog
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
