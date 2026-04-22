import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 border-b border-border-custom">
      <div className="container mx-auto px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-4">
            <span className="text-[13px] text-primary font-bold uppercase tracking-wider">Independent Tech Reviews</span>
            <h1 className="text-[42px] font-extrabold text-secondary leading-tight">
              Master Your Home <br />
              <span className="text-primary">Red Light Therapy</span>
            </h1>
            <p className="max-w-[500px] text-base text-[#666666] leading-relaxed">
              We cut through the marketing hype to bring you lab-tested data, honest comparisons, and technical guides for high-performance recovery tech.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#featured" className="bg-primary text-white px-6 py-3 rounded-[4px] font-bold text-sm uppercase tracking-wide hover:bg-secondary transition-all">
                View Best Picks
              </a>
              <a href="/guides" className="border border-border-custom text-secondary px-6 py-3 rounded-[4px] font-bold text-sm uppercase tracking-wide hover:bg-bg-custom transition-all">
                Learn the Tech
              </a>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800" 
              alt="Red Light Therapy Technology" 
              className="relative z-10 rounded-lg shadow-2xl border border-border-custom object-cover h-[350px] w-full"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


