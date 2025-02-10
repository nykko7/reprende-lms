"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionWrapper } from "@/components/landing/SectionWrapper";
import { homeTexts } from "@/config/content/home";
import { ServiceCard } from "./ServiceCard";

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <SectionWrapper className="relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      <div className="absolute left-0 top-1/4 -z-10 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute right-0 top-1/2 -z-10 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />

      {/* Content */}
      <div className="relative py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground">
            Diferentes formatos de aprendizaje adaptados a tus necesidades y
            disponibilidad
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          <ServiceCard
            title="Curso Grabado"
            description="Más de 100 horas de contenido grabado para aprender a tu ritmo. Incluye guías, ejercicios y material descargable."
            icon="Video"
            price={97000}
            features={[
              "Acceso por 1 año",
              "Estudia cuando quieras",
              "Material descargable",
              "Consultas por WhatsApp",
            ]}
            variants={itemVariants}
          />
          <ServiceCard
            title="Curso en Vivo"
            description="6 horas semanales de clases en vivo con ejercicios prácticos y resolución de dudas en tiempo real."
            icon="Users"
            price={247000}
            features={[
              "3 clases por semana",
              "Grupos reducidos",
              "Material actualizado",
              "Consultas ilimitadas",
            ]}
            variants={itemVariants}
            highlighted={true}
          />
          <ServiceCard
            title="Clases Particulares"
            description="Acompañamiento personalizado adaptado a tu nivel y objetivos específicos."
            icon="UserPlus"
            features={[
              "Diagnóstico inicial",
              "Plan personalizado",
              "Horarios flexibles",
              "Seguimiento individual",
            ]}
            variants={itemVariants}
            contactForPrice={true}
          />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
