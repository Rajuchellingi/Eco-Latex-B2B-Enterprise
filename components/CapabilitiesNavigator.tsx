
import React, { useState } from 'react';
import { CAPABILITY_DATA } from '../constants';

const CapabilitiesNavigator: React.FC = () => {
  const [activeTab, setActiveTab] = useState(CAPABILITY_DATA[0].id);
  const currentData = CAPABILITY_DATA.find(tab => tab.id === activeTab) || CAPABILITY_DATA[0];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1B4332] mb-4">Enterprise Capabilities Navigator</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Precision manufacturing for B2B partners. Explore our technical flexibility and export-ready solutions across core categories.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Sidebar Tabs */}
          <div className="lg:col-span-4 flex flex-col space-y-2">
            {CAPABILITY_DATA.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-left p-6 rounded-lg transition-all duration-300 border-l-4 ${
                  activeTab === tab.id 
                    ? 'bg-white shadow-xl border-[#1B4332] translate-x-2' 
                    : 'bg-transparent border-transparent hover:bg-gray-100 hover:translate-x-1'
                }`}
              >
                <span className={`block text-xs uppercase tracking-widest mb-1 ${activeTab === tab.id ? 'text-[#40916C]' : 'text-gray-400'}`}>
                  Manufacturing Core
                </span>
                <span className={`text-xl font-bold ${activeTab === tab.id ? 'text-[#1B4332]' : 'text-gray-600'}`}>
                  {tab.label}
                </span>
              </button>
            ))}
          </div>

          {/* Display Panel */}
          <div className="lg:col-span-8 bg-white rounded-2xl shadow-2xl p-10 md:p-12 min-h-[500px] transition-all duration-500 animate-reveal">
            <h3 className="text-3xl font-bold text-[#1B4332] mb-8 pb-4 border-b border-gray-100">{currentData.label}</h3>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
              <div className="space-y-2 group">
                <span className="text-[10px] font-bold text-[#40916C] uppercase tracking-widest">01 / Overview</span>
                <p className="text-gray-600 leading-relaxed font-medium">{currentData.overview}</p>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-[#40916C] uppercase tracking-widest">02 / Customization</span>
                <p className="text-gray-600 leading-relaxed">{currentData.customization}</p>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-[#40916C] uppercase tracking-widest">03 / Certifications</span>
                <p className="text-gray-600 leading-relaxed">{currentData.certifications}</p>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-[#40916C] uppercase tracking-widest">04 / Packaging</span>
                <p className="text-gray-600 leading-relaxed">{currentData.packaging}</p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-[#1B4332]/5 rounded-lg border border-[#1B4332]/10 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-[#1B4332]">Ready for technical review?</p>
                <p className="text-xs text-gray-500">Contact our engineering team for full spec sheets.</p>
              </div>
              <button className="bg-[#1B4332] text-white px-6 py-2 rounded font-bold text-sm hover:bg-[#2D5A27] transition-all">
                Download Specs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesNavigator;
