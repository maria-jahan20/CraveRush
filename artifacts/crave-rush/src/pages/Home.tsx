import { useEffect, useState } from 'react';

import { AppShell } from '@/components/layout/AppShell';
import { Browse } from '@/components/menu/Browse';
import { BagDrawer } from '@/components/cart/BagDrawer';
import { Checkout } from '@/components/checkout/Checkout';
import { Tracker } from '@/components/order/Tracker';
import { Finale } from '@/components/order/Finale';
import { RecipePage } from '@/components/recipe/RecipePage';

import type {
  CartLine,
  Currency,
  Product,
  Stage,
} from '@/types';

export function Home() {
  const [stage, setStage] = useState<Stage>('browse');
  const [bagOpen, setBagOpen] = useState(false);
const [cart, setCart] = useState<CartLine[]>(() => {
  try {
    const savedCart = localStorage.getItem('craverush-cart');

    return savedCart
      ? JSON.parse(savedCart)
      : [];
  } catch {
    return [];
  }
});
  const [orderCart, setOrderCart] = useState<CartLine[]>([]);
  useEffect(() => {
  localStorage.setItem(
    'craverush-cart',
    JSON.stringify(cart)
  );
}, [cart]);
  const [orderNumber, setOrderNumber] = useState('CR-2048');
  const [currency, setCurrency] = useState<Currency>('BDT');
  const [cartNotice, setCartNotice] = useState<string | null>(null);
  const goToRecipes = () => {
  setStage('recipes');
  setBagOpen(false);

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

  const addToCart = (product: Product) => {
    setCart((current) => {
      const existing = current.find(
        (item) => item.id === product.id
      );

      return existing
        ? current.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          )
        : [
            ...current,
            {
              ...product,
              quantity: 1,
            },
          ];
    });

    setCartNotice(`${product.name} added to your cart.`);

    window.setTimeout(
      () => setCartNotice(null),
      2800
    );
  };

  const changeCart = (
    id: string,
    delta: number
  ) => {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + delta,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const count = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const goHome = () => {
    setStage('browse');
    setBagOpen(false);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const goToFinale = () => {
    setStage('finale');

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const placeOrder = (address: string) => {
  if (!address.trim()) return;

  setOrderNumber(
    `CR-${Math.floor(1000 + Math.random() * 8999)}`
  );

  // Save a snapshot of what was actually ordered.
  setOrderCart(cart);

  // Empty the shopping bag after placing the order.
  setCart([]);

  // Remove the saved shopping bag as well.
  localStorage.removeItem('craverush-cart');

  setStage('tracking');

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

  return (
    <AppShell
  itemCount={count}
  onBag={() => setBagOpen(true)}
  stage={stage}
  onHome={goHome}
  onRecipes={goToRecipes}
  cartNotice={cartNotice}
  currency={currency}
  onCurrencyChange={setCurrency}
>
      {stage === 'browse' && (
        <Browse
          onAdd={addToCart}
          onBag={() => setBagOpen(true)}
          itemCount={count}
          currency={currency}
        />
      )}

      {stage === 'recipes' && (
  <RecipePage
    onBack={goHome}
  />
)}

      {stage === 'checkout' && (
        <Checkout
          cart={cart}
          onBack={() => setStage('browse')}
          onPlace={placeOrder}
          currency={currency}
        />
      )}

      {stage === 'tracking' && (
        <Tracker
          orderNumber={orderNumber}
          cart={orderCart}
          onAgain={goHome}
          onFinish={goToFinale}
          //currency={currency}
        />
      )}

      {stage === 'finale' && (
        <Finale
          orderNumber={orderNumber}
          cart={orderCart}
          onAgain={goHome}
        />
      )}

      {bagOpen && (
        <BagDrawer
          cart={cart}
          onClose={() => setBagOpen(false)}
          onChange={changeCart}
          onCheckout={() => {
            setBagOpen(false);
            setStage('checkout');

            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }}
          currency={currency}
        />
      )}
    </AppShell>
  );
}