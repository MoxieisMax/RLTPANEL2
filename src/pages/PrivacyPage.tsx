import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <main className="container mx-auto px-10 py-12 max-w-4xl">
      <nav className="flex items-center text-xs text-[#999] gap-1 mb-8">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-secondary font-bold">Privacy Policy</span>
      </nav>

      <div className="prose prose-sm max-w-none bg-white p-10 border border-border-custom rounded-lg shadow-sm">
        <h1 className="text-3xl font-bold text-secondary mb-6">Privacy Policy</h1>
        <p className="text-[#666] mb-4">Last Updated: April 2024</p>
        
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-secondary">1. Information We Collect</h2>
          <p>RLT Panels does not require user registration. We may collect non-personally identifiable information such as browser type, referring page, and time of visit via standard web protocols to improve our content.</p>
          
          <h2 className="text-xl font-bold text-secondary">2. Cookies and Tracking</h2>
          <p>We use cookies to analyze site traffic and provide a better experience. Third-party vendors, including Amazon, may use cookies to serve ads based on your prior visits to our website.</p>
          
          <h2 className="text-xl font-bold text-secondary">3. Affiliate Disclosure</h2>
          <p>RLT Panels is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.</p>
          
          <h2 className="text-xl font-bold text-secondary">4. Data Security</h2>
          <p>We take reasonable measures to protect any information collected through the site. However, no internet transmission is 100% secure.</p>
          
          <h2 className="text-xl font-bold text-secondary">5. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at info@rltpanels.com.</p>
        </section>
      </div>
    </main>
  );
}
