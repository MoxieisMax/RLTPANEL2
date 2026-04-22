export interface GuideData {
  slug: string;
  title: string;
  metaDescription: string;
  lastUpdated: string;
  content: string;
  relatedMoneyPageSlugs: string[];
}

export const GUIDES: Record<string, GuideData> = {
  '660nm-vs-850nm-explained': {
    slug: '660nm-vs-850nm-explained',
    title: '660nm vs 850nm: Which Wavelength Do You Need?',
    metaDescription: 'Understand the difference between red (660nm) and near-infrared (850nm) light therapy and how to use them together.',
    lastUpdated: '2024-03-10',
    content: `The most common wavelengths in red light therapy are 660nm and 850nm. 
    **660nm (Visible Red)** is mostly absorbed by the skin tissue, making it the primary choice for collagen production, acne, and anti-aging.
    **850nm (Near-Infrared)** is invisible to the human eye and penetrates much deeper into the body—reaching muscles, nerves, and even bone to reduce inflammation.`,
    relatedMoneyPageSlugs: ['best-red-light-therapy-panels-under-300']
  },
  'panel-vs-handheld-devices': {
    slug: 'panel-vs-handheld-devices',
    title: 'Panel vs. Handheld: choosing the Right RLT Device',
    metaDescription: 'Comparing the treatment power and convenience of desktop panels versus portable handheld red light devices.',
    lastUpdated: '2024-03-25',
    content: `Handheld devices are great for travel, but they lack the **irradiance** (power density) of a tabletop panel. If you are serious about treating systemic inflammation or back pain, a panel is almost always the better long-term investment.`,
    relatedMoneyPageSlugs: ['best-red-light-therapy-panels-under-300', 'best-professional-red-light-therapy-panels-under-500']
  },
  'red-light-therapy-safety-guide': {
    slug: 'red-light-therapy-safety-guide',
    title: 'Red Light Therapy Safety: What You Need to Know',
    metaDescription: 'Is red light therapy safe for your eyes? Does it cause skin damage? Learn the clinical safety guidelines.',
    lastUpdated: '2024-04-02',
    content: `Red light therapy is non-ionizing and generally considered extremely safe. However, the brightness of modern panels means eye protection is mandatory. We also discuss potential contraindications for certain medical conditions.`,
    relatedMoneyPageSlugs: ['best-red-light-therapy-panels-under-300']
  },
  'understanding-irradiance-levels': {
    slug: 'understanding-irradiance-levels',
    title: 'Irradiance Explained: Why Power Output is Everything',
    metaDescription: 'Don\'t be fooled by low-power devices. Learn how to calculate true irradiance for therapeutic results.',
    lastUpdated: '2024-04-10',
    content: `Irradiance is essentially the dose of light your skin receives. Without enough power, you won't trigger the mitochondrial response needed for healing. We explain how to read manufacturer specs and verify them with a solar meter.`,
    relatedMoneyPageSlugs: ['best-professional-red-light-therapy-panels-under-500']
  }
};
