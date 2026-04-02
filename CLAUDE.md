# SwimAnalytics Landing Page — Blueprint

> Generado por The Architect el 2026-04-01
> Arquetipo: Marketing / Landing Page

---

## 1. Project Overview

### Vision

Landing page de SwimAnalytics: plataforma de análisis y gestión de natación competitiva. El sitio explica claramente qué hace la plataforma, a quién está dirigida y cuáles son sus herramientas — convirtiendo visitantes en usuarios registrados mediante CTAs directos a `https://swimanalytics.org/auth/login`.

El público objetivo es amplio: entrenadores de clubes, administradores y dueños de piscinas, nadadores, apoderados y dirigentes deportivos. Cada segmento debe sentirse identificado con la propuesta de valor.

### Goals

- Explicar claramente qué es SwimAnalytics y sus 5 herramientas principales
- Dirigir a cada tipo de usuario hacia el registro/login
- Posicionar SwimAnalytics como plataforma líder en natación competitiva
- Capturar tráfico orgánico con el blog

### Success Metrics

- Clicks al botón "Login" / "Ingresar" → `swimanalytics.org/auth/login`
- Tiempo en página > 90 segundos
- Tráfico orgánico desde artículos del blog

---

## 2. Tech Stack

| Capa | Tecnología | Por qué |
|------|-----------|---------|
| Framework | **Astro 5** | Sitio estático, SEO óptimo, cero JS innecesario |
| Lenguaje | **TypeScript** | Tipado, menos bugs, autocompletado |
| Estilos | **Tailwind CSS v4** | Mobile-first, design tokens para paleta extensa |
| Animaciones | **Motion One** | Micro-animaciones ligeras on-scroll, sin overhead |
| Blog | **Astro Content Collections** | MDX local, sin CMS externo |
| Hosting | **Netlify** | Deploy gratuito, CI/CD automático por rama |
| Package Manager | **pnpm** | Más rápido que npm, reproducible |

---

## 3. Directory Structure

```
swimanalytics-landing/
├── public/
│   ├── favicon.svg
│   ├── og-image.png                  # 1200x630px para compartir en redes
│   └── images/
│       ├── hero-bg.webp              # Fondo oscuro del hero
│       ├── tools/                    # Screenshots o ilustraciones de herramientas
│       │   ├── admin-clubes.webp
│       │   ├── registro-entrenamientos.webp
│       │   ├── analisis-competencia.webp
│       │   ├── simulaciones.webp
│       │   └── planificacion.webp
│       └── testimonios/              # Fotos de entrenadores / usuarios
├── src/
│   ├── pages/
│   │   ├── index.astro               # Landing page principal
│   │   ├── blog/
│   │   │   ├── index.astro           # Listado de artículos
│   │   │   └── [slug].astro          # Artículo individual
│   │   └── 404.astro
│   ├── content/
│   │   ├── config.ts                 # Schema del blog
│   │   └── blog/                     # Artículos MDX
│   │       ├── como-planificar-temporada-natacion.mdx
│   │       └── analisis-tiempos-parciales.mdx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── BaseLayout.astro      # HTML wrapper, head, meta, fonts
│   │   │   ├── Header.astro          # Nav sticky + botón Login (top derecha)
│   │   │   └── Footer.astro
│   │   ├── sections/
│   │   │   ├── Hero.astro            # Titular + subtítulo + CTAs
│   │   │   ├── ParaQuien.astro       # 6 perfiles de usuario
│   │   │   ├── Herramientas.astro    # 5 herramientas con detalle
│   │   │   ├── ComoFunciona.astro    # 4 pasos del flujo
│   │   │   ├── Metricas.astro        # Contadores animados
│   │   │   ├── Testimonios.astro     # Cards de usuarios reales
│   │   │   ├── BlogPreview.astro     # Últimos 3 artículos
│   │   │   └── CTAFinal.astro        # Sección de cierre con CTA
│   │   └── ui/
│   │       ├── Button.astro          # Variantes: primary, secondary, ghost
│   │       ├── Card.astro
│   │       ├── PerfilCard.astro      # Card de tipo de usuario
│   │       ├── HerramientaCard.astro # Card de herramienta
│   │       └── TestimonioCard.astro
│   ├── styles/
│   │   └── globals.css               # Tailwind base + CSS custom properties
│   └── lib/
│       └── links.ts                  # URLs centralizadas de la app
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## 4. Data Model

Solo el schema del blog — no hay base de datos.

**Blog Post**
| Campo | Tipo | Notas |
|-------|------|-------|
| title | string | Título del artículo |
| description | string | Meta description y preview card |
| pubDate | Date | Fecha de publicación |
| heroImage | string | Path a imagen destacada |
| category | string | Ej: "Entrenamiento", "Competencia", "Gestión" |
| draft | boolean | Si es true, no se publica |

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
    category: z.string().default('General'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
```

