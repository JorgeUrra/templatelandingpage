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
  // 'screen' = clave de la pantalla placeholder (appScreens) mientras no haya captura real.
  // 'screenshot' = ruta a la captura real (ej: '/images/apps/calc-1.png'); si existe, reemplaza al placeholder.
  screen?: string;
  screenshot?: string;
  screenshots?: string[];
  highlights?: string[];
  playStoreUrl?: string;
  appStoreUrl?: string;
  detailUrl?: string;
};

export type SolutionCase = {
  title: string;
  // 'visual' = clave de escena de marca (scenes.ts) para ilustrar el caso sin exponer nada real.
  visual: string;
  description: string;
  areas?: string[];
  stack: string[];
};

export const portfolioIntro =
  'PeumaTek nace desde la experiencia práctica desarrollando soluciones digitales para contextos reales: aplicaciones móviles, sistemas web internos, reportes, integraciones, automatizaciones y herramientas operacionales. Algunos proyectos se presentan como casos de solución anonimizados por razones de confidencialidad, manteniendo el foco en el problema abordado, la tecnología utilizada y el valor entregado.';

export const ownApps: OwnApp[] = [
  {
    name: 'Calculadora Laboral Chile',
    icon: 'calculator',
    description:
      'Aplicación móvil orientada a cálculos laborales en Chile, diseñada para entregar herramientas simples y rápidas desde el celular.',
    platforms: ['google-play'],
    status: 'coming-soon',
    stack: ['Ionic', 'Capacitor', 'Angular', 'Almacenamiento local'],
    screen: 'calc',
    screenshots: [
      '/images/apps/calculadora-inicio.png',
      '/images/apps/calculadora-sueldo-liquido.png',
      '/images/apps/calculadora-indicadores.png',
      '/images/apps/calculadora-calc-auxiliar.png',
    ],
    highlights: ['Sueldo líquido y honorarios en segundos', 'Finiquito, vacaciones y horas extra', 'Con indicadores vigentes (UF, UTM, AFP)'],
  },
  {
    name: 'Bencina Conveniente',
    icon: 'fuel',
    description:
      'Aplicación móvil para comparar precios de combustibles según ubicación, comuna o distancia, usando información pública disponible.',
    platforms: ['google-play'],
    status: 'in-development',
    stack: ['Ionic', 'Capacitor', 'Geolocalización', 'Mapas', 'API externa'],
    screen: 'fuel',
    screenshots: [
      '/images/apps/bencina-inicio.png',
      '/images/apps/bencina-mapa.png',
      '/images/apps/bencina-detalle.png',
      '/images/apps/bencina-detalle-mapa.png',
      '/images/apps/bencina-favoritas.png',
    ],
    highlights: ['Compara precios por comuna', 'Filtra por cercanía', 'Usa información pública'],
  },
  {
    name: 'Control Pyme',
    icon: 'store',
    description:
      'Aplicación para gestionar el día a día de una pyme: caja diaria, inventario y stock, ventas, gastos y ventas a crédito, con herramientas de IVA, margen y precios.',
    platforms: ['google-play'],
    status: 'in-development',
    stack: ['Ionic', 'Capacitor', 'Angular', 'Almacenamiento local'],
    screenshots: [
      '/images/apps/control-pyme-inicio.png',
      '/images/apps/control-pyme-inventario.png',
      '/images/apps/control-pyme-movimientos.png',
      '/images/apps/control-pyme-nuevo-producto.png',
      '/images/apps/control-pyme-nuevo-cliente.png',
      '/images/apps/control-pyme-calculadora.png',
    ],
    highlights: ['Caja diaria con ventas, gastos y utilidad', 'Inventario y control de stock', 'Ventas al contado y a crédito'],
  },
];

export const solutionCases: SolutionCase[] = [
  {
    title: 'Sistema de control operacional para empresa minera',
    visual: 'systems',
    description:
      'Solución web y móvil para apoyar procesos de registro, validación y consulta de información operacional en terreno.',
    areas: ['Control de acceso', 'Asistencia', 'Vehículos', 'Reportes'],
    stack: ['Angular', 'Ionic', '.NET 6', 'SQL Server', 'APIs REST'],
  },
  {
    title: 'Dashboard de indicadores operacionales',
    visual: 'data',
    description:
      'Panel de visualización para consultar métricas, gráficos, reportes y exportaciones, facilitando el seguimiento de la operación.',
    stack: ['Angular', 'PrimeNG', 'Chart.js', 'SQL Server', '.NET'],
  },
  {
    title: 'Automatización de procesos e integración de datos',
    visual: 'integrations',
    description:
      'Procesos automáticos para sincronizar información, consumir APIs, ejecutar tareas programadas y reducir el trabajo manual.',
    stack: ['.NET Worker Service', 'SQL Server', 'APIs REST', 'Jobs programados'],
  },
  {
    title: 'Aplicación móvil para trabajo en terreno',
    visual: 'mobile',
    description:
      'Solución móvil con lectura QR, funcionamiento offline, geolocalización, formularios y sincronización posterior.',
    stack: ['Ionic', 'Capacitor', 'Dexie.js', 'APIs REST', 'SQL Server'],
  },
];

