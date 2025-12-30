
export interface ProductSubItem {
  name: string;
  description: string;
  path: string;
}

export interface CapabilityTab {
  id: string;
  label: string;
  overview: string;
  customization: string;
  certifications: string;
  packaging: string;
}

export interface TechSpecTab {
  id: string;
  label: string;
  content: {
    title: string;
    facts: string[];
    icon: string;
  };
}
