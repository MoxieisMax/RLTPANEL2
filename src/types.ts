export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  wavelengths: string[]; // e.g. ["660nm", "850nm"]
  irradiance: string; // e.g. "100 mW/cm² at 6 inches"
  ledCount: number;
  size: string; // e.g. "12 x 8 inches"
  amazonUrl: string;
  imageUrl: string;
  rating: number;
  reviews: number;
  bestFor: string;
  pros: string[];
  cons: string[];
}

export type FilterCategory = 'all' | 'under-300' | 'targeted' | 'full-body';