---

## 5. API Design

No hay API backend. Todas las interacciones son links externos:

```typescript
// src/lib/links.ts
export const APP_LINKS = {
  login: 'https://swimanalytics.org/auth/login',
  app: 'https://swimanalytics.org',
} as const;
```

| Acción | Destino |
|--------|---------|
| Botón Login (header) | `https://swimanalytics.org/auth/login` |
| CTA "Comenzar gratis" | `https://swimanalytics.org/auth/login` |
| CTA "Ingresar a la plataforma" | `https://swimanalytics.org/auth/login` |
| Links del footer | `https://swimanalytics.org` |

---

## 6. Frontend Architecture

### Páginas / Rutas

| Ruta | Archivo | Descripción |
|------|---------|-------------|
| `/` | `index.astro` | Landing page completa |
| `/blog` | `blog/index.astro` | Listado de artículos |
| `/blog/[slug]` | `blog/[slug].astro` | Artículo individual |
| `/*` | `404.astro` | 404 con CTA a login |

### Jerarquía de Componentes (index.astro)

```
BaseLayout
  └── Header (sticky)
      ├── Logo SwimAnalytics (izquierda)
      ├── Nav links: Herramientas | ¿Para quién? | Blog
      └── Button "Login" → /auth/login (derecha, rojo primario)
  └── main
      ├── Hero
      │     ├── Titular: "Gestiona, analiza y mejora tu club de natación"
      │     ├── Subtítulo: propuesta de valor en 2 líneas
      │     ├── CTA primario: "Comenzar gratis" → login
      │     └── CTA secundario: "Ver herramientas" → #herramientas
      ├── ParaQuien (id="para-quien")
      │     └── PerfilCard × 6
      │           Entrenadores | Administradores | Dueños de piscina
      │           Nadadores | Apoderados | Dirigentes
      ├── Herramientas (id="herramientas")
      │     └── HerramientaCard × 5
      │           Administración de clubes | Registro de entrenamientos
      │           Análisis de competencia | Simulaciones | Planificación
      ├── ComoFunciona
      │     └── Paso × 4 (numerados)
      ├── Metricas
      │     └── Contador × 3 (500+ usuarios, 50k planes, 1M+ tiempos)
      ├── Testimonios
      │     └── TestimonioCard × N
      ├── BlogPreview
      │     └── BlogCard × 3
      └── CTAFinal
            └── Titular + CTA "Comenzar ahora" → login
  └── Footer (logo, links, copyright)
```

### Estado

Sin estado global. Solo componentes estáticos Astro. Los contadores de métricas usan Intersection Observer nativo para animar cuando entran en viewport (sin librerías adicionales).

---

## 7. Design System

### Colores

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-primary` | `#E53935` | CTAs, botón login, highlights principales |
| `--color-primary-light` | `#EF5350` | Hover states del primario |
| `--color-primary-hover` | `#D32F2F` | Active state botones |
| `--color-primary-pale` | `#FFCDD2` | Backgrounds suaves, badges |
| `--color-black` | `#212121` | Fondo hero, texto principal |
| `--color-gray-dark` | `#424242` | Texto secundario |
| `--color-gray-mid` | `#6c757d` | Texto muted, captions |
| `--color-gray-border` | `#dee2e6` | Bordes de cards |
| `--color-gray-light` | `#F5F5F5` | Fondos de secciones alternas |
| `--color-gray-very-light` | `#F9F9F9` | Fondo base del sitio |
| `--color-white` | `#FFFFFF` | Texto sobre fondos oscuros, cards |
| `--color-blue` | `#1565C0` | Elementos informativos, links |
| `--color-success` | `#4CAF50` | Badges de éxito, confirmaciones |

### Tipografía

| Rol | Fuente | Tamaño | Peso |
|-----|--------|--------|------|
| H1 Hero | **Outfit** | 3.5rem–5rem | 800 |
| H2 Sección | **Outfit** | 2rem–2.5rem | 700 |
| H3 Card | **Outfit** | 1.25rem | 600 |
| Cuerpo | **Inter** | 1rem | 400 |
| Cuerpo énfasis | **Inter** | 1rem | 600 |
| Caption | **Inter** | 0.875rem | 400 |

Fuentes via Google Fonts: `Outfit:wght@600;700;800` + `Inter:wght@400;500;600`

