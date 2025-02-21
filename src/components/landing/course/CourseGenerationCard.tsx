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
  Clock,
  BookOpen,
  CheckSquare2,
  Package,
  Info,
  Sparkles,
  Zap,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { type FC } from "react";
import { cn } from "@/lib/utils";

type CourseGenerationProps = {
  title: string;
  schedule: string[];
  startDate: string;
  duration: string;
  price: number;
  discountPrice: number;
  variant: "primary" | "secondary";
  isHighlighted?: boolean;
  registrationLink: string;
  features: string[];
  showInfoButton?: boolean;
};

const CourseGenerationCard: FC<CourseGenerationProps> = ({
  title,
  schedule,
  startDate,
  duration,
  price,
  discountPrice,
  variant,
  isHighlighted = false,
  registrationLink,
  features,
  showInfoButton = false,
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
            "absolute -right-[5rem] top-8 z-10 w-[15rem]",
            "rotate-45 bg-gradient-to-r py-1.5 pr-2.5 text-center",
            "text-sm font-medium text-primary-foreground",
            colors.ribbon,
          )}
        >
          Cupos limitados
        </div>
      )}

      <CardHeader className="text-center">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground">
          Clases en vivo por <span className="font-bold">Zoom</span>
        </p>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-4">
        {/* Schedule Section */}
        <div className="h-full rounded-lg border-2 p-4">
          <div className="mb-3 flex items-center gap-2">
            <Calendar className={cn("size-6", colors.text)} />
            <h4 className="font-semibold">Horario de clases</h4>
          </div>
          <ul className="ml-5 flex flex-col justify-center">
            {schedule.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <ChevronRight className="size-4" />
                <span className="text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Details Section */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="flex items-center gap-2 rounded-lg border-2 p-3">
            <Clock className={cn("size-6", colors.text)} />
            <div className="space-y-0.5">
              <p className="text-xs text-muted-foreground">Inicio</p>
              <p className="text-sm font-medium">{startDate}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg border-2 p-3">
            <Calendar className={cn("size-6", colors.text)} />
            <div className="space-y-0.5">
              <p className="text-xs text-muted-foreground">Duración</p>
              <p className="text-sm font-medium">{duration}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg border-2 p-3">
            <Users className={cn("size-6", colors.text)} />
            <div className="space-y-0.5">
              <p className="text-xs text-muted-foreground">Cupos</p>
              <p className="text-sm font-medium">Máximo 30</p>
            </div>
          </div>
        </div>

        {/* Important Info Section */}
        {/* <div className="rounded-lg border-2 p-4">
          <div className="mb-3 flex items-center gap-2">
            <Zap className={cn("h-5 w-5", colors.text)} />
            <h4 className="font-semibold">Importante</h4>
          </div>
          <ul className="ml-5 grid gap-2 sm:grid-cols-2">
            {importantInfo.map((info, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckSquare2 className={cn("mt-0.5 h-4 w-4", colors.text)} />
                <span className="text-sm">{info}</span>
              </li>
            ))}
          </ul>
        </div> */}

        {/* Course Features Section */}
        <div className="rounded-lg border-2 p-4">
          <div className="mb-3 flex items-center gap-2">
            <Package className={cn("size-6", colors.text)} />
            <h4 className="font-semibold">El curso incluye</h4>
          </div>
          <ul className="ml-5 grid gap-2 sm:grid-cols-2">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckSquare2 className={cn("mt-0.5 h-4 w-4", colors.text)} />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing Section */}
        <div className="space-y-4 rounded-lg border-2 bg-card p-6">
          <div className="space-y-2 text-center">
            <p className="font-semibold">Valor del curso</p>
            <p className="text-2xl font-semibold text-muted-foreground line-through">
              ${price.toLocaleString("es-CL")}
            </p>
            <Badge variant="outline" className={cn("border-2", colors.badge)}>
              <Sparkles className="mr-2 h-4 w-4 text-yellow-500" />
              15% de descuento
            </Badge>
            <p className="text-4xl font-bold">
              ${discountPrice.toLocaleString("es-CL")}
            </p>
          </div>

          <div className="rounded-lg bg-muted/50 p-3 text-center">
            <p className="text-sm font-medium">O paga en cuotas</p>
            <p className="text-2xl font-bold">
              6 x ${Math.round(discountPrice / 6).toLocaleString("es-CL")}
            </p>
            <p className="text-xs text-muted-foreground">
              Sin interés con tarjeta de crédito
            </p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-4">
        {showInfoButton && (
          <Button asChild variant="outline" className="w-full" size="lg">
            <Link href="/curso" className="gap-2">
              <BookOpen className="h-5 w-5" />
              Ver programa completo
            </Link>
          </Button>
        )}

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
