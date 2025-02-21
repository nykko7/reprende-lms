import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckSquare2,
  Package,
  PlayCircle,
  Clock,
  Calendar,
  Zap,
} from "lucide-react";
import { type FC } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

type RecordedCourseProps = {
  title: string;
  price: number;
  registrationLink: string;
  features: string[];
};

const RecordedCourseCard: FC<RecordedCourseProps> = ({
  title,
  price,
  registrationLink,
  features,
}) => {
  return (
    <Card
      className="relative flex h-full flex-col overflow-hidden border-2 border-amber-500/30 
        bg-gradient-to-br from-amber-50 to-amber-100 transition-all duration-300 
        hover:shadow-xl dark:border-amber-400/30 dark:from-amber-950/20 
        dark:to-amber-900/20"
    >
      <CardHeader className="text-center">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground">
          Acceso inmediato a todas las clases
        </p>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-4">
        {/* Key Details Section */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="flex items-center gap-2 rounded-lg border-2 p-3">
            <PlayCircle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
            <div className="space-y-0.5">
              <p className="text-xs text-muted-foreground">Acceso</p>
              <p className="text-sm font-medium">Inmediato</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg border-2 p-3">
            <Clock className="h-6 w-6 text-amber-600 dark:text-amber-400" />
            <div className="space-y-0.5">
              <p className="text-xs text-muted-foreground">Duración</p>
              <p className="text-sm font-medium">100+ horas</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg border-2 p-3">
            <Calendar className="h-6 w-6 text-amber-600 dark:text-amber-400" />
            <div className="space-y-0.5">
              <p className="text-xs text-muted-foreground">Disponibilidad</p>
              <p className="text-sm font-medium">1 año</p>
            </div>
          </div>
        </div>

        {/* Course Features Section */}
        <div className="rounded-lg border-2 p-4">
          <div className="mb-3 flex items-center gap-2">
            <Package className="h-6 w-6 text-amber-600 dark:text-amber-400" />
            <h4 className="font-semibold">El curso incluye</h4>
          </div>
          <ul className="ml-5 grid gap-2 sm:grid-cols-2">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckSquare2 className="mt-0.5 h-4 w-4 text-amber-600 dark:text-amber-400" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing Section */}
        <div className="space-y-4 rounded-lg border-2 bg-card p-6">
          <div className="space-y-2 text-center">
            <p className="font-semibold">Valor del curso</p>
            <Badge
              variant="outline"
              className="border-2 border-amber-500 dark:border-amber-400"
            >
              <Zap className="mr-2 h-4 w-4 text-amber-500" />
              Acceso inmediato
            </Badge>
            <p className="text-4xl font-bold">
              ${price.toLocaleString("es-CL")}
            </p>
          </div>

          <div className="rounded-lg bg-muted/50 p-3 text-center">
            <p className="text-sm font-medium">O paga en cuotas</p>
            <p className="text-2xl font-bold">
              3 x ${Math.round(price / 3).toLocaleString("es-CL")}
            </p>
            <p className="text-xs text-muted-foreground">
              Sin interés con tarjeta de crédito
            </p>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button
          asChild
          className="w-full bg-amber-500 hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700"
          size="lg"
        >
          <a
            href={registrationLink}
            target="_blank"
            className="flex items-center gap-2"
          >
            <PlayCircle className="h-5 w-5" />
            Comenzar ahora
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RecordedCourseCard;
