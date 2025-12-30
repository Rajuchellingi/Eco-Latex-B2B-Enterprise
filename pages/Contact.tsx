
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    country: '',
    phone: '',
    productCategory: '',
    intendedUse: '',
    message: '',
    volume: '',
    packaging: '',
  });

  const scrollToForm = () => {
    document.getElementById('rfq-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log('Form Submitted:', formData);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[55vh] min-h-[400px] overflow-hidden flex items-center bg-gray-50 border-b border-gray-100">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1553152531-b98a2fc8d3bf?auto=format&fit=crop&q=80&w=1920" 
            alt="Eco-Latex Manufacturing Facility" 
            className="w-full h-full object-cover opacity-15 grayscale"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl reveal">
            <span className="inline-block px-3 py-1 bg-[#40916C] text-[10px] font-black uppercase tracking-[0.3em] mb-8 rounded shadow-lg text-white">B2B Export Division</span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight leading-[1.1] text-[#1B4332]">
              Let’s Build a Long-Term <br />Manufacturing Partnership.
            </h1>
            <p className="text-xl text-gray-500 font-medium tracking-wide max-w-2xl mb-12">
              Connect with our B2B team for product specifications, bulk pricing, certifications, and manufacturing support.
            </p>
            <button 
              onClick={scrollToForm}
              className="bg-[#1B4332] text-white px-10 py-5 rounded font-black text-xs uppercase tracking-widest transition-all shadow-xl hover-lift press-scale"
            >
              Request a Quote
            </button>
          </div>
        </div>
      </section>

      {/* Section 1: Contact Overview */}
      <section className="py-24 bg-white border-b border-gray-50 reveal">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-start max-w-6xl mx-auto">
            <div className="reveal-left">
              <h4 className="text-[#40916C] font-black text-[11px] tracking-[0.4em] uppercase mb-8">Enterprise Support</h4>
              <h2 className="text-3xl font-black text-[#1B4332] mb-8 leading-tight">Comprehensive Sourcing Solutions</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Eco-Latex acts as a strategic primary manufacturer for global brands, distributors, and hospitality groups. Our B2B desk is trained to handle complex procurement requirements, from technical specifications to international logistics.
              </p>
              <div className="flex gap-4">
                 {['Private Label Ready', 'Global Export Support', 'Compliance Verification'].map((tag, idx) => (
                   <span key={idx} className="px-4 py-2 bg-gray-50 rounded text-[9px] font-black text-gray-400 uppercase tracking-widest border border-gray-100">{tag}</span>
                 ))}
              </div>
            </div>
            <div className="reveal-right bg-gray-50 p-12 rounded-[2.5rem] border border-gray-100 grid gap-10">
               <div>
                  <h4 className="text-[10px] font-black text-[#40916C] uppercase tracking-[0.3em] mb-4">Quick Highlights</h4>
                  <ul className="space-y-6">
                    <li className="flex justify-between items-center border-b border-gray-200 pb-4">
                       <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">General Inquiry</span>
                       <a href="mailto:info@eco-latex.com" className="text-sm font-black text-[#1B4332] hover:text-[#40916C] transition-colors">info@eco-latex.com</a>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-200 pb-4">
                       <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Business Hours</span>
                       <span className="text-sm font-black text-[#1B4332]">MON–FRI | 08:30–17:30</span>
                    </li>
                    <li className="flex justify-between items-center border-b border-gray-200 pb-4">
                       <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Response Time</span>
                       <span className="text-sm font-black text-[#40916C]">WITHIN 24 BUSINESS HOURS</span>
                    </li>
                  </ul>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: RFQ Form */}
      <section id="rfq-section" className="py-32 bg-white reveal">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {submitted ? (
              <div className="bg-[#1B4332] text-white p-24 rounded-[3rem] text-center shadow-3xl animate-reveal">
                <div className="w-24 h-24 bg-[#40916C] rounded-full flex items-center justify-center mx-auto mb-10 text-4xl">✓</div>
                <h2 className="text-4xl font-black mb-6 uppercase tracking-tight">Request Submitted Successfully</h2>
                <p className="text-gray-300 text-lg font-light leading-relaxed max-w-xl mx-auto mb-12">
                  Our B2B team has received your enquiry. A specialist will review your specifications and reach out within one business day.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-12 py-5 bg-white text-[#1B4332] rounded font-black text-xs uppercase tracking-widest hover:bg-[#74C69D] transition-all"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <div className="bg-white border border-gray-100 shadow-3xl rounded-[3rem] overflow-hidden">
                <div className="bg-[#1B4332] p-12 text-white text-center">
                  <h2 className="text-3xl font-black uppercase tracking-widest">Request Quote & Specifications</h2>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mt-2">B2B PROJECT INTAKE FORM</p>
                </div>
                <form onSubmit={handleSubmit} className="p-12 md:p-20 grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Company Name</label>
                    <input 
                      type="text" required name="companyName" value={formData.companyName} onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1B4332] focus:border-transparent outline-none transition-all font-medium" 
                      placeholder="e.g. Global Sleep Systems Ltd." 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Contact Person</label>
                    <input 
                      type="text" required name="contactPerson" value={formData.contactPerson} onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1B4332] focus:border-transparent outline-none transition-all font-medium" 
                      placeholder="Full Name" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Business Email</label>
                    <input 
                      type="email" required name="email" value={formData.email} onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1B4332] focus:border-transparent outline-none transition-all font-medium" 
                      placeholder="business@company.com" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Country / Region</label>
                    <input 
                      type="text" required name="country" value={formData.country} onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1B4332] focus:border-transparent outline-none transition-all font-medium" 
                      placeholder="e.g. United Kingdom" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Product Category</label>
                    <select 
                      required name="productCategory" value={formData.productCategory} onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1B4332] focus:border-transparent outline-none transition-all font-medium appearance-none uppercase tracking-widest text-[11px]"
                    >
                      <option value="">Select Category</option>
                      <option value="Latex Sheets">Latex Sheets</option>
                      <option value="Mattress Protectors">Mattress Protectors</option>
                      <option value="Bed Linen">Bed Linen</option>
                      <option value="Comforters">Comforters</option>
                      <option value="Pillows">Pillows</option>
                      <option value="Yoga Mats">Yoga Mats</option>
                      <option value="Pet Beds">Pet Beds</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Intended Use</label>
                    <select 
                      required name="intendedUse" value={formData.intendedUse} onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1B4332] focus:border-transparent outline-none transition-all font-medium appearance-none uppercase tracking-widest text-[11px]"
                    >
                      <option value="">Select Application</option>
                      <option value="Private Label">Private Label</option>
                      <option value="Hospitality">Hospitality</option>
                      <option value="Retail">Retail</option>
                      <option value="Distributor">Distributor</option>
                      <option value="OEM">OEM</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Est. Monthly Volume</label>
                    <input 
                      type="text" name="volume" value={formData.volume} onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1B4332] focus:border-transparent outline-none transition-all font-medium" 
                      placeholder="e.g. 500 units / 1 FCL" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Packaging Preference</label>
                    <select 
                      name="packaging" value={formData.packaging} onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1B4332] focus:border-transparent outline-none transition-all font-medium appearance-none uppercase tracking-widest text-[11px]"
                    >
                      <option value="">Select Packaging</option>
                      <option value="Flat Pack">Flat Pack Pallet</option>
                      <option value="Vacuum Rolled">Vacuum Rolled</option>
                      <option value="Retail Boxes">Retail Display Boxes</option>
                      <option value="Master Cartons">Standard Master Cartons</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Specifications / Message</label>
                    <textarea 
                      rows={6} required name="message" value={formData.message} onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1B4332] focus:border-transparent outline-none transition-all font-medium resize-none" 
                      placeholder="Describe technical requirements, dimensions, density, and any custom branding needs..."
                    ></textarea>
                  </div>
                  <div className="md:col-span-2 flex flex-col md:flex-row justify-between items-center gap-10 border-t border-gray-100 pt-12">
                    <div className="flex flex-col">
                       <label className="cursor-pointer group flex items-center gap-3">
                          <input type="file" className="hidden" />
                          <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-xl group-hover:bg-[#1B4332] group-hover:text-white transition-colors">📎</div>
                          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest group-hover:text-[#1B4332] transition-colors">Upload Spec Sheet (Optional)</span>
                       </label>
                    </div>
                    <div className="flex flex-col items-end gap-4 w-full md:w-auto">
                       <button 
                         type="submit"
                         className="w-full md:w-auto bg-[#1B4332] text-white px-16 py-6 rounded-xl font-black text-xs uppercase tracking-[0.2em] hover:bg-[#2D5A27] transition-all shadow-xl hover-lift press-scale"
                       >
                         Submit Request
                       </button>
                       <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Your enquiry will be reviewed by our B2B team. Response within business hours.</p>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 3: Contact Details */}
      <section className="py-32 bg-gray-50 reveal">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
             <div className="p-12 bg-white rounded-[2.5rem] border border-gray-100 hover-lift transition-all">
                <div className="w-14 h-14 bg-[#1B4332]/5 rounded-2xl flex items-center justify-center text-2xl mb-8">🏢</div>
                <h4 className="text-[#40916C] font-black text-[10px] uppercase tracking-[0.4em] mb-4">Head Office</h4>
                <p className="text-gray-800 font-black text-xl mb-2 leading-tight">Eco-Latex <br />(Lalan Eco-Latex)</p>
                <p className="text-gray-400 text-[11px] font-black uppercase tracking-widest mt-6">Sri Lanka Export Division</p>
             </div>
             <div className="p-12 bg-white rounded-[2.5rem] border border-gray-100 hover-lift transition-all">
                <div className="w-14 h-14 bg-[#1B4332]/5 rounded-2xl flex items-center justify-center text-2xl mb-8">🏭</div>
                <h4 className="text-[#40916C] font-black text-[10px] uppercase tracking-[0.4em] mb-4">Latex Processing</h4>
                <p className="text-gray-800 font-black text-xl mb-2 leading-tight">Lot 72, Phase III, KEPZ</p>
                <p className="text-gray-400 text-[11px] font-black uppercase tracking-widest mt-6 italic">Katunayake, Sri Lanka</p>
             </div>
             <div className="p-12 bg-white rounded-[2.5rem] border border-gray-100 hover-lift transition-all">
                <div className="w-14 h-14 bg-[#1B4332]/5 rounded-2xl flex items-center justify-center text-2xl mb-8">📐</div>
                <h4 className="text-[#40916C] font-black text-[10px] uppercase tracking-[0.4em] mb-4">Value Addition</h4>
                <p className="text-gray-800 font-black text-xl mb-2 leading-tight">42, Old Avisawella Road</p>
                <p className="text-gray-400 text-[11px] font-black uppercase tracking-widest mt-6 italic">Welivita, Sri Lanka</p>
             </div>
          </div>
        </div>
      </section>

      {/* Section 4: Global Business Support */}
      <section className="py-32 bg-white reveal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
             <h2 className="text-4xl font-black text-[#1B4332] mb-6 uppercase tracking-tight">Enterprise Onboarding Support</h2>
             <p className="text-gray-400 font-medium text-sm tracking-widest uppercase italic">Full Cycle B2B Service Infrastructure</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
             {[
               { icon: '🌍', title: 'Export Logistics', desc: 'FCL & LCL coordination with automated documentation and tracking support.' },
               { icon: '📜', title: 'Audit Support', desc: 'Direct sharing of GOLS, GOTS, and Oeko-Tex validity for your compliance team.' },
               { icon: '🏷️', title: 'Private Label', desc: 'Dedicated branding desks for silk labels, custom covers, and retail packaging.' },
               { icon: '🤝', title: 'Supply Agreements', desc: 'Framework contracts and priority production slotting for long-term partners.' }
             ].map((item, idx) => (
               <div key={idx} className="bg-gray-50 p-10 rounded-3xl border border-transparent hover:border-[#1B4332]/10 transition-all flex flex-col items-center text-center group">
                  <div className="text-4xl mb-8 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                  <h4 className="text-[11px] font-black text-[#1B4332] uppercase tracking-widest mb-4">{item.title}</h4>
                  <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest leading-relaxed italic">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Section 5: Map Placeholder */}
      <section className="h-[400px] w-full bg-gray-100 grayscale relative reveal overflow-hidden">
         <div className="absolute inset-0 bg-[#1B4332]/5 mix-blend-multiply"></div>
         {/* Abstract map visual using CSS gradients */}
         <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#1B4332 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
         <div className="relative h-full flex items-center justify-center pointer-events-none">
            <div className="text-center">
               <div className="w-4 h-4 bg-[#40916C] rounded-full mx-auto mb-4 animate-ping shadow-[0_0_20px_#40916C]"></div>
               <span className="text-[10px] font-black text-[#1B4332] uppercase tracking-[0.5em]">Primary Manufacturing Hub: Sri Lanka</span>
            </div>
         </div>
      </section>

      {/* Section 6: Final CTA */}
      <section className="py-32 bg-white reveal">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-[#1B4332] rounded-[3rem] p-12 md:p-24 text-white text-center shadow-3xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
             <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-tight leading-tight uppercase">Trusted Manufacturing. <br />Transparent Communication.</h2>
             <p className="text-gray-300 text-lg font-light leading-relaxed mb-16 max-w-2xl mx-auto">
               Align with a partner that values precision and operational clarity. Request our technical catalog to explore our full range of enterprise bedding components.
             </p>
             <div className="flex flex-wrap justify-center gap-8">
               <button onClick={scrollToForm} className="bg-[#40916C] text-white px-10 py-5 rounded-lg font-black text-[11px] uppercase tracking-[0.3em] hover:bg-white hover:text-[#1B4332] transition-all hover-lift shadow-2xl">
                 Request Enterprise Quote
               </button>
               <button className="bg-white/5 border border-white/20 text-white px-10 py-5 rounded-lg font-black text-[11px] uppercase tracking-[0.3em] hover:bg-white hover:text-[#1B4332] transition-all hover-lift backdrop-blur-md">
                 Download Full Catalog
               </button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
