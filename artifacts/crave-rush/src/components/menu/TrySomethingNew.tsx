import { ProductCard } from '@/components/menu/ProductCard';
import { products } from '@/data/products';
import type { Currency, Product } from '@/types';

type TrySomethingNewProps = {
  onAdd: (product: Product) => void;
  currency: Currency;
};

const trySomethingNewIds = [
  'beef-kala-bhuna',
  'khabsa',
  'chingri-bhuna',
  'roshmalai',
];

export function TrySomethingNew({
  onAdd,
  currency,
}: TrySomethingNewProps) {
  const featuredProducts = trySomethingNewIds
    .map((id) => products.find((product) => product.id === id))
    .filter((product): product is Product => Boolean(product));

  return (
    <section className="mx-auto max-w-[1320px] px-5 py-14 lg:px-10 lg:py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="font-mono-custom text-[10px] uppercase tracking-[.16em] text-[#f07863]">
            Feeling adventurous?
          </p>

          <h2 className="mt-2 font-display text-4xl font-bold tracking-[-.06em] text-[#252f9f] sm:text-5xl">
            Try Something New
          </h2>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAdd={onAdd}
            currency={currency}
           // badge={product.badge}
          />
        ))}
      </div>
    </section>
  );
}