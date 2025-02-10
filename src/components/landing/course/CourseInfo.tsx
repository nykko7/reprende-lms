import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckSquare2,
  Sparkles,
  Brain,
  GraduationCap,
  BookOpen,
} from "lucide-react";
import { type FC } from "react";
import { cn } from "@/lib/utils";

type CourseInfoProps = {
  price: number;
  features: string[];
};

const CourseInfo: FC<CourseInfoProps> = ({ price, features }) => {
  const highlights = [
    {
      icon: BookOpen,
      title: "Material actualizado",
      description: "Videos, guías y ejercicios basados en el temario oficial",
    },
    {
      icon: Brain,
      title: "Método efectivo",
      description: "Estrategias basadas en neurociencia y pedagogía moderna",
    },
    {
      icon: GraduationCap,
      title: "Clases teórico/prácticas",
      description: "Combina teoría y práctica para un aprendizaje efectivo",
    },
  ];

  return (
    <div className="space-y-6">
      <Card className="border-2 border-primary">
        <CardContent className="grid gap-8 p-6 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 text-xl font-bold">El curso incluye:</h3>
              <ul className="space-y-3">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckSquare2 className="h-5 w-5 shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-4">
              <h4 className="mb-2 font-semibold">Importante:</h4>
              <ul className="space-y-2 text-sm">
                <li>• 6 horas de clase semanales</li>
                <li>• 4 meses de duración total</li>
                <li>• Acceso a consultas ilimitadas</li>
                <li>• Plataforma interactiva de aprendizaje</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-4 rounded-lg bg-card p-6 text-center">
              <Badge variant="outline" className="border-2 border-primary">
                <Sparkles className="mr-2 h-4 w-4 text-yellow-500" />
                15% de descuento
              </Badge>

              <div>
                <p className="text-4xl font-bold">${price.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Pago único</p>
              </div>

              <div className="mt-4 space-y-2 rounded-lg bg-muted/50 p-3">
                <p className="text-sm font-medium">O paga en cuotas</p>
                <p className="text-2xl font-bold">
                  6 x ${Math.round(price / 6).toLocaleString()}
                </p>
                <p className="text-xs text-muted-foreground">
                  Sin interés con tarjeta de crédito
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        {highlights.map((highlight, index) => (
          <Card key={index} className="border border-muted">
            <CardContent className="pt-6">
              <div className="mb-2 flex items-center gap-2">
                <highlight.icon className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">{highlight.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {highlight.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CourseInfo;
