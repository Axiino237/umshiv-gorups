import { Link } from "@tanstack/react-router";
import logo from "@/assets/umshiv-logo.png";

export function SiteHeader() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 glass">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="UMSHIV" className="h-12 w-12 object-contain" />
          <div className="leading-tight">
            <div className="font-display text-xl text-gold tracking-wide">UMSHIV</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Group of Companies</div>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link to="/" className="hover:text-gold transition-colors" activeOptions={{ exact: true }} activeProps={{ className: "text-gold" }}>Home</Link>
          <Link to="/companies" className="hover:text-gold transition-colors" activeProps={{ className: "text-gold" }}>Companies</Link>
          <Link to="/hierarchy" className="hover:text-gold transition-colors" activeProps={{ className: "text-gold" }}>Hierarchy</Link>
          <Link to="/contact" className="hover:text-gold transition-colors" activeProps={{ className: "text-gold" }}>Contact</Link>
        </div>
      </nav>
    </header>
  );
}
