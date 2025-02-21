import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/landing/SectionWrapper";
import CourseGenerationCard from "@/components/landing/course/CourseGenerationCard";
import RecordedCourseCard from "@/components/landing/course/RecordedCourseCard";
import { homeTexts } from "@/config/content/home";
import { BookOpen, Clock, Users, PlayCircle } from "lucide-react";
import Link from "next/link";
import { createWhatsAppMessageLink } from "@/lib/whatsapp";

export default function LiveCourseSection() {
  const courseFeatures = {
    mainFeatures: [
      "4 meses de clases en vivo",
      "Clases 3 veces por semana",
      "100 horas de estudio",
      "Seguimiento personalizado",
      "Material de estudio exclusivo",
      "Guías y ensayos descargables",
      "Consultas ilimitadas por WhatsApp",
      "Acceso a grabaciones por 1 año",
    ],
  };

  return (
    <SectionWrapper
      className="my-0 max-w-none space-y-8 py-16"
      id="curso-en-vivo"
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold sm:text-5xl">✨ Curso en vivo</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Domina las matemáticas en 4 meses con estrategias que nadie te enseñó
        </p>
      </div>

      <div className="mx-auto max-w-6xl space-y-8">
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="group relative overflow-hidden rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-50 to-purple-100 p-6 transition-all dark:border-purple-400/30 dark:from-purple-950/20 dark:to-purple-900/20">
            <div className="absolute right-0 top-0 h-20 w-20 -translate-y-6 translate-x-6 bg-gradient-to-br from-purple-500/20 to-purple-600/20 opacity-50 blur-2xl transition-all duration-300 group-hover:scale-[2] group-hover:opacity-100" />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-600/5 opacity-0 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-4 inline-block rounded-lg bg-purple-100 p-3 dark:bg-purple-900/50">
                <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <p className="mb-2 text-lg font-semibold text-purple-700 dark:text-purple-400">
                Cupos Limitados
              </p>
              <p className="text-sm text-purple-900/80 dark:text-purple-300/80">
                Solo abrimos dos <strong>generaciones en vivo</strong> al
                semestre y en <strong>Marzo</strong> comienzan nuestros nuevos
                grupos.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl border border-blue-500/30 bg-gradient-to-br from-blue-50 to-blue-100 p-6 transition-all dark:border-blue-400/30 dark:from-blue-950/20 dark:to-blue-900/20">
            <div className="absolute right-0 top-0 h-20 w-20 -translate-y-6 translate-x-6 bg-gradient-to-br from-blue-500/20 to-blue-600/20 opacity-50 blur-2xl transition-all duration-300 group-hover:scale-[2] group-hover:opacity-100" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 opacity-0 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-4 inline-block rounded-lg bg-blue-100 p-3 dark:bg-blue-900/50">
                <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <p className="mb-2 text-lg font-semibold text-blue-700 dark:text-blue-400">
                Flexibilidad
              </p>
              <p className="text-sm text-blue-900/80 dark:text-blue-300/80">
                Puedes tomar el curso en horarios <strong>diurnos</strong> o{" "}
                <strong>vespertinos</strong>, o seguir el programa{" "}
                <strong>a tu propio ritmo</strong> con las clases grabadas.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl border border-emerald-500/30 bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 transition-all dark:border-emerald-400/30 dark:from-emerald-950/20 dark:to-emerald-900/20">
            <div className="absolute right-0 top-0 h-20 w-20 -translate-y-6 translate-x-6 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 opacity-50 blur-2xl transition-all duration-300 group-hover:scale-[2] group-hover:opacity-100" />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-emerald-600/5 opacity-0 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-4 inline-block rounded-lg bg-emerald-100 p-3 dark:bg-emerald-900/50">
                <PlayCircle className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <p className="mb-2 text-lg font-semibold text-emerald-700 dark:text-emerald-400">
                A tu ritmo
              </p>
              <p className="text-sm text-emerald-900/80 dark:text-emerald-300/80">
                Accede a las grabaciones de las clases para repasar cuando lo
                necesites, ya sea que estés en el <strong>curso en vivo</strong>{" "}
                o <strong>grabado</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-8">
        <div className="text-center">
          <h3 className="text-2xl font-semibold">Modalidad en vivo</h3>
          <p className="text-muted-foreground">
            Clases en tiempo real con interacción directa
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <CourseGenerationCard
            title="Generación Diurna"
            schedule={["Lunes, Miércoles y Viernes: 10:00 a 12:00 hrs"]}
            startDate="03 de Marzo 2025"
            duration="4 meses"
            price={297000}
            discountPrice={247000}
            variant="primary"
            isHighlighted
            registrationLink="https://forms.gle/h9EJWLtduDw2LER89"
            features={courseFeatures.mainFeatures}
            showInfoButton={true}
          />
          <CourseGenerationCard
            title="Generación Vespertina"
            schedule={[
              "Martes y Jueves: 19:15 a 21:15 hrs",
              "Sábado: 10:00 a 12:00 hrs",
            ]}
            startDate="04 de Marzo 2025"
            duration="4 meses"
            price={297000}
            discountPrice={247000}
            variant="secondary"
            isHighlighted
            registrationLink="https://forms.gle/UvA2njjSL1bjX3mBA"
            features={courseFeatures.mainFeatures}
            showInfoButton={true}
          />
        </div>

        <div className="relative py-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-muted-foreground/20" />
          </div>
          <div className="relative flex justify-center">
            <div className="bg-background px-6">
              <div className="text-center">
                <h3 className="mb-2 text-xl font-semibold">
                  ¿No te acomodan los horarios?
                </h3>
                <p className="max-w-2xl text-muted-foreground">
                  Si prefieres estudiar a tu propio ritmo o los horarios no se
                  ajustan a tu agenda, tenemos una alternativa flexible que te
                  permitirá acceder al contenido cuando y donde quieras.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl">
          <RecordedCourseCard
            title="Modalidad Grabada"
            price={97000}
            registrationLink={"https://forms.gle/86au4hCnqN1FCa5BA"}
            features={[
              "Más de 100 horas de contenido grabado",
              "Acceso instantáneo",
              "Clases de generaciones anteriores",
              "Estudia cúando y dónde tú quieras",
              "Repasa las veces que necesites",
              "Acceso por un año",
              "Consultas ilimitadas por WhatsApp",
            ]}
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
