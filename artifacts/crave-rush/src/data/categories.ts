import type { PromoCode } from '@/types';

export const categories = [
  'All cravings',
  'Savory',
  'Sweet',
  'Sip',
];

export const promoCodes: PromoCode[] = [
  {
    code: 'BITE50',
    rate: 0.5,
    label: '50% off',
    color: '#f1db2f',
  },
  {
    code: 'SNACK30',
    rate: 0.3,
    label: '30% off',
    color: '#b9e2d0',
  },
  {
    code: 'DELULU',
    rate: 0.2,
    label: '20% off',
    color: '#ffb0a4',
  },
];