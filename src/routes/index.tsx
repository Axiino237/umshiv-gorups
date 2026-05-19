import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { FloatingLeaves } from "@/components/FloatingLeaves";
import { companies } from "@/data/companies";
import logo from "@/assets/umshiv-logo.png";

export const Route = createFileRoute("/")({ component: Index });

function Index() {
  return (
    <div className="relative min-h-screen gradient-hero overflow-x-hidden max-w-full">
      <SiteHeader />
      <FloatingLeaves />

      {/* HERO */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pt-28 md:pt-40 pb-24 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold tracking-[0.3em] text-xs uppercase mb-2">Founder: Vijay</p>
          <p className="text-gold tracking-[0.3em] text-xs uppercase mb-6 opacity-60">One Root · Five Branches</p>
          <h1 className="font-display text-4xl md:text-7xl leading-[1.05] mb-6">
            Growing <span className="text-gradient-gold italic">together</span>,
            <br /> rooted in trust.
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-lg mb-10">
            UMSHIV is a family of companies cultivating travel, digital solutions,
            creative branding, wedding design, and event infrastructure — branches of a single living vision.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/companies"
              className="px-6 md:px-7 py-3 rounded-full gradient-gold text-gold-foreground font-medium shadow-gold hover:scale-[1.03] transition-transform text-sm md:text-base"
            >
              Explore the Tree
            </Link>
            <Link
              to="/hierarchy"
              className="px-6 md:px-7 py-3 rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition-colors text-sm md:text-base"
            >
              Org Hierarchy
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <div className="absolute inset-0 rounded-full blur-3xl bg-gold/20" />
          <motion.img
            src={logo}
            alt="UMSHIV logo"
            className="relative w-[240px] md:w-[420px] max-w-full drop-shadow-2xl"
            animate={{ y: [0, -15, 0], rotate: [-2, 2, -2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* STATS */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 grid md:grid-cols-4 gap-6">
        {[
          { k: "5", l: "Companies" },
          { k: "16+", l: "Years of Roots" },
          { k: "1,200+", l: "Team Members" },
          { k: "12", l: "States Reached" },
        ].map((s, i) => (
          <motion.div
            key={s.l}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-2xl p-8"
          >
            <div className="font-display text-5xl text-gradient-gold">{s.k}</div>
            <div className="text-muted-foreground mt-2 tracking-wider uppercase text-xs">{s.l}</div>
          </motion.div>
        ))}
      </section>

      {/* OUR STORY */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold tracking-[0.3em] text-xs uppercase mb-4">Our Story</p>
          <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight">
            From a single seed in 2008 to a <span className="text-gradient-gold italic">family of five</span>.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            What began as one bold first step has grown into a quiet
            constellation of businesses — each one a branch nourished by the
            same roots: patience, craft and kinship.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Today UMSHIV spans travel, technology, graphic design, wedding events, and event infrastructure.
            Different industries, one philosophy: grow slowly, grow together,
            grow well.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl p-10 space-y-6"
        >
          {[
            { y: "2008", t: "Roots planted", d: "Uma Travels sets the journey in motion." },
            { y: "2023", t: "Digital canopy", d: "Axiino leads the group as the core provider for Web, App, and AI solutions." },
            { y: "2024", t: "New branch", d: "Arise Design studio is founded for creative graphic solutions." },
            { y: "2025", t: "Creative bloom", d: "Weds Arts begins designing breathtaking wedding stages." },
            { y: "2026", t: "Strategic growth", d: "The First Step Solution brings event stall expertise to the family." },
          ].map((m) => (
            <div key={m.y} className="flex gap-5 items-start">
              <div className="font-display text-2xl text-gold w-16 shrink-0">{m.y}</div>
              <div>
                <div className="font-medium">{m.t}</div>
                <div className="text-muted-foreground text-sm">{m.d}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* BRANCHES */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-gold tracking-[0.3em] text-xs uppercase mb-4">The Five Branches</p>
          <h2 className="font-display text-4xl md:text-5xl">A family of companies</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl p-7 hover:shadow-gold transition-shadow group"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-gold/80 mb-3">{c.industry}</div>
              <h3 className="font-display text-2xl mb-2">{c.name}</h3>
              <p className="italic text-muted-foreground text-sm mb-4">"{c.tagline}"</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{c.description}</p>
              <div className="flex justify-between items-center text-xs text-muted-foreground">
                <span>Est. {c.founded}</span>
                <Link to="/companies" className="text-gold group-hover:translate-x-1 transition-transform">Explore →</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className="text-center mb-14">
          <p className="text-gold tracking-[0.3em] text-xs uppercase mb-4">What We Stand For</p>
          <h2 className="font-display text-4xl md:text-5xl">Principles that root us</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { t: "Patience", d: "Trees take seasons. So do real businesses." },
            { t: "Stewardship", d: "Care for details, people and capital alike." },
            { t: "Craft", d: "Every product made with intent and pride." },
            { t: "Kinship", d: "Companies as family, partners as kin." },
          ].map((v, i) => (
            <motion.div
              key={v.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="font-display text-xl text-gold mb-2">{v.t}</div>
              <div className="text-sm text-muted-foreground">{v.d}</div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* CTA */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-12 md:p-16 text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl mb-4">
            Ready to <span className="text-gradient-gold italic">grow with us?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Whether you are a partner, a customer, or future kin — there's
            always room under the canopy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-7 py-3 rounded-full gradient-gold text-gold-foreground font-medium shadow-gold hover:scale-[1.03] transition-transform">
              Get in touch
            </Link>
            <Link to="/hierarchy" className="px-7 py-3 rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition-colors">
              Meet the people
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
