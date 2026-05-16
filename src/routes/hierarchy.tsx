import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { SiteHeader } from "@/components/SiteHeader";
import { FloatingLeaves } from "@/components/FloatingLeaves";
import { companies } from "@/data/companies";

export const Route = createFileRoute("/hierarchy")({ component: HierarchyPage });

function HierarchyPage() {
  const [selected, setSelected] = useState(companies[0].id);
  const company = companies.find((c) => c.id === selected)!;

  // tree layout: CEO at top, others arranged below
  const ceo = company.team[0];
  const rest = company.team.slice(1);
  const cols = rest.length;
  const spacing = 180;

  return (
    <div className="relative min-h-screen gradient-hero overflow-hidden">
      <SiteHeader />
      <FloatingLeaves count={8} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-8">
        <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">Org Hierarchy</p>
        <h1 className="font-display text-4xl md:text-6xl">Leadership grows like branches</h1>
        <p className="text-muted-foreground mt-4 max-w-2xl">
          Pick a company to reveal its leadership tree. Drag and zoom to explore.
        </p>

        <div className="flex flex-wrap gap-3 mt-8">
          {companies.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelected(c.id)}
              className={`px-5 py-2 rounded-full text-sm transition-all ${
                selected === c.id
                  ? "gradient-gold text-gold-foreground shadow-gold"
                  : "glass text-foreground hover:border-gold/40"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl h-[600px] glass rounded-3xl overflow-hidden">
        <TransformWrapper minScale={0.4} maxScale={2.5} initialScale={0.85} centerOnInit>
          <TransformComponent wrapperStyle={{ width: "100%", height: "100%" }} contentStyle={{ width: "100%", height: "100%" }}>
            <svg viewBox={`${-cols * spacing / 2 - 100} -100 ${cols * spacing + 200} 600`} width={cols * spacing + 200} height={600}>
              {/* lines from CEO to reports */}
              {rest.map((_, i) => {
                const x = (i - (cols - 1) / 2) * spacing;
                return (
                  <motion.path
                    key={i}
                    d={`M 0 60 Q 0 180, ${x} 280`}
                    stroke="oklch(0.78 0.13 85 / 0.6)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 + i * 0.08 }}
                  />
                );
              })}

              {/* CEO node */}
              <motion.g
                key={`ceo-${company.id}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 160 }}
              >
                <circle cx={0} cy={20} r={70} fill="oklch(0.22 0.05 150)" stroke="oklch(0.78 0.13 85)" strokeWidth="3" />
                <circle cx={0} cy={20} r={82} fill="oklch(0.78 0.13 85 / 0.1)" />
                <text x={0} y={10} textAnchor="middle" fill="oklch(0.78 0.13 85)" fontSize="11" fontWeight="700" letterSpacing="2">
                  {ceo.role.toUpperCase()}
                </text>
                <text x={0} y={32} textAnchor="middle" fill="oklch(0.96 0.02 90)" fontSize="14" style={{ fontFamily: "var(--font-display)" }}>
                  {ceo.name}
                </text>
              </motion.g>

              {/* report nodes */}
              {rest.map((m, i) => {
                const x = (i - (cols - 1) / 2) * spacing;
                return (
                  <motion.g
                    key={`${company.id}-${i}`}
                    initial={{ scale: 0, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 180 }}
                  >
                    <circle cx={x} cy={300} r={50} fill="oklch(0.22 0.05 150)" stroke="oklch(0.45 0.11 145)" strokeWidth="2" />
                    <circle cx={x} cy={300} r={58} fill="oklch(0.45 0.11 145 / 0.15)" />
                    <text x={x} y={293} textAnchor="middle" fill="oklch(0.78 0.13 85)" fontSize="9" fontWeight="600" letterSpacing="1">
                      {m.role.toUpperCase()}
                    </text>
                    <text x={x} y={310} textAnchor="middle" fill="oklch(0.96 0.02 90)" fontSize="11" style={{ fontFamily: "var(--font-display)" }}>
                      {m.name}
                    </text>
                  </motion.g>
                );
              })}
            </svg>
          </TransformComponent>
        </TransformWrapper>
      </div>

      <div className="h-20" />
    </div>
  );
}
