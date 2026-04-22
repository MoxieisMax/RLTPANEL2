import { useParams, Link } from 'react-router-dom';
import { MONEY_PAGES } from '../data/money-pages';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import ComparisonTable from '../components/ComparisonTable';
import Sidebar from '../components/Education';
import { Calendar, ChevronRight } from 'lucide-react';

export default function MoneyPage() {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? MONEY_PAGES[slug] : null;

  if (!page) {
    return (
      <div className="container mx-auto px-10 py-20 text-center">
        <h1 className="text-2xl font-bold">Page not found</h1>
        <Link to="/" className="text-primary hover:underline">Return Home</Link>
      </div>
    );
  }

  const products = page.productIds.map(id => PRODUCTS[id]).filter(Boolean);

  return (
    <main className="container mx-auto px-10 py-8 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
      <div className="content-area space-y-10">
        <div className="space-y-4">
          <nav className="flex items-center text-xs text-[#999] gap-1 mb-6">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-secondary font-bold truncate">{page.title}</span>
          </nav>
          
          <h1 className="text-[32px] font-bold text-secondary leading-tight">
            {page.title}
          </h1>
          
          <div className="flex items-center gap-2 text-xs text-[#666666]">
            <Calendar className="h-3 w-3" />
            <span>Last Updated: {page.lastUpdated}</span>
          </div>

          <p className="max-w-[700px] text-sm text-[#333333] leading-relaxed border-l-4 border-primary pl-4 py-1 italic bg-bg-custom">
            {page.summary}
          </p>
        </div>

        <section id="table" className="space-y-6">
          <h2 className="text-xl font-bold text-secondary">Comparison Snapshot</h2>
          <ComparisonTable products={products} />
        </section>

        <section id="panels" className="space-y-8 pt-8">
          <h2 className="text-xl font-bold text-secondary">Expert Reviews: Top Picks</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section id="guide" className="prose prose-sm max-w-none bg-white p-8 border border-border-custom rounded-lg">
          <h2 className="text-xl font-bold text-secondary mb-4">Buyer's Guide</h2>
          <div className="text-sm text-[#333333] leading-relaxed whitespace-pre-line">
            {page.buyingGuide}
          </div>
        </section>

        {page.faqs && (
          <section id="faq" className="space-y-6">
            <h2 className="text-xl font-bold text-secondary">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {page.faqs.map((faq, i) => (
                <div key={i} className="bg-white p-5 border border-border-custom rounded-lg shadow-sm">
                  <h4 className="font-bold text-secondary mb-2">{faq.q}</h4>
                  <p className="text-sm text-[#666666]">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
          <p className="text-[11px] text-amber-900 italic">
            Affiliate disclosure: This site contains affiliate links. If you buy through these links, RLT Panels may earn a commission at no extra cost to you.
          </p>
        </div>
      </div>

      <Sidebar />
    </main>
  );
}
