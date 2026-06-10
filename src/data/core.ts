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

export const pricingPlans = [
  {
    name: 'Plan Emprende',
    price: '$129.990',
    period: 'inicial + $29.990 mensual',
    description: 'Presencia digital profesional para negocios que están partiendo o necesitan renovarse.',
    features: [
      'Landing de una página',
      'Dominio .cl por 1 año',
      '1 correo corporativo (hasta 3 alias)',
      'Hosting incluido',
      'Botón de WhatsApp',
      'Formulario simple',
      'Mapa y galería básica',
      '1 cambio menor mensual no acumulable'
    ],
    highlighted: false,
    ctaText: 'Solicitar cotización',
    note: 'Mínimo 12 meses'
  },
  {
    name: 'Plan Reserva',
    price: '$179.990',
    period: 'inicial + $34.990 mensual',
    description: 'Para negocios que necesitan agendar, reservar o recibir cotizaciones desde el sitio.',
    features: [
      'Todo lo del Plan Emprende',
      'Botón de reserva y calendario embebido',
      'Configuración inicial de agenda',
      'Sección de servicios',
      'Página de gracias',
      '2 cambios menores mensuales no acumulables'
    ],
    highlighted: true,
    ctaText: 'Solicitar cotización',
    note: 'Mínimo 12 meses'
  },
  {
    name: 'Plan Pro',
    price: '$249.990',
    period: 'inicial + $44.990 mensual',
    description: 'Diseño más trabajado, más secciones y mayor capacidad de conversión.',
    features: [
      'Landing con diseño más trabajado',
      'Dominio .cl por 1 año',
      '1 correo corporativo (hasta 5 alias)',
      'Reserva o formulario avanzado',
      'Galería, testimonios y preguntas frecuentes',
      'SEO local básico',
      '2 cambios menores mensuales no acumulables'
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
      { question: '¿En cuánto tiempo desarrollas un sitio web?', answer: 'Un landing page estándar toma entre 5 y 10 días hábiles. Proyectos más complejos se estiman según alcance en la etapa de propuesta.' },
      { question: '¿Trabajas con negocios fuera de Peumo?', answer: 'Sí. Trabajo de forma remota con negocios y profesionales en cualquier ciudad de Chile.' },
      { question: '¿Puedo pedir cambios después de publicado el sitio?', answer: 'Sí. Los planes incluyen cambios menores mensuales. Modificaciones mayores o nuevas funcionalidades se cotizan por separado.' },
      { question: '¿Desarrollas solo landing pages o también sistemas más complejos?', answer: 'Desarrollo desde landing pages hasta sistemas web y móviles completos: paneles administrativos, apps móviles, integraciones, dashboards y automatizaciones.' },
      { question: '¿Qué necesito para empezar?', answer: 'Solo cuéntame qué necesitas. A partir de eso preparo una propuesta con alcance, plazo y precio antes de comenzar.' }
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
