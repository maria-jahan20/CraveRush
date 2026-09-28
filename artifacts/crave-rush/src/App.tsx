import { useEffect, useMemo, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  ArrowLeft,
  ArrowRight,
  Bike,
  Check,
  CircleCheck,
  CreditCard,
  Home as HomeIcon,
  MapPinned,
  Minus,
  PackageCheck,
  Plus,
  RotateCcw,
  Search,
  ShoppingBag,
  Sparkles,
  Ticket,
  Timer,
  Trash2,
  X,
  Zap,
} from 'lucide-react';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  tag: string;
  accent: string;
};
type CartLine = Product & { quantity: number };
type Stage = 'browse' | 'checkout' | 'tracking';

const queryClient = new QueryClient();

const products: Product[] = [
  {
    id: 'midnight-pancakes',
    name: 'Midnight Pancakes',
    description: 'Stacked high with vanilla clouds, berry sparks, and a reckless amount of syrup.',
    price: 13.5,
    category: 'Sweet',
    image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=900',
    tag: 'Late-night legend',
    accent: '#f1db2f',
  },
  {
    id: 'crush-burger',
    name: 'The Crush Burger',
    description: 'Smash-seared beef, molten cheddar, pickle confetti. No small talk.',
    price: 16.25,
    category: 'Savory',
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=900',
    tag: 'Main character',
    accent: '#ff755f',
  },
  {
    id: 'disco-tacos',
    name: 'Disco Tacos',
    description: 'Three crispy shells, lime crema, and enough neon salsa to start a dance floor.',
    price: 12.75,
    category: 'Savory',
    image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=900',
    tag: 'Crowd pleaser',
    accent: '#b9e2d0',
  },
  {
    id: 'soft-serve-cloud',
    name: 'Soft Serve Cloud',
    description: 'Swirled vanilla, burnt caramel ribbon, and a tiny crunch of chaos.',
    price: 8.5,
    category: 'Sweet',
    image: 'https://images.pexels.com/photos/1352296/pexels-photo-1352296.jpeg?auto=compress&cs=tinysrgb&w=900',
    tag: 'Small but mighty',
    accent: '#ffb0a4',
  },
  {
    id: 'green-room-noodles',
    name: 'Green Room Noodles',
    description: 'Glossy noodles, chili crisp, bok choy, and a little post-gig glow.',
    price: 14.75,
    category: 'Savory',
    image: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=900',
    tag: 'Comfort in 4K',
    accent: '#c7db4a',
  },
  {
    id: 'electric-lemonade',
    name: 'Electric Lemonade',
    description: 'Tart, fizzy, ice-cold. The drink equivalent of changing your hair.',
    price: 6.25,
    category: 'Sip',
    image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=900',
    tag: 'Very refreshing',
    accent: '#ffcc57',
  },
];

const categories = ['All cravings', 'Savory', 'Sweet', 'Sip'];
const promoCodes = [
  { code: 'BITE50', rate: 0.5, label: '50% off', color: '#f1db2f' },
  { code: 'SNACK30', rate: 0.3, label: '30% off', color: '#b9e2d0' },
  { code: 'DELULU', rate: 0.2, label: '20% off', color: '#ffb0a4' },
];
const trackerSteps = [
  { label: 'Food is preparing', detail: 'Our imaginary chefs are moving quickly.', emoji: '🍳', icon: Zap },
  { label: 'Rider picked up your food', detail: 'A tiny scooter has accepted the mission.', emoji: '🛵', icon: Bike },
  { label: 'Rider is on the way with your food', detail: 'The route is confident. The delivery is not.', emoji: '🚴', icon: Bike },
  { label: 'Poye poye, food never came', detail: 'A beautiful ending to a fictional order.', emoji: '🍽️', icon: PackageCheck },
];

function money(value: number) {
  return `$${value.toFixed(2)}`;
}

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-2.5" data-testid="brand-craverush">
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#252f9f] text-[#f8f3e8] shadow-[4px_4px_0_#f07863]">
        <Zap size={21} strokeWidth={3} />
      </div>
      {!compact && (
        <div className="leading-none">
          <div className="font-display text-lg font-bold tracking-[-.06em]">CraveRush</div>
          <div className="mt-1 font-mono-custom text-[9px] uppercase tracking-[.18em] text-[#6570a4]">delivery-ish</div>
        </div>
      )}
    </div>
  );
}

