export type Lang = 'es' | 'en';

export const translations = {
  es: {
    header: {
      tools: 'Herramientas',
      forWho: '¿Para quién?',
      blog: 'Blog',
      login: 'Login',
    },
    hero: {
      badge: 'Plataforma líder en natación competitiva',
      title: 'Gestiona, analiza y mejora',
      titleHighlight: 'tu club de natación',
      subtitle: 'SwimAnalytics unifica la gestión de entrenadores, nadadores y administradores en una sola plataforma inteligente. Optimiza el rendimiento con datos reales.',
      ctaPrimary: 'Comenzar gratis',
      ctaSecondary: 'Ver herramientas',
      statsUsers: 'Usuarios',
      statsPlans: 'Planes',
      statsTimes: 'Tiempos',
    },
    paraQuien: {
      tag: 'Para cada rol',
      title: '¿Para quién es SwimAnalytics?',
      subtitle: 'Cada miembro del ecosistema de tu club tiene una experiencia diseñada a su medida.',
      perfiles: [
        { titulo: 'Entrenadores', beneficios: ['Planificación de ciclos de entrenamiento', 'Análisis individual por atleta', 'Control de cargas y volúmenes'] },
        { titulo: 'Administradores de piscina', beneficios: ['Gestión de múltiples grupos y entrenadores', 'Control de asistencia y membresías', 'Reportes de actividad del club'] },
        { titulo: 'Dueños de piscina', beneficios: ['Visión general del club en tiempo real', 'Reportes financieros y de rendimiento', 'Dashboard ejecutivo integrado'] },
        { titulo: 'Nadadores', beneficios: ['Seguimiento de progreso personal', 'Historial de tiempos y marcas', 'Visualización de mejoras por estilo'] },
        { titulo: 'Apoderados', beneficios: ['Visibilidad del avance de sus hijos', 'Notificaciones de entrenamientos y competencias', 'Acceso seguro y simplificado'] },
        { titulo: 'Dirigentes', beneficios: ['Métricas consolidadas del club', 'Informes para federaciones y organismos', 'Comparativas entre temporadas'] },
      ],
    },
    herramientas: {
      tag: '5 herramientas integradas',
      title: 'Todo lo que necesita tu club',
      subtitle: 'Desde la planificación hasta el análisis post-competencia — SwimAnalytics cubre todo el ciclo del rendimiento.',
      items: [
        { nombre: 'Administración de clubes', descripcion: 'Gestiona grupos, usuarios y roles con un sistema de permisos granular. Todo tu club en un solo lugar.', features: ['Creación y gestión de grupos de entrenamiento', 'Roles personalizados: entrenador, admin, nadador', 'Sistema de permisos flexible', 'Gestión de membresías y cuotas'] },
        { nombre: 'Registro de entrenamientos', descripcion: 'Registra series, distancias, estilos y zonas de energía. Lleva un historial completo de cada sesión.', features: ['Registro detallado por series y repeticiones', 'Clasificación por estilos y zonas de energía', 'Asignación de entrenamientos a grupos', 'Historial cronológico completo'] },
        { nombre: 'Análisis de competencia', descripcion: 'Analiza tiempos parciales, splits y compara resultados entre competencias con visualizaciones detalladas.', features: ['Importación de resultados de competencias', 'Análisis de splits por vuelta', 'Comparación entre competencias', 'Identificación de patrones de rendimiento'] },
        { nombre: 'Simulaciones', descripcion: 'Modela escenarios para evaluar mejoras potenciales y proyectar el rendimiento de tus nadadores.', features: ['Simulación de splits objetivo', 'Proyección de tiempos finales', 'Modelado de estrategias de carrera', 'Comparación de escenarios alternativos'] },
        { nombre: 'Planificación', descripcion: 'Estructura macrociclos, mesociclos y microciclos con herramientas de periodización profesional.', features: ['Planificación por macrociclos y mesociclos', 'Microciclos semanales detallados', 'Control de cargas y recuperación', 'Sincronización con el calendario de competencias'] },
      ],
    },
    comoFunciona: {
      tag: 'Simple y potente',
      title: 'Cómo funciona',
      subtitle: 'Cuatro pasos para transformar la gestión de tu club con datos reales.',
      cta: 'Crear cuenta gratis',
      pasos: [
        { titulo: 'Crea tu club', descripcion: 'Registra tu club en minutos. Agrega entrenadores, grupos y nadadores con un flujo guiado.' },
        { titulo: 'Registra entrenamientos', descripcion: 'Planifica y registra cada sesión con series, estilos, distancias y zonas de energía.' },
        { titulo: 'Analiza resultados', descripcion: 'Importa resultados de competencias y accede a análisis de splits, tendencias y comparativas.' },
        { titulo: 'Optimiza el rendimiento', descripcion: 'Usa las simulaciones y la planificación para diseñar estrategias de mejora basadas en datos.' },
      ],
    },
    metricas: {
      title: 'SwimAnalytics en números',
      subtitle: 'Datos reales de clubes que ya confían en nuestra plataforma.',
      items: [
        { label: 'Usuarios activos' },
        { label: 'Planes de entrenamiento' },
        { label: 'Tiempos analizados' },
      ],
    },
    testimonios: {
      tag: 'Lo que dicen',
      title: 'Comunidad que confía en SwimAnalytics',
      subtitle: 'Entrenadores, administradores y nadadores de toda Latinoamérica ya usan la plataforma.',
    },
    ctaFinal: {
      tag: 'Únete hoy',
      title: 'Lleva tu club de natación al siguiente nivel',
      subtitle: 'Más de 500 entrenadores y administradores ya confían en SwimAnalytics. Comienza hoy — es gratis.',
      ctaPrimary: 'Comenzar ahora',
      ctaSecondary: 'Visitar la plataforma →',
    },
    footer: {
      description: 'Plataforma integral de análisis y gestión para natación competitiva. Potencia el rendimiento de tu club.',
      platform: 'Plataforma',
      access: 'Acceso',
      login: 'Iniciar sesión',
      createAccount: 'Crear cuenta',
      copyright: 'Todos los derechos reservados.',
      madeWith: 'Hecho con pasión por la natación competitiva',
    },
  },
  en: {
    header: {
      tools: 'Tools',
      forWho: 'For who?',
      blog: 'Blog',
      login: 'Login',
    },
    hero: {
      badge: 'Leading competitive swimming platform',
      title: 'Manage, analyze and improve',
      titleHighlight: 'your swimming club',
      subtitle: 'SwimAnalytics unifies coaches, swimmers and administrators in one intelligent platform. Optimize performance with real data.',
      ctaPrimary: 'Get started free',
      ctaSecondary: 'See tools',
      statsUsers: 'Users',
      statsPlans: 'Plans',
      statsTimes: 'Times',
    },
    paraQuien: {
      tag: 'For every role',
      title: 'Who is SwimAnalytics for?',
      subtitle: 'Every member of your club ecosystem has an experience designed for their needs.',
      perfiles: [
        { titulo: 'Coaches', beneficios: ['Training cycle planning', 'Individual athlete analysis', 'Load and volume control'] },
        { titulo: 'Pool administrators', beneficios: ['Manage multiple groups and coaches', 'Attendance and membership control', 'Club activity reports'] },
        { titulo: 'Pool owners', beneficios: ['Real-time club overview', 'Financial and performance reports', 'Integrated executive dashboard'] },
        { titulo: 'Swimmers', beneficios: ['Personal progress tracking', 'Time and personal best history', 'Improvement visualization by stroke'] },
        { titulo: 'Parents', beneficios: ["Visibility of children's progress", 'Training and competition notifications', 'Secure and simplified access'] },
        { titulo: 'Directors', beneficios: ['Consolidated club metrics', 'Reports for federations and organizations', 'Season-over-season comparisons'] },
      ],
    },
    herramientas: {
      tag: '5 integrated tools',
      title: 'Everything your club needs',
      subtitle: 'From planning to post-competition analysis — SwimAnalytics covers the full performance cycle.',
      items: [
        { nombre: 'Club administration', descripcion: 'Manage groups, users and roles with a granular permission system. Your entire club in one place.', features: ['Training group creation and management', 'Custom roles: coach, admin, swimmer', 'Flexible permission system', 'Membership and fee management'] },
        { nombre: 'Training log', descripcion: 'Record sets, distances, strokes and energy zones. Keep a complete history of every session.', features: ['Detailed set and repetition logging', 'Classification by stroke and energy zone', 'Training assignment to groups', 'Complete chronological history'] },
        { nombre: 'Competition analysis', descripcion: 'Analyze split times and compare results across competitions with detailed visualizations.', features: ['Competition results import', 'Lap split analysis', 'Cross-competition comparison', 'Performance pattern identification'] },
        { nombre: 'Simulations', descripcion: 'Model scenarios to evaluate potential improvements and project your swimmers\' performance.', features: ['Target split simulation', 'Final time projection', 'Race strategy modeling', 'Alternative scenario comparison'] },
        { nombre: 'Planning', descripcion: 'Structure macrocycles, mesocycles and microcycles with professional periodization tools.', features: ['Macro and mesocycle planning', 'Detailed weekly microcycles', 'Load and recovery control', 'Sync with competition calendar'] },
      ],
    },
    comoFunciona: {
      tag: 'Simple and powerful',
      title: 'How it works',
      subtitle: 'Four steps to transform your club management with real data.',
      cta: 'Create free account',
      pasos: [
        { titulo: 'Create your club', descripcion: 'Register your club in minutes. Add coaches, groups and swimmers with a guided flow.' },
        { titulo: 'Log training sessions', descripcion: 'Plan and record each session with sets, strokes, distances and energy zones.' },
        { titulo: 'Analyze results', descripcion: 'Import competition results and access split analysis, trends and comparisons.' },
        { titulo: 'Optimize performance', descripcion: 'Use simulations and planning to design data-driven improvement strategies.' },
      ],
    },
    metricas: {
      title: 'SwimAnalytics by the numbers',
      subtitle: 'Real data from clubs that already trust our platform.',
      items: [
        { label: 'Active users' },
        { label: 'Training plans' },
        { label: 'Times analyzed' },
      ],
    },
    testimonios: {
      tag: 'What they say',
      title: 'Community that trusts SwimAnalytics',
      subtitle: 'Coaches, administrators and swimmers across Latin America already use the platform.',
    },
    ctaFinal: {
      tag: 'Join today',
      title: 'Take your swimming club to the next level',
      subtitle: 'Over 500 coaches and administrators already trust SwimAnalytics. Start today — it\'s free.',
      ctaPrimary: 'Get started now',
      ctaSecondary: 'Visit the platform →',
    },
    footer: {
      description: 'Comprehensive analytics and management platform for competitive swimming. Power your club\'s performance.',
      platform: 'Platform',
      access: 'Access',
      login: 'Sign in',
      createAccount: 'Create account',
      copyright: 'All rights reserved.',
      madeWith: 'Made with passion for competitive swimming',
    },
  },
} as const;

export function t(lang: Lang) {
  return translations[lang];
}