// Pantallas placeholder (mockup) para el teléfono, en colores de marca.
// Se reemplazan automáticamente si la app define 'screenshot'.
export const appScreens: Record<string, string> = {
  // Pantalla de calculadora: display + grilla de botones (botón "=" en naranjo)
  calc: '<svg viewBox="0 0 180 380" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="180" height="380" fill="var(--surface-muted)"/><rect x="20" y="22" width="84" height="9" rx="4.5" fill="currentColor" opacity="0.55"/><circle cx="160" cy="26" r="3.5" fill="var(--peumo,#F07820)"/><rect x="16" y="48" width="148" height="78" rx="16" fill="currentColor" opacity="0.10"/><rect x="116" y="64" width="36" height="7" rx="3.5" fill="currentColor" opacity="0.45"/><rect x="66" y="86" width="86" height="20" rx="6" fill="var(--peumo,#F07820)"/><rect x="16" y="150" width="32" height="40" rx="12" fill="currentColor" opacity="0.12"/><rect x="56" y="150" width="32" height="40" rx="12" fill="currentColor" opacity="0.12"/><rect x="96" y="150" width="32" height="40" rx="12" fill="currentColor" opacity="0.12"/><rect x="136" y="150" width="32" height="40" rx="12" fill="currentColor" opacity="0.18"/><rect x="16" y="200" width="32" height="40" rx="12" fill="currentColor" opacity="0.12"/><rect x="56" y="200" width="32" height="40" rx="12" fill="currentColor" opacity="0.12"/><rect x="96" y="200" width="32" height="40" rx="12" fill="currentColor" opacity="0.12"/><rect x="136" y="200" width="32" height="40" rx="12" fill="currentColor" opacity="0.18"/><rect x="16" y="250" width="32" height="40" rx="12" fill="currentColor" opacity="0.12"/><rect x="56" y="250" width="32" height="40" rx="12" fill="currentColor" opacity="0.12"/><rect x="96" y="250" width="32" height="40" rx="12" fill="currentColor" opacity="0.12"/><rect x="136" y="250" width="32" height="40" rx="12" fill="currentColor" opacity="0.18"/><rect x="16" y="300" width="72" height="40" rx="12" fill="currentColor" opacity="0.12"/><rect x="96" y="300" width="32" height="40" rx="12" fill="currentColor" opacity="0.12"/><rect x="136" y="300" width="32" height="40" rx="12" fill="var(--peumo,#F07820)"/></svg>',
  // Pantalla de mapa de combustibles: pins + tarjeta de precio
  fuel: '<svg viewBox="0 0 180 380" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="180" height="380" fill="var(--surface-muted)"/><rect x="0" y="0" width="180" height="250" fill="currentColor" opacity="0.05"/><path d="M-10 72 Q60 96 96 56 T200 96" stroke="currentColor" stroke-opacity="0.20" stroke-width="6" fill="none"/><path d="M32 -10 L72 112 L46 258" stroke="currentColor" stroke-opacity="0.14" stroke-width="5" fill="none"/><circle cx="60" cy="92" r="10" fill="currentColor" opacity="0.65"/><circle cx="60" cy="92" r="3.5" fill="var(--surface-muted)"/><circle cx="96" cy="200" r="9" fill="currentColor" opacity="0.5"/><circle cx="96" cy="200" r="3" fill="var(--surface-muted)"/><circle cx="122" cy="150" r="13" fill="var(--peumo,#F07820)"/><circle cx="122" cy="150" r="4.5" fill="var(--surface-muted)"/><rect x="12" y="266" width="156" height="100" rx="18" fill="currentColor" opacity="0.10"/><circle cx="40" cy="298" r="14" fill="var(--peumo,#F07820)" opacity="0.9"/><rect x="64" y="286" width="70" height="8" rx="4" fill="currentColor" opacity="0.5"/><rect x="64" y="302" width="48" height="14" rx="5" fill="var(--peumo,#F07820)"/><rect x="30" y="334" width="120" height="7" rx="3.5" fill="currentColor" opacity="0.28"/><rect x="30" y="348" width="86" height="7" rx="3.5" fill="currentColor" opacity="0.20"/></svg>',
};
