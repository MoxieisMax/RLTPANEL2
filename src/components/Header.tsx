import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full h-[70px] border-b-2 border-primary bg-white shadow-sm">
      <div className="container mx-auto flex h-full items-center justify-between px-10">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-xl font-extrabold tracking-tighter text-secondary uppercase group-hover:text-primary transition-colors">
            RLT <span className="text-primary">PANELS</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-[30px]">
          <Link to="/" className="text-sm font-semibold text-secondary uppercase hover:text-primary transition-colors">Home</Link>
          <Link to="/money/best-red-light-therapy-panels-under-300" className="text-sm font-semibold text-secondary uppercase hover:text-primary transition-colors">Best Picks</Link>
          <Link to="/guides" className="text-sm font-semibold text-secondary uppercase hover:text-primary transition-colors">Guides</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link 
            to="/money/best-red-light-therapy-panels-under-300" 
            className="rounded-[3px] bg-amazon border border-amazon-border px-4 py-2 text-xs font-bold text-[#111] hover:bg-[#f0c14b] transition-colors uppercase"
          >
            View Deals
          </Link>
        </div>
      </div>
    </header>
  );
}