### Spacing & Layout

- Base: 4px — escala: 4, 8, 12, 16, 24, 32, 48, 64, 96
- Max content width: 1280px
- Secciones: `py-16 md:py-24`
- Border radius: 8px default, 16px cards grandes, 6px botones
- Breakpoints: `sm: 640px` / `md: 768px` / `lg: 1024px` / `xl: 1280px`

### Estilo Visual

- Hero: fondo `#212121`, texto blanco, imagen de fondo oscura con overlay
- Secciones alternas: blanco `#FFFFFF` / gris muy claro `#F9F9F9`
- Cards: fondo blanco, borde `#dee2e6`, sombra sutil, hover con borde rojo
- Botón primario: rojo `#E53935`, texto blanco, hover `#D32F2F`
- Botón secundario: borde rojo, texto rojo, hover fondo `#FFCDD2`
- Iconos: Heroicons o SVG inline — estilo outline
- Animaciones: fade-up suave al entrar en viewport, 300ms ease

---

## 8. Autenticación y Autorización

**No aplica.** El sitio es completamente público. Toda autenticación ocurre en `swimanalytics.org`.

---

## 9. Build Order

**Paso 1: Scaffolding**
```bash
pnpm create astro@latest swimanalytics-landing -- --template minimal
cd swimanalytics-landing
pnpm astro add tailwind
pnpm add motion
pnpm add -D @playwright/test
```
Configurar `astro.config.mjs` con integración `tailwind()` y `sitemap()`.

**Paso 2: Links centralizados y Design System**
- Crear `src/lib/links.ts` con todas las URLs de la app
- Crear `src/styles/globals.css` con CSS custom properties (colores, tipografía)
- Configurar `tailwind.config.mjs` con la paleta completa

**Paso 3: BaseLayout + Header + Footer**
- `BaseLayout.astro`: `<html>`, `<head>` con meta tags, OG, canonical, fonts
- `Header.astro`: logo izquierda, nav centro (Herramientas | ¿Para quién? | Blog), botón "Login" derecha → `APP_LINKS.login`
  - El botón Login usa el color primario rojo `#E53935`
  - Header sticky con `backdrop-blur` al hacer scroll
- `Footer.astro`: logo, columnas de links, copyright

**Paso 4: Sección Hero**
- `Hero.astro`: fondo `#212121` + imagen WebP con overlay oscuro
- Titular: "Gestiona, analiza y mejora tu club de natación"
- Subtítulo: 2 líneas sobre la propuesta de valor
- CTA primario: "Comenzar gratis" → `APP_LINKS.login`
- CTA secundario: "Ver herramientas" → `#herramientas` (anchor scroll)
- **IMPORTANTE:** dejar `<!-- REEMPLAZAR: hero-bg.webp con imagen real -->` en el componente

**Paso 5: Sección ¿Para quién? (6 perfiles)**
- `ParaQuien.astro`: grid 2 cols mobile / 3 cols desktop
- `PerfilCard.astro`: ícono SVG + título + 2–3 beneficios específicos por perfil
- Perfiles y su ángulo:
  - **Entrenadores:** planificación de ciclos, análisis individual por atleta
  - **Administradores de piscina:** gestión de múltiples grupos y entrenadores
  - **Dueños de piscina:** visión general del club, reportes
  - **Nadadores:** seguimiento de progreso, tiempos personales
  - **Apoderados:** visibilidad del avance de sus hijos
  - **Dirigentes:** métricas del club, informes para federaciones

**Paso 6: Sección Herramientas (5 herramientas)**
- `Herramientas.astro`: tabs o grid de 5 cards con imagen/screenshot
- `HerramientaCard.astro`: imagen + nombre + descripción + lista de features
- Herramientas:
  1. **Administración de clubes** — grupos, usuarios, roles, permisos
  2. **Registro de entrenamientos** — series, distancias, zonas de energía, estilos
  3. **Análisis de competencia** — tiempos parciales, splits, comparación entre competencias
  4. **Simulaciones** — modelado de escenarios para evaluar mejoras potenciales
  5. **Planificación** — macrociclos, mesociclos, microciclos estructurados
- **IMPORTANTE:** imágenes en `public/images/tools/` — dejar placeholders con comentarios

**Paso 7: Sección Cómo Funciona**
- `ComoFunciona.astro`: 4 pasos numerados en línea horizontal (desktop) / vertical (mobile)
- Paso 1: Crea tu club → Paso 2: Registra entrenamientos → Paso 3: Analiza resultados → Paso 4: Optimiza el rendimiento
- CTA intermedio: "Crear cuenta gratis" → `APP_LINKS.login`

