export type BusinessType = 'gym' | 'automotive' | 'services' | 'health' | 'beauty';
export type CommercialPlan = 'emprende' | 'reserva' | 'pro';

export type ModuleKey =
  | 'hero'
  | 'benefits'
  | 'services'
  | 'pricing'
  | 'gallery'
  | 'testimonials'
  | 'faq'
  | 'businessHours'
  | 'map'
  | 'contact'
  | 'socialLinks'
  | 'gymPlans'
  | 'gymClasses'
  | 'gymSchedule'
  | 'trainers'
  | 'trialClass'
  | 'vehicles'
  | 'financing'
  | 'tradeIn'
  | 'purchaseProcess'
  | 'testDrive';

export type ModuleDefinition = {
  key: ModuleKey;
  label: string;
  category: 'core' | 'conversion' | 'trust' | 'gym' | 'automotive';
  description: string;
  plans: CommercialPlan[];
  businessTypes: BusinessType[];
};
