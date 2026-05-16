import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { FloatingLeaves } from "@/components/FloatingLeaves";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  return (
    <div className="relative min-h-screen gradient-hero overflow-hidden">
      <SiteHeader />
      <FloatingLeaves count={10} />

      <section className="relative z-10 mx-auto max-w-5xl px-6 pt-36 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-3">Reach the roots</p>
          <h1 className="font-display text-5xl md:text-7xl">Let's grow together</h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="glass rounded-3xl p-8 space-y-5"
            onSubmit={(e) => { e.preventDefault(); alert("Thank you! We'll be in touch."); }}
          >
            <div>
              <label className="text-xs uppercase tracking-widest text-gold/80">Name</label>
              <input required className="w-full mt-2 bg-transparent border-b border-gold/30 focus:border-gold outline-none py-2" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-gold/80">Email</label>
              <input required type="email" className="w-full mt-2 bg-transparent border-b border-gold/30 focus:border-gold outline-none py-2" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-gold/80">Message</label>
              <textarea required rows={4} className="w-full mt-2 bg-transparent border-b border-gold/30 focus:border-gold outline-none py-2 resize-none" />
            </div>
            <button className="w-full px-6 py-3 rounded-full gradient-gold text-gold-foreground font-medium shadow-gold hover:scale-[1.02] transition-transform">
              Send message
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {[
              { l: "Headquarters", v: "UMSHIV House, Mumbai, India" },
              { l: "Email", v: "hello@umshiv.com" },
              { l: "Phone", v: "+91 98765 00000" },
              { l: "Hours", v: "Mon–Sat · 9:30 to 18:30 IST" },
            ].map((b) => (
              <div key={b.l} className="glass rounded-2xl p-6">
                <div className="text-xs uppercase tracking-[0.25em] text-gold/80">{b.l}</div>
                <div className="font-display text-2xl mt-1">{b.v}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
