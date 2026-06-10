import type { BusinessType, CommercialPlan, ModuleKey } from './module.types';
import { themes, type ThemePreset } from './theme.config';

export type SiteConfig = {
  businessType: BusinessType;
  commercialPlan: CommercialPlan;
  themePreset: ThemePreset;
  business: {
    name: string;
    slogan: string;
    description: string;
    city: string;
    address: string;
    phone: string;
    whatsapp: string;
    email: string;
    logoText: string;
  };
  seo: {
    title: string;
    description: string;
    image: string;
  };
  social: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
    website?: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryText: string;
    primaryAction: 'whatsapp' | 'contact' | 'booking' | 'vehicles';
    secondaryText?: string;
    secondaryAction?: 'whatsapp' | 'contact' | 'booking' | 'vehicles';
  };
  map: {
    embedUrl: string;
    directionsUrl: string;
  };
  modules: ModuleKey[];
};

const gymModules: ModuleKey[] = [
  'hero',
  'benefits',
  'gymPlans',
  'gymClasses',
  'gymSchedule',
  'trialClass',
  'trainers',
  'gallery',
  'testimonials',
  'faq',
  'businessHours',
  'map',
  'socialLinks',
  'contact'
];

const automotiveModules: ModuleKey[] = [
  'hero',
  'benefits',
  'vehicles',
  'financing',
  'testDrive',
  'tradeIn',
  'purchaseProcess',
  'gallery',
  'testimonials',
  'faq',
  'businessHours',
  'map',
  'socialLinks',
  'contact'
];

export const demoSites: Record<'gym' | 'automotive', SiteConfig> = {
  gym: {
    businessType: 'gym',
    commercialPlan: 'pro',
    themePreset: 'fitness-dark',
    business: {
      name: 'Fuerza Total Gym',
      slogan: 'Entrena con propósito, constancia y acompañamiento',
      description: 'Gimnasio local con planes flexibles, clases guiadas y evaluación inicial para nuevos alumnos.',
      city: 'Rancagua, Chile',
      address: 'Av. Principal 123, Rancagua',
      phone: '+56 9 1234 5678',
      whatsapp: '56912345678',
      email: 'contacto@fuerzatotal.cl',
      logoText: 'FT'
    },
    seo: {
      title: 'Fuerza Total Gym | Gimnasio en Rancagua',
      description: 'Planes de gimnasio, clases grupales, evaluación inicial y entrenamiento guiado en Rancagua.',
      image: '/images/og-demo.svg'
    },
    social: {
      instagram: 'https://instagram.com/',
      facebook: 'https://facebook.com/'
    },
    hero: {
      eyebrow: 'Gimnasio en Rancagua',
      title: 'Un gimnasio completo para entrenar mejor desde el primer día',
      subtitle: 'Planes mensuales, clases guiadas, evaluación inicial y acompañamiento para que avances con claridad.',
      primaryText: 'Consultar planes',
      primaryAction: 'whatsapp',
      secondaryText: 'Agendar clase de prueba',
      secondaryAction: 'booking'
    },
    map: {
      embedUrl: 'https://www.google.com/maps?q=Rancagua%20Chile&output=embed',
      directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Rancagua%20Chile'
    },
    modules: gymModules
  },
  automotive: {
    businessType: 'automotive',
    commercialPlan: 'pro',
    themePreset: 'automotive-clean',
    business: {
      name: 'Automotora Los Robles',
      slogan: 'Vehículos seleccionados con respaldo y atención personalizada',
      description: 'Automotora local con vehículos destacados, opciones de financiamiento y recepción en parte de pago.',
      city: 'San Fernando, Chile',
      address: 'Ruta 5 Sur Km 130, San Fernando',
      phone: '+56 9 8765 4321',
      whatsapp: '56987654321',
      email: 'contacto@automotoralosrobles.cl',
      logoText: 'LR'
    },
    seo: {
      title: 'Automotora Los Robles | Vehículos en San Fernando',
      description: 'Vehículos destacados, financiamiento, parte de pago y prueba de manejo en San Fernando.',
      image: '/images/og-demo.svg'
    },
    social: {
      instagram: 'https://instagram.com/',
      facebook: 'https://facebook.com/'
    },
    hero: {
      eyebrow: 'Automotora en San Fernando',
      title: 'Encuentra tu próximo vehículo con asesoría y respaldo local',
      subtitle: 'Revisa vehículos destacados, solicita financiamiento o agenda una visita para conocer el stock disponible.',
      primaryText: 'Ver vehículos',
      primaryAction: 'vehicles',
      secondaryText: 'Solicitar financiamiento',
      secondaryAction: 'contact'
    },
    map: {
      embedUrl: 'https://www.google.com/maps?q=San%20Fernando%20Chile&output=embed',
      directionsUrl: 'https://www.google.com/maps/search/?api=1&query=San%20Fernando%20Chile'
    },
    modules: automotiveModules
  }
};

// CAMBIO RAPIDO DE DEMO:
// - Usa 'gym' para mostrar landing de gimnasio.
// - Usa 'automotive' para mostrar landing de automotora.
export const selectedDemo: keyof typeof demoSites = 'gym';
export const siteConfig = demoSites[selectedDemo];
export const activeTheme = themes[siteConfig.themePreset];
export const activeModules = siteConfig.modules;
