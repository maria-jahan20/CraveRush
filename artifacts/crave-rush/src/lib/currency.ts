import type { Currency } from '@/types';

export const exchangeRates = {
  BDT: 1,
  AUD: 86.11,
  USD: 123.20,
} as const;

export function money(
  value: number,
  currency: Currency = 'BDT'
) {
  const convertedValue = value / exchangeRates[currency];

  if (currency === 'BDT') {
    return `৳${Math.round(convertedValue).toLocaleString('en-BD')}`;
  }

  if (currency === 'AUD') {
    return `A$${convertedValue.toFixed(2)}`;
  }

  return `$${convertedValue.toFixed(2)}`;
}