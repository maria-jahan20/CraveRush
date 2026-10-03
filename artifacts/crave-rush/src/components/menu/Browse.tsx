import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, Search, Sparkles, X } from 'lucide-react';

import { ProductCard } from '../menu/ProductCard';
import { Logo } from '../layout/AppShell';
import { products } from '@/data/products';
import { TrySomethingNew } from '@/components/menu/TrySomethingNew';
import { categories, promoCodes } from '@/data/categories';
import type { Currency, Product } from '@/types';

type BrowseProps = {
  onAdd: (product: Product) => void;
  onBag: () => void;
  itemCount: number;
  currency: Currency;
};

export function Browse({
  onAdd,
  onBag,
  itemCount,
  currency,
}: BrowseProps) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All cravings');
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    setVisibleCount(12);
  }, [category, query]);

  const filtered = useMemo(
    () =>
      products.filter((product) => {
        const matchesCategory =
          category === 'All cravings' ||
          product.category === category;

        const text =
          `${product.name} ${product.description} ${product.tag}`.toLowerCase();

        return (
          matchesCategory &&
          text.includes(query.toLowerCase())
        );
      }),
    [category, query],
  );

  const visibleProducts = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <main>
      <section className="mx-auto max-w-[1320px] px-5 pb-16 pt-12 lg:px-10 lg:pb-24 lg:pt-20">
        <div className="grid items-end gap-10 lg:grid-cols-[1.08fr_.92fr]">
          <div>
            <div
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d5d4c8] bg-[#fbf9f1] px-3 py-2 font-mono-custom text-[10px] uppercase tracking-[.15em] text-[#252f9f]"
              data-testid="text-status"
            >
              <span className="h-2 w-2 animate-[pulse-dot_1.5s_ease-in-out_infinite] rounded-full bg-[#f07863]" />
              Now accepting imaginary orders
            </div>

            <h1 className="max-w-[720px] font-display text-[clamp(3.8rem,8.8vw,8.4rem)] font-bold leading-[.86] tracking-[-.09em] text-[#252f9f]">
              Feed the
              <br />
              <span className="relative inline-block text-[#f07863]">
                feeling
                <span
                  className="absolute -right-3 -top-1 h-2.5 w-2.5 rounded-full bg-[#252f9f]"
                  aria-hidden="true"
                />
              </span>
            </h1>

            <p className="mt-8 max-w-[500px] text-lg leading-relaxed text-[#6570a4]">
              The food delivery app for cravings that deserve a little drama.
              Search a mood, build a bag, and watch us absolutely pretend to
              bring it over.
            </p>

            <button
              onClick={onBag}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#f07863] px-5 py-3 font-mono-custom text-[11px] uppercase tracking-[.13em] text-[#252f9f] transition-all hover:-translate-y-1 hover:shadow-[5px_5px_0_#252f9f]"
              data-testid="button-hero-bag"
            >
              {itemCount
                ? `Review your ${itemCount} craving${
                    itemCount > 1 ? 's' : ''
                  }`
                : 'Start a fake order'}
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="relative min-h-[320px] lg:min-h-[410px]">
            <div className="absolute right-0 top-0 h-[80%] w-[82%] rotate-3 overflow-hidden rounded-[2rem] border-8 border-[#f8f3e8] bg-[#252f9f] shadow-[11px_13px_0_#d5d4c8]">
              <img
                src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="A colorful spread of food on a table"
                className="h-full w-full object-cover opacity-90"
                data-testid="img-hero-food"
              />
              <div className="absolute inset-0 bg-[#252f9f]/15 mix-blend-multiply" />
            </div>

            <div className="animate-float-up absolute bottom-4 left-2 z-10 max-w-[245px] rotate-[-7deg] rounded-2xl border-2 border-[#252f9f] bg-[#f1db2f] p-4 shadow-[6px_7px_0_#252f9f]">
              <Sparkles size={18} className="mb-3 text-[#f07863]" />
              <p className="font-display text-[19px] font-bold leading-tight text-[#252f9f]">
                Cravings have entered the chat.
              </p>
            </div>

            <div className="absolute right-0 top-[20%] z-10 grid h-20 w-20 -rotate-12 place-items-center rounded-full bg-[#b9e2d0] text-center font-mono-custom text-[10px] uppercase leading-tight tracking-[.08em] text-[#252f9f]">
              100%
              <br />
              not real
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d5d4c8] bg-[#e9e5d9]">
        <div className="mx-auto max-w-[1320px] px-6 py-6 lg:px-10">
          
            

            <div className="flex gap-5 overflow-x-auto pb-1">
              {promoCodes.map((promo) => (
                <div
                  key={promo.code}
                  className="shrink-0 rotate-[-1deg] rounded-xl border-2 border-[#252f9f] px-10 py-5 text-[#252f9f] shadow-[3px_3px_0_#252f9f] transition hover:rotate-1 hover:-translate-y-0.5"
                  style={{ backgroundColor: promo.color }}
                  data-testid={`promo-card-${promo.code.toLowerCase()}`}
                >
                  <h2 className="font-mono-custom font-semibold text-[16px] uppercase tracking-[.08em]">
                    {promo.label}
                  </h2>
                  <p className="mt-1 font-display text-lg font-bold tracking-[.04em]">
                    {promo.code}
                  </p>
                </div>
              ))}
            </div>
          </div>
       
      </section>

      <TrySomethingNew
  onAdd={onAdd}
  currency={currency}
/>
<section className="bg-[#f5f1e8]">
  <div className="mx-auto max-w-[1320px] px-5 py-3 lg:px-10 lg:py-6">
    <div className="mx-auto flex max-w-[850px] flex-col items-center text-center">

      <p className="font-mono-custom text-[10px] uppercase tracking-[.16em] text-[#f07863]">
        Find your next craving
      </p>

      <h2 className="mt-1.5 font-display text-3xl font-bold tracking-[-.06em] text-[#252f9f] sm:text-4xl">
        Search for your craving
      </h2>

      <p className="mt-2 max-w-[520px] text-sm leading-relaxed text-[#6570a4]">
        Something savory, something sweet, or something you probably shouldn't
        be ordering this late.
      </p>

      <div className="relative mt-5 w-full max-w-[700px]">
        <Search
          size={19}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-[#6570a4]"
        />

        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search a craving, a mood, a bad idea..."
          className="h-14 w-full rounded-2xl border border-[#d5d4c8] bg-[#fbf9f1] pl-13 pr-12 text-sm shadow-[0_4px_0_#d9d5c8] outline-none transition-all placeholder:text-[#8b91b2] focus:border-[#252f9f] focus:shadow-[0_4px_0_#252f9f] focus:ring-2 focus:ring-[#252f9f]/10"
          data-testid="input-search-cravings"
        />

        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-[#6570a4] transition hover:bg-[#e9e5d9] hover:text-[#252f9f]"
            data-testid="button-clear-search"
          >
            <X size={16} />
          </button>
        )}
      </div>

      <div
        className="mt-4 flex flex-wrap justify-center gap-2.5"
        data-testid="list-categories"
      >
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`whitespace-nowrap rounded-full border px-5 py-2.5 font-mono-custom text-[10px] uppercase tracking-[.12em] transition-all ${
              category === item
                ? 'border-[#252f9f] bg-[#252f9f] text-[#f8f3e8] shadow-[3px_3px_0_#f07863]'
                : 'border-[#c9c9bf] bg-[#fbf9f1] text-[#6570a4] hover:-translate-y-0.5 hover:border-[#252f9f] hover:text-[#252f9f]'
            }`}
            data-testid={`button-category-${item
              .toLowerCase()
              .replace(' ', '-')}`}
          >
            {item}
          </button>
        ))}
      </div>

    </div>
  </div>
