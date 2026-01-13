import Link from "next/link"
import Image from "next/image"
import { Twitter, Send, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative py-16 md:py-24 border-t border-border/50 bg-gradient-to-b from-background to-secondary/10" style={{ maxWidth: "100vw", overflowX: "hidden" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/mybuilders-icon.svg"
                  alt="MyBuilders"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex items-baseline gap-0">
                <span className="text-foreground font-semibold text-xl tracking-tight">MY</span>
                <span className="text-foreground font-normal text-xl tracking-tight">Builders</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-xs">
              {"Malaysia's Web3 builders community. Empowering 500+ founders and builders across Southeast Asia."}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-secondary/50 border border-border/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary hover:border-primary/50 transition-all duration-300"
                aria-label="Follow on X"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-secondary/50 border border-border/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary hover:border-primary/50 transition-all duration-300"
                aria-label="Join on Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-secondary/50 border border-border/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary hover:border-primary/50 transition-all duration-300"
                aria-label="Follow on Linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-foreground font-semibold mb-5 text-sm uppercase tracking-wider">Community</h4>
            <ul className="space-y-3.5">
              <li>
                <Link
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-muted-foreground group-hover:bg-primary transition-colors" />
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#what-we-do"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-muted-foreground group-hover:bg-primary transition-colors" />
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="#ecosystem"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-muted-foreground group-hover:bg-primary transition-colors" />
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="#team"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-muted-foreground group-hover:bg-primary transition-colors" />
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-muted-foreground group-hover:bg-primary transition-colors" />
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-foreground font-semibold mb-5 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3.5">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-muted-foreground group-hover:bg-primary transition-colors" />
                  Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-muted-foreground group-hover:bg-primary transition-colors" />
                  Passport
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-muted-foreground group-hover:bg-primary transition-colors" />
                  Members
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-muted-foreground group-hover:bg-primary transition-colors" />
                  Apply Today
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-5 text-sm uppercase tracking-wider">Get in Touch</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@mybuilders.my"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-2.5 group"
                >
                  <Mail className="w-4 h-4 group-hover:text-primary transition-colors" />
                  <span>hello@mybuilders.my</span>
                </a>
              </li>
              <li>
                <span className="text-muted-foreground text-sm inline-flex items-center gap-2.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Kuala Lumpur, Malaysia
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-muted-foreground text-sm">© 2026 MyBuilders Malaysia. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
              Terms
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
