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
    imageUrl: 'https://m.media-amazon.com/images/P/B07TDP67LR.01._SCLZZZZZZZ_.jpg',
    rating: 4.4,
    reviews: 3142,
    bestFor: 'Best Overall Value',
    pros: ['High irradiance output', 'Quiet dual cooling fans', 'CE & RoHS certified', 'Includes hanging kit'],
    cons: ['Covers targeted area only', 'No built-in timer']
  },
  {
    id: 'bestqool-pro300',
    name: 'Bestqool Red Light Therapy Device Pro300',
    brand: 'Bestqool',
    price: 199.00,
    wavelengths: ['660nm', '850nm'],
    irradiance: '100 mW/cm² at 6"',
    ledCount: 60,
    size: '11.8" x 7.9" x 2.4"',
    amazonUrl: 'https://www.amazon.com/dp/B08G8S9Z9X?tag=your-affiliate-id-20',
    imageUrl: 'https://m.media-amazon.com/images/P/B08G8S9Z9X.01._SCLZZZZZZZ_.jpg',
    rating: 4.5,
    reviews: 1240,
    bestFor: 'Best for Skin Health',
    pros: ['Dual 5W chip LEDs for deeper penetration', '3-year warranty', 'Flicker-free output', 'Low EMF design'],
    cons: ['No built-in timer', 'Runs warm in extended sessions']
  },
  {
    id: 'dgyao-60led',
    name: 'DGYAO 60-LED Red Light Therapy Lamp',
    brand: 'DGYAO',
    price: 69.99,
    wavelengths: ['660nm', '850nm'],
    irradiance: '80 mW/cm² at 6"',
    ledCount: 60,
    size: '10.6" x 7.9" x 1.2"',
    amazonUrl: 'https://www.amazon.com/dp/B09NM5KGMJ?tag=your-affiliate-id-20',
    imageUrl: 'https://m.media-amazon.com/images/P/B09NM5KGMJ.01._SCLZZZZZZZ_.jpg',
    rating: 4.3,
    reviews: 1085,
    bestFor: 'Budget Pick',
    pros: ['Most affordable 60-LED panel', 'Lightweight and easy to hang', 'Solid 660nm + 850nm combo'],
    cons: ['Lower irradiance than mid-range units', 'Basic build quality']
  },
  {
    id: 'platinumled-biomax300',
    name: 'PlatinumLED BioMax 300 Red Light Panel',
    brand: 'PlatinumLED Therapy Lights',
    price: 269.00,
    wavelengths: ['630nm', '660nm', '810nm', '830nm', '850nm'],
    irradiance: '>132 mW/cm² at 6"',
    ledCount: 60,
    size: '17.7" x 6" x 3"',
    amazonUrl: 'https://www.amazon.com/dp/B0867QRZFN?tag=your-affiliate-id-20',
    imageUrl: 'https://m.media-amazon.com/images/P/B0867QRZFN.01._SCLZZZZZZZ_.jpg',
    rating: 4.7,
    reviews: 892,
    bestFor: 'Best Multi-Wavelength',
    pros: ['5 therapeutic wavelengths in one panel', 'Highest irradiance in its class', 'Flicker-free & zero EMF at distance', 'R&D-backed wavelength combination'],
    cons: ['Narrower profile than square panels', 'Premium price tag']
  }
];

export const AFFILIATE_DISCLOSURE = "As an Amazon Associate, we earn from qualifying purchases. This means if you click on a link and make a purchase, we may receive a small commission at no extra cost to you.";
