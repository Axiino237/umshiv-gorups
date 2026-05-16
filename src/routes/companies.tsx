import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { FloatingLeaves } from "@/components/FloatingLeaves";
import { companies, type Company } from "@/data/companies";
import treeFinal from "@/assets/tree_exact.png";

export const Route = createFileRoute("/companies")({ component: CompaniesPage });

// Hand-placed natural branch endpoints (x, y) where company "fruits" hang.
// Trunk base is at (0, 280) and trunk top near (0, -20).
const branches: { id: string; tip: { x: number; y: number } }[] = [
  { id: companies[0].id, tip: { x: -410, y: -105 } },
  { id: companies[1].id, tip: { x: -230, y: -250 } },
  { id: companies[2].id, tip: { x: 0, y: -290 } },
  { id: companies[3].id, tip: { x: 230, y: -265 } },
  { id: companies[4].id, tip: { x: 412, y: -125 } },
];



function CompaniesPage() {
  const [active, setActive] = useState<Company | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const hoveredCompany = useMemo(
    () => (hovered ? companies.find((c) => c.id === hovered) : null),
    [hovered],
  );

  const fireflies = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        fx: -480 + Math.random() * 960,
        fy: -440 + Math.random() * 380,
        dur: 3 + Math.random() * 4,
        r: 1.6 + Math.random() * 1.4,
      })),
    [],
  );

  const stars = useMemo(
    () =>
      Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        sx: -540 + Math.random() * 1080,
        sy: -470 + Math.random() * 200,
        r: 0.8 + Math.random() * 0.8,
        op: 0.3 + Math.random() * 0.5,
        dur: 2 + Math.random() * 3,
      })),
    [],
  );

  return (
    <div className="relative min-h-screen gradient-hero overflow-hidden">
      <SiteHeader />
      <FloatingLeaves count={14} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-10 text-center">
        <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">The UMSHIV Tree</p>
        <h1 className="font-display text-4xl md:text-6xl">Five branches, one root</h1>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Hover the fruits to peek inside. Tap one for full details and to visit the company.
        </p>
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] aspect-[1280/920] glass rounded-3xl overflow-hidden mx-4 mb-20 shadow-2xl border-2 border-gold/30">
        {/* moonlight glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 20%, oklch(0.78 0.13 85 / 0.18), transparent 55%)",
          }}
        />

        <svg
          viewBox="-640 -560 1280 920"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full relative"
        >
          <defs>
            <filter id="orbGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="15" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <radialGradient id="orbFill">
              <stop offset="0%" stopColor="oklch(0.88 0.16 85 / 0.5)" />
              <stop offset="100%" stopColor="oklch(0.78 0.13 85 / 0)" />
            </radialGradient>
          </defs>

          <image
            href={treeFinal}
            x="-640"
            y="-560"
            width="1280"
            height="920"
            preserveAspectRatio="xMidYMid slice"
          />

          {/* company orbs */}
          {branches.map((b, i) => {
            const c = companies[i];
            const isHovered = hovered === c.id;
            const { x, y } = b.tip;
            return (
              <g
                key={c.id}
                onMouseEnter={() => setHovered(c.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setActive(c)}
                style={{
                  cursor: "pointer",
                  transformBox: "fill-box",
                  transformOrigin: "center",
                }}
                className="node-pop"
              >
                <circle
                  cx={x}
                  cy={y}
                  r={isHovered ? 100 : 90}
                  fill={isHovered ? "url(#orbFill)" : "transparent"}
                  filter={isHovered ? "url(#orbGlow)" : "none"}
                  stroke={isHovered ? "var(--gold)" : "transparent"}
                  strokeWidth="2"
                  style={{ transition: "all 0.3s" }}
                />
                <text
                  x={x}
                  y={y + 5}
                  textAnchor="middle"
                  fill={isHovered ? "white" : "oklch(0.45 0.11 145)"}
                  fontSize={isHovered ? "14" : "12"}
                  fontWeight="900"
                  opacity={isHovered ? 1 : 0.8}
                  style={{
                    fontFamily: "var(--font-display)",
                    transition: "all 0.3s",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    pointerEvents: "none",
                    filter: isHovered ? "none" : "drop-shadow(0 1px 2px rgba(255,255,255,0.4))"
                  }}
                >
                  {c.name.split(" ").map((w, j) => (
                    <tspan key={j} x={x} dy={j === 0 ? 0 : 15}>{w}</tspan>
                  ))}
                </text>
              </g>
            );
          })}

          {/* root label */}
          <text
            x="0"
            y="335"
            textAnchor="middle"
            fill="var(--gold)"
            fontSize="56"
            fontWeight="900"
            letterSpacing="24"
            className="select-none pointer-events-none"
            style={{
              fontFamily: "var(--font-display)",
              filter: "drop-shadow(0 0 20px oklch(0.78 0.13 85 / 0.7))",
              stroke: "rgba(0,0,0,0.3)",
              strokeWidth: "1"
            }}
          >
            UMSHIV
          </text>

        </svg>

        {/* Hover tooltip */}
        <AnimatePresence>
          {hovered && !active && (
            <motion.div
              key={hovered}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 glass rounded-2xl px-6 py-4 max-w-md text-center"
            >
              <div className="font-display text-xl text-gold">
                {hoveredCompany?.name}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {hoveredCompany?.tagline}
              </div>
              <div className="text-xs text-gold/70 mt-2">Click the fruit for details</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-6 bg-background/80 backdrop-blur-md"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-3xl max-w-2xl w-full p-10 shadow-leaf relative"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-5 text-gold/70 hover:text-gold text-2xl"
                aria-label="Close"
              >
                ×
              </button>
              {active.id === "axiino-tech" ? (
                <>
                  <p className="text-gold text-xs uppercase tracking-[0.3em]">
                    {active.industry} · est. {active.founded}
                  </p>
                  <h2 className="font-display text-4xl mt-2">{active.name}</h2>
                  <p className="italic text-gold/80 mt-1">{active.tagline}</p>
                  <p className="text-muted-foreground mt-6">{active.description}</p>

                  <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
                    <div>
                      <div className="text-gold/70 text-xs uppercase">CEO</div>
                      <div>{active.ceo}</div>
                    </div>
                    <div>
                      <div className="text-gold/70 text-xs uppercase">Email</div>
                      <div>{active.email}</div>
                    </div>
                    <div>
                      <div className="text-gold/70 text-xs uppercase">Phone</div>
                      <div>{active.phone}</div>
                    </div>
                    <div>
                      <div className="text-gold/70 text-xs uppercase">Team</div>
                      <div>{active.team.length} members</div>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-8">
                    <a
                      href={active.website}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-3 rounded-full gradient-gold text-gold-foreground font-medium shadow-gold hover:scale-[1.03] transition-transform"
                    >
                      Visit Website →
                    </a>
                    <a
                      href={`mailto:${active.email}`}
                      className="px-6 py-3 rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition"
                    >
                      Contact us
                    </a>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20">
                    <span className="text-4xl">⏳</span>
                  </div>
                  <p className="text-gold text-xs uppercase tracking-[0.4em] mb-2">Branch Status</p>
                  <h2 className="font-display text-5xl mb-4">Coming Soon</h2>
                  <p className="text-muted-foreground max-w-sm mx-auto leading-relaxed">
                    The {active.name} branch is currently being nurtured.
                    We are preparing something magical for you.
                  </p>
                  <div className="mt-10 flex flex-col items-center gap-4">
                    <div className="px-5 py-2 rounded-full border border-gold/20 text-gold/60 text-xs tracking-widest uppercase">
                      Estimated Bloom: Q3 2026
                    </div>
                    <button
                      onClick={() => setActive(null)}
                      className="text-gold/60 hover:text-gold transition-colors text-sm underline underline-offset-4"
                    >
                      Back to tree
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ============ Branch directory ============ */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-12">
        <div className="text-center mb-14">
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">The Branch Directory</p>
          <h2 className="font-display text-4xl md:text-5xl">Each branch, a world of its own</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From soil to silicon — every UMSHIV branch carries its own craft, its own
            people, and its own promise. Pick one to explore deeper.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((c, i) => (
            <motion.button
              key={c.id}
              onClick={() => setActive(c)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass rounded-3xl p-7 text-left relative overflow-hidden group"
            >
              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gold/10 blur-3xl group-hover:bg-gold/25 transition-colors" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gold text-xs uppercase tracking-[0.25em]">{c.industry}</span>
                  <span className="text-muted-foreground text-xs">est. {c.founded}</span>
                </div>
                <h3 className="font-display text-2xl mb-2">{c.name}</h3>
                <p className="italic text-gold/80 text-sm mb-4">{c.tagline}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{c.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gold/15">
                  <div>
                    <div className="text-[10px] text-gold/60 uppercase tracking-wider">Led by</div>
                    <div className="text-sm">{c.ceo}</div>
                  </div>
                  <span className="text-gold text-sm group-hover:translate-x-1 transition-transform">Open →</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* ============ Values strip ============ */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">What roots us</p>
          <h2 className="font-display text-4xl">Principles that bind every branch</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-5">
          {[
            { t: "Patience", d: "Trees aren't built in a quarter. We invest in decades, not deadlines." },
            { t: "Stewardship", d: "We hold land, capital and people in trust — for the next generation." },
            { t: "Craft", d: "Every product, project and pixel carries the maker's hand." },
            { t: "Kinship", d: "1,200+ teammates across 5 verticals — one extended family." },
          ].map((v, i) => (
            <motion.div
              key={v.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <div className="font-display text-2xl text-gradient-gold mb-2">{v.t}</div>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============ Timeline ============ */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">Rings of the tree</p>
          <h2 className="font-display text-4xl">A timeline written in seasons</h2>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
          {companies
            .slice()
            .sort((a, b) => Number(a.founded) - Number(b.founded))
            .map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="relative grid md:grid-cols-2 gap-8 mb-10 items-start"
              >
                <div className={`glass rounded-2xl p-6 ${i % 2 === 0 ? "md:text-right" : "md:col-start-2"}`}>
                  <div className="font-display text-3xl text-gold">{c.founded}</div>
                  <div className="font-display text-xl mt-1">{c.name}</div>
                  <p className="text-muted-foreground text-sm mt-2">{c.tagline}</p>
                </div>
                <div className="absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-gold shadow-gold ring-4 ring-background" />
              </motion.div>
            ))}
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-12 shadow-leaf"
        >
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">Grow with us</p>
          <h2 className="font-display text-4xl md:text-5xl mb-4">
            A seed of curiosity? <span className="text-gradient-gold italic">Plant it here.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Partnerships, careers, press, or just a hello — we read every message that reaches the root.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="mailto:hello@umshiv.com"
              className="px-7 py-3 rounded-full gradient-gold text-gold-foreground font-medium shadow-gold hover:scale-[1.03] transition-transform"
            >
              hello@umshiv.com
            </a>
            <a
              href="/hierarchy"
              className="px-7 py-3 rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition-colors"
            >
              Meet the people →
            </a>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
