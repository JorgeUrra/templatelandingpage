import type { ModuleDefinition } from './module.types';

export const modulesCatalog: ModuleDefinition[] = [
  { key: 'hero', label: 'Hero principal', category: 'core', description: 'Primera pantalla con propuesta de valor y llamados a la acción.', plans: ['emprende','reserva','pro'], businessTypes: ['gym','automotive','services','health','beauty'] },
  { key: 'benefits', label: 'Beneficios', category: 'core', description: 'Razones para elegir el negocio.', plans: ['emprende','reserva','pro'], businessTypes: ['gym','automotive','services','health','beauty'] },
  { key: 'services', label: 'Servicios', category: 'core', description: 'Servicios o categorías principales.', plans: ['emprende','reserva','pro'], businessTypes: ['gym','services','health','beauty','automotive'] },
  { key: 'pricing', label: 'Planes / precios', category: 'core', description: 'Planes comerciales, membresías o paquetes.', plans: ['reserva','pro'], businessTypes: ['gym','services','health','beauty'] },
  { key: 'gallery', label: 'Galería', category: 'core', description: 'Muestra visual del negocio.', plans: ['emprende','reserva','pro'], businessTypes: ['gym','automotive','services','health','beauty'] },
  { key: 'testimonials', label: 'Testimonios', category: 'trust', description: 'Opiniones de clientes.', plans: ['emprende','reserva','pro'], businessTypes: ['gym','automotive','services','health','beauty'] },
  { key: 'faq', label: 'Preguntas frecuentes', category: 'trust', description: 'Respuestas rápidas a dudas comunes.', plans: ['emprende','reserva','pro'], businessTypes: ['gym','automotive','services','health','beauty'] },
  { key: 'businessHours', label: 'Horarios', category: 'core', description: 'Horario de atención general.', plans: ['emprende','reserva','pro'], businessTypes: ['gym','automotive','services','health','beauty'] },
  { key: 'map', label: 'Mapa', category: 'core', description: 'Ubicación y botón cómo llegar.', plans: ['emprende','reserva','pro'], businessTypes: ['gym','automotive','services','health','beauty'] },
  { key: 'contact', label: 'Contacto', category: 'conversion', description: 'Formulario y datos de contacto.', plans: ['emprende','reserva','pro'], businessTypes: ['gym','automotive','services','health','beauty'] },
  { key: 'socialLinks', label: 'Redes sociales', category: 'core', description: 'Links a Instagram, Facebook, TikTok, etc.', plans: ['emprende','reserva','pro'], businessTypes: ['gym','automotive','services','health','beauty'] },

  { key: 'gymPlans', label: 'Planes gimnasio', category: 'gym', description: 'Membresías específicas para gimnasio.', plans: ['emprende','reserva','pro'], businessTypes: ['gym'] },
  { key: 'gymClasses', label: 'Clases gimnasio', category: 'gym', description: 'Clases disponibles, duración y nivel.', plans: ['reserva','pro'], businessTypes: ['gym'] },
  { key: 'gymSchedule', label: 'Horario de clases', category: 'gym', description: 'Programación semanal de clases.', plans: ['reserva','pro'], businessTypes: ['gym'] },
  { key: 'trainers', label: 'Profesores', category: 'gym', description: 'Equipo o profesores destacados.', plans: ['pro'], businessTypes: ['gym'] },
  { key: 'trialClass', label: 'Clase de prueba', category: 'conversion', description: 'CTA para agendar clase de prueba o evaluación.', plans: ['reserva','pro'], businessTypes: ['gym'] },

  { key: 'vehicles', label: 'Vehículos destacados', category: 'automotive', description: 'Módulo de stock destacado o catálogo simple.', plans: ['emprende','reserva','pro'], businessTypes: ['automotive'] },
  { key: 'financing', label: 'Financiamiento', category: 'automotive', description: 'Sección y formulario de interés por financiamiento.', plans: ['reserva','pro'], businessTypes: ['automotive'] },
  { key: 'tradeIn', label: 'Parte de pago', category: 'automotive', description: 'Formulario para recibir vehículo en parte de pago.', plans: ['pro'], businessTypes: ['automotive'] },
  { key: 'purchaseProcess', label: 'Proceso de compra', category: 'automotive', description: 'Pasos de compra, visita, financiamiento y entrega.', plans: ['pro'], businessTypes: ['automotive'] },
  { key: 'testDrive', label: 'Prueba de manejo', category: 'conversion', description: 'Agendar visita o prueba de manejo.', plans: ['reserva','pro'], businessTypes: ['automotive'] },

  { key: 'portfolio', label: 'Proyectos y experiencia', category: 'portfolio', description: 'Apps propias publicadas o en desarrollo y casos de solución anonimizados. Ideal para agencias, freelancers y empresas de tecnología.', plans: ['emprende','reserva','pro'], businessTypes: ['gym','automotive','services','health','beauty'] },

  { key: 'about', label: 'Quién está detrás', category: 'trust', description: 'Perfil breve del responsable o equipo, orientado a generar confianza sin extenderse como un CV.', plans: ['emprende','reserva','pro'], businessTypes: ['gym','automotive','services','health','beauty'] },
  { key: 'workProcess', label: 'Proceso de trabajo', category: 'trust', description: 'Pasos del proceso de trabajo o entrega, desde diagnóstico hasta soporte.', plans: ['reserva','pro'], businessTypes: ['gym','automotive','services','health','beauty'] }
];
