import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Calendar,
  Users,
  CheckCircle2,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { type FC } from "react";
import { createWhatsAppMessageLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type CourseGenerationProps = {
  title: string;
  schedule: string[];
  startDate: string;
  price: number;
  variant: "primary" | "secondary";
  isHighlighted?: boolean;
  registrationLink: string;
};

const CourseGenerationCard: FC<CourseGenerationProps> = ({
  title,
  schedule,
  startDate,
  price,
  variant,
  isHighlighted = false,
  registrationLink,
}) => {
  const colorVariants = {
    primary: {
      border: "border-primary",
      bg: "from-primary/5",
      text: "text-primary",
      badge: "border-primary",
      background: "bg-primary",
      ribbon: "from-primary to-primary/80",
    },
    secondary: {
      border: "border-secondary",
      bg: "from-secondary/5",
      text: "text-secondary",
      badge: "border-secondary",
      background: "bg-secondary",
      ribbon: "from-secondary to-secondary/80",
    },
  };

  const colors = colorVariants[variant];

  return (
    <Card
      className={cn(
        "relative flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-xl",
        `border-2 ${colors.border} bg-gradient-to-br ${colors.bg} via-background to-background`,
      )}
    >
      {isHighlighted && (
        <div
          className={cn(
            "absolute -right-[4.5rem] top-8 z-10 w-[15rem]",
            "rotate-45 bg-gradient-to-r py-1.5 text-center",
            "text-sm font-medium text-primary-foreground",
            colors.ribbon,
          )}
        >
          Cupos limitados
        </div>
      )}

      <CardHeader className="text-center">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground">Clases en vivo por Zoom</p>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-6">
        <div className="space-y-4">
          <div className="min-h-28 rounded-lg border-2 p-4">
            <div className="mb-3 flex items-center gap-2">
              <Calendar className={cn("h-5 w-5")} />
              <h4 className="font-semibold">Horario de clases</h4>
            </div>
            <ul className="ml-5">
              {schedule.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <ChevronRight className="size-4" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 className={cn("h-5 w-5", colors.text)} />
            <p className="text-sm">Inicio: {startDate}</p>
          </div>

          <div className="flex items-center gap-2">
            <Users className={cn("h-5 w-5", colors.text)} />
            <p className="text-sm">Máximo 30 estudiantes por generación</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-end">
          <div className="space-y-4 rounded-lg bg-card p-6 text-center">
            <Badge variant="outline" className={cn("border-2", colors.badge)}>
              <Sparkles className="mr-2 h-4 w-4 text-yellow-500" />
              15% de descuento
            </Badge>

            <div>
              <p className="text-4xl font-bold">
                ${price.toLocaleString("es-CL")}
              </p>
              <p className="text-sm text-muted-foreground">Pago único</p>
            </div>

            <div className="mt-4 space-y-2 rounded-lg bg-muted/50 p-3">
              <p className="text-sm font-medium">O paga en cuotas</p>
              <p className="text-2xl font-bold">
                6 x ${Math.round(price / 6).toLocaleString("es-CL")}
              </p>
              <p className="text-xs text-muted-foreground">
                Sin interés con tarjeta de crédito
              </p>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button
          asChild
          className="w-full"
          size="lg"
          variant={variant === "primary" ? "default" : "secondary"}
        >
          <a href={registrationLink} target="_blank">
            Inscribirme ahora
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseGenerationCard;
