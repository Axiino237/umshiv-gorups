import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/SiteHeader";
import { FloatingLeaves } from "@/components/FloatingLeaves";

export const Route = createFileRoute("/privacy")({ component: PrivacyPage });

function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-xs text-muted-foreground tracking-widest uppercase mb-12">
            Last Updated: May 19, 2026
          </p>

          <div className="glass rounded-3xl p-8 md:p-12 space-y-8 leading-relaxed text-muted-foreground">
            <div>
              <h2 className="font-display text-2xl text-gold mb-3">1. Introduction</h2>
              <p>
                At UMSHIV Group of Companies, we value your trust and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and interact with our branches, including Uma Travels, Axiino, Arise Design, Weds Arts, and The First Step Solution.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-gold mb-3">2. Information We Collect</h2>
              <p>
                We may collect personal identification information from you in a variety of ways, including when you visit our site, fill out a contact form, and in connection with other services, features, or resources we make available. This may include your name, email address, phone number, and any company information you choose to provide.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-gold mb-3">3. How We Use Your Data</h2>
              <p>
                The information we collect is used to:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Provide and maintain our professional travel, digital, design, and event services.</li>
                <li>Process your inquiries and respond to your messages promptly.</li>
                <li>Improve our customer service and optimize website performance.</li>
                <li>Send periodic communication regarding project milestones or corporate announcements.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl text-gold mb-3">4. Information Sharing & Security</h2>
              <p>
                We do not sell, trade, or rent your personal identification information to third parties. We use secure data collection, storage, and processing practices, alongside industry-standard security measures, to protect against unauthorized access, alteration, disclosure, or destruction of your personal details.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-gold mb-3">5. Contact Us</h2>
              <p>
                If you have any questions or concerns regarding this Privacy Policy, please feel free to reach out to us at:
              </p>
              <p className="mt-2 text-gold font-medium">
                Email: hello@umshiv.com
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
