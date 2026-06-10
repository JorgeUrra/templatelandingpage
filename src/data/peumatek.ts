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
    'PeumaTek es una marca de desarrollo digital creada por Jorge Urra, desarrollador de software con experiencia en aplicaciones web, móviles, sistemas internos, integraciones, reportes y soluciones operacionales.',
  body:
    'El foco está en construir tecnología simple, clara y útil para negocios, profesionales y equipos que necesitan resolver problemas concretos. Sin capas innecesarias, sin promesas de agencia, sin equipos de 20 personas que no conocen tu proyecto.',
  profileTitle: 'Desarrollador de software y soluciones digitales',
  profileName: 'Jorge Urra',
  profileInitials: 'JU',
  // Foto opcional para dar cercanía. Deja '' para usar las iniciales.
  // Si tienes una foto, déjala en public/images/ y pon aquí p.ej. '/images/jorge.jpg'.
  profilePhoto: '',
  highlightedStack: ['Angular', 'Ionic', '.NET', 'SQL Server', 'APIs REST', 'Capacitor'],
};

export const workProcess = [
  {
    step: '01',
    title: 'Diagnóstico',
    description: 'Conversamos sobre lo que necesitas, el contexto del negocio y el problema a resolver.'
  },
  {
    step: '02',
    title: 'Propuesta',
    description: 'Preparo una propuesta con alcance, tecnología, plazo estimado y precio antes de empezar.'
  },
  {
    step: '03',
    title: 'Diseño y desarrollo',
    description: 'Diseño la estructura y desarrollo la solución con el stack adecuado para el proyecto.'
  },
  {
    step: '04',
    title: 'Revisión',
    description: 'Te muestro avances, recibo feedback y ajusto antes de publicar.'
  },
  {
    step: '05',
    title: 'Publicación',
    description: 'Publico el sitio, app o sistema en el entorno final y verifico que todo funcione.'
  },
  {
    step: '06',
    title: 'Soporte',
    description: 'Quedo disponible para mejoras, correcciones y continuidad según lo acordado.'
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
