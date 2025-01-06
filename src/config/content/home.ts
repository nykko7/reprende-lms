import { createWhatsAppMessageLink } from "@/lib/whatsapp";

export type HeroSection = {
  badgeText: string;
  titleAccent: string;
  titleNormal: string;
  description: string;
  modalitiesButtonText?: string;
  mainCTA: string;
  secondaryCTA: string;
};

export type SocialProof = {
  number: string;
  description: string;
};

export type ChooseYourProductSection = {
  title: string;
  description: string;
  products: Product[];
};

export type Product = {
  type: "recorded_workshop" | "recorded_course" | "personalized_lessons";
  title: string;
  subtitle: string;
  description: string;
  featured?: boolean;
  more_details?: string;
  targetAudience?: string;
  ctaUrl: string;
  ctaType: "url" | "whatsapp_message";
  ctaText: string;
  originalPrice: number;
  price: number;
  showPrice: boolean;
  launchPrice?: boolean;
  features: string[];
  notUrgencyNote?: string;
  semiUrgencyNote?: string;
  urgencyNote?: string;
};

export type MethodologySection = {
  title: string;
  description: string;
  features: Feature[];
};

export type Feature = {
  title: string;
  description: string;
  icon: string;
};

export type WhoAmISection = {
  title: string;
  description: string;
  name: string;
  role: string;
  instagramUrl: string;
  instagramTag: string;
  bio: string;
  imageAlt: string;
  imagePath: string;
};

export type TextTestimonial = {
  type: "text";
  testimonial: string;
  studentName: string;
  studentDescription: string;
  imageAlt: string;
};

export type ImageTestimonial = {
  type: "image";
  imageSrc: string;
  imageAlt: string;
};

export type TestimonialsSection = {
  title: string;
  description: string;
  testimonials: (TextTestimonial | ImageTestimonial)[];
};

export type FaqSection = {
  title: string;
  description: string;
  faqs: Faq[];
};

export type Faq = {
  question: string;
  answer: string;
};

export type ProductPreview = {
  type: "workshop" | "recorded_course" | "private_lessons";
  title: string;
  description: string;
  price: number;
  features: string[];
  href: string;
  badge?: string;
  color?: "primary" | "red" | "green";
  isHighlighted?: boolean;
  ctaText?: string;
};

export type LiveCourseSection = {
  nextBatch: string;
  price: number;
  spots: number;
};

export type HomeTexts = {
  heroSection: HeroSection;
  socialProofs: SocialProof[];
  liveCourseSection: LiveCourseSection;
  chooseYourProductSection: ChooseYourProductSection;
  methodologySection: MethodologySection;
  whoAmISection: WhoAmISection;
  testimonialsSection: TestimonialsSection;
  faqSection: FaqSection;
  productsSection: {
    title: string;
    description: string;
    products: ProductPreview[];
  };
};

