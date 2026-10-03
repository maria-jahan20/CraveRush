import {
  ArrowLeft,
  ArrowRight,
  CircleCheck,
  CreditCard,
  MapPinned,
  Ticket,
} from 'lucide-react';
import { useState } from 'react';

import { money } from '@/lib/currency';
import type { CartLine, Currency } from '@/types';
import { promoCodes } from '@/data/categories';

type CheckoutProps = {
  cart: CartLine[];
  onBack: () => void;
  onPlace: (address: string) => void;
  currency: Currency;
};

export function Checkout({
  cart,
  onBack,
  onPlace,
  currency,
}: CheckoutProps) {
  const [address, setAddress] = useState('');
  const [promo, setPromo] = useState('');
  const [activePromo, setActivePromo] =
    useState<(typeof promoCodes)[number] | null>(null);
  const [promoMessage, setPromoMessage] = useState('');

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const matchingPromo = promoCodes.find(
    (item) => item.code === promo.trim().toUpperCase(),
  );

  const discount = activePromo
    ? subtotal * activePromo.rate
    : 0;

  const fees = 2.75;
  const total = subtotal + fees - discount;

  const applyPromo = () => {
    const match = promoCodes.find(
      (item) => item.code === promo.trim().toUpperCase(),
    );

    if (match) {
      setActivePromo(match);
      setPromoMessage(
        `${match.label} your imaginary order. Correct.`,
      );
    } else if (promo.trim()) {
      setActivePromo(null);
      setPromoMessage(
        'That code is just letters wearing confidence.',
      );
    }
  };

  const choosePromo = (
    code: (typeof promoCodes)[number],
  ) => {
    setPromo(code.code);
    setActivePromo(code);
    setPromoMessage(
      `${code.label} your imaginary order. Correct.`,
    );
  };

  return (
    <main
      className="mx-auto max-w-[1180px] px-5 py-10 lg:px-10 lg:py-16"
      data-testid="page-checkout"
    >
      <button
        onClick={onBack}
        className="mb-10 inline-flex items-center gap-2 font-mono-custom text-[10px] uppercase tracking-[.14em] text-[#6570a4] hover:text-[#252f9f]"
        data-testid="button-back-to-bag"
      >
        <ArrowLeft size={15} />
        Back to bag
      </button>

      <div className="mb-12 max-w-[700px]">
        <p className="font-mono-custom text-[10px] uppercase tracking-[.16em] text-[#f07863]">
          The ceremonial checkout
        </p>

        <h1 className="mt-3 font-display text-[clamp(3.4rem,7vw,6.8rem)] font-bold leading-[.88] tracking-[-.09em] text-[#252f9f]">
          Make it
          <br />
          <span className="text-[#f07863]">
            official-ish.
          </span>
        </h1>

        <p className="mt-6 max-w-[500px] text-base leading-relaxed text-[#6570a4]">
          Enter any address. We will send your order there emotionally.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:items-start">
        <section className="space-y-5">
          <div className="rounded-[1.5rem] border border-[#d5d4c8] bg-[#fbf9f1] p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-[#b9e2d0] text-[#252f9f]">
                <MapPinned size={17} />
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-[#252f9f]">
                  Where should the fiction go?
                </h2>

                <p className="font-mono-custom text-[9px] uppercase tracking-[.1em] text-[#6570a4]">
                  Any address accepted
                </p>
              </div>
            </div>

            <textarea
              value={address}
              onChange={(event) =>
                setAddress(event.target.value)
              }
              placeholder="Apartment 4B, 123 Somewhere Street, Your City"
              rows={3}
              className="w-full resize-none rounded-xl border border-[#d5d4c8] bg-[#f4efe4] p-4 text-sm leading-relaxed outline-none transition focus:border-[#252f9f] focus:ring-2 focus:ring-[#252f9f]/10"
              data-testid="input-delivery-address"
            />
          </div>

          <div className="rounded-[1.5rem] border border-[#d5d4c8] bg-[#fbf9f1] p-6 sm:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-[#ffb0a4] text-[#252f9f]">
                <Ticket size={17} />
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-[#252f9f]">
                  Bribe the algorithm
                </h2>

                <p className="font-mono-custom text-[9px] uppercase tracking-[.1em] text-[#6570a4]">
                  Hint: try DELULU
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <input
                value={promo}
                onChange={(event) =>
                  setPromo(event.target.value)
                }
                placeholder="Enter a playful promo code"
                className="min-w-0 flex-1 rounded-xl border border-[#d5d4c8] bg-[#f4efe4] px-4 text-sm uppercase outline-none focus:border-[#252f9f]"
                data-testid="input-promo-code"
              />

              <button
                onClick={applyPromo}
                className="rounded-xl bg-[#f1db2f] px-4 font-mono-custom text-[10px] uppercase tracking-[.1em] text-[#252f9f]"
                data-testid="button-apply-promo"
              >
                Apply
              </button>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {promoCodes.map((code) => (
                <button
                  key={code.code}
                  onClick={() => choosePromo(code)}
                  className="rounded-full border border-[#252f9f] px-3 py-2 font-mono-custom text-[9px] uppercase tracking-[.08em] text-[#252f9f] transition hover:-translate-y-0.5"
                  style={{ backgroundColor: code.color }}
                  data-testid={`button-promo-${code.code.toLowerCase()}`}
                >
                  {code.code} / {code.label}
                </button>
              ))}
            </div>

            {matchingPromo && (
              <div
                className="mt-4 rounded-xl border border-[#3c826a] bg-[#e1f1e8] px-3 py-2.5 text-xs text-[#27664f]"
                data-testid="text-promo-preview"
              >
                <span className="font-mono-custom text-[9px] uppercase tracking-[.08em]">
                  Live preview:
                </span>{' '}
                {matchingPromo.label} would save{' '}
                {money(
                  subtotal * matchingPromo.rate,
                  currency,
                )}
                . Click Apply to make the delusion official.
              </div>
            )}

            {promoMessage && (
              <p
                className={`mt-3 text-xs ${
                  activePromo
                    ? 'text-[#3c826a]'
                    : 'text-[#f07863]'
                }`}
                data-testid="text-promo-message"
              >
                {promoMessage}
              </p>
            )}
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-dashed border-[#adb0c9] bg-[#e9e5d9] p-4 text-sm text-[#6570a4]">
            <CreditCard size={18} className="text-[#252f9f]" />
            <span>Payment is pretend. Your bank can relax.</span>
            <CircleCheck size={17} className="ml-auto text-[#3c826a]" />
          </div>
        </section>

        <aside className="rounded-[1.5rem] border border-[#252f9f] bg-[#252f9f] p-6 text-[#f8f3e8] shadow-[8px_8px_0_#f07863] sm:p-8">
          <div className="mb-7 flex items-center justify-between">
            <h2 className="font-display text-2xl font-bold tracking-[-.05em]">
              The receipt
            </h2>

            <span className="rotate-3 rounded bg-[#f1db2f] px-2 py-1 font-mono-custom text-[9px] uppercase text-[#252f9f]">
              Very real*
            </span>
          </div>

          <div className="space-y-3 border-b border-[#6872c4] pb-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between gap-3 text-sm"
              >
                <span className="text-[#cbd0ff]">
                  {item.quantity} × {item.name}
                </span>

                <span className="font-mono-custom text-xs">
                  {money(
                    item.price * item.quantity,
                    currency,
                  )}
                </span>
              </div>
            ))}
          </div>

          <div className="space-y-3 border-b border-[#6872c4] py-6 font-mono-custom text-xs">
            <div className="flex justify-between">
              <span className="text-[#cbd0ff]">
                Craving subtotal
              </span>
              <span>{money(subtotal, currency)}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#cbd0ff]">
                Theatre & handling
              </span>
              <span>{money(fees, currency)}</span>
            </div>

            <div className="flex justify-between text-[#f1db2f]">
              <span>
                {activePromo
                  ? `${activePromo.code} discount`
                  : matchingPromo
                    ? `${matchingPromo.code} preview`
                    : 'Potential discount'}
              </span>

              <span>
                {activePromo
                  ? `−${money(discount, currency)}`
                  : matchingPromo
                    ? `−${money(
                        subtotal * matchingPromo.rate,
                        currency,
                      )}`
                    : '—'}
              </span>
            </div>
          </div>

          <div className="flex items-end justify-between py-6">
            <span className="font-mono-custom text-[10px] uppercase tracking-[.12em] text-[#cbd0ff]">
              Total-ish
            </span>

            <span
              className="font-display text-4xl font-bold"
              data-testid="text-checkout-total"
            >
              {money(total, currency)}
            </span>
          </div>

          <button
            onClick={() => onPlace(address)}
            disabled={!address.trim()}
            className="flex w-full items-center justify-between rounded-xl bg-[#f07863] px-5 py-4 font-mono-custom text-[11px] uppercase tracking-[.12em] text-[#252f9f] transition hover:bg-[#ff8976] disabled:cursor-not-allowed disabled:opacity-40"
            data-testid="button-place-order"
          >
            <span>Place the fictional order</span>
            <ArrowRight size={17} />
          </button>

          <p className="mt-4 text-center font-mono-custom text-[9px] uppercase tracking-[.1em] text-[#aeb5f0]">
            *No food will be dispatched
          </p>
        </aside>
      </div>
    </main>
  );
}