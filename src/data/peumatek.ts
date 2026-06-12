// Stack tecnológico del hero. Cada item usa su icono oficial en
// /public/images/tech/<slug>.svg y muestra la descripción en el tooltip.
// Para agregar uno nuevo: descarga el SVG oficial a esa carpeta y suma aquí.
export type TechItem = { name: string; slug: string; description: string };

export const techStack: TechItem[] = [
  { name: 'Angular', slug: 'angular', description: 'Aplicaciones web SPA, paneles administrativos y mantenedores.' },
  { name: 'Ionic', slug: 'ionic', description: 'Apps móviles híbridas para Android e iOS desde una sola base.' },
  { name: 'Capacitor', slug: 'capacitor', description: 'Acceso nativo (cámara, GPS, QR) y publicación en tiendas.' },
  { name: '.NET', slug: 'dotnet', description: 'APIs y backend con ASP.NET Core / .NET 6 y Entity Framework.' },
  { name: 'SQL Server', slug: 'sqlserver', description: 'Bases de datos relacionales, consultas y reportes optimizados.' },
  { name: 'NestJS', slug: 'nestjs', description: 'APIs backend en Node.js con arquitectura modular.' },
];

// Nodos de la constelación del hero (áreas que conecta PeumaTek).
// Máximo 6 para mantener la composición hexagonal. Editable libremente.
// 'icon' debe coincidir con una clave del mapa nodeIcons en Hero.astro.
export const heroNodes = [
  { label: 'Web', icon: 'web' },
  { label: 'Móvil', icon: 'mobile' },
  { label: 'Sistemas', icon: 'systems' },
  { label: 'Integraciones', icon: 'integrations' },
  { label: 'Datos', icon: 'data' },
  { label: 'Apps', icon: 'apps' },
];

export const aboutPeumatek = {
  eyebrow: 'Quién está detrás',
  title: 'Una marca, una persona, foco en resultados',
  intro:
    'PeumaTek es una marca de desarrollo digital creada por Jorge Urra: desarrollador de software con experiencia en aplicaciones web, móviles, sistemas internos, integraciones y soluciones operacionales para contextos reales.',
  trustPoints: [
    'Hablas siempre con quien desarrolla, sin intermediarios',
    'Tecnología simple y mantenible, sin sobre-ingeniería',
    'Te acompaño desde la idea hasta la publicación',
  ],
  profileTitle: 'Desarrollador de software y soluciones digitales',
  profileName: 'Jorge Urra',
  profileInitials: 'JU',
  // Foto opcional para dar cercanía. Deja '' para usar las iniciales.
  // Si tienes una foto, déjala en public/images/ y pon aquí p.ej. '/images/jorge.jpg'.
  profilePhoto: '',
};

export const workProcess = [
  {
    step: '01',
    icon: 'search',
    title: 'Diagnóstico',
    description: 'Entiendo qué necesitas y el problema a resolver.'
  },
  {
    step: '02',
    icon: 'document',
    title: 'Propuesta',
    description: 'Te paso alcance, plazo y precio antes de partir.'
  },
  {
    step: '03',
    icon: 'code',
    title: 'Diseño y desarrollo',
    description: 'Construyo la solución con el stack adecuado.'
  },
  {
    step: '04',
    icon: 'check',
    title: 'Revisión',
    description: 'Te muestro avances y ajusto con tu feedback.'
  },
  {
    step: '05',
    icon: 'rocket',
    title: 'Publicación',
    description: 'Publico y verifico que todo funcione.'
  },
  {
    step: '06',
    icon: 'support',
    title: 'Soporte',
    description: 'Quedo disponible para mejoras y continuidad.'
  }
];

export const pricingNote =
  'Los planes están pensados para negocios que necesitan presencia digital profesional, soporte básico y una solución lista para funcionar. Otros desarrollos se cotizan según alcance.';

export const solutionTypes = [
  { icon: '◉', title: 'Landing para gimnasio o centro deportivo', description: 'Sitio con planes, clases, horarios, galería y contacto directo por WhatsApp.' },
  { icon: '⬡', title: 'Sistema de control de acceso con QR', description: 'Registro y validación de acceso mediante lectura de códigos QR desde dispositivos móviles.' },
  { icon: '◈', title: 'App móvil con funcionamiento offline', description: 'Aplicación instalable con sincronización posterior para trabajo en terreno sin conexión estable.' },
  { icon: '▦', title: 'Dashboard de indicadores operacionales', description: 'Panel con gráficos, tablas, filtros y exportaciones para seguimiento de información relevante.' },
  { icon: '◎', title: 'Sistema de gestión de personas y asistencia', description: 'Control de registros internos, reportes y consultas para equipos operacionales.' },
  { icon: '✦', title: 'App utilitaria para Google Play', description: 'Desarrollo, prueba interna y publicación de apps de uso cotidiano en la tienda de Android.' },
];