function AppShell({
  children,
  itemCount,
  onBag,
  stage,
  onHome,
  cartNotice,
}: {
  children: React.ReactNode;
  itemCount: number;
  onBag: () => void;
  stage: Stage;
  onHome: () => void;
  cartNotice: string | null;
}) {
  return (
    <div className="noise min-h-[100dvh] overflow-x-hidden bg-[#f4efe4]">
      <header className="sticky top-0 z-40 border-b border-[#d5d4c8] bg-[#f4efe4]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-5 py-4 lg:px-10">
          <button onClick={onHome} data-testid="button-logo-home" aria-label="Back to browse">
            <Logo />
          </button>
          <nav className="hidden items-center gap-7 md:flex">
            <button onClick={onHome} className={`font-mono-custom text-[11px] uppercase tracking-[.16em] transition-colors ${stage === 'browse' ? 'text-[#252f9f]' : 'text-[#6570a4] hover:text-[#252f9f]'}`} data-testid="button-nav-menu">Menu</button>
            <span className="font-mono-custom text-[11px] uppercase tracking-[.16em] text-[#a1a2ab]">No app. No problem.</span>
          </nav>
          <button onClick={onBag} className="group flex items-center gap-3 rounded-full border border-[#d5d4c8] bg-[#fbf9f1] py-2 pl-4 pr-2 transition-all hover:-translate-y-0.5 hover:border-[#252f9f]" data-testid="button-open-bag">
            <span className="font-mono-custom text-[11px] uppercase tracking-[.12em] text-[#252f9f]">Your bag</span>
            <span className={`grid h-8 min-w-8 place-items-center rounded-full bg-[#252f9f] px-2 font-display text-sm font-bold text-[#f8f3e8] transition-transform ${itemCount ? 'animate-pop' : ''}`} data-testid="text-cart-count">{itemCount}</span>
          </button>
        </div>
      </header>
      {itemCount > 0 && (
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

function ProductCard({ product, onAdd }: { product: Product; onAdd: (product: Product) => void }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-[1.65rem] border border-[#d6d5ca] bg-[#fbf9f1] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_10px_0_#d9d5c8]" data-testid={`card-product-${product.id}`}>
      <div className="relative aspect-[1.18] overflow-hidden">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" data-testid={`img-product-${product.id}`} />
        <div className="absolute left-4 top-4 rounded-full px-3 py-1.5 font-mono-custom text-[9px] uppercase tracking-[.1em] text-[#252f9f]" style={{ backgroundColor: product.accent }}>{product.tag}</div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-[21px] font-bold leading-[1.05] tracking-[-.04em]">{product.name}</h3>
          <span className="font-mono-custom text-sm text-[#252f9f]">{money(product.price)}</span>
        </div>
        <p className="mt-3 flex-1 text-[13px] leading-relaxed text-[#6570a4]">{product.description}</p>
        <button onClick={() => onAdd(product)} className="mt-5 flex w-full items-center justify-between rounded-xl bg-[#252f9f] px-4 py-3 text-left text-[#f8f3e8] transition-all hover:bg-[#1c247d] active:scale-[.98]" data-testid={`button-add-${product.id}`}>
          <span className="font-mono-custom text-[10px] uppercase tracking-[.14em]">Add to craving</span>
          <Plus size={16} strokeWidth={2.5} />
        </button>
      </div>
    </article>
  );
}

function Browse({ onAdd, onBag, itemCount }: { onAdd: (p: Product) => void; onBag: () => void; itemCount: number }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All cravings');
  const filtered = useMemo(() => products.filter((product) => {
    const matchesCategory = category === 'All cravings' || product.category === category;
    const text = `${product.name} ${product.description} ${product.tag}`.toLowerCase();
    return matchesCategory && text.includes(query.toLowerCase());
  }), [category, query]);

  return (
    <main>
      <section className="mx-auto max-w-[1320px] px-5 pb-16 pt-12 lg:px-10 lg:pb-24 lg:pt-20">
        <div className="grid items-end gap-10 lg:grid-cols-[1.08fr_.92fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d5d4c8] bg-[#fbf9f1] px-3 py-2 font-mono-custom text-[10px] uppercase tracking-[.15em] text-[#252f9f]" data-testid="text-status">
              <span className="h-2 w-2 animate-[pulse-dot_1.5s_ease-in-out_infinite] rounded-full bg-[#f07863]" /> Now accepting imaginary orders
            </div>
            <h1 className="max-w-[720px] font-display text-[clamp(3.8rem,8.8vw,8.4rem)] font-bold leading-[.86] tracking-[-.09em] text-[#252f9f]">
              Feed the<br /><span className="relative inline-block text-[#f07863]">feeling<span className="absolute -right-3 -top-1 h-2.5 w-2.5 rounded-full bg-[#252f9f]" aria-hidden="true" /></span>
            </h1>
            <p className="mt-8 max-w-[500px] text-lg leading-relaxed text-[#6570a4]">The food delivery app for cravings that deserve a little drama. Search a mood, build a bag, and watch us absolutely pretend to bring it over.</p>
            <button onClick={onBag} className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#f07863] px-5 py-3 font-mono-custom text-[11px] uppercase tracking-[.13em] text-[#252f9f] transition-all hover:-translate-y-1 hover:shadow-[5px_5px_0_#252f9f]" data-testid="button-hero-bag">
              {itemCount ? `Review your ${itemCount} craving${itemCount > 1 ? 's' : ''}` : 'Start a fake order'} <ArrowRight size={16} />
            </button>
          </div>
          <div className="relative min-h-[320px] lg:min-h-[410px]">
            <div className="absolute right-0 top-0 h-[80%] w-[82%] rotate-3 overflow-hidden rounded-[2rem] border-8 border-[#f8f3e8] bg-[#252f9f] shadow-[11px_13px_0_#d5d4c8]">
              <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="A colorful spread of food on a table" className="h-full w-full object-cover opacity-90" data-testid="img-hero-food" />
              <div className="absolute inset-0 bg-[#252f9f]/15 mix-blend-multiply" />
            </div>
            <div className="animate-float-up absolute bottom-4 left-2 z-10 max-w-[245px] rotate-[-7deg] rounded-2xl border-2 border-[#252f9f] bg-[#f1db2f] p-4 shadow-[6px_7px_0_#252f9f]">
              <Sparkles size={18} className="mb-3 text-[#f07863]" />
              <p className="font-display text-[19px] font-bold leading-tight text-[#252f9f]">Cravings have entered the chat.</p>
            </div>
            <div className="absolute right-0 top-[20%] z-10 grid h-20 w-20 -rotate-12 place-items-center rounded-full bg-[#b9e2d0] text-center font-mono-custom text-[10px] uppercase leading-tight tracking-[.08em] text-[#252f9f]">100%<br />not real</div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d5d4c8] bg-[#e9e5d9]">
        <div className="mx-auto max-w-[1320px] px-5 py-5 lg:px-10">
          <div className="mb-5 flex flex-col gap-3 border-b border-[#d5d4c8] pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono-custom text-[9px] uppercase tracking-[.15em] text-[#6570a4]">Codes with no consequences</p>
              <p className="mt-1 font-display text-xl font-bold tracking-[-.04em] text-[#252f9f]">Pick your discount delusion.</p>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {promoCodes.map((promo) => (
                <div
                  key={promo.code}
                  className="shrink-0 rotate-[-1deg] rounded-xl border-2 border-[#252f9f] px-3 py-2 text-[#252f9f] shadow-[3px_3px_0_#252f9f] transition hover:rotate-1 hover:-translate-y-0.5"
                  style={{ backgroundColor: promo.color }}
                  data-testid={`promo-card-${promo.code.toLowerCase()}`}
                >
                  <p className="font-mono-custom text-[9px] uppercase tracking-[.08em]">{promo.label}</p>
                  <p className="mt-1 font-display text-sm font-bold tracking-[.04em]">{promo.code}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full max-w-[470px]">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6570a4]" />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search a craving, a mood, a bad idea..." className="h-12 w-full rounded-xl border border-[#d5d4c8] bg-[#fbf9f1] pl-11 pr-4 text-sm outline-none transition focus:border-[#252f9f] focus:ring-2 focus:ring-[#252f9f]/10" data-testid="input-search-cravings" />
              {query && <button onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6570a4]" data-testid="button-clear-search"><X size={15} /></button>}
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1" data-testid="list-categories">
              {categories.map((item) => (
                <button key={item} onClick={() => setCategory(item)} className={`whitespace-nowrap rounded-full border px-4 py-2.5 font-mono-custom text-[10px] uppercase tracking-[.12em] transition-all ${category === item ? 'border-[#252f9f] bg-[#252f9f] text-[#f8f3e8]' : 'border-[#c9c9bf] bg-[#f5f1e8] text-[#6570a4] hover:border-[#252f9f] hover:text-[#252f9f]'}`} data-testid={`button-category-${item.toLowerCase().replace(' ', '-')}`}>{item}</button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-14 lg:px-10 lg:py-20" id="menu">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="font-mono-custom text-[10px] uppercase tracking-[.16em] text-[#f07863]">The menu, allegedly</p>
            <h2 className="mt-2 font-display text-4xl font-bold tracking-[-.06em] text-[#252f9f] sm:text-5xl">Pick your plot twist.</h2>
          </div>
          <span className="hidden font-mono-custom text-[10px] uppercase tracking-[.12em] text-[#6570a4] sm:block" data-testid="text-result-count">{filtered.length} cravings found</span>
        </div>
        {filtered.length ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => <ProductCard key={product.id} product={product} onAdd={onAdd} />)}
          </div>
        ) : (
          <div className="rounded-[1.6rem] border border-dashed border-[#adb0c9] bg-[#fbf9f1] px-6 py-20 text-center" data-testid="empty-search-results">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#f1db2f] text-[#252f9f]"><Search size={22} /></div>
            <h3 className="mt-5 font-display text-2xl font-bold text-[#252f9f]">That craving is playing hard to get.</h3>
            <p className="mt-2 text-sm text-[#6570a4]">Try “tacos”, “sweet”, or simply “I need a snack”.</p>
            <button onClick={() => { setQuery(''); setCategory('All cravings'); }} className="mt-6 rounded-full border border-[#252f9f] px-4 py-2 font-mono-custom text-[10px] uppercase tracking-[.12em] text-[#252f9f]" data-testid="button-reset-search">Reset the craving</button>
          </div>
        )}
      </section>
      <footer className="border-t border-[#d5d4c8] bg-[#252f9f] px-5 py-12 text-[#f8f3e8] lg:px-10">
        <div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div><Logo compact /><p className="mt-4 max-w-[280px] text-sm leading-relaxed text-[#cbd0ff]">A tiny theatrical production disguised as a food delivery app.</p></div>
          <div className="font-mono-custom text-[10px] uppercase tracking-[.16em] text-[#cbd0ff]">Made for the bit / © whenever</div>
        </div>
      </footer>
    </main>
  );
}

function BagDrawer({ cart, onClose, onChange, onCheckout }: { cart: CartLine[]; onClose: () => void; onChange: (id: string, delta: number) => void; onCheckout: () => void }) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-[#252f9f]/20 backdrop-blur-[2px]" data-testid="drawer-bag">
      <button onClick={onClose} className="absolute inset-0 cursor-default" aria-label="Close bag" data-testid="button-close-bag-overlay" />
      <aside className="animate-slide-in relative flex h-full w-full max-w-[490px] flex-col border-l border-[#d5d4c8] bg-[#f4efe4] shadow-[-10px_0_40px_rgba(37,47,159,.12)]">
        <div className="flex items-center justify-between border-b border-[#d5d4c8] px-6 py-5">
          <div><p className="font-mono-custom text-[10px] uppercase tracking-[.16em] text-[#f07863]">Current situation</p><h2 className="mt-1 font-display text-3xl font-bold tracking-[-.06em] text-[#252f9f]">Your bag</h2></div>
          <button onClick={onClose} className="grid h-10 w-10 place-items-center rounded-full border border-[#d5d4c8] bg-[#fbf9f1] text-[#252f9f]" data-testid="button-close-bag"><X size={18} /></button>
        </div>
        {cart.length ? (
          <>
            <div className="flex-1 space-y-3 overflow-y-auto p-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-3 rounded-2xl border border-[#d5d4c8] bg-[#fbf9f1] p-3" data-testid={`row-cart-${item.id}`}>
                  <img src={item.image} alt="" className="h-20 w-20 rounded-xl object-cover" />
                  <div className="min-w-0 flex-1"><div className="flex justify-between gap-2"><h3 className="font-display font-bold text-[#252f9f]">{item.name}</h3><span className="font-mono-custom text-xs">{money(item.price * item.quantity)}</span></div><p className="mt-1 text-xs text-[#6570a4]">{item.tag}</p><div className="mt-3 flex items-center gap-3"><button onClick={() => onChange(item.id, -1)} className="grid h-7 w-7 place-items-center rounded-full border border-[#c9c9bf] text-[#252f9f]" data-testid={`button-decrease-${item.id}`}><Minus size={13} /></button><span className="font-mono-custom text-xs" data-testid={`text-quantity-${item.id}`}>{item.quantity}</span><button onClick={() => onChange(item.id, 1)} className="grid h-7 w-7 place-items-center rounded-full bg-[#f1db2f] text-[#252f9f]" data-testid={`button-increase-${item.id}`}><Plus size={13} /></button><button onClick={() => onChange(item.id, -item.quantity)} className="ml-auto text-[#6570a4] hover:text-[#f07863]" data-testid={`button-remove-${item.id}`}><Trash2 size={15} /></button></div></div>
                </div>
              ))}
            </div>
            <div className="border-t border-[#d5d4c8] bg-[#ebe6da] p-6">
              <div className="mb-5 flex items-center justify-between font-mono-custom text-xs uppercase tracking-[.08em] text-[#6570a4]"><span>Subtotal</span><span className="text-[#252f9f]" data-testid="text-bag-subtotal">{money(subtotal)}</span></div>
              <button onClick={onCheckout} className="flex w-full items-center justify-between rounded-xl bg-[#252f9f] px-5 py-4 font-mono-custom text-[11px] uppercase tracking-[.12em] text-[#f8f3e8] transition hover:bg-[#1c247d]" data-testid="button-go-checkout"><span>Continue to checkout</span><ArrowRight size={17} /></button>
            </div>
          </>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center px-10 text-center" data-testid="empty-bag">
            <div className="grid h-20 w-20 rotate-[-7deg] place-items-center rounded-[1.5rem] bg-[#f1db2f] text-[#252f9f] shadow-[6px_6px_0_#f07863]"><ShoppingBag size={32} /></div>
            <h3 className="mt-8 font-display text-3xl font-bold tracking-[-.06em] text-[#252f9f]">A bag with no agenda.</h3>
            <p className="mt-3 max-w-[260px] text-sm leading-relaxed text-[#6570a4]">Give it a craving. It has been waiting patiently, which is more than we can promise about delivery.</p>
            <button onClick={onClose} className="mt-7 rounded-full bg-[#f07863] px-5 py-3 font-mono-custom text-[10px] uppercase tracking-[.13em] text-[#252f9f]" data-testid="button-browse-from-empty">Browse the menu</button>
          </div>
        )}
      </aside>
    </div>
  );
}

function Checkout({ cart, onBack, onPlace }: { cart: CartLine[]; onBack: () => void; onPlace: (address: string) => void }) {
  const [address, setAddress] = useState('');
  const [promo, setPromo] = useState('');
  const [activePromo, setActivePromo] = useState<(typeof promoCodes)[number] | null>(null);
  const [promoMessage, setPromoMessage] = useState('');
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = activePromo ? subtotal * activePromo.rate : 0;
  const fees = 2.75;
  const total = subtotal + fees - discount;
  const applyPromo = () => {
    const match = promoCodes.find((item) => item.code === promo.trim().toUpperCase());
    if (match) { setActivePromo(match); setPromoMessage(`${match.label} your imaginary order. Correct.`); }
    else if (promo.trim()) { setActivePromo(null); setPromoMessage('That code is just letters wearing confidence.'); }
  };
  const choosePromo = (code: (typeof promoCodes)[number]) => {
    setPromo(code.code);
    setActivePromo(code);
    setPromoMessage(`${code.label} your imaginary order. Correct.`);
  };
  return (
    <main className="mx-auto max-w-[1180px] px-5 py-10 lg:px-10 lg:py-16" data-testid="page-checkout">
      <button onClick={onBack} className="mb-10 inline-flex items-center gap-2 font-mono-custom text-[10px] uppercase tracking-[.14em] text-[#6570a4] hover:text-[#252f9f]" data-testid="button-back-to-bag"><ArrowLeft size={15} /> Back to bag</button>
      <div className="mb-12 max-w-[700px]"><p className="font-mono-custom text-[10px] uppercase tracking-[.16em] text-[#f07863]">The ceremonial checkout</p><h1 className="mt-3 font-display text-[clamp(3.4rem,7vw,6.8rem)] font-bold leading-[.88] tracking-[-.09em] text-[#252f9f]">Make it<br /><span className="text-[#f07863]">official-ish.</span></h1><p className="mt-6 max-w-[500px] text-base leading-relaxed text-[#6570a4]">Enter any address. We will send your order there emotionally.</p></div>
      <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:items-start">
        <section className="space-y-5">
          <div className="rounded-[1.5rem] border border-[#d5d4c8] bg-[#fbf9f1] p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3"><div className="grid h-9 w-9 place-items-center rounded-full bg-[#b9e2d0] text-[#252f9f]"><MapPinned size={17} /></div><div><h2 className="font-display text-xl font-bold text-[#252f9f]">Where should the fiction go?</h2><p className="font-mono-custom text-[9px] uppercase tracking-[.1em] text-[#6570a4]">Any address accepted</p></div></div>
            <textarea value={address} onChange={(event) => setAddress(event.target.value)} placeholder="Apartment 4B, 123 Somewhere Street, Your City" rows={3} className="w-full resize-none rounded-xl border border-[#d5d4c8] bg-[#f4efe4] p-4 text-sm leading-relaxed outline-none transition focus:border-[#252f9f] focus:ring-2 focus:ring-[#252f9f]/10" data-testid="input-delivery-address" />
          </div>
          <div className="rounded-[1.5rem] border border-[#d5d4c8] bg-[#fbf9f1] p-6 sm:p-8">
            <div className="mb-5 flex items-center gap-3"><div className="grid h-9 w-9 place-items-center rounded-full bg-[#ffb0a4] text-[#252f9f]"><Ticket size={17} /></div><div><h2 className="font-display text-xl font-bold text-[#252f9f]">Bribe the algorithm</h2><p className="font-mono-custom text-[9px] uppercase tracking-[.1em] text-[#6570a4]">Hint: try DELULU</p></div></div>
            <div className="flex gap-2"><input value={promo} onChange={(event) => setPromo(event.target.value)} placeholder="Enter a playful promo code" className="min-w-0 flex-1 rounded-xl border border-[#d5d4c8] bg-[#f4efe4] px-4 text-sm uppercase outline-none focus:border-[#252f9f]" data-testid="input-promo-code" /><button onClick={applyPromo} className="rounded-xl bg-[#f1db2f] px-4 font-mono-custom text-[10px] uppercase tracking-[.1em] text-[#252f9f]" data-testid="button-apply-promo">Apply</button></div>
            <div className="mt-4 flex flex-wrap gap-2">
              {promoCodes.map((code) => (
                <button key={code.code} onClick={() => choosePromo(code)} className="rounded-full border border-[#252f9f] px-3 py-2 font-mono-custom text-[9px] uppercase tracking-[.08em] text-[#252f9f] transition hover:-translate-y-0.5" style={{ backgroundColor: code.color }} data-testid={`button-promo-${code.code.toLowerCase()}`}>{code.code} / {code.label}</button>
              ))}
            </div>
            {promoMessage && <p className={`mt-3 text-xs ${activePromo ? 'text-[#3c826a]' : 'text-[#f07863]'}`} data-testid="text-promo-message">{promoMessage}</p>}
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-dashed border-[#adb0c9] bg-[#e9e5d9] p-4 text-sm text-[#6570a4]"><CreditCard size={18} className="text-[#252f9f]" /><span>Payment is pretend. Your bank can relax.</span><CircleCheck size={17} className="ml-auto text-[#3c826a]" /></div>
        </section>
        <aside className="rounded-[1.5rem] border border-[#252f9f] bg-[#252f9f] p-6 text-[#f8f3e8] shadow-[8px_8px_0_#f07863] sm:p-8">
          <div className="mb-7 flex items-center justify-between"><h2 className="font-display text-2xl font-bold tracking-[-.05em]">The receipt</h2><span className="rotate-3 rounded bg-[#f1db2f] px-2 py-1 font-mono-custom text-[9px] uppercase text-[#252f9f]">Very real*</span></div>
          <div className="space-y-3 border-b border-[#6872c4] pb-6">{cart.map((item) => <div key={item.id} className="flex justify-between gap-3 text-sm"><span className="text-[#cbd0ff]">{item.quantity} × {item.name}</span><span className="font-mono-custom text-xs">{money(item.price * item.quantity)}</span></div>)}</div>
           <div className="space-y-3 border-b border-[#6872c4] py-6 font-mono-custom text-xs"><div className="flex justify-between"><span className="text-[#cbd0ff]">Craving subtotal</span><span>{money(subtotal)}</span></div><div className="flex justify-between"><span className="text-[#cbd0ff]">Theatre & handling</span><span>{money(fees)}</span></div><div className="flex justify-between text-[#f1db2f]"><span>{activePromo ? `${activePromo.code} discount` : 'Potential discount'}</span><span>{activePromo ? `−${money(discount)}` : '—'}</span></div></div>
          <div className="flex items-end justify-between py-6"><span className="font-mono-custom text-[10px] uppercase tracking-[.12em] text-[#cbd0ff]">Total-ish</span><span className="font-display text-4xl font-bold" data-testid="text-checkout-total">{money(total)}</span></div>
          <button onClick={() => onPlace(address)} disabled={!address.trim()} className="flex w-full items-center justify-between rounded-xl bg-[#f07863] px-5 py-4 font-mono-custom text-[11px] uppercase tracking-[.12em] text-[#252f9f] transition hover:bg-[#ff8976] disabled:cursor-not-allowed disabled:opacity-40" data-testid="button-place-order"><span>Place the fictional order</span><ArrowRight size={17} /></button>
          <p className="mt-4 text-center font-mono-custom text-[9px] uppercase tracking-[.1em] text-[#aeb5f0]">*No food will be dispatched</p>
        </aside>
      </div>
    </main>
  );
}

function Tracker({ orderNumber, onAgain }: { orderNumber: string; onAgain: () => void }) {
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setActiveStep((step) => Math.min(step + 1, trackerSteps.length - 1)), 2600);
    return () => window.clearInterval(timer);
  }, []);
  const CurrentIcon = trackerSteps[activeStep].icon;
  return (
    <main className="mx-auto max-w-[1280px] px-5 py-10 lg:px-10 lg:py-16" data-testid="page-tracking">
      <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="font-mono-custom text-[10px] uppercase tracking-[.16em] text-[#f07863]">Order {orderNumber}</p><h1 className="mt-3 font-display text-[clamp(3.3rem,7vw,6.8rem)] font-bold leading-[.86] tracking-[-.09em] text-[#252f9f]">It is<br /><span className="text-[#f07863]">on the way.</span></h1></div><button onClick={onAgain} className="inline-flex items-center gap-2 self-start rounded-full border border-[#d5d4c8] bg-[#fbf9f1] px-4 py-3 font-mono-custom text-[10px] uppercase tracking-[.12em] text-[#252f9f] sm:self-end" data-testid="button-order-again"><RotateCcw size={14} /> Order again</button></div>
      <div className="grid gap-7 lg:grid-cols-[1.15fr_.85fr]">
         <div>
         <section className="relative min-h-[440px] overflow-hidden rounded-[1.8rem] border border-[#bfc0d7] bg-[#d9e4dc]" data-testid="map-tracker">
          <div className="absolute inset-0 opacity-45" style={{ backgroundImage: 'linear-gradient(35deg, transparent 47%, #8ea99b 48%, #8ea99b 49%, transparent 50%), linear-gradient(115deg, transparent 46%, #b8c5bb 47%, #b8c5bb 48%, transparent 49%), linear-gradient(8deg, transparent 49%, #b8c5bb 50%, transparent 51%)', backgroundSize: '160px 130px' }} />
          <div className="absolute left-[12%] top-[24%] h-36 w-56 -rotate-12 rounded-[45%] border-2 border-[#9ab0a4] bg-[#cfddd2]/60" /><div className="absolute right-[10%] top-[12%] h-52 w-44 rotate-45 rounded-[40%] border-2 border-[#9ab0a4] bg-[#cfddd2]/60" /><div className="absolute bottom-[8%] left-[35%] h-44 w-64 rotate-12 rounded-[46%] border-2 border-[#9ab0a4] bg-[#cfddd2]/60" />
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 440" preserveAspectRatio="none" aria-hidden="true"><path d="M80 375 C120 280 205 325 234 240 S350 120 420 174 S470 300 550 84" fill="none" stroke="#252f9f" strokeWidth="5" strokeLinecap="round" className="tracking-dash" /></svg>
          <div className="absolute left-[12%] top-[77%] grid h-12 w-12 place-items-center rounded-full border-4 border-[#f8f3e8] bg-[#f07863] text-[#252f9f] shadow-[3px_3px_0_#252f9f]"><HomeIcon size={20} /></div>
          <div className="absolute left-[71%] top-[29%] grid h-14 w-14 place-items-center rounded-full border-4 border-[#f8f3e8] bg-[#252f9f] text-[#f1db2f] shadow-[3px_3px_0_#f07863] transition-all duration-700" style={{ transform: `translate(${activeStep * 4}px, ${activeStep * 6}px)` }}><Bike size={23} /></div>
          <div className="absolute left-5 top-5 rounded-xl border border-[#b7c5b9] bg-[#edf3ea]/85 px-3 py-2 font-mono-custom text-[9px] uppercase tracking-[.1em] text-[#252f9f] backdrop-blur-sm"><MapPinned size={13} className="mr-2 inline" /> Imaginary neighborhood</div>
          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-xl border border-[#b7c5b9] bg-[#edf3ea]/90 p-3 backdrop-blur-sm"><span className="font-mono-custom text-[9px] uppercase tracking-[.1em] text-[#6570a4]">Rider confidence</span><span className="font-display font-bold text-[#252f9f]">{Math.min(31 + activeStep * 18, 82)}%</span></div>
        </section>
         <div className="mt-4 rounded-2xl border-2 border-[#252f9f] bg-[#f1db2f] px-5 py-4 text-[#252f9f] shadow-[5px_5px_0_#f07863]" data-testid="text-arrival-estimate">
           <div className="flex items-center gap-3"><Timer size={20} /><p className="font-display text-lg font-bold">Arriving within 3–5 minutes*</p></div>
           <p className="mt-1 pl-8 font-mono-custom text-[9px] uppercase tracking-[.11em]">*Sarcasm detected. Please enjoy the route.</p>
         </div>
         </div>
        <section className="rounded-[1.8rem] border border-[#d5d4c8] bg-[#fbf9f1] p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4 border-b border-[#d5d4c8] pb-6"><div><p className="font-mono-custom text-[10px] uppercase tracking-[.14em] text-[#6570a4]">Live status</p><h2 className="mt-2 font-display text-2xl font-bold tracking-[-.05em] text-[#252f9f]" data-testid="text-current-status">{trackerSteps[activeStep].label}</h2></div><div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#f1db2f] text-[#252f9f] animate-pop"><CurrentIcon size={23} /></div></div>
           <div className="relative mt-7 space-y-7 pl-2">{trackerSteps.map((step, index) => { const done = index <= activeStep; return <div key={step.label} className="relative flex gap-4" data-testid={`tracker-step-${index}`}><div className={`relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 text-lg transition-all ${done ? 'border-[#252f9f] bg-[#252f9f]' : 'border-[#d5d4c8] bg-[#f4efe4] grayscale'}`}><span aria-hidden="true">{step.emoji}</span></div>{index < trackerSteps.length - 1 && <div className={`absolute left-[17px] top-9 h-8 w-0.5 ${index < activeStep ? 'bg-[#252f9f]' : 'bg-[#d5d4c8]'}`} />}<div><p className={`font-display font-bold ${done ? 'text-[#252f9f]' : 'text-[#a4a6b4]'}`}>{step.label}</p><p className={`mt-1 text-xs leading-relaxed ${done ? 'text-[#6570a4]' : 'text-[#a4a6b4]'}`}>{step.detail}</p></div></div>; })}</div>
          <div className="mt-8 rounded-xl bg-[#f07863] p-4 text-[#252f9f]" data-testid="text-tracker-wink"><div className="flex gap-3"><Sparkles size={18} className="shrink-0" /><p className="font-display text-sm font-bold leading-relaxed">Plot twist: this order will never arrive. But look at that little scooter go.</p></div></div>
          <div className="mt-5 flex items-center gap-2 font-mono-custom text-[9px] uppercase tracking-[.1em] text-[#6570a4]"><Timer size={13} /> Estimated arrival: in your imagination, shortly</div>
        </section>
      </div>
    </main>
  );
}

function Home() {
  const [stage, setStage] = useState<Stage>('browse');
  const [bagOpen, setBagOpen] = useState(false);
  const [cart, setCart] = useState<CartLine[]>([]);
  const [orderNumber, setOrderNumber] = useState('CR-2048');
  const [cartNotice, setCartNotice] = useState<string | null>(null);
  const addToCart = (product: Product) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);
      return existing ? current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { ...product, quantity: 1 }];
    });
    setCartNotice(`${product.name} added to your cart.`);
    window.setTimeout(() => setCartNotice(null), 2800);
  };
  const changeCart = (id: string, delta: number) => setCart((current) => current.map((item) => item.id === id ? { ...item, quantity: item.quantity + delta } : item).filter((item) => item.quantity > 0));
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const goHome = () => { setStage('browse'); setBagOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const placeOrder = (address: string) => { if (!address.trim()) return; setOrderNumber(`CR-${Math.floor(1000 + Math.random() * 8999)}`); setStage('tracking'); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  return (
    <AppShell itemCount={count} onBag={() => setBagOpen(true)} stage={stage} onHome={goHome} cartNotice={cartNotice}>
      {stage === 'browse' && <Browse onAdd={addToCart} onBag={() => setBagOpen(true)} itemCount={count} />}
      {stage === 'checkout' && <Checkout cart={cart} onBack={() => setStage('browse')} onPlace={placeOrder} />}
      {stage === 'tracking' && <Tracker orderNumber={orderNumber} onAgain={goHome} />}
      {bagOpen && <BagDrawer cart={cart} onClose={() => setBagOpen(false)} onChange={changeCart} onCheckout={() => { setBagOpen(false); setStage('checkout'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />}
    </AppShell>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ErrorBoundary resetKey="crave-rush">
          <Home />
        </ErrorBoundary>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;