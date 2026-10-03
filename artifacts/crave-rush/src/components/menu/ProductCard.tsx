import { useEffect, useId, useState } from 'react';
import { BookOpen, Plus, X } from 'lucide-react';

import { money } from '@/lib/currency';
import { recipeBook } from '@/data/recipes';
import type { Currency, Product, Recipe } from '@/types';

type ProductCardProps = {
  product: Product;
  onAdd: (product: Product) => void;
  currency: Currency;
  badge?: 'popular' | 'hot';
};

function RecipeModal({
  product,
  recipe,
  onClose,
}: {
  product: Product;
  recipe: Recipe;
  onClose: () => void;
}) {
  const titleId = useId();

  // Lock background scrolling + allow ESC to close
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
        backdrop-blur-[6px]
      "
      role="presentation"
      onMouseDown={(event) => {
        // Clicking the blurred background closes the recipe
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      data-testid={`recipe-backdrop-${product.id}`}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onMouseDown={(event) => event.stopPropagation()}
        className="
          relative flex
          w-[min(620px,calc(100vw-2rem))]
          aspect-square
          max-h-[calc(100dvh-2rem)]
          flex-col
          overflow-hidden
          rounded-[1.8rem]
          border-2 border-[#252f9f]
          bg-[#fbf9f1]
          text-[#252f9f]
          shadow-[10px_10px_0_#f07863]
          animate-pop
        "
        data-testid={`recipe-modal-${product.id}`}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          autoFocus
          className="
            absolute right-4 top-4 z-10
            grid h-9 w-9 place-items-center
            rounded-full
            border-2 border-[#252f9f]
            bg-[#f07863]
            text-[#252f9f]
            transition
            hover:rotate-90
            hover:bg-[#ff8976]
          "
          aria-label={`Close ${product.name} recipe`}
          data-testid={`button-close-recipe-${product.id}`}
        >
          <X size={17} strokeWidth={2.5} />
        </button>

        {/* Recipe header */}
        <div
          className="
            shrink-0
            border-b-2 border-[#d5d4c8]
            bg-[#f1db2f]
            px-6 pb-5 pt-6
            pr-16
            sm:px-8 sm:pb-6 sm:pt-7 sm:pr-20
          "
        >
          <div
            className="
              flex items-center gap-2
              font-mono-custom
              text-[9px]
              font-semibold
              uppercase
              tracking-[.14em]
              text-[#252f9f]
            "
          >
            <BookOpen size={14} />
            Recipe
          </div>

          <h2
            id={titleId}
            className="
              mt-2
              font-display
              text-3xl
              font-bold
              leading-none
              tracking-[-.06em]
              sm:text-4xl
            "
          >
            {product.name}
          </h2>

          <p
            className="
              mt-3
              max-w-[520px]
              font-display
              text-sm
              font-bold
              leading-relaxed
              text-[#f07863]
              sm:text-base
            "
          >
            {recipe.chefLine}
          </p>
        </div>

        {/* Scrollable recipe body */}
        <div
          className="
            min-h-0
            flex-1
            overflow-y-auto
            px-6 py-6
            sm:px-8 sm:py-7
          "
        >
          <div className="grid gap-7 sm:grid-cols-[.8fr_1.2fr]">

            {/* Ingredients */}
            <section>
              <p
                className="
                  font-mono-custom
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[.13em]
                  text-[#6570a4]
                "
              >
                Ingredients
              </p>

              <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-[#252f9f]">
                {recipe.ingredients.map((ingredient) => (
                  <li
                    key={ingredient}
                    className="flex gap-2"
                  >
                    <span
                      className="
                        mt-[7px]
                        h-1.5 w-1.5
                        shrink-0
                        rounded-full
                        bg-[#f07863]
                      "
                    />

                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Instructions */}
            <section>
              <p
                className="
                  font-mono-custom
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[.13em]
                  text-[#6570a4]
                "
              >
                How to make it
              </p>

              <ol className="mt-3 space-y-4 text-sm leading-relaxed text-[#252f9f]">
                {recipe.steps.map((step, index) => (
                  <li
                    key={step}
                    className="flex gap-3"
                  >
                    <span
                      className="
                        flex h-6 w-6
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
                      {index + 1}
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

export function ProductCard({
  product,
  onAdd,
  currency,
  badge,
}: ProductCardProps) {
  const [recipeOpen, setRecipeOpen] = useState(false);

  const recipe = recipeBook[product.id];

  return (
    <>
      <article
        className="
          group relative flex flex-col
          overflow-hidden
          rounded-[1.65rem]
          border border-[#d6d5ca]
          bg-[#fbf9f1]
          transition-all duration-300
          hover:-translate-y-1
          hover:shadow-[8px_10px_0_#d9d5c8]
        "
        data-testid={`card-product-${product.id}`}
      >
        {/* Food image */}
        <div className="relative aspect-[1.18] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="
              h-full w-full
              object-cover
              transition duration-700
              group-hover:scale-105
            "
            data-testid={`img-product-${product.id}`}
          />

          {/* TOP LEFT LABELS */}
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">

            {/* OLD:
                Chattogram legend
                Spiced comfort
                Seafood craving
                etc.

                NEW:
                Recipe
            */}
            {recipe && (
              <button
                type="button"
                onClick={() => setRecipeOpen(true)}
                className="
                  rounded-full
                  px-3 py-1.5
                  font-mono-custom
                  text-[9px]
                  uppercase
                  tracking-[.1em]
                  text-[#252f9f]
                  transition
                  hover:-translate-y-0.5
                  hover:brightness-105
                "
                style={{
                  backgroundColor: product.accent,
                }}
                aria-label={`View recipe for ${product.name}`}
                data-testid={`button-recipe-${product.id}`}
              >
                Recipe
              </button>
            )}

            {/* Popular badge stays exactly as before */}
            {(badge === 'hot' || product.popular) && (
              <div
                className="
                  rounded-full
                  border-2 border-[#252f9f]
                  bg-[#f07863]
                  px-3 py-1
                  font-mono-custom
                  text-[9px]
                  uppercase
                  tracking-[.1em]
                  text-[#252f9f]
                  shadow-[2px_2px_0_#252f9f]
                "
              >
                {badge === 'hot' ? 'Hot' : 'Popular'}
              </div>
            )}
          </div>
        </div>

        {/* Card content */}
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-start justify-between gap-3">
            <h3
              className="
                font-display
                text-[21px]
                font-bold
                leading-[1.05]
                tracking-[-.04em]
              "
            >
              {product.name}
            </h3>

            <div className="text-right">
              {product.discount && (
                <div
                  className="
                    font-mono-custom
                    text-[9px]
                    uppercase
                    tracking-[.08em]
                    text-[#f07863]
                  "
                >
                  {product.discount}% off
                </div>
              )}

              <div className="flex items-center gap-2">
                {product.originalPrice && (
                  <span
                    className="
                      font-mono-custom
                      text-[10px]
                      text-[#a4a6b4]
                      line-through
                    "
                  >
                    {money(product.originalPrice, currency)}
                  </span>
                )}

                <span
                  className="
                    font-mono-custom
                    text-sm
                    font-bold
                    text-[#252f9f]
                  "
                >
                  {money(product.price, currency)}
                </span>
              </div>
            </div>
          </div>

          {/* Rating */}
          <div
            className="mt-3 flex items-center gap-2 text-xs"
            aria-label={`${product.rating} out of 5 stars from ${product.reviews} reviews`}
            data-testid={`review-${product.id}`}
          >
            <span className="tracking-[.08em] text-[#f1b81b]">
              ★★★★★
            </span>

            <span
              className="
                font-mono-custom
                text-[10px]
                text-[#6570a4]
              "
            >
              {product.rating} / 5 · {product.reviews} reviews
            </span>
          </div>

          {/* Description */}
          <p
            className="
              mt-3
              flex-1
              text-[13px]
              leading-relaxed
              text-[#6570a4]
            "
          >
            {product.description}
          </p>

          {/* Add to cart */}
          <button
            onClick={() => onAdd(product)}
            className="
              mt-5
              flex w-full
              items-center justify-between
              rounded-xl
              bg-[#252f9f]
              px-4 py-3
              text-left
              text-[#f8f3e8]
              transition-all
              hover:bg-[#1c247d]
              active:scale-[.98]
            "
            data-testid={`button-add-${product.id}`}
          >
            <span
              className="
                font-mono-custom
                text-[10px]
                uppercase
                tracking-[.14em]
              "
            >
              Add to craving
            </span>

            <Plus size={16} strokeWidth={2.5} />
          </button>
        </div>
      </article>

      {/* Recipe modal */}
      {recipeOpen && recipe && (
        <RecipeModal
          product={product}
          recipe={recipe}
          onClose={() => setRecipeOpen(false)}
        />
      )}
    </>
  );
}