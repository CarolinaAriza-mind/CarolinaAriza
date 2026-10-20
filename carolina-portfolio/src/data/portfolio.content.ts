export type Language = "es" | "en";

export const content = {
  es: {
    availability: "Disponible para nuevos proyectos",
    nav: ["Inicio", "Proyectos", "Sobre mí", "Contacto"],
    eyebrow: "DESARROLLADORA DE SOFTWARE · ARGENTINA",
    titleStart: "Construyo",
    titleGradient: "soluciones",
    titleEnd: "digitales.",
    intro:
      "Soy Carolina, desarrolladora Full Stack con enfoque en backend. Transformo problemas reales en aplicaciones web funcionales, mantenibles y pensadas para las personas.",
    work: "Explorar proyectos",
    contact: "Hablemos",
    scroll: "DESLIZÁ PARA EXPLORAR",
    focus: "MI ENFOQUE",
    focusTitle: "Más que escribir código.",
    focusText:
      "Me interesa entender el problema, diseñar una solución coherente y construirla con una base técnica sólida. Trabajo tanto en la lógica del servidor como en la experiencia que recibe cada usuario.",
    skills: [
      {
        title: "Backend & APIs",
        text: "Lógica de negocio, autenticación, APIs REST y modelado de datos.",
      },
      {
        title: "Frontend",
        text: "Interfaces responsive, componentes reutilizables y experiencia de usuario.",
      },
      {
        title: "Integración",
        text: "Bases de datos, servicios externos e integración de APIs de modelos de IA.",
      },
    ],
    projectsLabel: "TRABAJO SELECCIONADO / 01—03",
    projectsTitle: "Proyectos con propósito.",
    projectsText:
      "Cada proyecto representa un problema, decisiones técnicas y aprendizaje aplicado.",
    projects: [
      {
        number: "01",
        name: "Canarias Equipamientos",
        category: "PLATAFORMA DE GESTIÓN COMERCIAL",
        description:
          "Aplicación para gestionar procesos comerciales, ventas, validaciones, entregas y cobranzas con distintos roles de usuario.",
        stack: ["Next.js", "NestJS", "PostgreSQL", "TypeORM"],
        type: "Backend + Frontend",
        icon: "database",
      },
      {
        number: "02",
        name: "Si Chef!",
        category: "APLICACIÓN WEB GASTRONÓMICA",
        description:
          "Proyecto Full Stack enfocado en una experiencia gastronómica digital, con funcionalidades de aplicación y lógica de servidor.",
        stack: ["React", "Node.js", "API REST"],
        type: "Full Stack",
        icon: "layers",
      },
      {
        number: "03",
        name: "SUP · Soft Skills Lab",
        category: "EDUCACIÓN Y COLABORACIÓN",
        description:
          "Plataforma de actividades para acompañar el aprendizaje y fortalecer las habilidades de comunicación y trabajo en equipo.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        type: "Frontend",
        icon: "workflow",
      },
    ],
    details: "Ver proyecto",
    stackLabel: "HERRAMIENTAS QUE UTILIZO",
    stackTitle: "Tecnología con intención.",
    stackText:
      "Elijo herramientas según las necesidades del proyecto, buscando claridad, mantenibilidad y una buena experiencia.",
    stackGroups: [
      {
        title: "Frontend",
        items: "React · Next.js · TypeScript · Tailwind CSS",
      },
      { title: "Backend", items: "Node.js · NestJS · Express · REST APIs" },
      { title: "Datos", items: "PostgreSQL · TypeORM · SQL" },
      {
        title: "Calidad y herramientas",
        items: "Git · GitHub · Jest · Swagger · Docker",
      },
    ],
    aboutLabel: "UN POCO SOBRE MÍ",
    aboutTitle: "Curiosidad, criterio y evolución constante.",
    aboutText:
      "Mi camino en tecnología se construye haciendo: desarrollando proyectos, colaborando con equipos y aprendiendo a tomar mejores decisiones técnicas. También acompaño a estudiantes en su formación IT, una experiencia que fortalece mi comunicación y mi forma de trabajar con otras personas.",
    aboutNote: "Actualmente continúo formándome en Bioingeniería.",
    contactLabel: "¿TENÉS UNA IDEA?",
    contactTitle: "Hagamos que suceda.",
    contactText:
      "Estoy abierta a oportunidades laborales, colaboraciones y proyectos freelance donde la tecnología pueda resolver un problema concreto.",
    email: "Escribime",
    footer: "Diseñado y desarrollado con intención.",
    top: "Volver arriba",
  },
  en: {
    availability: "Available for new projects",
    nav: ["Home", "Projects", "About", "Contact"],
    eyebrow: "SOFTWARE DEVELOPER · ARGENTINA",
    titleStart: "I build",
    titleGradient: "digital",
    titleEnd: "solutions.",
    intro:
      "I'm Carolina, a Full Stack Developer focused on backend engineering. I turn real-world problems into functional, maintainable web applications designed for people.",
    work: "Explore projects",
    contact: "Let's talk",
    scroll: "SCROLL TO EXPLORE",
    focus: "MY APPROACH",
    focusTitle: "More than writing code.",
    focusText:
      "I care about understanding the problem, designing a coherent solution, and building it on a solid technical foundation. I work across server-side logic and the experience delivered to each user.",
    skills: [
      {
        title: "Backend & APIs",
        text: "Business logic, authentication, REST APIs, and data modeling.",
      },
      {
        title: "Frontend",
        text: "Responsive interfaces, reusable components, and user experience.",
      },
      {
        title: "Integration",
        text: "Databases, external services, and AI model API integrations.",
      },
    ],
    projectsLabel: "SELECTED WORK / 01—03",
    projectsTitle: "Projects with purpose.",
    projectsText:
      "Each project represents a problem, technical decisions, and applied learning.",
    projects: [
      {
        number: "01",
        name: "Canarias Equipamientos",
        category: "BUSINESS MANAGEMENT PLATFORM",
        description:
          "An application for managing business processes, sales, approvals, deliveries, and collections across multiple user roles.",
        stack: ["Next.js", "NestJS", "PostgreSQL", "TypeORM"],
        type: "Backend + Frontend",
        icon: "database",
      },
      {
        number: "02",
        name: "Si Chef!",
        category: "FOOD & GASTRONOMY WEB APP",
        description:
          "A Full Stack project focused on a digital culinary experience, application features, and server-side logic.",
        stack: ["React", "Node.js", "REST API"],
        type: "Full Stack",
        icon: "layers",
      },
      {
        number: "03",
        name: "SUP · Soft Skills Lab",
        category: "EDUCATION & COLLABORATION",
        description:
          "An activity platform designed to support learning and strengthen communication and teamwork skills.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        type: "Frontend",
        icon: "workflow",
      },
    ],
    details: "View project",
    stackLabel: "TOOLS I WORK WITH",
    stackTitle: "Technology with intention.",
    stackText:
      "I choose tools based on project needs, prioritizing clarity, maintainability, and a good user experience.",
    stackGroups: [
      {
        title: "Frontend",
        items: "React · Next.js · TypeScript · Tailwind CSS",
      },
      { title: "Backend", items: "Node.js · NestJS · Express · REST APIs" },
      { title: "Data", items: "PostgreSQL · TypeORM · SQL" },
      {
        title: "Quality & tools",
        items: "Git · GitHub · Jest · Swagger · Docker",
      },
    ],
    aboutLabel: "A LITTLE ABOUT ME",
    aboutTitle: "Curiosity, good judgment, and continuous growth.",
    aboutText:
      "My journey in tech is built through practice: developing projects, collaborating with teams, and learning to make better technical decisions. I also support students in their IT education, strengthening my communication and collaboration skills.",
    aboutNote: "I am currently continuing my studies in Bioengineering.",
    contactLabel: "HAVE AN IDEA?",
    contactTitle: "Let's make it happen.",
    contactText:
      "I'm open to job opportunities, collaborations, and freelance projects where technology can solve a real problem.",
    email: "Get in touch",
    footer: "Designed and developed with intention.",
    top: "Back to top",
  },
};