</section>

      <section
        className="mx-auto max-w-[1320px] px-5 py-14 lg:px-10 lg:py-20"
        id="menu"
      >
        <div className="mb-2 flex items-end justify-between">
          <div>
            {/* <p className="font-mono-custom text-[10px] uppercase tracking-[.16em] text-[#f07863]">
              The menu, allegedly
            </p> */}

            {/* <h2 className="mt-2 font-display text-4xl font-bold tracking-[-.06em] text-[#252f9f] sm:text-5xl">
              Pick your plot twist.
            </h2> */}
          </div>

          <span
            className="hidden font-mono-custom text-[10px] uppercase tracking-[.12em] text-[#6570a4] sm:block"
            data-testid="text-result-count"
          >
            {filtered.length} cravings found
          </span>
        </div>

        {filtered.length ? (
          <>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visibleProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAdd={onAdd}
                  currency={currency}
                />
              ))}
            </div>

            {hasMore && (
              <div className="mt-12 flex justify-center">
                <button
                  onClick={() =>
                    setVisibleCount((current) => current + 12)
                  }
                  className="group flex w-[200px] items-center justify-center gap-3 rounded-full border-2 border-[#252f9f] bg-[#fbf9f1] px-7 py-4 font-mono-custom text-[11px] uppercase tracking-[.14em] text-[#000000] transition-all hover:-translate-y-1 hover:bg-[#252f9f] hover:text-[#ffffff] hover:shadow-[5px_5px_0_#f07863]"
                  data-testid="button-see-more"
                >
                  See More
                </button>
              </div>
            )}
          </>
        ) : (
          <div
            className="rounded-[1.6rem] border border-dashed border-[#adb0c9] bg-[#fbf9f1] px-6 py-20 text-center"
            data-testid="empty-search-results"
          >
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#f1db2f] text-[#252f9f]">
              <Search size={22} />
            </div>

            <h3 className="mt-5 font-display text-2xl font-bold text-[#252f9f]">
              That craving is playing hard to get.
            </h3>

            <p className="mt-2 text-sm text-[#6570a4]">
              Try “tacos”, “sweet”, or simply “I need a snack”.
            </p>

            <button
              onClick={() => {
                setQuery('');
                setCategory('All cravings');
              }}
              className="mt-6 rounded-full border border-[#252f9f] px-4 py-2 font-mono-custom text-[10px] uppercase tracking-[.12em] text-[#252f9f]"
              data-testid="button-reset-search"
            >
              Reset the craving
            </button>
          </div>
        )}
      </section>

      <footer className="border-t border-[#d5d4c8] bg-[#252f9f] px-5 py-12 text-[#f8f3e8] lg:px-10">
        <div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <Logo compact />
            <p className="mt-4 max-w-[280px] text-sm leading-relaxed text-[#cbd0ff]">
              A tiny theatrical production disguised as a food delivery app.
            </p>
          </div>

          <div className="font-mono-custom text-[10px] uppercase tracking-[.16em] text-[#cbd0ff]">
            Made for the bit / © whenever
          </div>
        </div>
      </footer>
    </main>
  );
}