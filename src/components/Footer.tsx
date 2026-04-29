import { Sun, Mail, Github, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AFFILIATE_DISCLOSURE } from '../constants';

export default function Footer() {
  return (
    <footer className="border-t-2 border-primary bg-white py-12">
      <div className="container mx-auto px-10">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="space-y-4 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="text-xl font-extrabold tracking-tighter text-secondary uppercase group-hover:text-primary transition-colors">
                RLT <span className="text-primary">PANELS</span>
              </span>
            </Link>
            <p className="max-w-xs text-xs text-[#666666] leading-relaxed">
              Your trusted source for independent red light therapy panel reviews and technical guides. We help you find the best tech for your wellness journey.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-secondary">Resources</h4>
            <ul className="space-y-2 text-xs text-[#666666]">
              <li><Link to="/money/best-red-light-therapy-panels-under-300" className="hover:text-primary transition-colors">Best Panels</Link></li>
              <li><Link to="/money/best-red-light-therapy-panels-under-300" className="hover:text-primary transition-colors">Comparison Tables</Link></li>
              <li><Link to="/guides" className="hover:text-primary transition-colors">Learning Center</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-secondary">Legal</h4>
            <ul className="space-y-2 text-xs text-[#666666]">
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
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

