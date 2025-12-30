
import React from 'react';
import { ProductSubItem, CapabilityTab, TechSpecTab } from './types';

export const COLORS = {
  brand: '#1B4332',
  brandLight: '#40916C',
  accent: '#74C69D',
};

export const PRODUCT_CATEGORIES: ProductSubItem[] = [
  { name: 'Natural Latex Sheets', path: '/products/latex-sheets', description: 'Custom specs + private label + bulk packaging' },
  { name: 'Mattress Protectors', path: '/products/mattress-protectors', description: 'Custom specs + private label + bulk packaging' },
  { name: 'Bed Linen', path: '/products/bed-linen', description: 'Custom specs + private label + bulk packaging' },
  { name: 'Comforters', path: '/products/comforters', description: 'Custom specs + private label + bulk packaging' },
  { name: 'Molded Latex Pillows', path: '/products/molded-latex-pillows', description: 'Custom specs + private label + bulk packaging' },
  { name: 'Functional Pillows', path: '/products/functional-pillows', description: 'Custom specs + private label + bulk packaging' },
  { name: 'Yoga Mats', path: '/products/yoga-mats', description: 'Custom specs + private label + bulk packaging' },
  { name: 'Pet Beds', path: '/products/pet-beds', description: 'Custom specs + private label + bulk packaging' },
];

export const CAPABILITY_DATA: CapabilityTab[] = [
  {
    id: 'sheets',
    label: 'Latex Sheets',
    overview: 'High-density natural latex sheets manufactured using the Dunlop process for consistent support.',
    customization: 'Density range 65-95 kg/m³, custom thicknesses from 1cm to 15cm.',
    certifications: 'LGA, Oeko-Tex Standard 100, ECO Institut.',
    packaging: 'Bulk roll packaging or precision flat-stack palletizing.',
  },
  {
    id: 'mattresses',
    label: 'Cores & Mattresses',
    overview: 'Monoblock or multi-zone mattress cores designed for global sleep brands.',
    customization: 'Zoning patterns (3, 5, 7 zones), firmness levels from soft to extra firm.',
    certifications: 'ISPA Member, Centexbel, GOLS (Global Organic Latex Standard).',
    packaging: 'Kraft wrap or vacuum compression for efficient export shipping.',
  },
  {
    id: 'pillows',
    label: 'Molded Pillows',
    overview: 'Ergonomic molded pillows utilizing pin-core technology for breathability.',
    customization: 'Custom mold designs, private label covers (Bamboo, Tencel, Cotton).',
    certifications: 'SGS Tested, Oeko-Tex Class 1.',
    packaging: 'Retail-ready display boxes or bulk compression for OEM.',
  }
];

export const TECH_SPECS: TechSpecTab[] = [
  {
    id: 'types',
    label: 'Latex Sheet Types',
    content: {
      title: 'Material Engineering',
      facts: ['100% Natural Latex', 'Dunlop Processed', 'Seamless Core Technology', 'Breathable Cell Structure'],
      icon: '📐',
    },
  },
  {
    id: 'zoning',
    label: 'Zoning & Support',
    content: {
      title: 'Ergonomic Precision',
      facts: ['Optimized Spine Alignment', '7-Zone Pressure Mapping', 'Independent Support Columns', 'Motion Isolation'],
      icon: '⚖️',
    },
  },
  {
    id: 'comfort',
    label: 'Comfort Layers',
    content: {
      title: 'Layer Science',
      facts: ['Soft-Touch Surface', 'Temperature Neutrality', 'Hypoallergenic Properties', 'Instant Recovery Force'],
      icon: '✨',
    },
  },
  {
    id: 'packaging',
    label: 'Packaging Formats',
    content: {
      title: 'Export Logistics',
      facts: ['Vacuum Roll-Pack', 'Stack-Flat Pallets', 'Moisture-Barrier Wrapping', 'Space-Optimized Shipping'],
      icon: '📦',
    },
  },
];

export const WORKFLOW_STEPS = [
  { label: 'Inquiry', icon: '📩' },
  { label: 'Specs', icon: '📝' },
  { label: 'Sampling', icon: '🧪' },
  { label: 'Production', icon: '🏭' },
  { label: 'QA', icon: '✅' },
  { label: 'Packing', icon: '📦' },
  { label: 'Shipping', icon: '🚢' },
];
