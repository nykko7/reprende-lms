import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CheckSquare } from "lucide-react";
import { type ProductPreview } from "@/config/content/home";

interface ProductPreviewCardProps {
  product: ProductPreview;
}

const colorStyles = {
  primary: {
    card: "border-primary bg-gradient-to-tl from-background via-background to-primary/25",
    badge: "border-primary",
    price: "border-primary/80",
    button: "bg-primary",
  },
  red: {
    card: "border-red-500/25 bg-gradient-to-tl from-background via-background to-red-500/25",
    badge: "border-red-500",
    price: "border-red-500/25",
    button: "bg-red-500/40 hover:bg-red-500/50",
  },
  green: {
    card: "border-green-500/25 bg-gradient-to-tl from-background via-background to-green-500/25",
    badge: "border-green-500",
    price: "border-green-500/25",
    button: "bg-green-500/40 hover:bg-green-500/50",
  },
};

export default function ProductPreviewCard({
  product,
}: ProductPreviewCardProps) {
  const styles = colorStyles[product.color ?? "primary"];

  return (
    <Card
      className={cn(
        "flex h-full flex-col border",
        product.isHighlighted && "border-2",
        styles.card,
      )}
    >
      <CardHeader>
        {product.badge && (
          <Badge
            variant="outline"
            className={cn("w-fit border-accent-foreground/60", styles.badge)}
          >
            {product.badge}
          </Badge>
        )}
        <h3 className="text-xl font-bold">{product.title}</h3>
        <p className="text-sm text-muted-foreground">{product.description}</p>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-2 text-sm">
          {product.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <CheckSquare className="h-4 w-4 text-accent-foreground/60" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <div
          className={cn(
            "mt-4 w-full border-2 border-dashed border-accent p-4 text-center",
            styles.price,
          )}
        >
          <p className="text-sm">Precio</p>
          <p className="text-xl font-bold">
            ${product.price.toLocaleString()}
            <span className="text-sm"> CLP</span>
            {product.type === "private_lessons" && (
              <span className="text-sm">/mes</span>
            )}
          </p>
        </div>
        <Button asChild className={cn("w-full", styles.button)}>
          <Link href={product.href}>Ver más información</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
