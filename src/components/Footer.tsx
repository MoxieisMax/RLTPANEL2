import { Sun, Mail, Github, Twitter } from 'lucide-react';
import { AFFILIATE_DISCLOSURE } from '../constants';

export default function Footer() {
  return (
    <footer className="border-t-2 border-primary bg-white py-12">
      <div className="container mx-auto px-10">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold tracking-tighter text-secondary uppercase">
                RLT <span className="text-primary">PANELS</span>
              </span>
            </div>
            <p className="max-w-xs text-xs text-[#666666] leading-relaxed">
              Your trusted source for independent red light therapy panel reviews and technical guides. We help you find the best tech for your wellness journey.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-secondary">Resources</h4>
            <ul className="space-y-2 text-xs text-[#666666]">
              <li><a href="#panels" className="hover:text-primary transition-colors">Best Panels</a></li>
              <li><a href="#comparison" className="hover:text-primary transition-colors">Comparison Table</a></li>
              <li><a href="#guide" className="hover:text-primary transition-colors">Buyer's Guide</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-secondary">Legal</h4>
            <ul className="space-y-2 text-xs text-[#666666]">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-border-custom pt-8">
          <p className="text-center text-[10px] text-[#999999] uppercase tracking-widest">
            © {new Date().getFullYear()} RLT Panels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

