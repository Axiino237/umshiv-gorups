import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { FloatingLeaves } from "@/components/FloatingLeaves";

export const Route = createFileRoute("/terms")({ component: TermsPage });

function TermsPage() {
  return (
    <div className="relative min-h-screen gradient-hero overflow-x-hidden pb-12">
      <SiteHeader />
      <FloatingLeaves count={6} />

      <section className="relative z-10 mx-auto max-w-4xl px-6 pt-36 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="text-gold/80 hover:text-gold text-sm flex items-center gap-2 mb-6 group transition-colors"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Home
          </Link>
          
          <h1 className="font-display text-4xl md:text-6xl text-gradient-gold mb-4">
            Terms & Conditions
          </h1>
          <p className="text-xs text-muted-foreground tracking-widest uppercase mb-12">
            Last Updated: May 19, 2026
          </p>

          <div className="glass rounded-3xl p-8 md:p-12 space-y-8 leading-relaxed text-muted-foreground">
            <div>
              <h2 className="font-display text-2xl text-gold mb-3">1. Agreement to Terms</h2>
              <p>
                By accessing or using the UMSHIV website, you agree to be bound by these Terms and Conditions. If you do not agree to all of these terms, please do not use our services or navigate this website.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-gold mb-3">2. Intellectual Property Rights</h2>
              <p>
                Unless otherwise indicated, this website, its source code, design elements, visuals, logos, and written content are the proprietary property of UMSHIV Group of Companies and are protected by applicable copyright, trademark, and intellectual property laws.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-gold mb-3">3. Use of Our Services</h2>
              <p>
                When inquiring about or using the services of our branches (Uma Travels, Axiino, Arise Design, Weds Arts, or The First Step Solution), you agree to provide accurate, complete, and current information. Any misuse of our online contact forms or digital tools is strictly prohibited.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-gold mb-3">4. Limitation of Liability</h2>
              <p>
                UMSHIV, its founders, and its entities shall not be held liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this website, its content, or the services referenced herein.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-gold mb-3">5. Governing Law</h2>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
