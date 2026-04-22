import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'hooga-hg300',
    name: 'Hooga HG300 Red Light Therapy Panel',
    brand: 'Hooga',
    price: 159.00,
    wavelengths: ['660nm', '850nm'],
    irradiance: '>100 mW/cm² at 6"',
    ledCount: 60,
    size: '12.2" x 8.2" x 2.7"',
    amazonUrl: 'https://www.amazon.com/dp/B07TDP67LR?tag=your-affiliate-id-20',
    imageUrl: 'https://picsum.photos/seed/hooga/600/600',
    rating: 4.7,
    reviews: 2450,
    bestFor: 'Best Overall Value',
    pros: ['High irradiance', 'Quiet cooling fan', 'Sturdy build'],
    cons: ['Small treatment area', 'No timer function']
  },
  {
    id: 'bestqool-pro300',
    name: 'Bestqool Pro300 Red Light Therapy Device',
    brand: 'Bestqool',
    price: 199.00,
    wavelengths: ['660nm', '850nm'],
    irradiance: '100 mW/cm² at 6"',
    ledCount: 60,
    size: '12" x 8" x 3"',
    amazonUrl: 'https://www.amazon.com/dp/B08G8S9Z9X?tag=your-affiliate-id-20',
    imageUrl: 'https://picsum.photos/seed/bestqool/600/600',
    rating: 4.6,
    reviews: 1120,
    bestFor: 'Best for Skin Health',
    pros: ['Dual chip LEDs', '3-year warranty', 'Flicker-free'],
    cons: ['Slightly heavier', 'Fan can be audible']
  },
  {
    id: 'serfory-panel',
    name: 'Serfory Red Light Therapy Lamp',
    brand: 'Serfory',
    price: 69.99,
    wavelengths: ['660nm', '850nm'],
    irradiance: '80 mW/cm² at 6"',
    ledCount: 60,
    size: '10" x 10" x 1.5"',
    amazonUrl: 'https://www.amazon.com/dp/B08XW2K8XW?tag=your-affiliate-id-20',
    imageUrl: 'https://picsum.photos/seed/serfory/600/600',
    rating: 4.4,
    reviews: 850,
    bestFor: 'Budget Pick',
    pros: ['Extremely affordable', 'Lightweight', 'Easy to hang'],
    cons: ['Lower irradiance', 'Plastic build']
  },
  {
    id: 'hi-red-300',
    name: 'Hi-Red 300W Red Light Therapy Panel',
    brand: 'Hi-Red',
    price: 249.00,
    wavelengths: ['660nm', '850nm'],
    irradiance: '110 mW/cm² at 6"',
    ledCount: 60,
    size: '13" x 9" x 3"',
    amazonUrl: 'https://www.amazon.com/dp/B09Y5X9Z9X?tag=your-affiliate-id-20',
    imageUrl: 'https://picsum.photos/seed/hired/600/600',
    rating: 4.8,
    reviews: 420,
    bestFor: 'Highest Power',
    pros: ['Exceptional irradiance', 'Built-in timer', 'Modular design'],
    cons: ['Higher price point', 'Larger footprint']
  }
];

export const AFFILIATE_DISCLOSURE = "As an Amazon Associate, we earn from qualifying purchases. This means if you click on a link and make a purchase, we may receive a small commission at no extra cost to you.";
