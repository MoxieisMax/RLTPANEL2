export default function Sidebar() {
  return (
    <aside className="sidebar bg-white rounded-lg border border-border-custom p-5 space-y-5 h-fit">
      <h2 className="text-base font-bold text-secondary border-b-2 border-primary pb-2 mb-4">Buyer's Quick Guide</h2>
      
      <div className="guide-box space-y-1.5">
        <h4 className="text-sm font-bold text-secondary">660nm (Red Light)</h4>
        <p className="text-[12px] text-[#666666] leading-relaxed">Ideal for skin health, collagen production, and surface-level wound healing. Absorbed mostly by skin tissue.</p>
      </div>

      <div className="guide-box space-y-1.5">
        <h4 className="text-sm font-bold text-secondary">850nm (Near Infrared)</h4>
        <p className="text-[12px] text-[#666666] leading-relaxed">Penetrates deeper into muscle and bone. Best for inflammation, joint pain, and deep tissue recovery.</p>
      </div>

      <div className="guide-box space-y-1.5">
        <h4 className="text-sm font-bold text-secondary">Irradiance Matters</h4>
        <p className="text-[12px] text-[#666666] leading-relaxed">Look for at least 100mW/cm² at 6 inches to ensure you're getting effective clinical-grade dosages.</p>
      </div>

      <div className="guide-box bg-accent-custom p-3 rounded-[4px] space-y-1.5">
        <h4 className="text-sm font-bold text-secondary">Top Pick Under $200</h4>
        <p className="text-[12px] text-[#666666] leading-relaxed">The <strong>Bestqool Pro30</strong> offers the best balance of cooling fans, irradiance, and price efficiency.</p>
      </div>
    </aside>
  );
}

