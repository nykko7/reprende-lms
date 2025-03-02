export const courseTexts = {
  courseHeroSection: {
    badgeText:
      "¿Te estás preparando para la PAES M1 o necesitas subir tus notas en matemáticas?",
    title:
      "**__Descubre como dominar las matemáticas__** en solo 4 meses **__con estrategias que nadie te enseña__**\n(Sin memorizar fórmulas)",
    subtitle:
      "**+500 estudiantes han aprendido nuestro método**\nMejoraron su rendimiento académico y subieron su puntaje en la PAES M1.",
    videoUrl: "https://www.youtube.com/embed/XGkKFs6UACc",
    rating: 4.9,
    ctaText: "¡Reserva tu cupo!",
    ctaLink: "#registro",
    nextBatch: "04 de Marzo",
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
      "Si te identificas con alguna de estas descripciones, **este curso es para ti**",
    buttonText: "Inscríbete aquí",
  },

  courseMethodologySection: {
    // title: "💫 ¿Por qué este curso es diferente?",
    // description:
    //   "Descubre las características que hacen único nuestro método de enseñanza.",

    title: "✨ Nuestra propuesta",
    description: "Un método probado para dominar las matemáticas paso a paso.",
    // description: "Aprende matemáticas de una forma diferente y efectiva.",

    features: [
      {
        title: "Clases teórico/prácticas",
        description:
          "Porque se aprende haciendo, nuestras clases combinan teoría y práctica. Primero comprendes el concepto, luego resuelves ejercicios para afianzar tu aprendizaje.",
        icon: "GraduationCap",
      },
      {
        title: "Material 100% actualizado",
        description:
          "Videos, guías y ejercicios basados en el temario oficial del DEMRE. Todo el contenido está alineado con lo indicado por el MINEDUC.",
        icon: "BookOpen",
      },
      {
        title: "Ensayos con preguntas reales",
        description:
          "Realizarás ensayos generales con preguntas muy similares (o iguales) a las que verás en la PAES. Podrás evaluar tu progreso y descubrir las áreas que necesitas reforzar antes del gran día.",
        icon: "FileCheck",
      },

      {
        title: "Horario intensivo: 3 clases por semana",
        description:
          "6 horas de clase semanales, con un día de descanso entre sesiones para poner en práctica lo aprendido. Este ritmo requiere disciplina y compromiso.",
        icon: "Calendar",
      },
      {
        title: "Tecnología y neurociencia",
        description:
          "Utilizamos plataformas digitales interactivas y estrategias basadas en la neurociencia para reforzar tu aprendizaje, y asegurar un progreso constante.",
        icon: "Brain",
      },
      {
        title: "Acceso a consultas ilimitadas",
        description:
          "Tendrás contacto directo con tu profesora vía WhatsApp, correo, audio o videollamada. Pregunta todo lo que necesites, en cualquier momento, para que no te quedes con dudas.",
        icon: "MessagesSquare",
      },
    ],
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
              "Negativos y positivos",
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
    ctaText: "¡Inscríbete ahora!",
    ctaLink: "#registro",
  },
  courseTestimonialsSection: {
    title: "💬 Testimonios",
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
        imageSrc: "/landing/testimonials/2024_1.png",
        imageAlt:
          "Pantallazo del mensaje de un estudiante Preparación PAES 2024",
      },
      {
        imageSrc: "/landing/testimonials/2024_2.png",
        imageAlt:
          "Pantallazo del mensaje de un estudiante Preparación PAES 2024",
      },
      {
        imageSrc: "/landing/testimonials/2024_3.png",
        imageAlt:
          "Pantallazo del mensaje de un estudiante Preparación PAES 2024",
      },
      {
        imageSrc: "/landing/testimonials/2024_4.png",
        imageAlt:
          "Pantallazo del mensaje de un estudiante Preparación PAES 2024",
      },
      {
        imageSrc: "/landing/testimonials/2024_5.png",
        imageAlt:
          "Pantallazo del mensaje de un estudiante Preparación PAES 2024",
      },
      {
        imageSrc: "/landing/testimonials/2024_6.png",
        imageAlt:
          "Pantallazo del mensaje de un estudiante Preparación PAES 2024",
      },
      {
        imageSrc: "/landing/testimonials/2024_7.png",
        imageAlt:
          "Pantallazo del mensaje de un estudiante Preparación PAES 2024",
      },
      {
        imageSrc: "/landing/testimonials/2024_8.png",
        imageAlt:
          "Pantallazo del mensaje de un estudiante Preparación PAES 2024",
      },
      {
        imageSrc: "/landing/testimonials/2024_9.png",
        imageAlt:
          "Pantallazo del mensaje de un estudiante Preparación PAES 2024",
      },
      {
        imageSrc: "/landing/testimonials/2024_10.png",
        imageAlt:
          "Pantallazo del mensaje de un estudiante Preparación PAES 2024",
      },
      {
        imageSrc: "/landing/testimonials/testimonial-image9.jpg",
        imageAlt: "Pantallazo del mensaje de un estudiante 1",
      },
      {
        imageSrc: "/landing/testimonials/testimonial-image15.jpg",
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
  courseRegistrationSection: {
    nextBatch: "05 de febrero 2025",
    price: 247000,
  },
  courseCTASection: {
    title: "UN PROGRAMA COMPLETO",
    subtitle: "DISEÑADO PARA TRANSFORMAR TU COMPRENSIÓN MATEMÁTICA",
    description:
      "Cada módulo está cuidadosamente estructurado para abordar los **fundamentos esenciales** de las matemáticas. No son solo lecciones aisladas, sino un **sistema integrado** que te guiará desde los conceptos básicos hasta el razonamiento avanzado. A través de este viaje, desarrollarás una **nueva perspectiva** que te permitirá enfrentar cualquier desafío matemático con confianza.",
    ctaText: "RESERVA TU CUPO",
    ctaLink: "#registro",
  },
};
