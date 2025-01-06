import { SectionWrapper } from "@/components/landing/SectionWrapper";
import ProductPreviewCard from "./components/ProductPreviewCard";
import { homeTexts } from "@/config/content/home";

export default function ProductsSection() {
  const { title, description, products } = homeTexts.productsSection;

  return (
    <SectionWrapper className="my-0 max-w-none py-16" id="otros-productos">
      <div className="mx-auto mb-12 max-w-4xl text-center">
        <h2 className="text-4xl font-bold sm:text-5xl">{title}</h2>
        <p className="mt-4 text-lg text-muted-foreground">{description}</p>
      </div>
      <div className="relative mx-auto max-w-6xl p-4 lg:p-6">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_90%,black)]"></div>
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <ProductPreviewCard key={product.type} product={product} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
