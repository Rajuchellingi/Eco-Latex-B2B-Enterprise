
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import CapabilitiesNavigator from '../components/CapabilitiesNavigator';
import RFQForm from '../components/RFQForm';
import { TECH_SPECS, WORKFLOW_STEPS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Trust Strip */}
      <div className="py-14 bg-white border-b border-gray-100 reveal">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex flex-col text-center lg:text-left">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mb-1">Global Standards</span>
              <span className="text-xs font-bold text-[#1B4332] uppercase tracking-widest">Certified Standard Assurance</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
              <div className="font-black text-xl tracking-tighter text-gray-900">ECO-INSTITUT</div>
              <div className="font-black text-xl tracking-tighter text-gray-900">OEKO-TEX®</div>
              <div className="font-black text-xl tracking-tighter text-gray-900">LGA-TESTED</div>
              <div className="font-black text-xl tracking-tighter text-gray-900">GOLS-ORGANIC</div>
              <div className="font-black text-xl tracking-tighter text-gray-900">ISPA</div>
            </div>
          </div>
        </div>
      </div>

      {/* Credibility Section */}
      <section className="py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="reveal-left">
              <h4 className="text-[#40916C] font-bold text-[11px] tracking-[0.3em] uppercase mb-6">Why Global Brands Choose Eco-Latex</h4>
              <h2 className="text-4xl md:text-5xl font-black text-[#1B4332] mb-8 leading-[1.1] tracking-tight">
                Vertical Sourcing & <br /> 
                <span className="text-gray-400">Manufacturing Excellence.</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-12 font-medium">
                Eco-Latex stands at the intersection of nature and engineering. As a primary manufacturer, we control the entire lifecycle—from the responsible harvesting of latex to precision molding and global export packing.
              </p>
              
              <div className="grid grid-cols-3 gap-8 reveal-stagger">
                <div className="group">
                  <span className="block text-3xl font-black text-[#1B4332] mb-1 group-hover:text-[#40916C] transition-colors">20+</span>
                  <span className="text-[9px] uppercase font-bold text-gray-400 tracking-[0.2em]">Years Operations</span>
                </div>
                <div className="group">
                  <span className="block text-3xl font-black text-[#1B4332] mb-1 group-hover:text-[#40916C] transition-colors">OEM</span>
                  <span className="text-[9px] uppercase font-bold text-gray-400 tracking-[0.2em]">Private Label</span>
                </div>
                <div className="group">
                  <span className="block text-3xl font-black text-[#1B4332] mb-1 group-hover:text-[#40916C] transition-colors">100%</span>
                  <span className="text-[9px] uppercase font-bold text-gray-400 tracking-[0.2em]">Natural Source</span>
                </div>
              </div>
            </div>
            
            <div className="relative reveal-right">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#1B4332]/5 rounded-full blur-3xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
                  alt="Latex Manufacturing" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Capabilities Navigator */}
      <div className="reveal">
        <CapabilitiesNavigator />
      </div>

      {/* Private Label + Export Readiness */}
      <section className="py-32 bg-white reveal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-[#1B4332] mb-4 tracking-tight">Export-Ready Private Label</h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">From branding and custom specifications to vacuum compression and container optimization, we provide a complete OEM workflow.</p>
          </div>

          {/* Workflow Timeline */}
          <div className="relative mb-24 max-w-6xl mx-auto">
            <div className="absolute top-8 left-0 w-full h-[1px] bg-gray-100 -z-10 hidden md:block"></div>
            <div className="grid grid-cols-2 md:grid-cols-7 gap-10 reveal-stagger">
              {WORKFLOW_STEPS.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full bg-white border border-gray-100 flex items-center justify-center text-xl mb-5 group-hover:border-[#40916C] group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-300">
                    {step.icon}
                  </div>
                  <h4 className="text-[10px] font-black text-[#1B4332] uppercase tracking-[0.2em]">{step.label}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto reveal-stagger">
            <div className="bg-[#1B4332] rounded-2xl p-12 text-white shadow-2xl hover-lift transition-all">
              <h3 className="text-2xl font-bold mb-6">Bespoke Manufacturing</h3>
              <p className="text-gray-300 leading-relaxed mb-8 font-light">
                We engineer latex to your specific market requirements. Our R&D team works with you to define density, firmness, and aesthetics that align with your brand identity.
              </p>
              <button className="text-[11px] font-black uppercase tracking-[0.2em] text-[#74C69D] hover:text-white transition-all flex items-center gap-3">
                Explore Customization <span className="text-lg">→</span>
              </button>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-12 shadow-sm hover-lift transition-all">
              <h3 className="text-2xl font-bold text-[#1B4332] mb-6">Strategic Logistics</h3>
              <p className="text-gray-500 leading-relaxed mb-8 font-medium">
                Optimize shipping costs with precision compression. We specialize in container loading strategies that maximize volume while ensuring product integrity.
              </p>
              <button className="text-[11px] font-black uppercase tracking-[0.2em] text-[#1B4332] hover:text-[#40916C] transition-all flex items-center gap-3">
                View Shipping Standards <span className="text-lg">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Edge Section */}
      <section className="py-32 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-stretch">
            <div className="lg:w-1/3 reveal-left">
              <h2 className="text-4xl font-black text-[#1B4332] mb-8 leading-tight tracking-tight">Engineering & <br /> Technical Specs</h2>
              <p className="text-gray-500 mb-10 font-medium leading-relaxed">Detailed technical panels showcasing the precision standards of our latex core technology.</p>
              <div className="space-y-6 reveal-stagger">
                {TECH_SPECS.map(spec => (
                  <div key={spec.id} className="p-8 bg-white rounded-xl shadow-sm border-l-4 border-[#40916C] hover:shadow-md transition-shadow hover-lift">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-2xl opacity-80">{spec.content.icon}</span>
                      <h4 className="font-black text-[#1B4332] text-sm uppercase tracking-widest">{spec.content.title}</h4>
                    </div>
                    <ul className="space-y-3">
                      {spec.content.facts.map((fact, idx) => (
                        <li key={idx} className="text-xs text-gray-500 font-bold uppercase tracking-wider flex items-center gap-3">
                          <span className="w-1.5 h-1.5 bg-[#40916C] rounded-full"></span>
                          {fact}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-2/3 flex flex-col reveal-right">
              <div className="bg-[#1B4332] rounded-2xl relative overflow-hidden shadow-2xl flex-grow group">
                 <img src="https://images.unsplash.com/photo-1553152531-b98a2fc8d3bf?auto=format&fit=crop&q=80&w=1600" alt="Technical Drawing" className="w-full h-full object-cover opacity-60 mix-blend-overlay transition-transform duration-1000 group-hover:scale-105" />
                 <div className="absolute inset-0 p-12 flex flex-col justify-end text-white bg-gradient-to-t from-black/60 to-transparent">
                    <h3 className="text-4xl font-bold mb-6">Precision Molding</h3>
                    <p className="max-w-xl text-gray-200 text-lg font-light leading-relaxed">Our automated production lines ensure micron-level consistency across every batch, meeting the stringent requirements of global medical and sleep standards.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Operations */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
             <div className="order-2 md:order-1 relative reveal-left">
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#40916C]/10 rounded-full blur-2xl"></div>
                <img src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=1200" className="rounded-2xl shadow-3xl relative z-10" alt="Sustainability" />
             </div>
             <div className="order-1 md:order-2 reveal-right">
                <h4 className="text-[#40916C] font-bold text-[11px] tracking-[0.3em] uppercase mb-6">Operational Sustainability</h4>
                <h2 className="text-4xl font-black text-[#1B4332] mb-10 tracking-tight leading-tight">Circular Systems & <br /> Responsible Sourcing</h2>
                <div className="space-y-10 reveal-stagger">
                  <div className="flex gap-8 group">
                    <div className="w-14 h-14 flex-shrink-0 bg-gray-50 rounded-xl flex items-center justify-center text-2xl group-hover:bg-[#1B4332] group-hover:text-white transition-all">💧</div>
                    <div>
                      <h4 className="font-black text-[#1B4332] text-sm uppercase tracking-widest mb-2">Water Management</h4>
                      <p className="text-gray-500 text-sm leading-relaxed font-medium">Advanced closed-loop water treatment systems ensure zero-waste effluent and responsible resource utilization.</p>
                    </div>
                  </div>
                  <div className="flex gap-8 group">
                    <div className="w-14 h-14 flex-shrink-0 bg-gray-50 rounded-xl flex items-center justify-center text-2xl group-hover:bg-[#1B4332] group-hover:text-white transition-all">☀️</div>
                    <div>
                      <h4 className="font-black text-[#1B4332] text-sm uppercase tracking-widest mb-2">Energy Efficiency</h4>
                      <p className="text-gray-500 text-sm leading-relaxed font-medium">Our facility utilizes renewable energy integrations and high-efficiency heat recovery for curing processes.</p>
                    </div>
                  </div>
                  <div className="flex gap-8 group">
                    <div className="w-14 h-14 flex-shrink-0 bg-gray-50 rounded-xl flex items-center justify-center text-2xl group-hover:bg-[#1B4332] group-hover:text-white transition-all">♻️</div>
                    <div>
                      <h4 className="font-black text-[#1B4332] text-sm uppercase tracking-widest mb-2">Waste Reduction</h4>
                      <p className="text-gray-500 text-sm leading-relaxed font-medium">Trim-waste upcycling and biodegradable packaging ensure our operational footprint remains audit-friendly and green.</p>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Preview */}
      <section className="py-24 bg-[#1B4332] text-white overflow-hidden relative reveal">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl reveal-left">
               <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">Visit our Manufacturing Center</h2>
               <p className="text-gray-300 text-lg font-light leading-relaxed">Experience the scale of our 100,000 sq. ft. precision facility, housing the latest in vulcanization technology and ISO-certified QA labs.</p>
            </div>
            <Link to="/manufacturing" className="reveal-right whitespace-nowrap bg-white text-[#1B4332] px-10 py-5 rounded font-black text-sm uppercase tracking-widest hover:bg-[#74C69D] hover:text-[#1B4332] transition-all hover-lift shadow-2xl">
               View Factory Process
            </Link>
          </div>
        </div>
      </section>

      {/* RFQ Section */}
      <div className="reveal">
        <RFQForm />
      </div>
    </div>
  );
};

export default Home;
