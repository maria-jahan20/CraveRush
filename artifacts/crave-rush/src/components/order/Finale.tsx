import { useState } from 'react';
import {
  ChefHat,
  CircleX,
  Coins,
  RotateCcw,
  Store,
  BookOpen,
} from 'lucide-react';

import { RecipePage } from '../recipe/RecipePage';
import type { CartLine } from '@/types';

type FinaleProps = {
  orderNumber: string;
  cart: CartLine[];
  onAgain: () => void;
};

export function Finale({
  orderNumber,
  cart,
  onAgain,
}: FinaleProps) {
  const [recipeOpen, setRecipeOpen] = useState(false);

  return (
    <main
      className="relative min-h-[calc(100dvh-73px)] overflow-hidden bg-[#252f9f] px-5 py-10 text-[#f8f3e8] lg:px-10 lg:py-16"
      data-testid="page-finale"
    >
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full border-[2px] border-dashed border-[#6872c4] animate-[spin_18s_linear_infinite]" />

      <div className="pointer-events-none absolute -right-16 bottom-12 h-96 w-96 rounded-full border-[2px] border-dashed border-[#6872c4] animate-[spin_24s_linear_infinite_reverse]" />

      <div className="relative mx-auto max-w-[1180px]">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono-custom text-[10px] uppercase tracking-[.16em] text-[#f1db2f]">
              Order {orderNumber} / phase 3 of 3
            </p>

            <p className="mt-3 font-mono-custom text-[10px] uppercase tracking-[.14em] text-[#aeb5f0]">
              The grand delivery reveal
            </p>
          </div>

          <button
            onClick={onAgain}
            className="inline-flex items-center gap-2 self-start rounded-full border border-[#6872c4] px-4 py-3 font-mono-custom text-[10px] uppercase tracking-[.12em] text-[#f8f3e8] transition hover:bg-[#303aa9] sm:self-end"
            data-testid="button-order-again-finale"
          >
            <RotateCcw size={14} />
            Order again
          </button>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_.8fr]">
          <div>
            <div className="mb-7 inline-flex rotate-[-4deg] items-center gap-2 rounded-full border-2 border-[#f07863] bg-[#f07863] px-4 py-2 font-mono-custom text-[10px] uppercase tracking-[.14em] text-[#252f9f] shadow-[5px_5px_0_#f1db2f] animate-stamp">
              <CircleX size={15} />
              Plot twist unlocked
            </div>

            <h1 className="font-display text-[clamp(4rem,10vw,9rem)] font-bold leading-[.78] tracking-[-.1em] text-[#f8f3e8]">
              OPS<span className="text-[#f07863]">SSS.</span>
            </h1>

            <p className="mt-7 max-w-[600px] font-display text-[clamp(1.5rem,3vw,2.4rem)] font-bold leading-[.98] text-[#f1db2f]">
              Food is in the restaurant.
              <br />
              Your money is in your pocket.
            </p>

            <p className="mt-6 max-w-[540px] text-base leading-relaxed text-[#cbd0ff]">
              After a full three-minute cinematic journey, the meal has
              bravely remained exactly where it started. The restaurant calls
              this “freshness.” We call it a plot hole with excellent margins.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <div className="rounded-xl border border-[#6872c4] bg-[#303aa9] px-4 py-3">
                <p className="font-mono-custom text-[9px] uppercase tracking-[.1em] text-[#aeb5f0]">
                  Refund status
                </p>
                <p className="mt-1 font-display text-xl font-bold text-[#f1db2f]">
                  Still yours
                </p>
              </div>

              <button
                onClick={() => setRecipeOpen(true)}
                className="inline-flex items-center gap-2 rounded-xl border border-[#f07863] bg-[#f07863] px-4 py-3 font-mono-custom text-[10px] uppercase tracking-[.1em] text-[#252f9f]"
                data-testid="button-open-recipe-finale"
              >
                <BookOpen size={15} />
                Open recipe desk
              </button>
            </div>
          </div>

          <div className="relative mx-auto h-[390px] w-full max-w-[440px]">
            <div className="absolute inset-[9%] rounded-full border-[3px] border-dashed border-[#6872c4] animate-[spin_16s_linear_infinite]" />

            <div className="absolute inset-[21%] rounded-full bg-[#f1db2f] shadow-[12px_12px_0_#f07863] animate-[pulse_3s_ease-in-out_infinite]" />

            <div className="absolute left-1/2 top-1/2 z-10 grid h-40 w-40 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[2.5rem] border-4 border-[#252f9f] bg-[#f8f3e8] text-[#252f9f] shadow-[8px_8px_0_#252f9f] animate-[float-up_4s_ease-in-out_infinite]">
              <Store size={70} strokeWidth={1.5} />
            </div>

            <div className="absolute left-[7%] top-[26%] rounded-xl border-2 border-[#252f9f] bg-[#f07863] px-3 py-2 font-mono-custom text-[9px] uppercase tracking-[.08em] text-[#252f9f] shadow-[3px_3px_0_#252f9f] animate-[float-up_3.2s_ease-in-out_infinite]">
              Food: safe
            </div>

            <div className="absolute bottom-[18%] right-[4%] rounded-xl border-2 border-[#252f9f] bg-[#b9e2d0] px-3 py-2 font-mono-custom text-[9px] uppercase tracking-[.08em] text-[#252f9f] shadow-[3px_3px_0_#252f9f] animate-[float-up_3.8s_ease-in-out_infinite_reverse]">
              <Coins size={14} className="mr-1 inline" />
              Money: also safe
            </div>

            <div className="absolute right-[9%] top-[8%] rounded-full bg-[#f07863] p-3 text-[#252f9f] animate-[spin_8s_linear_infinite]">
              <ChefHat size={24} />
            </div>
          </div>
        </div>
      </div>

      {recipeOpen && (
        <div className="fixed inset-0 z-[50] overflow-y-auto bg-[#252f9f]/80 px-5 py-10 backdrop-blur-sm">
          <div className="mx-auto max-w-[760px]">
            <RecipePage
              cart={cart}
              dark
              onClose={() => setRecipeOpen(false)}
            />
          </div>
        </div>
      )}
    </main>
  );
}