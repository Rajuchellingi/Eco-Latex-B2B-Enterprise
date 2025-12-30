
import React, { useState } from 'react';

const RFQForm: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    country: '',
    productInterest: '',
    estimatedVolume: '',
    targetMarket: '',
    message: '',
    privateLabel: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry. Our B2B team will respond within 24 business hours.');
  };

  return (
    <section id="rfq-section" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
          {/* Left Info Column */}
          <div className="md:w-1/3 bg-[#1B4332] p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-6">Request a Bulk Quote</h2>
              <p className="text-gray-300 mb-8 font-light">
                Our dedicated export desk handles volume orders, private-label specifications, and global logistics for manufacturers and retailers worldwide.
              </p>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 flex items-center justify-center bg-[#40916C] rounded-full text-[10px]">✓</span>
                  Priority response for B2B
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 flex items-center justify-center bg-[#40916C] rounded-full text-[10px]">✓</span>
                  Custom density adjustments
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 flex items-center justify-center bg-[#40916C] rounded-full text-[10px]">✓</span>
                  OEM branding support
                </li>
              </ul>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-xs uppercase tracking-widest text-[#74C69D] font-bold mb-2">Support desk</p>
              <p className="text-lg font-medium">Dedicated B2B team will respond within business hours.</p>
            </div>
          </div>

          {/* Right Form Column */}
          <form onSubmit={handleSubmit} className="md:w-2/3 p-12 bg-white">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Company Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332] outline-none transition-all"
                  placeholder="e.g., Global Sleep Systems"
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332] outline-none transition-all"
                  placeholder="business@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Country of Operation</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332] outline-none transition-all"
                  placeholder="e.g., Germany"
                  value={formData.country}
                  onChange={(e) => setFormData({...formData, country: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Product Interest</label>
                <select 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332] outline-none transition-all"
                  value={formData.productInterest}
                  onChange={(e) => setFormData({...formData, productInterest: e.target.value})}
                >
                  <option value="">Select Category</option>
                  <option value="sheets">Latex Sheets</option>
                  <option value="mattresses">Mattress Cores</option>
                  <option value="pillows">Molded Pillows</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Est. Monthly Volume</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332] outline-none transition-all"
                  placeholder="Units or Containers"
                  value={formData.estimatedVolume}
                  onChange={(e) => setFormData({...formData, estimatedVolume: e.target.value})}
                />
              </div>
              <div className="flex items-end pb-4">
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input 
                    type="checkbox" 
                    className="w-5 h-5 rounded border-gray-300 text-[#1B4332] focus:ring-[#1B4332]"
                    checked={formData.privateLabel}
                    onChange={(e) => setFormData({...formData, privateLabel: e.target.checked})}
                  />
                  <span className="text-sm font-semibold text-gray-700">Need Private Label Solution</span>
                </label>
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Additional Specifications</label>
              <textarea 
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332] outline-none transition-all"
                placeholder="Include density, sizing, or testing requirements..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <div className="flex items-center justify-between gap-4">
              <label className="cursor-pointer group">
                <input type="file" className="hidden" />
                <span className="text-sm font-bold text-[#1B4332] flex items-center gap-2 group-hover:underline">
                  <span>📎</span> Attach spec sheet (Optional)
                </span>
              </label>
              <button 
                type="submit"
                className="bg-[#1B4332] text-white px-10 py-4 rounded-lg font-bold hover:bg-[#2D5A27] transition-all hover-lift press-scale shadow-lg"
              >
                Send RFQ
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RFQForm;
