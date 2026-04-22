import { Link } from 'react-router-dom';
import { GUIDES } from '../data/guides';
import Sidebar from '../components/Education';
import { BookOpen, Calendar, ChevronRight } from 'lucide-react';

export default function GuidesIndexPage() {
  const guidesList = Object.values(GUIDES);

  return (
    <main className="container mx-auto px-10 py-8 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
      <div className="content-area space-y-10">
        <div className="space-y-4">
          <nav className="flex items-center text-xs text-[#999] gap-1 mb-6">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-secondary font-bold truncate">Educational Guides</span>
          </nav>
          
          <h1 className="text-[32px] font-bold text-secondary leading-tight">
            Red Light Therapy <span className="text-primary">Learning Center</span>
          </h1>
          <p className="max-w-[700px] text-sm text-[#666666] leading-relaxed">
            Technical explainers, safety protocols, and clinical wavelength science. Our guides help you understand the physics behind photobiomodulation.
          </p>
        </div>

        <div className="grid gap-6">
          {guidesList.map((guide) => (
            <Link key={guide.slug} to={`/guides/${guide.slug}`} className="block group">
              <div className="bg-white p-8 border border-border-custom rounded-lg hover:border-primary transition-all shadow-sm hover:shadow-md">
                <div className="flex items-center gap-2 text-xs text-primary font-bold uppercase tracking-wider mb-3">
                  <BookOpen className="h-3 w-3" />
                  <span>Technical Guide</span>
                  <span className="mx-2 text-[#eee]">|</span>
                  <div className="flex items-center gap-1 text-[#999] lowercase font-normal">
                    <Calendar className="h-3 w-3" />
                    {guide.lastUpdated}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors mb-2">
                  {guide.title}
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed">
                  {guide.metaDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Sidebar />
    </main>
  );
}
