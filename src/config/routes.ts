// export const landingRoutes: {
//   title: string;
//   subroutes: {
//     title: string;
//     href: string;
//     description: string;
//   }[];
// }[] = [
//   {
//     title: "Programas",
//     subroutes: [
//       {
//         title: "Reaprende las matemáticas desde cero",
//         href: "programs/reaprende-matematicas-desde-cero",
//         description:
//           "Explora patrones, resuelve problemas, reflexiona sobres tus preguntas y aprende de tus errores para construir habilidades sólidas y duraderas en el tiempo.",
//       },
//     ],
//   },
//   {
//     title: "Cursos",
//     subroutes: [
//       {
//         title: "Números",
//         href: "courses/numeros",
//         description: "Entenderás la lógica y las bases de las matemáticas",
//       },
//       {
//         title: "Álgebra y funciones",
//         href: "courses/algebra-y-funciones",
//         description:
//           "Expande tu comprensión de las matemáticas más allá de números y operaciones",
//       },
//       {
//         title: "Geometría",
//         href: "courses/geometria",
//         description:
//           "Desarrollarás una comprensión visual y espacial de las matemáticas",
//       },
//       {
//         title: "Probabilidades y estadistica",
//         href: "courses/probabilidades-y-estadistica",
//         description:
//           "Aprenderás a tomar decisiones basadas en datos y a interpretarlos",
//       },
//     ],
//   },
// ];

// export const landingRoutes: {
//   routeName: string;
//   href: string;
//   title: string;
//   description: string;
//   subroutes: {
//     title: string;
//     href: string;
//     description: string;
//   }[];
// }[] = [
//   {
//     routeName: "Programa",
//     href: "programs/reaprende-matematicas-desde-cero",
//     title: "Reaprende las matemáticas desde cero",
//     description:
//       "Explora patrones, resuelve problemas, reflexiona sobres tus preguntas y aprende de tus errores para construir habilidades sólidas y duraderas en el tiempo.",
//     subroutes: [
//       {
//         title: "Números",
//         href: "courses/numeros",
//         description: "Entenderás la lógica y las bases de las matemáticas",
//       },
//       {
//         title: "Álgebra y funciones",
//         href: "courses/algebra-y-funciones",
//         description:
//           "Expande tu comprensión de las matemáticas más allá de números y operaciones",
//       },
//       {
//         title: "Geometría",
//         href: "courses/geometria",
//         description:
//           "Desarrollarás una comprensión visual y espacial de las matemáticas",
//       },
//       {
//         title: "Probabilidades y estadistica",
//         href: "courses/probabilidades-y-estadistica",
//         description:
//           "Aprenderás a tomar decisiones basadas en datos y a interpretarlos",
//       },
//     ],
//   },
// ];
type Route = {
  title: string;
  href: string;
  description: string;
};

export const ROUTES = {
  LIVE_COURSE: "/curso",
  RECORDED_COURSE: "/curso-grabado",
  WORKSHOP: "/taller",
} as const;

export const landingRoutes: Record<keyof typeof ROUTES, Route> = {
  LIVE_COURSE: {
    title: "Curso en vivo",
    href: ROUTES.LIVE_COURSE,
    description:
      "Aprende matemáticas desde cero con clases en vivo y acompañamiento personalizado",
  },
  RECORDED_COURSE: {
    title: "Curso grabado",
    href: ROUTES.RECORDED_COURSE,
    description:
      "Aprende matemáticas a tu propio ritmo con acceso ilimitado a las clases grabadas",
  },
  WORKSHOP: {
    title: "Taller",
    href: ROUTES.WORKSHOP,
    description: "Aprende como estudiar las matemáticas de manera eficiente",
  },
} as const;
