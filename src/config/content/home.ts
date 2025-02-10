import { createWhatsAppMessageLink } from "@/lib/whatsapp";
import { Calendar, Heart, type LucideIcon, Users } from "lucide-react";

export type HeroSection = {
  badgeText: string;
  titleAccent: string;
  titleNormal: string;
  description: string;
  features: string[];
  mainCTA: string;
  secondaryCTA: string;
};

export type SocialProof = {
  number: string;
  description: string;
  icon: LucideIcon;
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
  whoAmISection: WhoAmISection;
  testimonialsSection: TestimonialsSection;
  faqSection: FaqSection;
  productsSection: {
    title: string;
    description: string;
    products: ProductPreview[];
  };
  methodologySection: MethodologySection;
};

export const homeTexts: HomeTexts = {
  heroSection: {
    badgeText: "¿Quieres cambiar el miedo por seguridad?",
    titleAccent: "Reaprende",
    titleNormal: " las matemáticas desde cero",
    // description: "Domina todo lo que no entendiste en el colegio y más...",
    description:
      "Entiende las **bases** y desarrolla **habilidades** de manera progresiva",
    features: [
      "Aprende estrategias sencillas y prácticas",
      "Sin memorizar fórmulas innecesarias",
      "Reconoce tus errores y aprende a evitarlos",
    ],
    // description: "Curso en vivo - Nueva generación febrero 2024",
    // modalitiesButtonText: "Ver modalidades",
    mainCTA: "Comienza ahora",
    secondaryCTA: "",
  },
  socialProofs: [
    {
      number: "+500",
      description: "Estudiantes satisfechos",
      icon: Users,
    },
    {
      number: "+4 años",
      description: "Acompañando a estudiantes en su aprendizaje",
      icon: Calendar,
    },
    {
      number: "100%",
      description: "Recomendado por nuestros estudiantes",
      icon: Heart,
    },
  ],
  liveCourseSection: {
    nextBatch: "05 de febrero 2025",
    price: 247000,
    spots: 20,
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
          "Hola, me gustaría acceder al taller de cómo estudiar las matemáticas",
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
          "Hola, me gustaría saber si tiene disponibilidad para el acompañamiento individual",
        ),
        ctaText: "Consultar disponibilidad",
        badge: "Clases particulares",
        color: "green",
      },
    ],
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
  methodologySection: {
    title: "🚀 Ruta de aprendizaje",
    description:
      "Descubre cómo nuestro curso de nivelación de matemáticas te ayudará a alcanzar tus objetivos académicos.",
    features: [
      {
        title: "Módulo 1: Fundamentos de Matemáticas",
        description:
          "Revisión de los temas fundamentales de matemáticas, incluyendo números, operaciones y ecuaciones.",
        icon: "🔢",
      },
    ],
  },
};
