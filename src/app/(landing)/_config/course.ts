export type CourseHeroSection = {
  badgeText: string;
  title: string;
  subtitle: string;
  videoUrl: string;
  ctaText: string;
  ctaLink: string;
  rating: number;
};

export type CourseTargetAudienceSection = {
  title: string;
  profiles: {
    title: string;
    list: {
      title: string;
      descriptions: string[];
    }[];
  };
  goals: {
    title: string;
    list: string[];
  };
  footer: string;
  buttonText: string;
};

export type CourseSyllabusSection = {
  title: string;
  description: string;
  imagePath: string;
  steps: {
    color: string;
    title: string;
    description: string;
    details: {
      type: string;
      content?: string;
      items?: string[];
    }[];
  }[];
};

export type CourseTestimonialsSection = {
  title: string;
  description: string;
  testimonials: (
    | {
        type: "text";
        testimonial: string;
        studentName: string;
        studentDescription: string;
        imageAlt: string;
      }
    | {
        type: "image";
        imageSrc: string;
        imageAlt: string;
      }
  )[];
};

export type CourseWhoAmISection = {
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

export type CourseMethodologySection = {
  title: string;
  description: string;
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
};

export type CourseFaqSection = {
  title: string;
  description: string;
  faqs: {
    question: string;
    answer: string;
  }[];
};

export type CourseGoalsSection = {
  title: string;
  description: string;
  list: string[];
};

export type CourseTexts = {
  courseHeroSection: CourseHeroSection;
  courseTargetAudienceSection: CourseTargetAudienceSection;
  courseSyllabusSection: CourseSyllabusSection;
  courseTestimonialsSection: CourseTestimonialsSection;
  courseWhoAmISection: CourseWhoAmISection;
  courseMethodologySection: CourseMethodologySection;
  courseFaqSection: CourseFaqSection;
};

export const courseTexts: CourseTexts = {
  courseHeroSection: {
    badgeText:
      "¿Te estás preparando para la PAES M1 o necesitas subir tus notas en matemáticas?",
    title:
      "**__Descubre como dominar las matemáticas__** en solo 4 meses **__con estrategias que nadie te enseña__**\n(Sin memorizar formulas)",
    subtitle:
      "**Cientos de estudiantes ya han visto resultados y están cumpliendo sus objetivos.**\nComenzaron a mejorar su rendimiento escolar y subieron su puntaje en la PAES M1. \nSi estas listo para ser el próximo en ver resultados reales, **este es el momento de transformar tu aprendizaje.**",
    videoUrl: "https://www.youtube.com/embed/your-video-id",
    rating: 4.9,
    ctaText: "¡Accede ahora!",
    ctaLink: "#inscripcion",
  },
  courseTargetAudienceSection: {
    title: "🫵 ¿Para quién es este curso?",
    profiles: {
      title: "👉 Si eres...",
      list: [
        {
          title: "Estudiante",
          descriptions: [
            "Estás en enseñanza media (1° a 4° medio) buscando fortalecer tus habilidades matemáticas.",
            "Te estás preparando para la PAES 2024.",
          ],
        },

        {
          title: "Profesional o Egresado",
          descriptions: [
            "Necesitas mejorar tu comprensión matemática.",
            "Estás considerando estudiar una nueva carrera.",
          ],
        },

        {
          title: "Docente",
          descriptions: ["Quieres aprender nuevas estrategias de enseñanza."],
        },
      ],
    },
    goals: {
      title: "🏆 Y quieres...",
      list: [
        "Saber qué hacer, cómo y por qué frente a cualquier ejercicio matemático.",
        "Tener estrategias para resolver ejercicios de manera efectiva y eficiente.",
        "Reconocer patrones y representarlos de forma numérica y algebraica.",
        "Reconocer tus errores como elementos valiosos del proceso de aprendizaje.",
        "Aprender nuevos contenidos de forma autónoma.",
        "Ser reflexivo y crítico con los problemas matemáticos.",
      ],
    },
    footer:
      "Si te identificas con alguna de estas descripciones, este curso es para ti.",
    buttonText: "Inscríbete aquí",
  },
  courseSyllabusSection: {
    title: "🚀 Ruta de Aprendizaje",
    description:
      "El curso se compone de 4 módulos, diseñados para comprender la lógica y las bases de las matemáticas de manera progresiva e integral.",
    imagePath: "/landing/learning-route.png",
    steps: [
      {
        color: "blue",
        title: "Números",
        description: "Entenderás la lógica y las bases de las matemáticas",
        details: [
          {
            type: "paragraph",
            content:
              "Aprenderás a operar (sumar, restar, multiplicar y dividir) todos los tipos de números:",
          },
          {
            type: "list",
            items: [
              "Neglativos y de un estudiantes",
              "Potencias y raíces",
              "Fracciones y decimales",
              "Porcentaje",
            ],
          },
          {
            type: "paragraph",
            content: "Además de aprender:",
          },
          {
            type: "list",
            items: ["Razones", "Proporcionalidad directa e inversa"],
          },
          {
            type: "paragraph",
            content: "Junto con sus propiedades y aplicaciones",
          },
        ],
      },
      {
        color: "green",
        title: "Álgebra y funciones",
        description:
          "Expande tu comprensión de las matemáticas más allá de números",
        details: [
          {
            type: "paragraph",
            content: "Identificarás patrones y relaciones algebraicas:",
          },
          {
            type: "list",
            items: [
              "Expresiones algebraicas",
              "Reducción de términos",
              "Productos notables",
              "Ecuación y función lineal",
              "Sistema de ecuaciones",
              "Ecuación y función cuadrática",
            ],
          },
        ],
      },
      {
        color: "yellow",
        title: "Geometría",
        description:
          "Desarrollarás una comprensión visual y espacial de las matemáticas",
        details: [
          {
            type: "paragraph",
            content: "Podrás reconocer cómo se construyen las fórmulas de:",
          },
          {
            type: "list",
            items: [
              "Perímetro, área de figuras geométricas",
              "Área y perímetro del círculo",
              "Volumen de cuerpos geométricos",
              "Teorema de Pitágoras",
            ],
          },
          {
            type: "paragraph",
            content: "Además de aprender:",
          },
          {
            type: "list",
            items: ["Vectores", "Transformaciones isométricas"],
          },
        ],
      },
      {
        color: "red",
        title: "Probabilidades y estadística",
        description: "Utilizarás TODO lo anterior para comunicar información",
        details: [
          {
            type: "paragraph",
            content:
              "Ordenarás y clasificarás los datos para obtener información:",
          },
          {
            type: "list",
            items: [
              "Medidas de tendencia central (datos agrupados y desagrupados)",
              "Gráficos y tablas",
              "Medidas de posición",
              "Diagrama de cajón",
              "Regla de Laplace",
              "Probabilidades",
            ],
          },
        ],
      },
    ],
  },
  courseTestimonialsSection: {
    title: "💬 Testimonios",
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
  courseWhoAmISection: {
    title: "👩‍🏫 ¿Quién será tu guía?",
    description: "Conoce a la profesora detrás de **Reaprende**",
    name: "Isidora Pi",
    role: "Profesora de Educación Básica con mención en Matemáticas",
    instagramUrl: "https://www.instagram.com/reaprende.mate/",
    instagramTag: "@reaprende.mate",
    bio: "Mi viaje en el mundo de la educación comenzó hace más de 10 años cuando entré a estudiar Ingeniería Comercial en la PUCV. Durante mis años universitarios, descubrí mi pasión por la enseñanza al impartir clases de matemáticas a estudiantes con diferentes dificultades en Valparaíso.\n\nDurante cuatro años, me di cuenta de que muchos problemas de aprendizaje se originan en una **base deficiente en la educación básica**. En 2017, decidí cambiar mi carrera a Educación Básica con mención en Matemáticas. Este cambio no solo fue una decisión profesional, sino una misión para abordar las raíces de los problemas educativos que había identificado.\n\nEn 2021, en tiempos de pandemia, nació **@reaprende.mate** con el objetivo de fomentar una comprensión profunda de las matemáticas, centrándose en construir una base sólida desde cero y con una narrativa distinta.\n\n**Isidora Pi**\n**¡Nos vemos en clases!**",
    imageAlt: "Imagen de la profesora",
    imagePath: "/shared/logo.png",
  },
  courseMethodologySection: {
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
  courseFaqSection: {
    title: "🤔 Preguntas frecuentes",
    description:
      "Encuentra respuestas a las preguntas más comunes sobre el curso.",
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
