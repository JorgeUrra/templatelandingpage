export type ThemePreset = 'fitness-dark' | 'automotive-clean' | 'professional-light' | 'local-warm';

export const themes = {
  'fitness-dark': {
    name: 'Fitness oscuro',
    className: 'theme-fitness-dark',
    primary: '#facc15',
    secondary: '#111827'
  },
  'automotive-clean': {
    name: 'Automotora limpio',
    className: 'theme-automotive-clean',
    primary: '#2563eb',
    secondary: '#0f172a'
  },
  'professional-light': {
    name: 'Profesional claro',
    className: 'theme-professional-light',
    primary: '#0f766e',
    secondary: '#0f172a'
  },
  'local-warm': {
    name: 'Local cercano',
    className: 'theme-local-warm',
    primary: '#c2410c',
    secondary: '#431407'
  }
} as const;
