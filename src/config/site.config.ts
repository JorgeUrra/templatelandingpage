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
    github?: string;
    linkedin?: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    titleAccent?: string;
    subtitle: string;
    primaryText: string;
    primaryAction: 'whatsapp' | 'contact' | 'booking' | 'vehicles' | 'services';
    secondaryText?: string;
    secondaryAction?: 'whatsapp' | 'contact' | 'booking' | 'vehicles' | 'services';
    tags?: string[];
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
  'portfolio',
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
  'portfolio',
  'testimonials',
  'faq',
  'businessHours',
  'map',
  'socialLinks',
  'contact'
];

const peumatekModules: ModuleKey[] = [
  'hero',
  'benefits',
  'services',
  'pricing',
  'portfolio',
  'workProcess',
  'about',
  'faq',
  'contact'
];

export const demoSites: Record<'gym' | 'automotive' | 'peumatek', SiteConfig> = {
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
  },
  peumatek: {
    businessType: 'services',
    commercialPlan: 'pro',
    themePreset: 'peumatek',
    business: {
      name: 'PeumaTek',
      slogan: 'Tecnología simple para resolver lo cotidiano',
      description: 'Estudio de desarrollo digital especializado en aplicaciones web, móviles, sistemas internos, integraciones y automatizaciones para negocios reales.',
      city: 'Peumo, Chile',
      address: 'Peumo, Chile',
      phone: '+56 9 7530 7980',
      whatsapp: '56975307980',
      email: 'jorge.urra.merino@gmail.com',
      logoText: 'PT'
    },
    seo: {
      title: 'PeumaTek | Desarrollo digital a medida',
      description: 'Desarrollo de sitios web, aplicaciones móviles, sistemas internos, integraciones y automatizaciones para negocios y profesionales en Chile.',
      image: '/images/peumatek-logo.png'
    },
    social: {},
    hero: {
      eyebrow: 'Desarrollo digital a medida',
      title: 'Desarrollo soluciones digitales simples, modernas y a medida',
      titleAccent: 'a medida',
      subtitle: 'En PeumaTek diseño y desarrollo sitios web, aplicaciones móviles, sistemas internos, automatizaciones e integraciones pensadas para negocios reales.',
      primaryText: 'Solicitar cotización',
      primaryAction: 'contact',
      secondaryText: 'Ver servicios',
      secondaryAction: 'services',
      tags: ['Angular', 'Ionic', '.NET', 'SQL Server', 'APIs REST', 'Capacitor']
    },
    map: {
      embedUrl: '',
      directionsUrl: ''
    },
    modules: peumatekModules
  }
};

// CAMBIO RAPIDO DE DEMO:
// - 'gym'        → Landing de gimnasio (tema oscuro amarillo)
// - 'automotive' → Landing de automotora (tema claro azul)
// - 'peumatek'   → Sitio oficial PeumaTek (tema oscuro verde)
export const selectedDemo: keyof typeof demoSites = 'peumatek';
export const siteConfig = demoSites[selectedDemo];
export const activeTheme = themes[siteConfig.themePreset];
export const activeModules = siteConfig.modules;