export const homeTexts: HomeTexts = {
  heroSection: {
    badgeText: "¿Quieres cambiar el miedo por seguridad?",
    titleAccent: "Reaprende",
    titleNormal: " las matemáticas",
    description:
      "Curso de nivelación diseñado para comprender los contenidos desde cero.",
    // description: "Curso en vivo - Nueva generación febrero 2024",
    // modalitiesButtonText: "Ver modalidades",
    mainCTA: "Ver próximo curso",
    secondaryCTA: "Ver otros productos",
  },
  socialProofs: [
    {
      number: "+500",
      description: "estudiantes satisfechos",
    },
    {
      number: "+3 años",
      description: "acompañando a estudiantes en su aprendizaje",
    },
    {
      number: "100%",
      description: "recomendado por nuestros estudiantes",
    },
  ],
  liveCourseSection: {
    nextBatch: "05 de febrero 2025",
    price: 247000,
    spots: 20,
  },
  chooseYourProductSection: {
    title: "🚀 Últimos lanzamientos",
    description:
      "Explora nuestros cursos y talleres diseñados para ayudarte a mejorar tus habilidades matemáticas.",
    products: [
      {
        type: "recorded_workshop",
        title: "Taller: Cómo estudiar las matemáticas",
        subtitle: "Taller grabado de 2 horas de duración",
        description:
          "Aprende estrategias clave para organizar tu estudio, técnicas y consejos prácticos para maximizar tu rendimiento en matemáticas. ",
        ctaType: "whatsapp_message",
        ctaUrl: createWhatsAppMessageLink(
          "¡Hola! Me interesa el taller de preparación para la PAES M1. ¿Podrías darme más detalles sobre el contenido y el precio?",
        ),
        targetAudience: "Estudiantes de enseñanza media y egresados",
        ctaText: "Acceder al taller",
        price: 7000,
        originalPrice: 7000,
        showPrice: true,
        features: [
          "2 horas de contenido grabado",
          `Explicación de los ejes y habilidades`,
          "Progresión de los contenidos",
          "Reconocimiento de los errores más comunes",
          "Checklist del temario PAES M1",
          "Acceso por 1 año",
        ],
        notUrgencyNote: "¡Acceso inmediato disponible!",
      },
      {
        type: "recorded_course",
        featured: true,
        title: "Curso: Reaprende las matemáticas desde cero",
        subtitle: "+100 hrs de contenido grabado",
        description:
          "Comprende los conceptos fundamentales y avanza hacia contenidos más complejos, con un enfoque estructurado y progresivo.",
        more_details: "/curso",
        ctaType: "url",
        ctaUrl: "/curso",
        ctaText: "Inscríbete ahora",
        targetAudience: "Estudiantes de enseñanza media y egresados",
        price: 97000,
        originalPrice: 187000,
        launchPrice: true,
        showPrice: true,
        features: [
          "Más de 100 horas de contenido grabado",
          "Guías de estudio con resolución de ejercicios",
          "Ensayos PAES con resolución detallada",
          "Material descargable exclusivo",
          "Consultas ilimitadas por Whatsapp",
          "Taller: Cómo estudiar las matemáticas",
          "Acceso por 1 año",
        ],
        semiUrgencyNote: "¡Precio de lanzamiento por tiempo limitado!",
      },
      {
        type: "personalized_lessons",
        title: "Aprendizaje flexible con acompañamiento personalizado",
        subtitle: "Contenido grabado + clases particulares",
        description:
          "Avanza según tu disponibilidad con clases pregrabadas y el acompañamiento directo de la profesora en clases particulares.",
        targetAudience: "Estudiantes de enseñanza media y egresados",
        ctaType: "whatsapp_message",
        ctaUrl: createWhatsAppMessageLink(
          "Hola! Me interesa el formato híbrido de aprendizaje. ¿Podrías darme más detalles sobre cómo funciona y cuál es el costo?",
        ),
        ctaText: "Consultar disponibilidad",
        showPrice: false,
        originalPrice: 0,
        price: 0,
        features: [
          "Diagnóstico inicial personalizado",
          "Clases particulares 1 a 1 en vivo por Zoom",
          "Acceso a contenido grabado",
          "Ensayos PAES con resolución detallada",
          "Guías de estudio según nivel académico",
          "Planificación de estudio semanal",
          "Material de trabajo personalizado",
          "Consultas ilimitadas por Whatsapp",
        ],
        urgencyNote: "¡Cupos muy limitados!",
      },
    ],
  },
  methodologySection: {
    title: "📖 Metodología de aprendizaje",
    description:
      "Aprende desde la reflexión, la curiosidad y la aplicación práctica para un aprendizaje efectivo y emocionante.",
    features: [
      {
        title: "Estimular la curiosidad",
        description:
          "Utilizar la curiosidad como una herramienta para impulsar el aprendizaje, motivando a los estudiantes a preguntar y explorar.",
        icon: "Lightbulb",
      },
      {
        title: "Aprendizaje activo",
        description:
          "Los alumnos construyen activamente su conocimiento, integrando la nueva información con sus conocimientos previos.",
        icon: "TestTubeDiagonal",
      },
      {
        title: "Reconocimiento de patrones",
        description:
          "Fomentar la exploración de patrones para identificar relaciones y conexiones en el contenido matemático.",
        icon: "BrainCircuit",
      },
      {
        title: "Aplicación y modelado",
        description:
          "Enseñar a modelar fórmulas, pasando del lenguaje natural al lenguaje algebraico y matemático, aplicando el contenido a contextos prácticos.",
        icon: "PencilRuler",
      },
      {
        title: "Reflexión sobre el error",
        description:
          "Prestar atención a los errores cometidos para comprender su origen y aprender de ellos.",
        icon: "ShieldAlert",
      },
      {
        title: "Exploración emocional",
        description:
          "Integrar las emociones en el proceso de aprendizaje para hacerlo más significativo y memorable.",
        icon: "HeartHandshake",
      },
    ],
  },
  whoAmISection: {
    title: "👩‍🏫 ¿Quién soy?",
    description: "Conoce a la profesora detrás de **Reaprende**",
    name: "Isidora Pi",
    role: "Profesora de Educación Básica con mención en Matemáticas",
    instagramUrl: "https://www.instagram.com/reaprende.mate/",
    instagramTag: "@reaprende.mate",
    bio: "Mi viaje en el mundo de la educación comenzó hace más de 10 años cuando ingresé a estudiar Ingeniería Comercial en la PUCV. Durante mis años universitarios, descubrí mi pasión por la enseñanza al impartir clases de matemáticas a estudiantes con diferentes dificultades en Valparaíso.\n\nTras varios años, me di cuenta de que muchos problemas de aprendizaje se originan en una **base deficiente en la educación básica**. Motivada por este desafio, en 2017, decidí cambiar mi carrera a Educación Básica con mención en Matemáticas. Este paso no solo fue un cambio de carrera, sino una misión personal para abordar las raíces de los problemas educativos que había identificado.\n\nEn 2021, en tiempos de pandemia, nació **@reaprende.mate** con el objetivo de fomentar una comprensión profunda de las matemáticas, centrándose en construir una base sólida desde cero y con una narrativa distinta.\n\n**Isidora Pi**\n**¡Nos vemos en clases!**",
    imageAlt: "Imagen de la profesora",
    imagePath: "/shared/logo.png",
  },
  testimonialsSection: {
    title: "💬 Testimonios de nuestros estudiantes",
    description: "Esto es lo que dicen algunos de nuestros estudiantes",
    testimonials: [
      {
        type: "text",
        testimonial:
          "He mejorado muchismo mis notas, al principio del año me sacaba 5.0 y mi ultima prueba me saque un 7.0, algo q en matematica creía imposible.",
        studentName: "Antonia Oteiza",
        studentDescription: "Preparación PAES 2024",
        imageAlt: "Avatar de Antonia Oteiza, estudiante de 4to medio",
      },
      {
        type: "text",
        testimonial:
          "Cada mes fui desarrollando más habilidades matemáticas, de a poco fui perdiendo el miedo a equivocarme y logré entender muchos contenidos que en el colegio nunca entendí.",
        studentName: "Julio Hidalgo",
        studentDescription: "Preparación PAES 2024",
        imageAlt: "Avatar de Julio Hidalgo, estudiante de 4to medio",
      },
      {
        type: "text",
        testimonial:
          "100% recomendable para aquellas personas q no tienen una buena base.",
        studentName: "Emilia Salazar",
        studentDescription: "Preparación PAES 2024",
        imageAlt: "Avatar de Emilia Salazar, estudiante de 4to medio",
      },
      {
        type: "text",
        testimonial:
          "Ha sido una experiencia muy buena, aporta mucho y también es una herramienta fundamental para el desarrollo del aprendizaje de las matemáticas.",
        studentName: "Lucas Sanhueza",
        studentDescription: "Preparación PAES 2024",
        imageAlt: "Avatar de Lucas Sanhueza, estudiante egresado",
      },
      {
        type: "text",
        testimonial:
          "Cambié el miedo por seguridad como el objetivo del curso. ",
        studentName: "Julio Hidalgo",
        studentDescription: "Preparación PAES 2024",
        imageAlt: "Avatar de Julio Hidalgo, estudiante de 4to medio",
      },
      {
        type: "text",
        testimonial:
          "Creo que me ha ayudado bastante a comprender las matemáticas de una manera más didáctica y entretenida.",
        studentName: "Emilia Salazar",
        studentDescription: "Preparación PAES 2024",
        imageAlt: "Avatar de Emilia Salazar, estudiante de 4to medio",
      },
      {
        type: "text",
        testimonial:
          "Destaco mucho la energía y dedicación de la profe, eso vale mucho y sobre todo ayuda bastante a comprender mejor las matemáticas.",
        studentName: "Julio Hidalgo",
        studentDescription: "Preparación PAES 2024",
        imageAlt: "Avatar de Julio Hidalgo, estudiante de 4to medio",
      },
      {
        type: "image",
        imageSrc: "/landing/testimonials/testimonial-image9.jpg",
        imageAlt: "Pantallazo del mensaje de un estudiante 1",
      },
      {
        type: "image",
        imageSrc: "/landing/testimonials/testimonial-image15.jpg",
        imageAlt: "Pantallazo del mensaje de un estudiante 2",
      },
      {
        type: "image",
        imageSrc: "/landing/testimonials/testimonial-image3.jpg",
        imageAlt: "Pantallazo del mensaje de un estudiante 3",
      },
      {
        type: "image",
        imageSrc: "/landing/testimonials/testimonial-image11.jpg",
        imageAlt: "Pantallazo del mensaje de un estudiante 4",
      },
      {
        type: "image",
        imageSrc: "/landing/testimonials/testimonial-image21.jpg",
        imageAlt: "Pantallazo del mensaje de un estudiante 5",
      },
      {
        type: "image",
        imageSrc: "/landing/testimonials/testimonial-image7.jpg",
        imageAlt: "Pantallazo del mensaje de un estudiante 6",
      },
      {
        type: "image",
        imageSrc: "/landing/testimonials/testimonial-image4.jpg",
        imageAlt: "Pantallazo del mensaje de un estudiante 7",
      },
      {
        type: "image",
        imageSrc: "/landing/testimonials/testimonial-image13.jpg",
        imageAlt: "Pantallazo del mensaje de un estudiante 8",
      },
      {
        type: "image",
        imageSrc: "/landing/testimonials/testimonial-image20.jpg",
        imageAlt: "Pantallazo del mensaje de un estudiante 9",
      },
      {
        type: "image",
        imageSrc: "/landing/testimonials/testimonial-image10.jpg",
        imageAlt: "Pantallazo del mensaje de un estudiante 10",
      },
      {
        type: "image",
        imageSrc: "/landing/testimonials/testimonial-image19.jpg",
        imageAlt: "Pantallazo del mensaje de un estudiante 11",
      },
      {
        type: "image",
        imageSrc: "/landing/testimonials/testimonial-image22.jpg",
        imageAlt: "Pantallazo del mensaje de un estudiante 12",
      },
      {
        type: "image",
        imageSrc: "/landing/testimonials/testimonial-image2.png",
        imageAlt: "Pantallazo del mensaje de un estudiante 13",
      },
      {
        type: "image",
        imageSrc: "/landing/testimonials/testimonial-image5.jpg",
        imageAlt: "Pantallazo del mensaje de un estudiante 14",
      },
      {
        type: "image",
        imageSrc: "/landing/testimonials/testimonial-image6.jpg",
        imageAlt: "Pantallazo del mensaje de un estudiante 15",
      },
      {
        type: "image",
        imageSrc: "/landing/testimonials/testimonial-image8.jpg",
        imageAlt: "Pantallazo del mensaje de un estudiante 16",
      },
      {
        type: "image",
        imageSrc: "/landing/testimonials/testimonial-image18.png",
        imageAlt: "Pantallazo del mensaje de un estudiante 17",
      },
      {
        type: "image",
        imageSrc: "/landing/testimonials/testimonial-image1.png",
        imageAlt: "Pantallazo del mensaje de un estudiante 18",
      },
      {
        type: "image",
        imageSrc: "/landing/testimonials/testimonial-image14.png",
        imageAlt: "Pantallazo del mensaje de un estudiante 19",
      },
      {
        type: "image",
        imageSrc: "/landing/testimonials/testimonial-image23.png",
        imageAlt: "Pantallazo del mensaje de un estudiante 20",
      },
      {
        type: "image",
        imageSrc: "/landing/testimonials/testimonial-image16.png",
        imageAlt: "Pantallazo del mensaje de un estudiante 21",
      },
      {
        type: "image",
        imageSrc: "/landing/testimonials/testimonial-image12.png",
        imageAlt: "Pantallazo del mensaje de un estudiante 22",
      },
      {
        type: "image",
        imageSrc: "/landing/testimonials/testimonial-image17.png",
        imageAlt: "Pantallazo del mensaje de un estudiante 23",
      },
    ],
  },
  faqSection: {
    title: "🤔 Preguntas frecuentes",
    description:
      "Encuentra respuestas a las preguntas más comunes sobre nuestros cursos y talleres.",
    faqs: [
      {
        question: "¿Hacen clases presenciales?",
        answer:
          "Por el momento no ofrecemos clases presenciales. Todos nuestros cursos y talleres se realizan de manera online a través de la plataforma Zoom.",
      },
      {
        question: "¿Desde que edad puedo tomar el curso?",
        answer:
          "Nuestros cursos están diseñados para estudiantes de enseñanza media y egresados. Además, no es necesario tener conocimientos previos del tema, nuestro objetivo es que puedas aprender desde cero.",
      },
      {
        question:
          "¿Cuánto tiempo tengo acceso al curso/taller después de comprarlo?",
        answer:
          "Una vez que completes el pago, tendrás acceso inmediato a todo el contenido del curso/taller. Además, puedes disfrutar de un año completo de acceso a las clases y materiales.",
      },
    ],
  },
  productsSection: {
    title: "Otros productos",
    description:
      "Explora otras formas de aprender matemáticas según tus necesidades y disponibilidad",
    products: [
      {
        type: "workshop",
        title: "¿Como estudiar las matemáticas?",
        description:
          "Aprende estrategias clave para organizar tu estudio de manera efectiva",
        price: 7000,
        features: [
          "2 horas de duración",
          "Explicación de los ejes y habilidades",
          "Progresión de los contenidos",
          "Principales errores y como evitarlos",
          "Consejos para estudiar",
        ],
        href: createWhatsAppMessageLink(
          "Hola, me gustaría acceder al taller de como estudiar las matemáticas",
        ),
        badge: "Taller grabado",
        color: "red",
        ctaText: "Acceder al taller",
      },
      {
        type: "recorded_course",
        title: "Curso en formato grabado",
        description:
          "Aprende a tu ritmo con clases grabadas y material descargable",
        price: 97000,
        features: [
          "Más de 100 horas de contenido grabado",
          "Acceso instantáneo",
          "Clases de generaciones anteriores",
          "Estudia cuando y donde quieras",
          "Repasa las veces que necesites",
          "Acceso por un año",
        ],
        href: createWhatsAppMessageLink(
          "Hola, me gustaría acceder al curso de nivelación de matemáticas en formato grabado",
        ),
        ctaText: "Inscríbete ahora",
        badge: "Curso grabado",
        color: "primary",
        isHighlighted: true,
      },
      {
        type: "private_lessons",
        title: "Acompañamiento individual",
        description:
          "Avanza según tu disponibilidad y adaptado a tu ritmo de aprendizaje",
        price: 120000,
        features: [
          "Diagnóstico inicial personalizado",
          "Clases particulares en vivo por Zoom",
          "Acceso a contenido grabado",
          "Guías de estudio según nivel académico",
          "Planificación de estudio semanal",
        ],
        href: createWhatsAppMessageLink(
          "Hola, me gustaría saber más sobre el acompañamiento individual",
        ),
        ctaText: "Consultar disponibilidad",
        badge: "Clases particulares",
        color: "green",
      },
    ],
  },
};
