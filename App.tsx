
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import WhatWeDo from './pages/WhatWeDo';
import LatexSheets from './pages/LatexSheets';
import MattressProtectors from './pages/MattressProtectors';
import BedLinen from './pages/BedLinen';
import Comforters from './pages/Comforters';
import MoldedLatexPillows from './pages/MoldedLatexPillows';
import FunctionalPillows from './pages/FunctionalPillows';
import YogaMats from './pages/YogaMats';
import PetBeds from './pages/PetBeds';
import Sustainability from './pages/Sustainability';
import Certifications from './pages/Certifications';
import Manufacturing from './pages/Manufacturing';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const ScrollRevealObserver = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .reveal-stagger, .reveal-left, .reveal-right');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <ScrollRevealObserver />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-[130px] md:pt-[145px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/products/latex-sheets" element={<LatexSheets />} />
            <Route path="/products/mattress-protectors" element={<MattressProtectors />} />
            <Route path="/products/bed-linen" element={<BedLinen />} />
            <Route path="/products/comforters" element={<Comforters />} />
            <Route path="/products/molded-latex-pillows" element={<MoldedLatexPillows />} />
            <Route path="/products/functional-pillows" element={<FunctionalPillows />} />
            <Route path="/products/yoga-mats" element={<YogaMats />} />
            <Route path="/products/pet-beds" element={<PetBeds />} />
            <Route path="/products" element={<div className="p-20 text-center uppercase font-black text-xs tracking-widest text-gray-400">Products Specification Hub</div>} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
