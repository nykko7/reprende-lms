import { SectionWrapper } from "@/components/landing/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatText } from "@/lib/text";
import { Check } from "lucide-react";
import Image from "next/image";

const RegistrationSection = () => {
  return (
    <section className="group">
      <div className="align center my-0 flex flex-col justify-center gap-4  border-t-2 bg-accent py-24 text-center text-accent-foreground transition duration-700 ease-out">
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
        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              Esto es todo lo que recibirás:
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {[
                `**Taller 0**: Como estudiar las matemáticas ($7.000)`,
                "**Módulo 1**: Números ($45.000)",
                "**Módulo 2**: Álgebra y funciones ($45.000)",
                "**Módulo 3**: Geometría ($45.000)",
                "**Módulo 4**: Probabilidad y estadística ($45.000)",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="mr-2 h-5 w-5 flex-shrink-0 text-green-400" />
                  <span>{formatText(item)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center">
              <div className="mb-2 text-2xl font-semibold">
                <p>Valor Total:</p>
                <p className="line-through">$187.000</p>
              </div>
              <div className="mb-4 text-4xl font-bold">
                <p>Precio lanzamiento</p>
                <p>$97.000</p>
              </div>

              <p className="my-2 text-center text-sm font-bold text-muted-foreground">
                🚨 SOLO POR TIEMPO LIMITADO 🚨
              </p>
              <Button size="lg" className="w-full text-lg font-bold">
                ¡Quiero Acceder Ahora!
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RegistrationSection;
