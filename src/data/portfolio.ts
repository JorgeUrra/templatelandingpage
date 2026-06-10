export type AppStatus = 'published' | 'in-review' | 'in-development' | 'coming-soon';

export const statusLabels: Record<AppStatus, string> = {
  published: 'Publicada',
  'in-review': 'En revisión',
  'in-development': 'En desarrollo',
  'coming-soon': 'Próximamente',
};

export type OwnApp = {
  name: string;
  icon: string;
  description: string;
  platforms: ('google-play' | 'app-store')[];
  status: AppStatus;
  stack: string[];
  playStoreUrl?: string;
  appStoreUrl?: string;
  detailUrl?: string;
};

export type SolutionCase = {
  title: string;
  description: string;
  areas?: string[];
  stack: string[];
};

export const portfolioIntro =
  'PeumaTek nace desde la experiencia práctica desarrollando soluciones digitales para contextos reales: aplicaciones móviles, sistemas web internos, reportes, integraciones, automatizaciones y herramientas operacionales. Algunos proyectos se presentan como casos de solución anonimizados por razones de confidencialidad, manteniendo el foco en el problema abordado, la tecnología utilizada y el valor entregado.';

export const ownApps: OwnApp[] = [
  {
    name: 'Calculadora Laboral Chile',
    icon: '🧮',
    description:
      'Aplicación móvil orientada a cálculos laborales en Chile, diseñada para entregar herramientas simples y rápidas desde el celular.',
    platforms: ['google-play'],
    status: 'coming-soon',
    stack: ['Ionic', 'Capacitor', 'Angular', 'Almacenamiento local'],
  },
  {
    name: 'Bencina Conveniente',
    icon: '⛽',
    description:
      'Aplicación móvil para comparar precios de combustibles según ubicación, comuna o distancia, usando información pública disponible.',
    platforms: ['google-play'],
    status: 'in-development',
    stack: ['Ionic', 'Capacitor', 'Angular', 'Geolocalización', 'API externa'],
  },
];

export const solutionCases: SolutionCase[] = [
  {
    title: 'Sistema de control operacional para empresa minera',
    description:
      'Desarrollo de solución web y móvil para apoyar procesos de registro, validación y consulta de información operacional en terreno.',
    areas: ['Control de acceso', 'Asistencia', 'Vehículos', 'Reportes'],
    stack: ['Angular', 'Ionic', '.NET 6', 'SQL Server', 'APIs REST'],
  },
  {
    title: 'Dashboard de indicadores operacionales',
    description:
      'Panel de visualización para consultar métricas, gráficos, reportes y exportaciones, facilitando el seguimiento de información relevante para la operación.',
    stack: ['Angular', 'PrimeNG', 'Chart.js', 'SQL Server', '.NET'],
  },
  {
    title: 'Automatización de procesos e integración de datos',
    description:
      'Implementación de procesos automáticos para sincronizar información, consumir APIs, ejecutar tareas programadas y reducir trabajo manual.',
    stack: ['.NET Worker Service', 'SQL Server', 'APIs REST', 'Jobs programados'],
  },
  {
    title: 'Aplicación móvil para trabajo en terreno',
    description:
      'Solución móvil con funcionalidades como lectura QR, funcionamiento offline, geolocalización, formularios y sincronización posterior.',
    stack: ['Ionic', 'Capacitor', 'Dexie.js', 'APIs REST', 'SQL Server'],
  },
];
