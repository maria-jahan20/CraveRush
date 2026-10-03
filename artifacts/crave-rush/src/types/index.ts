import type { ComponentType } from 'react';

export type Currency = 'BDT' | 'AUD' | 'USD';

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  popular?: boolean;
  category: string;
  image: string;
  tag: string;
  accent: string;
};

export type CartLine = Product & {
  quantity: number;
};

export type Recipe = {
  chefLine: string;
  ingredients: string[];
  steps: string[];
};

export type Stage =
  | 'browse'
  | 'recipes'
  | 'checkout'
  | 'tracking'
  | 'finale';

export type PromoCode = {
  code: string;
  rate: number;
  label: string;
  color: string;
};

export type TrackerStep = {
  label: string;
  detail: string;
  emoji: string;
  icon: ComponentType<{ size?: number }>;
};

export type RoutePoint = {
  left: number;
  top: number;
};