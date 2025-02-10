import CourseGenerationCard from "@/components/landing/course/CourseGenerationCard";
import { courseTexts } from "@/config/content/course";

export default function RegistrationSection() {
  const { price } = courseTexts.courseRegistrationSection;

  return (
    <section className="group" id="registro">
      <div className="align center my-0 flex flex-col justify-center gap-4  border-y-2 bg-gradient-to-r from-primary/10 to-secondary/10  py-32 text-center text-accent-foreground transition duration-700 ease-out">
        <h2 className="text-4xl">
          ¿Te convenciste ya de{" "}
          <span className="relative z-10 font-bold text-primary-foreground">
            reaprender
            <svg
              className="absolute inset-x-0 -bottom-[5px] -z-10 h-[10px] w-full opacity-100 transition-opacity delay-100 duration-300 ease-out group-hover:opacity-100 lg:opacity-0"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                className="group-hover:dasharray-0 lg:dasharray-100 dasharray-0 stroke-[6px] transition-all duration-700 ease-out"
                d="M0,5 Q50,0 100,5"
                fill="transparent"
                stroke="url(#gradient)"
                strokeDasharray="100"
                strokeDashoffset="100"
              />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="hsl(var(--secondary))" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          ?
        </h2>
      </div>
      <div className="align-center flex justify-center py-10">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="space-y-4 text-center">
            <h3 className="text-4xl font-bold">
              📅 Próximas generaciones - Marzo 2024
            </h3>
            <div className="mx-auto max-w-2xl space-y-2">
              <p className="text-lg text-muted-foreground">
                Elige el horario que mejor se adapte a tu disponibilidad
              </p>
              <p className="text-muted-foreground">
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
        </div>
      </div>
    </section>
  );
}
