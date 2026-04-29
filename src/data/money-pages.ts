export interface MoneyPageData {
  slug: string;
  title: string;
  metaDescription: string;
  lastUpdated: string;
  summary: string;
  featured: boolean;
  productIds: string[];
  buyingGuide: string;
  faqs: { q: string; a: string }[];
}

export const MONEY_PAGES: Record<string, MoneyPageData> = {
  'best-red-light-therapy-panels-under-300': {
    slug: 'best-red-light-therapy-panels-under-300',
    title: 'Best Red Light Therapy Panels Under $300 (2024 Guide)',
    metaDescription: 'Find the most powerful and effective red light therapy panels for under $300. We compared Hooga, Bestqool, and more.',
    lastUpdated: '2024-04-15',
    summary: 'For most home users, a targeted panel under $300 provides the perfect balance of therapeutic power and affordability. We have tested the top-selling units for irradiance and build quality.',
    featured: true,
    productIds: ['hooga-hg300', 'bestqool-pro300', 'platinumled-biomax300', 'dgyao-60led'],
    buyingGuide: `Choosing a budget panel doesn't mean you should sacrifice quality. Focus on these three metrics: 
    1. **Irradiance**: Minimum 80 mW/cm² at 6 inches.
    2. **EMF Shielding**: Ensure low EMF at the treatment distance.
    3. **Fan Noise**: Cheap panels often have loud fans; look for "quiet cooling" labels.`,
    faqs: [
      { q: "Is a $150 panel really as good as a $1000 one?", a: "For targeted treatment (face, joints), yes. The main difference in expensive units is the coverage area and advanced digital controls." }
    ]
  },
  'best-professional-red-light-therapy-panels-under-500': {
    slug: 'best-professional-red-light-therapy-panels-under-500',
    title: 'Top Professional Red Light Panels Under $500',
    metaDescription: 'Upgrade your home setup with professional-grade RLT panels under $500. Better coverage and higher intensity.',
    lastUpdated: '2024-04-20',
    summary: 'If you want deeper penetration and larger coverage for muscle recovery or professional skin results, these sub-$500 panels are the gold standard.',
    featured: true,
    productIds: ['mitored-mitopro-300', 'hooga-hg1500', 'platinumled-biomax300'],
    buyingGuide: `At the $500 price point, you should expect:
    - **Dual Chip LEDs**: 660nm and 850nm occurring in every lens.
    - **Modular Capability**: The ability to snap multiple panels together.
    - **Digital Timers**: Built-in treatment controls.`,
    faqs: [
      { q: "Why spend $500?", a: "Better build quality, longer warranties (usually 3 years), and verified flicker-free tech." }
    ]
  }
};
