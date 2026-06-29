export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  size: 'large' | 'medium' | 'small';
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  stats: string;
  image: string;
  accentColor: string;
  deviceType: 'desktop' | 'mobile' | 'branding';
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export type BuildType = 'website' | 'mobile_app' | 'saas_product' | 'ecommerce_store' | 'brand_identity';

export interface BuildOption {
  id: BuildType;
  label: string;
  description: string;
  features: string[];
  mockupTitle: string;
  mockupSubtitle: string;
  mockupStats: { label: string; value: string }[];
  accentGradient: string;
}
