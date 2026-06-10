export const gymPlans = [
  {
    name: 'Plan Libre',
    price: '$29.990',
    period: 'mensual',
    features: ['Acceso libre', 'Uso de máquinas', 'Horario completo'],
    highlighted: false
  },
  {
    name: 'Plan Full',
    price: '$39.990',
    period: 'mensual',
    features: ['Acceso libre', 'Clases grupales', 'Evaluación inicial'],
    highlighted: true
  },
  {
    name: 'Personalizado',
    price: 'Consultar',
    period: 'según objetivo',
    features: ['Orientación individual', 'Seguimiento', 'Plan ajustado'],
    highlighted: false
  }
];

export const gymClasses = [
  { name: 'Funcional', duration: '45 min', level: 'Todos los niveles', description: 'Clase grupal enfocada en fuerza, resistencia y movilidad.' },
  { name: 'Musculación guiada', duration: '60 min', level: 'Inicial / intermedio', description: 'Orientación en máquinas, pesos libres y técnica básica.' },
  { name: 'HIIT', duration: '35 min', level: 'Intermedio', description: 'Entrenamiento intenso de corta duración para mejorar condición física.' }
];

export const gymSchedule = [
  { className: 'Funcional', day: 'Lunes', time: '19:00' },
  { className: 'Musculación guiada', day: 'Martes', time: '18:30' },
  { className: 'HIIT', day: 'Miércoles', time: '20:00' },
  { className: 'Funcional', day: 'Jueves', time: '19:00' },
  { className: 'Evaluación inicial', day: 'Viernes', time: '17:00' }
];

export const trainers = [
  { name: 'Carlos Muñoz', role: 'Profesor de educación física', description: 'Especialista en entrenamiento funcional y fuerza.' },
  { name: 'Daniela Rojas', role: 'Coach de musculación', description: 'Acompaña procesos de fuerza, técnica y hábitos de entrenamiento.' }
];

export const trialClass = {
  title: 'Agenda tu clase de prueba',
  description: 'Ven a conocer el gimnasio, resolver dudas y recibir una orientación inicial.',
  ctaText: 'Agendar por WhatsApp'
};
