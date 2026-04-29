import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function TermsPage() {
  return (
    <main className="container mx-auto px-10 py-12 max-w-4xl">
      <nav className="flex items-center text-xs text-[#999] gap-1 mb-8">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-secondary font-bold">Terms of Service</span>
      </nav>

      <div className="prose prose-sm max-w-none bg-white p-10 border border-border-custom rounded-lg shadow-sm">
        <h1 className="text-3xl font-bold text-secondary mb-6">Terms of Service</h1>
        <p className="text-[#666] mb-4">Last Updated: April 2024</p>
        
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-secondary">1. Acceptance of Terms</h2>
          <p>By accessing RLT Panels, you agree to be bound by these Terms of Service. If you do not agree, please do not use the site.</p>
          
          <h2 className="text-xl font-bold text-secondary">2. Medical Disclaimer</h2>
          <p>The content on RLT Panels is for informational purposes only and is not intended as medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health providers with any questions you may have regarding a medical condition.</p>
          
          <h2 className="text-xl font-bold text-secondary">3. Use of Content</h2>
          <p>You may not reproduce, distribute, or create derivative works from any content found on this site without explicit written permission.</p>
          
          <h2 className="text-xl font-bold text-secondary">4. External Links</h2>
          <p>Our site contains links to external websites (like Amazon). We are not responsible for the content or practices of these third-party sites.</p>
          
          <h2 className="text-xl font-bold text-secondary">5. Limitation of Liability</h2>
          <p>RLT Panels shall not be liable for any damages resulting from the use or inability to use the materials on this site.</p>
        </section>
      </div>
    </main>
  );
}
