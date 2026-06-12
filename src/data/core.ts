import { siteConfig } from '../config/site.config';

const isGym = siteConfig.businessType === 'gym';
const isServices = siteConfig.businessType === 'services';

export const benefits = isGym
  ? [
      { title: 'Acompañamiento real', description: 'Orientación inicial y apoyo para que entrenes con seguridad.', icon: '✓' },
      { title: 'Planes flexibles', description: 'Opciones mensuales pensadas para distintos objetivos.', icon: '↗' },
      { title: 'Ambiente motivador', description: 'Espacios ordenados para entrenar fuerza, cardio y funcional.', icon: '★' }
    ]
  : isServices
  ? [
      { title: 'Desarrollo a medida', description: 'Cada solución se construye según lo que el negocio necesita, sin plantillas forzadas ni capas innecesarias.', icon: 'custom' },
      { title: 'Tecnología moderna y mantenible', description: 'Stack actual y escalable, pensado para crecer sin tener que rehacer todo más adelante.', icon: 'tech' },
      { title: 'Acompañamiento directo', description: 'Hablas siempre con quien desarrolla. Comunicación real desde la idea hasta la publicación.', icon: 'support' }
    ]
  : [
      { title: 'Vehículos seleccionados', description: 'Unidades revisadas y publicadas con información clara.', icon: '✓' },
      { title: 'Financiamiento', description: 'Orientación para evaluar alternativas de compra.', icon: '$' },
      { title: 'Atención personalizada', description: 'Te acompañamos desde la consulta hasta la entrega.', icon: '★' }
    ];

export const services = isGym
  ? [
      { title: 'Musculación', description: 'Zona de máquinas y pesos libres para entrenar fuerza.' },
      { title: 'Entrenamiento funcional', description: 'Clases dinámicas para mejorar resistencia y condición general.' },
      { title: 'Evaluación inicial', description: 'Punto de partida para orientar tus objetivos.' }
    ]
  : isServices
  ? [
      { title: 'Aplicaciones web a medida', description: 'Sistemas internos, paneles administrativos, mantenedores, gestión de usuarios y herramientas operacionales pensadas para tu flujo de trabajo.', icon: 'systems', meta: 'Angular · .NET · SQL Server' },
      { title: 'Landing pages y sitios web', description: 'Sitios profesionales con WhatsApp, formularios, mapas, reservas y SEO local básico.', icon: 'web', meta: 'Astro · WhatsApp · SEO' },
      { title: 'Aplicaciones móviles y PWA', description: 'Apps con QR, GPS, cámara, offline y notificaciones.', icon: 'mobile', meta: 'Ionic · Capacitor · PWA' },
      { title: 'Integraciones y automatización', description: 'Conexión entre sistemas, APIs, workers y procesos programados.', icon: 'integrations', meta: 'APIs · Workers · Jobs' },
      { title: 'Dashboards, reportes y datos', description: 'Indicadores, gráficos, reportes y exportaciones a Excel.', icon: 'data', meta: 'PrimeNG · Chart.js' },
      { title: 'Productos digitales y publicación de apps', description: 'Creación de apps utilitarias, preparación de activos, pruebas internas y publicación en Google Play con su posterior mantenimiento.', icon: 'apps', meta: 'Google Play · Mantención' }
    ]
  : [
      { title: 'Compra y venta', description: 'Vehículos seleccionados para distintas necesidades.' },
      { title: 'Financiamiento', description: 'Evaluación y orientación para concretar la compra.' },
      { title: 'Parte de pago', description: 'Recibimos tu vehículo y revisamos alternativas.' }
    ];

// Plan de entrada (pago único). Se muestra como tira aparte, no en la grilla,
// porque su estructura es distinta a los planes con mensualidad.
export const entryPlan = {
  name: 'Plan Presencia',
  price: '$109.990',
  period: 'pago único',
  icon: 'web',
  pitch: '¿Solo necesitas estar online? Tu landing publicada con dominio y hosting el primer año, sin mensualidad.',
  includes: ['1 página publicada', 'Dominio .cl 1 año', 'Hosting + HTTPS', 'WhatsApp y formulario'],
  footnote: 'Desde el 2º año renuevas dominio y hosting por tu cuenta. No incluye cambios ni soporte.',
  ctaText: 'Quiero este plan'
};

