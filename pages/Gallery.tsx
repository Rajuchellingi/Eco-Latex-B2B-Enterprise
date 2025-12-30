
import React, { useState, useEffect } from 'react';

interface GalleryItem {
  id: number;
  url: string;
  category: string;
  caption: string;
}

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Sync scroll state with the main header to adjust sticky top position dynamically
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filters = [
    'All',
    'Raw Materials & Plantations',
    'Manufacturing & Processing',
    'Quality Control & Testing',
    'Finished Products',
    'Packaging & Export',
    'Facilities & Infrastructure'
  ];

  const galleryItems: GalleryItem[] = [
    { id: 1, url: 'https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80&w=800', category: 'Raw Materials & Plantations', caption: 'Natural Latex Plantation Harvest' },
    { id: 2, url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800', category: 'Manufacturing & Processing', caption: 'Latex Foam Processing Line' },
    { id: 3, url: 'https://images.unsplash.com/photo-1553152531-b98a2fc8d3bf?auto=format&fit=crop&q=80&w=800', category: 'Quality Control & Testing', caption: 'Quality Inspection Station' },
    { id: 4, url: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=800', category: 'Finished Products', caption: 'Organic Mattress Core' },
    { id: 5, url: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=800', category: 'Finished Products', caption: 'Certified Latex Topper' },
    { id: 6, url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800', category: 'Facilities & Infrastructure', caption: 'Main Manufacturing Center' },
    { id: 7, url: 'https://images.unsplash.com/photo-1591946614421-1d978fc4b445?auto=format&fit=crop&q=80&w=800', category: 'Finished Products', caption: 'Eco Pet Bed Solutions' },
    { id: 8, url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800', category: 'Finished Products', caption: 'Natural Latex Yoga Mat' },
    { id: 9, url: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800', category: 'Packaging & Export', caption: 'Export Ready Master Carton' },
    { id: 10, url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800', category: 'Raw Materials & Plantations', caption: 'Certified Organic Plantation' },
    { id: 11, url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800', category: 'Manufacturing & Processing', caption: 'Precision Cutting Station' },
    { id: 12, url: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800', category: 'Facilities & Infrastructure', caption: 'Logistics Distribution Hub' },
  ];

  const filteredItems = activeFilter === 'All' ? galleryItems : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (item: GalleryItem) => setSelectedImage(item);
  const closeLightbox = () => setSelectedImage(null);

  const navigateLightbox = (dir: 'next' | 'prev') => {
    if (!selectedImage) return;
    const currentIndex = galleryItems.findIndex(i => i.id === selectedImage.id);
    let nextIndex = dir === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (nextIndex >= galleryItems.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = galleryItems.length - 1;
    setSelectedImage(galleryItems[nextIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigateLightbox('next');
      if (e.key === 'ArrowLeft') navigateLightbox('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[450px] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920" 
            alt="Eco-Latex Montage" 
            className="w-full h-full object-cover opacity-90 transition-transform duration-[10000ms] scale-105"
            style={{ transform: 'scale(1.05)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B4332]/95 via-[#1B4332]/70 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-3xl reveal">
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1]">
              Inside Eco-Latex <br />Manufacturing.
            </h1>
            <p className="text-xl text-gray-200 font-medium tracking-wide max-w-2xl">
              A visual overview of our materials, processes, facilities, and finished products.
            </p>
          </div>
        </div>
      </section>

      {/* Dynamic Sticky Filter Nav - Adjusted top based on header compression */}
      <nav 
        className={`sticky z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 hidden md:block transition-all duration-300 ${
          isScrolled ? 'top-[92px]' : 'top-[145px]'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center space-x-10 overflow-x-auto no-scrollbar py-5">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`whitespace-nowrap text-[10px] font-black uppercase tracking-[0.2em] relative py-2 transition-colors ${
                  activeFilter === filter ? 'text-[#1B4332]' : 'text-gray-400 hover:text-[#1B4332]'
                }`}
              >
                {filter}
                {activeFilter === filter && (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#1B4332] animate-mega-slide"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Image Grid - Reduced top padding for tighter connection to filters */}
      <section className="pt-12 pb-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 reveal-stagger">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                onClick={() => openLightbox(item)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover-lift"
              >
                <div className="aspect-[4/5] bg-gray-100 overflow-hidden">
                  <img 
                    src={item.url} 
                    alt={item.caption} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-[8px] font-black text-[#74C69D] uppercase tracking-[0.3em] block mb-2">{item.category}</span>
                    <h4 className="text-white text-sm font-black uppercase tracking-widest">{item.caption}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Manufacturing Story Strip */}
      <section className="py-24 bg-gray-50 overflow-hidden reveal">
        <div className="container mx-auto px-6 mb-16">
          <h2 className="text-3xl font-black text-[#1B4332] uppercase tracking-widest">Process Continuity</h2>
          <div className="w-20 h-1 bg-[#40916C] mt-4"></div>
        </div>
        <div className="flex space-x-8 px-6 overflow-x-auto no-scrollbar pb-12">
          {[
            { label: 'Plantation / Raw Material', img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=600' },
            { label: 'Latex Processing', img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=600' },
            { label: 'Foam Formation', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600' },
            { label: 'Product Fabrication', img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=600' },
            { label: 'Quality Testing', img: 'https://images.unsplash.com/photo-1553152531-b98a2fc8d3bf?auto=format&fit=crop&q=80&w=600' },
            { label: 'Export Packaging', img: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600' }
          ].map((step, idx) => (
            <div key={idx} className="flex-shrink-0 w-80 group">
              <div className="aspect-video rounded-xl overflow-hidden mb-6 shadow-sm grayscale hover:grayscale-0 transition-all duration-700">
                <img src={step.img} alt={step.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[4000ms]" />
              </div>
              <span className="text-[10px] font-black text-[#1B4332] uppercase tracking-[0.2em]">{step.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Product Visuals */}
      <section className="py-24 bg-white reveal">
        <div className="container mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-3xl font-black text-[#1B4332] uppercase tracking-widest mb-4">Enterprise Catalog Overview</h2>
            <p className="text-gray-400 font-medium text-[10px] uppercase tracking-widest">Global Product Standards</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { name: 'Latex Sheets', img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=400' },
              { name: 'Mattress & Bedding', img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=400' },
              { name: 'Pillows', img: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=400' },
              { name: 'Yoga Mats', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400' },
              { name: 'Pet Beds', img: 'https://images.unsplash.com/photo-1591946614421-1d978fc4b445?auto=format&fit=crop&q=80&w=400' }
            ].map((prod, idx) => (
              <div key={idx} className="relative group">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-sm bg-gray-50 border border-gray-100 flex items-center justify-center p-4">
                  <img src={prod.img} alt={prod.name} className="w-full h-full object-contain mix-blend-multiply opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 right-4 bg-[#1B4332] text-white text-[7px] font-black uppercase tracking-widest px-2 py-1 rounded">Private Label Ready</div>
                </div>
                <h4 className="mt-6 text-[10px] font-black text-[#1B4332] uppercase tracking-[0.2em] text-center">{prod.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Facilities & Locations */}
      <section className="py-24 bg-gray-50 reveal">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="grid grid-cols-2 gap-4">
               <div className="aspect-square rounded-[2.5rem] overflow-hidden shadow-xl reveal-left">
                  <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600" alt="Factory 1" className="w-full h-full object-cover" />
               </div>
               <div className="aspect-square rounded-[2.5rem] overflow-hidden shadow-xl translate-y-12 reveal-right">
                  <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600" alt="Factory 2" className="w-full h-full object-cover" />
               </div>
            </div>
            <div className="lg:pl-16 space-y-16">
               <div className="group">
                  <h4 className="text-[#40916C] font-black text-[11px] uppercase tracking-[0.4em] mb-6">Latex Core Factory</h4>
                  <p className="text-gray-800 font-black text-2xl mb-2 leading-tight uppercase">Katunayake, Sri Lanka</p>
                  <p className="text-gray-400 text-xs font-black uppercase tracking-widest leading-relaxed border-t border-gray-200 pt-6 italic">
                    Lalan Eco-Latex, Lot 72, Phase III, KEPZ
                  </p>
               </div>
               <div className="group">
                  <h4 className="text-[#40916C] font-black text-[11px] uppercase tracking-[0.4em] mb-6">Value Addition Facility</h4>
                  <p className="text-gray-800 font-black text-2xl mb-2 leading-tight uppercase">Welivita, Sri Lanka</p>
                  <p className="text-gray-400 text-xs font-black uppercase tracking-widest leading-relaxed border-t border-gray-200 pt-6 italic">
                    Lalan Eco-Latex, 42, Old Avisawella Road
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: B2B TRUST CTA */}
      <section className="py-24 bg-white reveal">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-[#1B4332] rounded-[3rem] p-12 md:p-24 text-white text-center shadow-3xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
             <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-tight uppercase">Proven by Process. <br />Verified by Visuals.</h2>
             <p className="text-gray-300 text-lg font-light leading-relaxed mb-16 max-w-2xl mx-auto">
               Align with a manufacturing partner that operates with full transparency. Need specific high-res imagery for your brand assets or compliance verification?
             </p>
             <div className="flex flex-wrap justify-center gap-8">
               <button className="bg-[#40916C] text-white px-10 py-5 rounded-lg font-black text-[11px] uppercase tracking-[0.3em] hover:bg-white hover:text-[#1B4332] transition-all hover-lift shadow-2xl">
                 Request Factory Images / Videos
               </button>
               <button 
                 onClick={() => document.getElementById('rfq-section')?.scrollIntoView({ behavior: 'smooth' })}
                 className="bg-white/5 border border-white/20 text-white px-10 py-5 rounded-lg font-black text-[11px] uppercase tracking-[0.3em] hover:bg-white hover:text-[#1B4332] transition-all hover-lift backdrop-blur-md"
               >
                 Request Quote
               </button>
             </div>
          </div>
        </div>
      </section>

      {/* Lightbox Overlay */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 animate-reveal" style={{ animationDuration: '150ms' }}>
          <button 
            onClick={closeLightbox}
            className="absolute top-10 right-10 text-white text-4xl font-light hover:scale-110 transition-transform"
          >
            ✕
          </button>
          
          <button 
            onClick={() => navigateLightbox('prev')}
            className="absolute left-6 md:left-12 text-white text-4xl font-light hover:text-[#74C69D] transition-colors p-4"
          >
            ‹
          </button>
          
          <div className="max-w-5xl max-h-[80vh] px-6 text-center flex flex-col items-center">
            <img 
              src={selectedImage.url} 
              alt={selectedImage.caption} 
              className="max-w-full max-h-full object-contain shadow-2xl mb-8"
            />
            <div className="space-y-2">
               <span className="text-[10px] font-black text-[#74C69D] uppercase tracking-[0.4em]">{selectedImage.category}</span>
               <h3 className="text-white text-xl font-black uppercase tracking-widest">{selectedImage.caption}</h3>
            </div>
          </div>
          
          <button 
            onClick={() => navigateLightbox('next')}
            className="absolute right-6 md:right-12 text-white text-4xl font-light hover:text-[#74C69D] transition-colors p-4"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
