import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckSquare2,
  Clock,
  MousePointerClick,
  Package,
  Sparkles,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import { type FC } from "react";
import { cn } from "@/lib/utils";

interface LiveCoursePreviewProps {
  nextBatch: string;
  price: number;
}

const LiveCoursePreview: FC<LiveCoursePreviewProps> = ({
  nextBatch,
  price,
}) => {
  const monthlyPrice = Math.round(price / 6);

  return (
    <div className="container mx-auto px-4">
      <Card
        className={cn(
          "mx-auto max-w-3xl border-2 border-primary",
          "relative overflow-hidden",
          "bg-gradient-to-tl from-background via-background to-primary/25",
        )}
      >
        <div className="flex items-center justify-center gap-2 rounded-lg bg-primary/25 p-4 text-center">
          <Clock className="h-6 w-6" />
          <p className="text-lg font-semibold md:text-xl">
            Próxima generación: <span className="font-bold">{nextBatch}</span>
          </p>
        </div>
        {/* <div className="absolute inset-0 bg-dot-white/30 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" /> */}

        <CardHeader className="relative space-y-4 text-center">
          <div className="text-center">
            <p className="text-base text-muted-foreground">Curso intensivo</p>
            <h2 className="mb-2 text-4xl font-bold">
              Nivelación Matemáticas desde cero
            </h2>
            <p className="text-lg text-muted-foreground">
              Domina las matemáticas en 4 meses con estrategias que nadie te
              enseñó
            </p>
          </div>

          <div className="grid gap-3 rounded-lg border border-border/50 p-3 text-sm md:grid-cols-2">
            <div className="space-y-1">
              <p className="flex items-center justify-center gap-2 font-medium">
                <Calendar className="h-4 w-4" />
                Febrero (Matutino)
              </p>
              <div className="space-y-0.5 text-muted-foreground">
                <p>Lunes, Miércoles y Viernes</p>
                <p className="font-medium">10:00 a 12:00 hrs</p>
              </div>
            </div>
            <div className="space-y-1">
              <p className="flex items-center justify-center gap-2 font-medium">
                <Calendar className="h-4 w-4" />
                Marzo, Abril y Mayo (Vespertino)
              </p>
              <div className="space-y-0.5 text-muted-foreground">
                <p>Lunes, Miércoles y Viernes</p>
                <p className="font-medium">19:15 a 21:15 hrs</p>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="relative space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="mb-2 flex items-center gap-2 font-semibold">
                  <Package className="h-5 w-5" />
                  Incluye:
                </h3>
                <ul className="space-y-3">
                  {[
                    "4 meses de clases en vivo",
                    "Grupos reducidos (máx. 40 estudiantes)",
                    "Seguimiento personalizado",
                    "Material de estudio exclusivo",
                    "Acceso a grabaciones por 1 año",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckSquare2 className="h-5 w-5 shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* <Button variant="outline" className="w-full" size="lg" asChild>
                  <Link href="/curso" className="gap-2">
                    <BookOpen className="h-5 w-5" />
                    Ver programa completo
                  </Link>
                </Button> */}
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-4 rounded-lg bg-primary/15 p-6 text-center">
                <div className="space-y-1">
                  <p className="text-sm font-medium ">Valor normal</p>
                  <p className="text-lg text-muted-foreground line-through">
                    ${(Math.ceil((price * 1.2) / 1000) * 1000).toLocaleString()}
                  </p>
                </div>

                <div className="space-y-2">
                  <Badge variant="outline" className="border-2 border-primary">
                    <Sparkles className="mr-2 h-4 w-4 text-yellow-500" />
                    15% de descuento
                  </Badge>

                  <div>
                    <p className="text-4xl font-bold text-primary-foreground">
                      ${price.toLocaleString()}
                    </p>
                    <p className="text-sm text-muted-foreground">Pago único</p>
                  </div>

                  <div className="mt-4 space-y-2 rounded-lg bg-background/50 p-3">
                    <p className="text-sm font-medium">O paga en cuotas</p>
                    <p className="text-2xl font-bold">
                      6 x ${monthlyPrice.toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Sin interés con tarjeta de crédito
                    </p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  Acceso completo por 1 año
                </p>
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="relative">
          <Button asChild className="w-full" size="lg">
            <Link href="/curso" className="py-6 text-lg">
              <MousePointerClick className="mr-2 h-5 w-5" />
              Reserva tu cupo ahora
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LiveCoursePreview;
