import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { MONEY_PAGES } from '../data/money-pages';
import { GUIDES } from '../data/guides';
import { ArrowRight, BookOpen, DollarSign, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

export default function HomePage() {
  const featuredMoneyPages = Object.values(MONEY_PAGES).filter(p => p.featured);
  const recentGuides = Object.values(GUIDES).slice(0, 3);

  return (
    <div className="space-y-16 pb-16">
      <Hero />

      <section id="featured" className="container mx-auto px-10">
        <div className="flex items-center gap-3 mb-8 border-b-2 border-primary pb-2 w-fit">
          <Award className="text-primary h-6 w-6" />
          <h2 className="text-2xl font-bold text-secondary">Expert Device Comparisons</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredMoneyPages.map((page) => (
            <Link key={page.slug} to={`/money/${page.slug}`} className="group">
              <Card className="hover:border-primary transition-all h-full border-border-custom shadow-none hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {page.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[#666666] mb-4 line-clamp-2">{page.summary}</p>
                  <div className="flex items-center text-primary text-[13px] font-bold uppercase tracking-wider">
                    Read Comparison <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>


      <section className="bg-white py-16">
        <div className="container mx-auto px-10">
          <div className="grid lg:grid-cols-[1fr_350px] gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-3 border-b-2 border-primary pb-2 w-fit">
                <BookOpen className="text-primary h-6 w-6" />
                <h2 className="text-2xl font-bold text-secondary">Red Light Education</h2>
              </div>
              <div className="space-y-6">
                {recentGuides.map((guide) => (
                  <Link key={guide.slug} to={`/guides/${guide.slug}`} className="block group">
                    <div className="p-6 border border-border-custom rounded-lg hover:bg-bg-custom transition-colors">
                      <h3 className="text-lg font-bold text-secondary group-hover:text-primary mb-2">
                        {guide.title}
                      </h3>
                      <p className="text-sm text-[#666666] line-clamp-2">
                        {guide.metaDescription}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-secondary text-white p-8 rounded-lg space-y-6">
                <div className="flex items-center gap-2">
                  <DollarSign className="text-[#FFD700] h-6 w-6" />
                  <h3 className="text-xl font-bold uppercase tracking-tighter">Shop by Budget</h3>
                </div>
                <div className="space-y-3">
                  <Link to="/money/best-red-light-therapy-panels-under-300" className="block p-3 border border-white/20 rounded hover:bg-white/10 transition-colors text-sm">
                    Best Under $300
                  </Link>
                  <Link to="/money/best-professional-red-light-therapy-panels-under-500" className="block p-3 border border-white/20 rounded hover:bg-white/10 transition-colors text-sm">
                    Best Under $500
                  </Link>
                  <div className="p-3 border border-white/10 rounded opacity-50 cursor-not-allowed text-xs italic">
                    Coming Soon: Best Under $1000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
