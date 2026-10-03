import {
  ArrowRight,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  X,
} from 'lucide-react';

import { money } from '@/lib/currency';
import type { CartLine, Currency } from '@/types';

type BagDrawerProps = {
  cart: CartLine[];
  onClose: () => void;
  onChange: (id: string, delta: number) => void;
  onCheckout: () => void;
  currency: Currency;
};

export function BagDrawer({
  cart,
  onClose,
  onChange,
  onCheckout,
  currency,
}: BagDrawerProps) {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-[#252f9f]/20 backdrop-blur-[2px]"
      data-testid="drawer-bag"
    >
      <button
        onClick={onClose}
        className="absolute inset-0 cursor-default"
        aria-label="Close bag"
        data-testid="button-close-bag-overlay"
      />

      <aside className="animate-slide-in relative flex h-full w-full max-w-[490px] flex-col border-l border-[#d5d4c8] bg-[#f4efe4] shadow-[-10px_0_40px_rgba(37,47,159,.12)]">
        <div className="flex items-center justify-between border-b border-[#d5d4c8] px-6 py-5">
          <div>
            <p className="font-mono-custom text-[10px] uppercase tracking-[.16em] text-[#f07863]">
              Current situation
            </p>
            <h2 className="mt-1 font-display text-3xl font-bold tracking-[-.06em] text-[#252f9f]">
              Your bag
            </h2>
          </div>

          <button
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-full border border-[#d5d4c8] bg-[#fbf9f1] text-[#252f9f]"
            data-testid="button-close-bag"
          >
            <X size={18} />
          </button>
        </div>

        {cart.length ? (
          <>
            <div className="flex-1 space-y-3 overflow-y-auto p-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 rounded-2xl border border-[#d5d4c8] bg-[#fbf9f1] p-3"
                  data-testid={`row-cart-${item.id}`}
                >
                  <img
                    src={item.image}
                    alt=""
                    className="h-20 w-20 rounded-xl object-cover"
                  />

                  <div className="min-w-0 flex-1">
                    <div className="flex justify-between gap-2">
                      <h3 className="font-display font-bold text-[#252f9f]">
                        {item.name}
                      </h3>

                      <span className="font-mono-custom text-xs">
                        {money(item.price * item.quantity, currency)}
                      </span>
                    </div>

                    <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-[#6570a4]">
                      <span>{item.tag}</span>

                      {item.popular && (
                        <span className="rounded-full bg-[#f07863] px-2 py-1 font-mono-custom text-[8px] uppercase tracking-[.08em] text-[#252f9f]">
                          Popular pick
                        </span>
                      )}

                      {item.discount && (
                        <span className="font-mono-custom text-[9px] uppercase text-[#3c826a]">
                          {item.discount}% off
                        </span>
                      )}
                    </div>

                    <div className="mt-2 flex items-center gap-2">
                      <span className="tracking-[.08em] text-[11px] text-[#f1b81b]">
                        ★★★★★
                      </span>
                      <span className="font-mono-custom text-[9px] text-[#6570a4]">
                        {item.rating}
                      </span>
                    </div>

                    <div className="mt-3 flex items-center gap-3">
                      <button
                        onClick={() => onChange(item.id, -1)}
                        className="grid h-7 w-7 place-items-center rounded-full border border-[#c9c9bf] text-[#252f9f]"
                        data-testid={`button-decrease-${item.id}`}
                      >
                        <Minus size={13} />
                      </button>

                      <span
                        className="font-mono-custom text-xs"
                        data-testid={`text-quantity-${item.id}`}
                      >
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => onChange(item.id, 1)}
                        className="grid h-7 w-7 place-items-center rounded-full bg-[#f1db2f] text-[#252f9f]"
                        data-testid={`button-increase-${item.id}`}
                      >
                        <Plus size={13} />
                      </button>

                      <button
                        onClick={() =>
                          onChange(item.id, -item.quantity)
                        }
                        className="ml-auto text-[#6570a4] hover:text-[#f07863]"
                        data-testid={`button-remove-${item.id}`}
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-[#d5d4c8] bg-[#ebe6da] p-6">
              <div className="mb-5 flex items-center justify-between font-mono-custom text-xs uppercase tracking-[.08em] text-[#6570a4]">
                <span>Subtotal</span>
                <span
                  className="text-[#252f9f]"
                  data-testid="text-bag-subtotal"
                >
                  {money(subtotal, currency)}
                </span>
              </div>

              <button
                onClick={onCheckout}
                className="flex w-full items-center justify-between rounded-xl bg-[#252f9f] px-5 py-4 font-mono-custom text-[11px] uppercase tracking-[.12em] text-[#f8f3e8] transition hover:bg-[#1c247d]"
                data-testid="button-go-checkout"
              >
                <span>Continue to checkout</span>
                <ArrowRight size={17} />
              </button>
            </div>
          </>
        ) : (
          <div
            className="flex flex-1 flex-col items-center justify-center px-10 text-center"
            data-testid="empty-bag"
          >
            <div className="grid h-20 w-20 rotate-[-7deg] place-items-center rounded-[1.5rem] bg-[#f1db2f] text-[#252f9f] shadow-[6px_6px_0_#f07863]">
              <ShoppingBag size={32} />
            </div>

            <h3 className="mt-8 font-display text-3xl font-bold tracking-[-.06em] text-[#252f9f]">
              A bag with no agenda.
            </h3>

            <p className="mt-3 max-w-[260px] text-sm leading-relaxed text-[#6570a4]">
              Give it a craving. It has been waiting patiently, which is more
              than we can promise about delivery.
            </p>

            <button
              onClick={onClose}
              className="mt-7 rounded-full bg-[#f07863] px-5 py-3 font-mono-custom text-[10px] uppercase tracking-[.13em] text-[#252f9f]"
              data-testid="button-browse-from-empty"
            >
              Browse the menu
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}