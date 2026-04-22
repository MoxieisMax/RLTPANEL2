import { useParams, Link } from 'react-router-dom';
import { GUIDES } from '../data/guides';
import { MONEY_PAGES } from '../data/money-pages';
import Sidebar from '../components/Education';
import { Calendar, ChevronRight, ExternalLink } from 'lucide-react';

export default function GuidePage() {
  const { slug } = useParams<{ slug: string }>();
  const guide = slug ? GUIDES[slug] : null;

  if (!guide) {
    return (
      <div className="container mx-auto px-10 py-20 text-center">
        <h1 className="text-2xl font-bold">Guide not found</h1>
        <Link to="/" className="text-primary hover:underline">Return Home</Link>
      </div>
    );
  }

  const relatedPages = guide.relatedMoneyPageSlugs.map(s => MONEY_PAGES[s]).filter(Boolean);

  return (
    <main className="container mx-auto px-10 py-8 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
      <div className="content-area space-y-8 bg-white border border-border-custom rounded-lg p-8 h-fit">
        <nav className="flex items-center text-xs text-[#999] gap-1 mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-secondary font-bold truncate">{guide.title}</span>
        </nav>

        <div className="space-y-4">
          <h1 className="text-[32px] font-bold text-secondary leading-tight">
            {guide.title}
          </h1>
          <div className="flex items-center gap-2 text-xs text-[#666666]">
            <Calendar className="h-3 w-3" />
            <span>Last Updated: {guide.lastUpdated}</span>
          </div>
        </div>

        <div className="prose prose-sm max-w-none text-[#333333] leading-relaxed whitespace-pre-line text-sm border-t border-border-custom pt-6">
          {guide.content}
        </div>

        {relatedPages.length > 0 && (
          <div className="mt-12 bg-bg-custom p-6 rounded-lg border border-primary/20">
            <h4 className="text-sm font-bold text-secondary uppercase tracking-wider mb-4">Recommended Comparisons</h4>
            <div className="space-y-3">
              {relatedPages.map(page => (
                <Link 
                  key={page.slug} 
                  to={`/money/${page.slug}`}
                  className="flex items-center justify-between p-3 bg-white hover:border-primary border border-border-custom rounded transition-colors group"
                >
                  <span className="text-sm font-bold text-secondary group-hover:text-primary">{page.title}</span>
                  <ExternalLink className="h-4 w-4 text-primary" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <Sidebar />
    </main>
  );
}