**Paso 8: Sección Métricas**
- `Metricas.astro`: 3 contadores grandes con animación al entrar en viewport
- 500+ usuarios activos | 50.000+ planes de entrenamiento | 1.000.000+ tiempos analizados
- Animación: contador numérico que sube desde 0 usando Intersection Observer + requestAnimationFrame

**Paso 9: Sección Testimonios**
- `Testimonios.astro`: grid de 3–4 cards
- `TestimonioCard.astro`: foto circular + nombre + rol (Entrenador / Administrador) + texto
- Datos hardcodeados — **dejar placeholders con comentarios claros**

**Paso 10: Content Collections — Blog**
- Crear `src/content/config.ts` con schema definido
- Crear 2 artículos MDX de ejemplo en `src/content/blog/`
- `blog/index.astro`: grid de cards, filtro por categoría
- `blog/[slug].astro`: template de artículo con CTA al final → `APP_LINKS.login`

**Paso 11: Sección Blog Preview + CTA Final**
- `BlogPreview.astro`: últimos 3 artículos + link "Ver todos"
- `CTAFinal.astro`: sección oscura (`#212121`) con titular + CTA grande "Comenzar ahora" → login

**Paso 12: SEO completo**
- Meta tags dinámicos en cada página (title, description, OG, canonical)
- JSON-LD: `SoftwareApplication` schema para SwimAnalytics
- Sitemap via `@astrojs/sitemap`
- `public/robots.txt`

**Paso 13: Smoke tests con Playwright**
- Tests: página carga, header visible, botón Login tiene href correcto, todas las secciones presentes, blog carga

**Paso 14: Deploy en Netlify**
- Crear `netlify.toml`
- Conectar repo GitHub → Netlify
- Build: `pnpm build` / Publish: `dist`

---

## 10. Environment Setup

### Prerequisites

- Node.js 20+
- pnpm (`npm install -g pnpm`)
- Cuenta Netlify (gratuita)

### Constantes (sin .env — todo es público)

| Constante | Archivo | Valor |
|-----------|---------|-------|
| `APP_LINKS.login` | `src/lib/links.ts` | `https://swimanalytics.org/auth/login` |
| `APP_LINKS.app` | `src/lib/links.ts` | `https://swimanalytics.org` |

### Comandos iniciales

```bash
pnpm create astro@latest swimanalytics-landing -- --template minimal
cd swimanalytics-landing
pnpm astro add tailwind sitemap
pnpm add motion
pnpm add -D @playwright/test @types/node
pnpm dev
```

---

## 11. Dependencies

### Core

| Paquete | Propósito |
|---------|-----------|
| `astro` | Framework principal |
| `@astrojs/tailwind` | Integración Tailwind |
| `@astrojs/sitemap` | Sitemap automático |
| `tailwindcss` | Estilos utility-first |
| `motion` | Animaciones on-scroll ligeras |

### Dev

| Paquete | Propósito |
|---------|-----------|
| `@playwright/test` | E2E smoke tests |
| `@types/node` | Tipos Node.js |
| `typescript` | Tipado estático |

---

## 12. Deployment Strategy

### Hosting: Netlify (plan gratuito)

```toml
# netlify.toml
[build]
  command = "pnpm build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"
```

### CI/CD

- Push a `main` → deploy producción automático
- PRs → preview deploy en URL única

### Dominio

- Apuntar el dominio de la landing page a Netlify
- SSL automático via Let's Encrypt

---

## 13. Testing Strategy

### E2E Smoke Tests (Playwright)

```
✓ Página principal carga (200)
✓ Header es sticky y visible
✓ Botón "Login" en header tiene href https://swimanalytics.org/auth/login
✓ Sección Hero visible con CTA
✓ Sección Para Quién muestra 6 perfiles
✓ Sección Herramientas muestra 5 herramientas
✓ Página /blog carga y lista artículos
✓ Artículo individual carga correctamente
✓ Todos los CTAs de la página apuntan a /auth/login
```

---

## 14. Skills a Usar Durante la Construcción

| Skill | En qué paso | Para qué |
|-------|-------------|---------|
| `/frontend-design` | Pasos 4, 5, 6 | Diseño visual del hero, perfiles, herramientas |
| `/ui-ux-pro-max` | Paso 2 | Afinar tipografía, espaciado, estilo de cards |
| `/seo-audit` | Paso 12 | Auditoría SEO completa antes del deploy |
| `/humanizer` | Pasos 5, 6, 7 | Redactar copy de perfiles, herramientas y CTAs |
| `/playwright-cli` | Paso 13 | Escribir y ejecutar smoke tests |

