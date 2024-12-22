import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { productTypeLabels } from "@/lib/schema-labels";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  type Product,
  type ChooseYourProductSection as ChooseYourProductSectionProps,
} from "@/app/(landing)/_config/home";
import { FaLink, FaWhatsapp } from "react-icons/fa";
import { CountdownTimer } from "@/components/landing/CountdownTimer";
import {
  BookOpenText,
  CheckCircle,
  PackageOpen,
  SquareDashedMousePointer,
} from "lucide-react";

const priceFormatter = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
});

const PriceDisplay = ({ product }: { product: Product }) => {
  if (!product.showPrice) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <p className="text-center  text-muted-foreground">
          {
            "Consulta por más detalles y valores \nde este formato a nuestro Whatsapp 👇"
          }
        </p>
      </div>
    );
  }

  const savings = product.originalPrice - product.price;
  const hasDiscount = savings > 0;

  return (
    <div className="flex flex-col text-center">
      <div>
        <span>
          {product.launchPrice ? "Precio de lanzamiento:" : "Precio:"}
        </span>
      </div>
      <div className="flex items-center gap-x-2">
        <span className="text-3xl font-bold">
          {priceFormatter.format(product.price)}
        </span>
        {hasDiscount && (
          <span className="text-base text-muted-foreground line-through">
            {priceFormatter.format(product.originalPrice)}
          </span>
        )}
      </div>
      {hasDiscount && (
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-center text-sm text-muted-foreground">
            Ahorras {priceFormatter.format(savings)}
          </p>
          {/* <p className="rounded-md border border-yellow-500  p-1 text-center text-xs">
            ⚠️ Precio por tiempo limitado
          </p> */}
        </div>
      )}
    </div>
  );
};

export default function ChooseYourProductSection({
  title,
  description,
  products,
}: ChooseYourProductSectionProps) {
  // Set the target date for the countdown (e.g., 3 days from now)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 3);

  return (
    <section className="py-16" id="cursos">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">{title}</h2>
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>
        {/* <CountdownTimer targetDate={targetDate} /> */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Card
              key={index}
              className={cn("relative flex flex-col", {
                "border-4 border-primary": product.featured,
                "border-2": !product.featured,
              })}
            >
              {/* {product.type === "recorded_course" && (
                <CountdownTimer targetDate={targetDate} />
              )} */}
              <CardHeader className="flex gap-2 border-b-2 ">
                <Badge
                  className={cn("w-fit text-primary-foreground", {
                    "border-2 border-primary":
                      product.type === "recorded_course",
                    "border-2 border-secondary":
                      product.type === "recorded_workshop",
                    "border-2 border-green-700":
                      product.type === "personalized_lessons",
                  })}
                  variant="outline"
                >
                  {
                    productTypeLabels[
                      product.type as keyof typeof productTypeLabels
                    ]
                  }
                </Badge>
                <CardTitle className="h-12">{product.title}</CardTitle>
                {/* <CardDescription>{product.subtitle}</CardDescription> */}
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-4 whitespace-pre-wrap pt-6">
                <p>{product.description}</p>
                {/* {product.targetAudience && (
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-5 w-5" />
                    <p className="font-bold">
                      Dirigido a:{" "}
                      <span className="font-normal">
                        {product.targetAudience}
                      </span>
                    </p>
                  </div>
                )} */}
                <div className="flex items-center gap-2">
                  <PackageOpen className="h-5 w-5" />
                  <p className="font-bold">Incluye:</p>
                </div>
                <ul className="text-left text-card-foreground">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="mb-2 flex items-start">
                      <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {product.more_details && (
                  <Button variant={"outline"} asChild>
                    <Link href={product.more_details}>
                      <BookOpenText className="mr-2 h-4 w-4" />
                      Ver más información
                    </Link>
                  </Button>
                )}
                <div className="mt-auto flex h-28 flex-col items-center  justify-center gap-2 border-2 border-dashed p-2">
                  <PriceDisplay product={product} />
                </div>
              </CardContent>

              <CardFooter className="flex flex-col gap-4">
                {product.type === "recorded_course" && (
                  <Button className="w-full" asChild size={"lg"}>
                    <Link href={product.ctaUrl}>
                      <SquareDashedMousePointer className="mr-2 h-5 w-5" />
                      {product.ctaText}
                    </Link>
                  </Button>
                )}

                {product.type !== "recorded_course" && (
                  <Button
                    className="w-full"
                    variant={"accent"}
                    asChild
                    size={"lg"}
                  >
                    {product.ctaType === "whatsapp_message" ? (
                      <Link href={product.ctaUrl}>
                        <FaWhatsapp className="mr-2 h-5 w-5" />
                        {product.ctaText}
                      </Link>
                    ) : (
                      <Link href={product.ctaUrl}>
                        {product.ctaText}
                        <FaLink className="mr-2 h-5 w-5" />
                      </Link>
                    )}
                  </Button>
                )}
                {product.urgencyNote && (
                  <div className="flex justify-center">
                    <p className="text-center text-sm text-red-400">
                      {product.urgencyNote}
                    </p>
                  </div>
                )}
                {product.notUrgencyNote && (
                  <div className="flex justify-center">
                    <p className="text-center text-sm text-green-400">
                      {product.notUrgencyNote}
                    </p>
                  </div>
                )}
                {product.semiUrgencyNote && (
                  <div className="flex justify-center">
                    <p className="text-center text-sm text-yellow-400">
                      {product.semiUrgencyNote}
                    </p>
                  </div>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        {/* <CountdownTimer targetDate={targetDate} className="mt-4" /> */}
      </div>
    </section>
  );
}
