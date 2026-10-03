import { useEffect, useMemo, useState } from 'react';
import { BookOpen, Search, X } from 'lucide-react';

import { products } from '@/data/products';
import { recipeBook } from '@/data/recipes';
import type {CartLine, Product, Recipe } from '@/types';

type RecipePageProps = {
  onBack: () => void;
};

export function RecipeModal({
  product,
  recipe,
  onClose,
}: {
  product: Product;
  recipe: Recipe;
  onClose: () => void;
}) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="
        fixed inset-0 z-[100]
        grid place-items-center
        bg-[#252f9f]/20
        p-4
        backdrop-blur-[7px]
      "
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${product.name} recipe`}
        onMouseDown={(event) => event.stopPropagation()}
        className="
          relative
          flex
          w-[min(680px,calc(100vw-2rem))]
          max-h-[calc(100dvh-2rem)]
          flex-col
          overflow-hidden
          rounded-[1.8rem]
          border-2
          border-[#252f9f]
          bg-[#fbf9f1]
          text-[#252f9f]
          shadow-[9px_10px_0_#f07863]
          animate-pop
        "
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="
            absolute
            right-4
            top-4
            z-20
            grid
            h-9
            w-9
            place-items-center
            rounded-full
            border-2
            border-[#252f9f]
            bg-[#f07863]
            text-[#252f9f]
            transition
            hover:rotate-90
          "
          aria-label="Close recipe"
        >
          <X size={17} strokeWidth={2.5} />
        </button>

        {/* Header */}
        <div className="shrink-0 border-b border-[#d5d4c8] px-6 py-5 sm:px-8 ">
          <div className="flex items-center gap-2">
            <BookOpen size={15} />

            <span className="font-mono-custom text-[9px] uppercase tracking-[.14em] text-[#6570a4]">
              Recipe
            </span>
          </div>

          <h2 className="mt-2 font-display text-3xl font-bold leading-none tracking-[-.06em] sm:text-4xl">
            {product.name}
          </h2>

          <p className="mt-3 font-display text-sm font-bold leading-relaxed text-[#f07863]">
            {recipe.chefLine}
          </p>
        </div>

        {/* Scrollable recipe */}
        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-6 sm:px-8 sm:py-7">
          <div className="grid gap-8 sm:grid-cols-[.82fr_1.18fr]">

            {/* Ingredients */}
            <section>
              <p className="font-mono-custom text-[9px] font-semibold uppercase tracking-[.13em] text-[#6570a4]">
                Ingredients
              </p>

              <ul className="mt-4 space-y-3 text-sm leading-relaxed">
                {recipe.ingredients.map((ingredient) => (
                  <li
                    key={ingredient}
                    className="flex gap-2"
                  >
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#f07863]" />

                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Steps */}
            <section>
              <p className="font-mono-custom text-[9px] font-semibold uppercase tracking-[.13em] text-[#6570a4]">
                How to make it
              </p>

              <ol className="mt-4 space-y-5">
                {recipe.steps.map((step, index) => (
                  <li
                    key={step}
                    className="flex gap-3 text-sm leading-relaxed"
                  >
                    <span
                      className="
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#252f9f]
                        font-mono-custom
                        text-[9px]
                        font-bold
                        text-[#f1db2f]
                      "
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export function OrderRecipePicker({
  cart,
  onClose,
}: {
  cart: CartLine[];
  onClose: () => void;
}) {
  const [openRecipe, setOpenRecipe] =
    useState<string | null>(null);

  const orderRecipes = useMemo(() => {
    return cart
      .map((item) => {
        const product = products.find(
          (product) => product.id === item.id,
        );

        const recipe = recipeBook[item.id];

        if (!product || !recipe) {
          return null;
        }

        return {
          product,
          recipe,
        };
      })
      .filter(
        (
          item,
        ): item is {
          product: Product;
          recipe: Recipe;
        } => item !== null,
      );
  }, [cart]);

  const selected = orderRecipes.find(
    (item) => item.product.id === openRecipe,
  );

  return (
    <>
      <div
        className="
          rounded-[1.8rem]
          border-2
          border-[#252f9f]
          bg-[#fbf9f1]
          p-6
          text-[#252f9f]
          shadow-[8px_8px_0_#f07863]
        "
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <BookOpen size={17} />

              <span className="font-mono-custom text-[9px] uppercase tracking-[.14em] text-[#6570a4]">
                Recipe emergency
              </span>
            </div>

            <h2 className="mt-2 font-display text-3xl font-bold tracking-[-.06em]">
              What did you order?
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-[#6570a4]">
              Pick a dish from your order and we will reveal its
              allegedly authentic recipe.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="
              grid
              h-9
              w-9
              shrink-0
              place-items-center
              rounded-full
              border-2
              border-[#252f9f]
              bg-[#f07863]
              transition
              hover:rotate-90
            "
            aria-label="Close recipes"
          >
            <X size={16} />
          </button>
        </div>

        <div className="mt-6 space-y-3">
          {orderRecipes.map(
            ({ product, recipe }) => (
              <button
                key={product.id}
                type="button"
                onClick={() =>
                  setOpenRecipe(product.id)
                }
                className="
                  flex
                  w-full
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-[#d5d4c8]
                  bg-[#f4efe4]
                  p-4
                  text-left
                  transition
                  hover:-translate-y-0.5
                  hover:border-[#252f9f]
                  hover:shadow-[4px_4px_0_#d5d4c8]
                "
              >
                <img
                  src={product.image}
                  alt=""
                  className="
                    h-16
                    w-16
                    shrink-0
                    rounded-xl
                    object-cover
                  "
                />

                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-lg font-bold">
                    {product.name}
                  </h3>

                  <p className="mt-1 font-mono-custom text-[9px] uppercase tracking-[.1em] text-[#6570a4]">
                    {recipe.ingredients.length} ingredients
                  </p>
                </div>

                <span className="shrink-0 font-mono-custom text-[9px] font-semibold uppercase tracking-[.1em]">
                  View recipe →
                </span>
              </button>
            ),
          )}
        </div>
      </div>

      {selected && (
        <RecipeModal
          product={selected.product}
          recipe={selected.recipe}
          onClose={() => setOpenRecipe(null)}
        />
      )}
    </>
  );
}

export function RecipePage({ onBack }: RecipePageProps) {
  const [query, setQuery] = useState('');
  const [openRecipe, setOpenRecipe] = useState<string | null>(null);

  const recipeProducts = useMemo(() => {
    const search = query.trim().toLowerCase();

    return products.filter((product) => {
      // Only show dishes that actually have a recipe.
      if (!recipeBook[product.id]) {
        return false;
      }

      if (!search) {
        return true;
      }

      const searchableText = [
        product.name,
        product.category,
        product.tag,
        product.description,
      ]
        .join(' ')
        .toLowerCase();

      return searchableText.includes(search);
    });
  }, [query]);

  const selectedProduct = openRecipe
    ? products.find((product) => product.id === openRecipe)
    : undefined;

  const selectedRecipe = openRecipe
    ? recipeBook[openRecipe]
    : undefined;

  return (
    <main className="min-h-[calc(100dvh-82px)]">
      {/* Hero */}
      <section className="mx-auto max-w-[1320px] px-5 pb-10 pt-12 lg:px-10 lg:pb-14 lg:pt-16">
        <div className="mx-auto max-w-[850px] text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-[#d5d4c8] bg-[#fbf9f1] px-3 py-2 font-mono-custom text-[10px] uppercase tracking-[.15em] text-[#252f9f]">
            <BookOpen size={13} />
            The CraveRush recipe book
          </div>

          <h1 className="mt-6 font-display text-[clamp(3.3rem,7vw,6.5rem)] font-bold leading-[.86] tracking-[-.09em] text-[#252f9f]">
            Cook the
            <br />
            <span className="text-[#f07863]">
              craving.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-[560px] text-base leading-relaxed text-[#6570a4] sm:text-lg">
            Every dish has a story. Search the recipe book, pick something
            delicious, and see how the chef allegedly made it happen.
          </p>

          {/* Search */}
          <div className="relative mx-auto mt-8 max-w-[700px]">
            <Search
              size={19}
              className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-[#6570a4]
              "
            />

            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search for a dish..."
              className="
                h-14
                w-full
                rounded-2xl
                border
                border-[#d5d4c8]
                bg-[#fbf9f1]
                pl-13
                pr-12
                text-sm
                text-[#252f9f]
                shadow-[0_4px_0_#d9d5c8]
                outline-none
                transition-all
                placeholder:text-[#8b91b2]
                focus:border-[#252f9f]
                focus:shadow-[0_4px_0_#252f9f]
              "
              aria-label="Search recipes"
            />

            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  rounded-full
                  p-1.5
                  text-[#6570a4]
                  transition
                  hover:bg-[#e9e5d9]
                  hover:text-[#252f9f]
                "
                aria-label="Clear recipe search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <p className="mt-4 font-mono-custom text-[9px] uppercase tracking-[.12em] text-[#a1a2ab]">
            {recipeProducts.length} recipes
            {query ? ` matching "${query}"` : ''}
          </p>
        </div>
      </section>

      {/* Recipe grid */}
      <section className="border-t border-[#d5d4c8] bg-[#e9e5d9]">
        <div className="mx-auto max-w-[1320px] px-5 py-10 lg:px-10 lg:py-14">

          {recipeProducts.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {recipeProducts.map((product) => (
                <button
                  key={product.id}
                  type="button"
                  onClick={() => setOpenRecipe(product.id)}
                  className="
                    group
                    overflow-hidden
                    rounded-[1.5rem]
                    border
                    border-[#d5d4c8]
                    bg-[#fbf9f1]
                    text-left
                    transition-all
                    hover:-translate-y-1
                    hover:shadow-[7px_8px_0_#d5d4c8]
                  "
                >
                  {/* Image */}
                  <div className="relative aspect-[1.15] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition
                        duration-700
                        group-hover:scale-105
                      "
                    />

                    <div
                      className="
                        absolute
                        left-4
                        top-4
                        rounded-full
                        px-3
                        py-1.5
                        font-mono-custom
                        text-[9px]
                        uppercase
                        tracking-[.1em]
                        text-[#252f9f]
                      "
                      style={{
                        backgroundColor: product.accent,
                      }}
                    >
                      {product.category}
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h2 className="font-display text-xl font-bold leading-[1.05] tracking-[-.04em] text-[#252f9f]">
                        {product.name}
                      </h2>

                      <BookOpen
                        size={17}
                        className="
                          mt-0.5
                          shrink-0
                          text-[#f07863]
                          transition
                          group-hover:rotate-6
                        "
                      />
                    </div>

                    <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-[#6570a4]">
                      {product.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-[#e0ded4] pt-4">
                      <span className="font-mono-custom text-[9px] uppercase tracking-[.1em] text-[#6570a4]">
                        {recipeBook[product.id].ingredients.length} ingredients
                      </span>

                      <span className="font-mono-custom text-[9px] font-semibold uppercase tracking-[.1em] text-[#252f9f]">
                        View recipe →
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-[600px] rounded-[1.5rem] border border-[#d5d4c8] bg-[#fbf9f1] px-6 py-14 text-center">
              <BookOpen
                size={30}
                className="mx-auto text-[#f07863]"
              />

              <h2 className="mt-4 font-display text-2xl font-bold text-[#252f9f]">
                No recipe found.
              </h2>

              <p className="mt-2 text-sm text-[#6570a4]">
                Try searching for another dish.
              </p>

              <button
                type="button"
                onClick={() => setQuery('')}
                className="
                  mt-6
                  rounded-full
                  bg-[#252f9f]
                  px-5
                  py-3
                  font-mono-custom
                  text-[10px]
                  uppercase
                  tracking-[.12em]
                  text-[#f8f3e8]
                "
              >
                Show all recipes
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Detail modal */}
      {selectedProduct && selectedRecipe && (
        <RecipeModal
          product={selectedProduct}
          recipe={selectedRecipe}
          onClose={() => setOpenRecipe(null)}
        />
      )}
    </main>
  );
}