export const pricingPlans = [
  {
    name: 'Plan Emprende',
    price: '$129.990',
    period: 'inicial + $29.990 / mes',
    description: 'Siempre online y al día, sin que te preocupes de lo técnico.',
    icon: 'rocket',
    features: [
      'Todo lo de Presencia, administrado por mí',
      'Correo profesional en Gmail con tu dominio',
      'Dominio y hosting siempre al día',
      'Mapa y galería de fotos',
      '1 cambio al mes'
    ],
    highlighted: false,
    ctaText: 'Solicitar cotización',
    note: 'Mínimo 12 meses'
  },
  {
    name: 'Plan Reserva',
    price: '$179.990',
    period: 'inicial + $34.990 / mes',
    description: 'Para que tus clientes agenden o coticen solos, sin llamadas.',
    icon: 'calendar',
    features: [
      'Todo lo del Plan Emprende',
      'Reservas online con calendario',
      'Tus clientes agendan solos, 24/7',
      'Servicios con descripción y precios',
      '2 cambios al mes'
    ],
    highlighted: true,
    ctaText: 'Solicitar cotización',
    note: 'Mínimo 12 meses'
  },
  {
    name: 'Plan Pro',
    price: '$249.990',
    period: 'inicial + $44.990 / mes',
    description: 'Máxima presencia y conversión: diseño premium y posicionamiento en Google.',
    icon: 'star',
    features: [
      'Todo lo del Plan Reserva',
      'Diseño premium con más secciones',
      'Correo en Gmail (hasta 5 cuentas)',
      'Testimonios y preguntas frecuentes',
      'Apareces en Google (SEO local)',
      '2 cambios al mes con prioridad'
    ],
    highlighted: false,
    ctaText: 'Solicitar cotización',
    note: 'Mínimo 12 meses'
  }
];

export const testimonials = [
  { name: 'Cliente Demo 1', comment: 'La página quedó clara, rápida y nos ayudó a recibir más consultas.', rating: 5 },
  { name: 'Cliente Demo 2', comment: 'El proceso fue simple y ahora tenemos una presencia más profesional.', rating: 5 },
  { name: 'Cliente Demo 3', comment: 'Nos gustó que todo quedara conectado a WhatsApp y correo corporativo.', rating: 5 }
];

export const gallery = [
  { src: '/images/gallery/demo-1.svg', alt: 'Imagen demo 1', category: 'local' },
  { src: '/images/gallery/demo-2.svg', alt: 'Imagen demo 2', category: 'servicio' },
  { src: '/images/gallery/demo-3.svg', alt: 'Imagen demo 3', category: 'equipo' },
  { src: '/images/gallery/demo-4.svg', alt: 'Imagen demo 4', category: 'ambiente' }
];

export const faqs = isGym
  ? [
      { question: '¿Puedo agendar una clase de prueba?', answer: 'Sí. Puedes contactarnos por WhatsApp o usar el botón de agendamiento.' },
      { question: '¿Tienen planes mensuales?', answer: 'Sí. Contamos con planes mensuales y alternativas según disponibilidad.' },
      { question: '¿Necesito experiencia previa?', answer: 'No. Podemos orientarte desde el nivel inicial.' }
    ]
  : isServices
  ? [
      { question: '¿En cuánto tiempo está listo mi sitio?', answer: 'Una landing estándar toma entre 5 y 10 días hábiles. Los proyectos más complejos se estiman según su alcance en la etapa de propuesta.' },
      { question: '¿Cómo es el correo profesional con mi dominio?', answer: 'Usas tu propio dominio (ej: hola@tunegocio.cl) dentro de Gmail, con la misma interfaz de Google que ya conoces, en el celular y el computador. Funciona sobre Google Workspace y lo dejo configurado al activar tu plan.' },
      { question: '¿Qué pasa con el dominio y el hosting cada año?', answer: 'En los planes mensuales yo me encargo de renovarlos mientras el servicio esté activo, sin que tengas que preocuparte. En el Plan Presencia (pago único), desde el segundo año los renuevas tú.' },
      { question: '¿Puedo pedir cambios después de publicado el sitio?', answer: 'Sí. Los planes mensuales incluyen cambios menores cada mes (textos, fotos, precios). Las modificaciones mayores o nuevas funcionalidades se cotizan por separado.' },
      { question: '¿Trabajas con negocios fuera de Peumo?', answer: 'Sí. Trabajo de forma remota con negocios y profesionales en cualquier ciudad de Chile.' },
      { question: '¿Desarrollas solo landing pages o también sistemas más complejos?', answer: 'Desde landing pages hasta sistemas web y móviles completos: paneles administrativos, apps, integraciones, dashboards y automatizaciones.' }
    ]
  : [
      { question: '¿Tienen financiamiento?', answer: 'Sí. Puedes solicitar orientación y evaluación de alternativas.' },
      { question: '¿Reciben vehículo en parte de pago?', answer: 'Sí. Puedes enviar los datos de tu vehículo para evaluación.' },
      { question: '¿Puedo agendar una prueba de manejo?', answer: 'Sí. Coordina una visita por WhatsApp o formulario.' }
    ];

export const businessHours = [
  { day: 'Lunes a viernes', hours: isGym ? '07:00 a 22:00' : '09:30 a 19:00' },
  { day: 'Sábado', hours: isGym ? '09:00 a 14:00' : '10:00 a 14:00' },
  { day: 'Domingo', hours: 'Cerrado' }
];
