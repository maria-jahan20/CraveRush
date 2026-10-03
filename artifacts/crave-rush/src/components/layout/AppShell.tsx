import {
  Check,
  ChevronDown,
  ShoppingBag,
  Zap,
} from 'lucide-react';

import type {
  Currency,
  Stage,
} from '@/types';

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className="flex items-center gap-2.5"
      data-testid="brand-craverush"
    >
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#ffffff] text-[#f8f3e8] shadow-[4px_4px_0_#f07863]">
        <img src="/favicon.png" alt="CraveRush Logo" />
      </div>

      {!compact && (
        <div className="leading-none">
          <div className="font-display text-lg font-bold tracking-[-.06em]">
            CraveRush
          </div>

          <div className="mt-1 font-mono-custom text-[9px] uppercase tracking-[.18em] text-[#6570a4]">
            delivery-ish
          </div>
        </div>
      )}
    </div>
  );
}
export function AppShell({
  children,
  itemCount,
  onBag,
  stage,
  onHome,
  onRecipes,
  cartNotice,
  currency,
  onCurrencyChange,
}: {
  children: React.ReactNode;
  itemCount: number;
  onBag: () => void;
  stage: Stage;
  onHome: () => void;
  onRecipes: () => void;
  cartNotice: string | null;
  currency: Currency;
  onCurrencyChange: (currency: Currency) => void;
}) {
  return (
    <div className="noise min-h-[100dvh] overflow-x-hidden bg-[#f4efe4]">
      <header className="sticky top-0 z-40 border-b border-[#d5d4c8] bg-[#f4efe4]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-5 py-4 lg:px-10">
          <button onClick={onHome} data-testid="button-logo-home" aria-label="Back to browse">
            <Logo />
          </button>
          <nav className="flex items-center gap-5 sm:gap-7">
  <button
    onClick={onHome}
    className={`font-mono-custom text-[11px] uppercase tracking-[.16em] transition-colors ${
      stage === 'browse'
        ? 'text-[#252f9f]'
        : 'text-[#6570a4] hover:text-[#252f9f]'
    }`}
    data-testid="button-nav-menu"
  >
    Menu
  </button>

  <button
    onClick={onRecipes}
    className={`font-mono-custom text-[11px] uppercase tracking-[.16em] transition-colors ${
      stage === 'recipes'
        ? 'text-[#252f9f]'
        : 'text-[#6570a4] hover:text-[#252f9f]'
    }`}
    data-testid="button-nav-recipes"
  >
    Recipe
  </button>
</nav>
          <div className="relative">
  <select
    value={currency}
    onChange={(event) =>
      onCurrencyChange(event.target.value as Currency)
    }
    className="cursor-pointer appearance-none rounded-full border border-[#d5d4c8] bg-[#fbf9f1] py-3 pl-4 pr-10 font-mono-custom text-[10px] font-semibold uppercase tracking-[.12em] text-[#252f9f] outline-none transition-all hover:-translate-y-0.5 hover:border-[#252f9f] focus:border-[#252f9f]"
    aria-label="Select currency"
    data-testid="select-currency"
  >
    <option value="BDT">BDT — ৳</option>
    <option value="AUD">AUD — A$</option>
    <option value="USD">USD — $</option>
  </select>

  <ChevronDown
    size={15}
    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#252f9f]"
  />
</div>
        </div>
      </header>
      {itemCount > 0 && stage !== 'tracking' && (
        <button
          onClick={onBag}
          className="fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full border-2 border-[#252f9f] bg-[#f1db2f] px-4 py-3 text-left text-[#252f9f] shadow-[5px_5px_0_#252f9f] transition hover:-translate-y-1 hover:bg-[#ffdf3f]"
          data-testid="button-floating-bag"
        >
          <ShoppingBag size={17} />
          <span className="font-mono-custom text-[10px] uppercase tracking-[.1em]">
            Bag / {itemCount} craving{itemCount === 1 ? '' : 's'}
          </span>
        </button>
      )}
      {cartNotice && (
        <div
          className="animate-slide-in fixed right-5 top-24 z-[60] flex max-w-[330px] items-center gap-3 rounded-2xl border-2 border-[#252f9f] bg-[#b9e2d0] px-4 py-3 text-[#252f9f] shadow-[5px_5px_0_#252f9f]"
          role="status"
          aria-live="polite"
          data-testid="notification-cart-added"
        >
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#252f9f] text-[#f1db2f]">
            <Check size={17} strokeWidth={3} />
          </div>
          <div>
            <p className="font-mono-custom text-[9px] uppercase tracking-[.13em]">Craving secured</p>
            <p className="mt-1 font-display text-sm font-bold leading-tight">{cartNotice}</p>
          </div>
        </div>
      )}
      {children}
    </div>
  );
}