---

## 15. CLAUDE.md para el Proyecto

```markdown
# SwimAnalytics Landing Page

Landing page de conversión para SwimAnalytics. Explica la plataforma y dirige a los usuarios a https://swimanalytics.org/auth/login.

## Comandos

- `pnpm dev` — Servidor de desarrollo
- `pnpm build` — Build de producción
- `pnpm preview` — Preview local
- `pnpm test` — E2E tests con Playwright

## Tech Stack

Astro 5 + TypeScript + Tailwind CSS v4 + Motion + Netlify

## Arquitectura

### Estructura clave
- `src/pages/` — Rutas (index, blog)
- `src/components/sections/` — Secciones de la landing
- `src/components/ui/` — Componentes reutilizables
- `src/content/blog/` — Artículos MDX
- `src/lib/links.ts` — URLs centralizadas de la app (ÚNICA fuente de verdad)
- `public/images/` — Imágenes WebP optimizadas

### Flujo de datos
Todo es estático. No hay API calls. Los únicos links externos están en `src/lib/links.ts`.

### Patrones clave
- Todo Astro por defecto — sin React, sin frameworks JS
- URLs de la app SIEMPRE desde `APP_LINKS` en `src/lib/links.ts`
- Imágenes siempre con `<Image>` de Astro
- Secciones con `id` HTML para anchor navigation desde el header

## Design System

### Colores
- `--color-primary: #E53935` — CTAs, botón login, elementos de acción
- `--color-primary-hover: #D32F2F` — Hover de botones primarios
- `--color-primary-pale: #FFCDD2` — Fondos suaves, badges
- `--color-black: #212121` — Hero, texto principal oscuro
- `--color-gray-dark: #424242` — Texto secundario
- `--color-gray-mid: #6c757d` — Texto muted
- `--color-gray-border: #dee2e6` — Bordes de cards
- `--color-gray-light: #F5F5F5` — Fondos de secciones alternas
- `--color-white: #FFFFFF` — Cards, texto sobre oscuro
- `--color-blue: #1565C0` — Info, links secundarios

### Tipografía
- Títulos: **Outfit** 600–800 weight
- Cuerpo: **Inter** 400–600 weight

### Estilo
- Hero: fondo oscuro #212121, texto blanco
- Cards: fondo blanco, borde #dee2e6, hover borde rojo
- Botón primario: #E53935, pill shape, hover #D32F2F
- Max width: 1280px, centrado con mx-auto

## Placeholders a Reemplazar (OBLIGATORIO antes de deploy)

| Placeholder | Archivo | Qué poner |
|-------------|---------|-----------|
| `hero-bg.webp` | `public/images/` | Imagen real de fondo del hero |
| Imágenes herramientas | `public/images/tools/` | Screenshots reales de la app |
| Fotos testimonios | `public/images/testimonios/` | Fotos reales de usuarios |
| Textos testimonios | `Testimonios.astro` | Testimonios reales |

## Reglas No Negociables

1. Todos los links a la app van SIEMPRE desde `APP_LINKS` en `src/lib/links.ts` — nunca hardcodear URLs
2. El botón "Login" en el header debe estar visible en TODOS los tamaños de pantalla
3. Mobile-first — diseñar cada sección desde 375px
4. Imágenes siempre en WebP con `<Image>` de Astro
5. TypeScript strict — sin `any`
6. Un componente por archivo, máximo 200 líneas
7. Sin librerías de UI externas — solo Tailwind + componentes propios
```

---

## 16. Reglas No Negociables

1. **Links centralizados:** `APP_LINKS.login = 'https://swimanalytics.org/auth/login'` vive SOLO en `src/lib/links.ts`. Todos los CTAs importan desde ahí.
2. **Botón Login siempre visible:** visible en header en todos los breakpoints — en mobile colapsa el nav pero el botón Login permanece.
3. **Mobile-first obligatorio:** desarrollar desde 375px hacia arriba.
4. **Imágenes optimizadas:** WebP, con `<Image>` de Astro, nunca `<img>` sin dimensiones.
5. **Sin JavaScript innecesario:** todo es Astro estático. Motion solo para animaciones de entrada — no como dependencia de funcionalidad.
6. **Placeholders marcados:** imágenes y textos de reemplazo con comentarios `<!-- REEMPLAZAR: instrucción -->`.
7. **SEO en cada página:** `BaseLayout` acepta `title`, `description`, `ogImage` como props obligatorias.
8. **TypeScript strict:** `"strict": true` en `tsconfig.json`.
