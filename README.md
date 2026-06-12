# Landing Template Modular

Template base para generar landing pages comerciales configurables por rubro, plan y módulos activos.

## Objetivo

Tener una sola base técnica para crear landings para distintos clientes, activando o desactivando módulos desde configuración.

Incluye demos para:

- Gimnasio
- Automotora

## Stack

- Astro
- TypeScript
- CSS modular global con variables de tema
- Sitemap oficial de Astro
- Arquitectura por módulos

## Instalación

```bash
npm install
npm run dev
```

Luego abrir:

```bash
http://localhost:4321
```

## Despliegue en Cloudflare

Este proyecto es un sitio estatico Astro. El build genera la carpeta:

```txt
dist
```

Para Cloudflare Pages conectado a GitHub, usa esta configuracion:

```txt
Framework preset: Astro
Build command: npm run build
Build output directory: dist
Deploy command: dejar vacio
```

Si Cloudflare te pide solo un comando de deploy y estas usando Wrangler, usa uno de estos:

```bash
npm ci && npm run deploy:worker
```

o, si quieres desplegar explicitamente como Pages con Wrangler:

```bash
npm ci && npm run deploy:pages
```

Para correrlo localmente cuando ya tienes `node_modules` instalado:

```bash
npm run deploy:worker
npm run deploy:pages
```

El comando `npx wrangler deploy` despliega como Workers Static Assets. Para ese caso el archivo `wrangler.toml` ya indica que debe ejecutar `npm run build` y publicar `dist`.

## Cambiar demo activa

Edita:

```txt
src/config/site.config.ts
```

Busca:

```ts
export const selectedDemo: keyof typeof demoSites = 'gym';
```

Cambia a:

```ts
export const selectedDemo: keyof typeof demoSites = 'automotive';
```

## Activar o desactivar módulos

En el mismo archivo puedes modificar el arreglo `modules` de cada demo.

Ejemplo gimnasio:

```ts
const gymModules = [
  'hero',
  'benefits',
  'gymPlans',
  'gymClasses',
  'gymSchedule',
  'trialClass',
  'trainers',
  'gallery',
  'testimonials',
  'faq',
  'businessHours',
  'map',
  'socialLinks',
  'contact'
];
```

Ejemplo automotora:

```ts
const automotiveModules = [
  'hero',
  'benefits',
  'vehicles',
  'financing',
  'testDrive',
  'tradeIn',
  'purchaseProcess',
  'gallery',
  'testimonials',
  'faq',
  'businessHours',
  'map',
  'socialLinks',
  'contact'
];
```

## Catálogo de módulos implementados

### Core

- Hero
- Beneficios
- Servicios
- Planes / precios
- Galería
- Testimonios
- FAQ
- Horarios
- Mapa
- Redes sociales
- Contacto
- WhatsApp flotante
- Página de gracias

### Gimnasio

- Planes gimnasio
- Clases
- Horario de clases
- Profesores
- Clase de prueba / evaluación inicial

### Automotora

- Vehículos destacados
- Consulta por vehículo vía WhatsApp
- Financiamiento
- Parte de pago
- Proceso de compra
- Agendar visita / prueba de manejo

## Datos editables

```txt
src/data/core.ts
src/data/gym.ts
src/data/automotive.ts
```

## Configuración principal

```txt
src/config/site.config.ts
src/config/modules.catalog.ts
src/config/theme.config.ts
```

## Notas de alcance V1

Esta primera versión es un template modular estático/configurable. No incluye:

- Panel administrador
- Login
- Base de datos
- Inventario editable real
- Pagos online
- Reservas con cupos reales
- CRM

Esos puntos deben venderse como módulos avanzados o proyectos adicionales.

## Recomendación comercial

Usar el template como base para planes:

- Emprende
- Reserva / Cotización
- Pro

Mientras más módulos activos y mayor necesidad de actualización, mayor debería ser el plan o los extras.
