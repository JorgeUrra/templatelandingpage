import { siteConfig } from '../config/site.config';

const isGym = siteConfig.businessType === 'gym';

export const benefits = isGym
  ? [
      { title: 'Acompañamiento real', description: 'Orientación inicial y apoyo para que entrenes con seguridad.', icon: '✓' },
      { title: 'Planes flexibles', description: 'Opciones mensuales pensadas para distintos objetivos.', icon: '↗' },
      { title: 'Ambiente motivador', description: 'Espacios ordenados para entrenar fuerza, cardio y funcional.', icon: '★' }
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
    description: 'Ideal para presencia online clara y contacto rápido.',
    features: ['Landing de una página', 'Dominio .cl por 1 año', 'Correo corporativo Gmail', 'WhatsApp y formulario'],
    highlighted: false,
    ctaText: 'Quiero este plan'
  },
  {
    name: 'Plan Reserva / Cotización',
    price: '$179.990',
    period: 'inicial + $34.990 mensual',
    description: 'Para negocios que necesitan agendar, reservar o cotizar.',
    features: ['Todo lo del plan Emprende', 'Módulo de reserva o cotización', 'Formulario avanzado', '2 cambios menores mensuales'],
    highlighted: true,
    ctaText: 'Solicitar cotización'
  },
  {
    name: 'Plan Pro',
    price: '$249.990',
    period: 'inicial + $44.990 mensual',
    description: 'Más secciones, confianza y conversión.',
    features: ['Diseño más trabajado', 'Testimonios y FAQ', 'SEO local básico', 'Soporte preferente'],
    highlighted: false,
    ctaText: 'Hablar por WhatsApp'
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
