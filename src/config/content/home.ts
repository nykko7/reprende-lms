import { createWhatsAppMessageLink } from "@/lib/whatsapp";
import { Calendar, Heart, Users } from "lucide-react";

export const homeTexts = {
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
    title: "📚 Otros productos",
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
    textTestimonials: [
      {
        testimonial:
          "He mejorado muchismo mis notas, al principio del año me sacaba 5.0 y mi ultima prueba me saque un 7.0, algo q en matematica creía imposible.",
        studentName: "Antonia Oteiza",
        studentDescription: "Preparación PAES 2024",
        imageAlt: "Avatar de Antonia Oteiza, estudiante de 4to medio",
      },
      {
        testimonial:
          "Cada mes fui desarrollando más habilidades matemáticas, de a poco fui perdiendo el miedo a equivocarme y logré entender muchos contenidos que en el colegio nunca entendí.",
        studentName: "Julio Hidalgo",
        studentDescription: "Preparación PAES 2024",
        imageAlt: "Avatar de Julio Hidalgo, estudiante de 4to medio",
      },
      {
        testimonial:
          "100% recomendable para aquellas personas q no tienen una buena base.",
        studentName: "Emilia Salazar",
        studentDescription: "Preparación PAES 2024",
        imageAlt: "Avatar de Emilia Salazar, estudiante de 4to medio",
      },
      {
        testimonial:
          "Ha sido una experiencia muy buena, aporta mucho y también es una herramienta fundamental para el desarrollo del aprendizaje de las matemáticas.",
        studentName: "Lucas Sanhueza",
        studentDescription: "Preparación PAES 2024",
        imageAlt: "Avatar de Lucas Sanhueza, estudiante egresado",
      },
      {
        testimonial:
          "Cambié el miedo por seguridad como el objetivo del curso. ",
        studentName: "Julio Hidalgo",
        studentDescription: "Preparación PAES 2024",
        imageAlt: "Avatar de Julio Hidalgo, estudiante de 4to medio",
      },
      {
        testimonial:
          "Creo que me ha ayudado bastante a comprender las matemáticas de una manera más didáctica y entretenida.",
        studentName: "Emilia Salazar",
        studentDescription: "Preparación PAES 2024",
        imageAlt: "Avatar de Emilia Salazar, estudiante de 4to medio",
      },
      {
        testimonial:
          "Destaco mucho la energía y dedicación de la profe, eso vale mucho y sobre todo ayuda bastante a comprender mejor las matemáticas.",
        studentName: "Julio Hidalgo",
        studentDescription: "Preparación PAES 2024",
        imageAlt: "Avatar de Julio Hidalgo, estudiante de 4to medio",
      },
    ],
    imageTestimonials: [
      {
        imageSrc: "/landing/testimonials/2024_1.PNG",
        imageAlt:
          "Pantallazo del mensaje de un estudiante Preparación PAES 2024",
      },
      {
        imageSrc: "/landing/testimonials/2024_2.PNG",
        imageAlt:
          "Pantallazo del mensaje de un estudiante Preparación PAES 2024",
      },
      {
        imageSrc: "/landing/testimonials/2024_3.PNG",
        imageAlt:
          "Pantallazo del mensaje de un estudiante Preparación PAES 2024",
      },
      {
        imageSrc: "/landing/testimonials/2024_4.PNG",
        imageAlt:
          "Pantallazo del mensaje de un estudiante Preparación PAES 2024",
      },
      {
        imageSrc: "/landing/testimonials/2024_5.PNG",
        imageAlt:
          "Pantallazo del mensaje de un estudiante Preparación PAES 2024",
      },
      {
        imageSrc: "/landing/testimonials/2024_6.PNG",
        imageAlt:
          "Pantallazo del mensaje de un estudiante Preparación PAES 2024",
      },
      {
        imageSrc: "/landing/testimonials/2024_7.PNG",
        imageAlt:
          "Pantallazo del mensaje de un estudiante Preparación PAES 2024",
      },
      {
        imageSrc: "/landing/testimonials/2024_8.PNG",
        imageAlt:
          "Pantallazo del mensaje de un estudiante Preparación PAES 2024",
      },
      {
        imageSrc: "/landing/testimonials/2024_9.PNG",
        imageAlt:
          "Pantallazo del mensaje de un estudiante Preparación PAES 2024",
      },
      {
        imageSrc: "/landing/testimonials/2024_10.PNG",
        imageAlt:
          "Pantallazo del mensaje de un estudiante Preparación PAES 2024",
      },
      {
        imageSrc: "/landing/testimonials/testimonial-image9.jpg",
        imageAlt: "Pantallazo del mensaje de un estudiante 2",
      },
      {
        imageSrc: "/landing/testimonials/testimonial-image3.jpg",
        imageAlt: "Pantallazo del mensaje de un estudiante 3",
      },
      {
        imageSrc: "/landing/testimonials/testimonial-image11.jpg",
        imageAlt: "Pantallazo del mensaje de un estudiante 4",
      },
      {
        imageSrc: "/landing/testimonials/testimonial-image21.jpg",
        imageAlt: "Pantallazo del mensaje de un estudiante 5",
      },
      {
        imageSrc: "/landing/testimonials/testimonial-image7.jpg",
        imageAlt: "Pantallazo del mensaje de un estudiante 6",
      },
      {
        imageSrc: "/landing/testimonials/testimonial-image4.jpg",
        imageAlt: "Pantallazo del mensaje de un estudiante 7",
      },
      {
        imageSrc: "/landing/testimonials/testimonial-image13.jpg",
        imageAlt: "Pantallazo del mensaje de un estudiante 8",
      },
      {
        imageSrc: "/landing/testimonials/testimonial-image20.jpg",
        imageAlt: "Pantallazo del mensaje de un estudiante 9",
      },
      {
        imageSrc: "/landing/testimonials/testimonial-image10.jpg",
        imageAlt: "Pantallazo del mensaje de un estudiante 10",
      },
      {
        imageSrc: "/landing/testimonials/testimonial-image19.jpg",
        imageAlt: "Pantallazo del mensaje de un estudiante 11",
      },
      {
        imageSrc: "/landing/testimonials/testimonial-image22.jpg",
        imageAlt: "Pantallazo del mensaje de un estudiante 12",
      },
      {
        imageSrc: "/landing/testimonials/testimonial-image2.png",
        imageAlt: "Pantallazo del mensaje de un estudiante 13",
      },
      {
        imageSrc: "/landing/testimonials/testimonial-image5.jpg",
        imageAlt: "Pantallazo del mensaje de un estudiante 14",
      },
      {
        imageSrc: "/landing/testimonials/testimonial-image6.jpg",
        imageAlt: "Pantallazo del mensaje de un estudiante 15",
      },
      {
        imageSrc: "/landing/testimonials/testimonial-image8.jpg",
        imageAlt: "Pantallazo del mensaje de un estudiante 16",
      },
      {
        imageSrc: "/landing/testimonials/testimonial-image18.png",
        imageAlt: "Pantallazo del mensaje de un estudiante 17",
      },
      {
        imageSrc: "/landing/testimonials/testimonial-image1.png",
        imageAlt: "Pantallazo del mensaje de un estudiante 18",
      },
      {
        imageSrc: "/landing/testimonials/testimonial-image14.png",
        imageAlt: "Pantallazo del mensaje de un estudiante 19",
      },
      {
        imageSrc: "/landing/testimonials/testimonial-image23.png",
        imageAlt: "Pantallazo del mensaje de un estudiante 20",
      },
      {
        imageSrc: "/landing/testimonials/testimonial-image16.png",
        imageAlt: "Pantallazo del mensaje de un estudiante 21",
      },
      {
        imageSrc: "/landing/testimonials/testimonial-image12.png",
        imageAlt: "Pantallazo del mensaje de un estudiante 22",
      },
      {
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
};
