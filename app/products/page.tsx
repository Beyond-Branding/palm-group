// app/products/page.tsx
import dynamic from "next/dynamic";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ProductsHero } from "@/components/products/products-hero";

// dynamic import client-only ProductsGrid to avoid SSR/prerender errors (useSearchParams etc.)
const ProductsGrid = dynamic(
  () =>
    import("@/components/products/products-grid").then((mod) => {
      // cast to any to avoid TS complaining about missing .default or named export
      const m = mod as any;
      // prefer the named export ProductsGrid, fall back to default
      return m.ProductsGrid ?? m.default;
    }),
  { ssr: false }
);

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ProductsHero />
        <ProductsGrid />
      </main>
      <Footer />
    </div>
  );
}
