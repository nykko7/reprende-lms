import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/landing/SectionWrapper";
import CourseGenerationCard from "@/components/landing/course/CourseGenerationCard";
import { homeTexts } from "@/config/content/home";
import { BookOpen, CheckSquare2, Info, Package } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export default function LiveCourseSection() {
  const { price } = homeTexts.liveCourseSection;

  const courseFeatures = {
    mainFeatures: [
      "4 meses de clases en vivo",
      "Seguimiento personalizado",
      "Material de estudio exclusivo",
      "Consultas ilimitadas por WhatsApp",
      "Acceso a grabaciones por 1 año",
    ],
    additionalInfo: [
      "Es un curso intensivo",
      "6 horas de clase semanales",
      "No importa tu nivel actual",
      "Temario actualizado según el DEMRE",
      "Las clases son teóricas y prácticas",
    ],
  };

  return (
    <SectionWrapper className="my-0 max-w-none py-16" id="curso-en-vivo">
      {/* Course Introduction */}
      <div className="mx-auto mb-16 max-w-4xl space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold sm:text-5xl">✨ Curso en vivo</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Domina las matemáticas en 4 meses con estrategias que nadie te
            enseñó
          </p>
        </div>

        <div className="mx-auto max-w-3xl text-center">
          {/* <p className="text-lg">
            Este curso intensivo está diseñado para ayudarte a construir una
            base sólida en matemáticas, sin importar tu nivel actual.
          </p> */}
          <p className="text-lg">
            A través de <strong>clases en vivo</strong>,{" "}
            <strong>material exclusivo</strong> y{" "}
            <strong>seguimiento personalizado</strong>, aprenderás a resolver
            ejercicios de manera efectiva y a comprender los conceptos
            fundamentales.
          </p>
        </div>

        {/* Course Features in Two Columns */}
        <div className="grid gap-8 rounded-xl border-2 border-muted bg-card p-8 md:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Package className="h-5 w-5 shrink-0 " />
              <h3 className="text-xl font-bold">El curso incluye:</h3>
            </div>
            <ul className="space-y-2">
              {courseFeatures.mainFeatures.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckSquare2 className="h-5 w-5 shrink-0 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 shrink-0" />
              <h3 className="text-xl font-bold">Importante:</h3>
            </div>
            <ul className="space-y-2">
              {courseFeatures.additionalInfo.map((info, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckSquare2 className="h-5 w-5 shrink-0 text-secondary" />
                  <span>{info}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Next Generations */}
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-4 text-center">
          <h3 className="text-2xl font-bold">
            📅 Próximas generaciones - Marzo 2024
          </h3>
          <div className="mx-auto max-w-2xl space-y-2">
            <p className="text-lg text-muted-foreground">
              Elige el horario que mejor se adapte a tu disponibilidad
            </p>
            <p className="text-sm text-muted-foreground">
              Ambas generaciones tienen el mismo contenido y beneficios, solo
              cambian los horarios
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <CourseGenerationCard
            title="Generación Diurna"
            schedule={["Lunes, Miércoles y Viernes: 10:00 a 12:00 hrs"]}
            startDate="03 de Marzo 2025"
            price={price}
            variant="primary"
            isHighlighted
            registrationLink="https://forms.gle/h9EJWLtduDw2LER89"
          />
          <CourseGenerationCard
            title="Generación Vespertina"
            schedule={[
              "Martes y Jueves: 19:15 a 21:15 hrs",
              "Sábado: 10:00 a 12:00 hrs",
            ]}
            startDate="04 de Marzo 2025"
            price={price}
            variant="secondary"
            isHighlighted
            registrationLink="https://forms.gle/UvA2njjSL1bjX3mBA"
          />
        </div>

        {/* Call to Action */}
        <div className="relative mt-16 rounded-xl border-2 border-muted bg-card p-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <div className="space-y-2">
              <h4 className="text-xl font-bold">¿Quieres saber más?</h4>
              <p className="text-lg text-muted-foreground">
                Conoce en detalle el programa del curso, la metodología y los
                testimonios de estudiantes anteriores
              </p>
            </div>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="min-w-[200px]"
            >
              <Link href="/curso" className="gap-2">
                <BookOpen className="h-5 w-5" />
                Ver programa completo
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
