import { cn } from "@/lib/utils";
import Icon from "@/components/landing/Icon";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: string;
  features: string[];
  price?: number;
  contactForPrice?: boolean;
  highlighted?: boolean;
  variants: {
    hidden: { opacity: number; y: number };
    visible: { opacity: number; y: number };
  };
};

export function ServiceCard({
  title,
  description,
  icon,
  features,
  price,
  contactForPrice,
  highlighted = false,
  variants,
}: ServiceCardProps) {
  return (
    <motion.div
      variants={variants}
      className={cn(
        "relative rounded-xl border bg-card p-6 transition-all duration-300",
        highlighted &&
          "ring-2 ring-primary ring-offset-2 ring-offset-background",
      )}
    >
      <div className="flex flex-col space-y-4">
        {/* Icon and Title */}
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="rounded-lg bg-primary/10 p-2">
              <Icon name={icon} className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold tracking-tight text-foreground">
              {title}
            </h3>
          </div>
          {highlighted && (
            <Badge
              variant="default"
              className="bg-primary text-primary-foreground"
            >
              Más popular
            </Badge>
          )}
        </div>

        {/* Description */}
        <p className="text-muted-foreground">{description}</p>

        {/* Price */}
        <div className="pt-2">
          {contactForPrice ? (
            <p className="text-lg font-semibold text-foreground">
              Consultar disponibilidad
            </p>
          ) : (
            <p className="text-lg font-semibold text-foreground">
              {formatCurrency(price ?? 0)}
            </p>
          )}
        </div>

        {/* Features */}
        <ul className="space-y-2 pt-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2">
              <Icon name="Check" className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
