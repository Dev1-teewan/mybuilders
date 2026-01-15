import Link from "next/link";
import Image from "next/image";
import { Send, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="relative py-8 border-t border-border/50 bg-gradient-to-b from-background to-secondary/10"
      style={{ maxWidth: "100vw", overflowX: "hidden" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop: 2-line layout | Mobile: 3-line layout */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-0">
          {/* Line 1 Mobile: Logo Center | Desktop: Logo Left */}
          <Link
            href="/"
            className="inline-flex items-center gap-3 group justify-center md:justify-start"
          >
            <div className="relative w-10 h-10 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/mybuilders-icon.svg"
                alt="MyBuilders"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex items-baseline gap-0">
              <span className="text-foreground font-semibold text-lg md:text-lg tracking-tight">
                MY
              </span>
              <span className="text-foreground font-normal text-lg md:text-lg tracking-tight">
                Builders
              </span>
            </div>
          </Link>

          {/* Line 2 Mobile: Social Links Center | Desktop: Social Links Right */}
          <div className="flex items-center gap-3 justify-center md:justify-end">
            <div className="w-10 h-10 rounded-xl bg-secondary/50 border border-border/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary hover:border-primary/50 transition-all duration-300 cursor-pointer">
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-label="X (Twitter)"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </div>
            <div className="w-10 h-10 rounded-xl bg-secondary/50 border border-border/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary hover:border-primary/50 transition-all duration-300 cursor-pointer">
              <Send className="w-4 h-4" />
            </div>
            <div className="w-10 h-10 rounded-xl bg-secondary/50 border border-border/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary hover:border-primary/50 transition-all duration-300 cursor-pointer">
              <Linkedin className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Line 3 Mobile: Copyright Center | Desktop: Copyright Center */}
        <div className="text-center mt-6">
          <p className="text-muted-foreground/60 text-xs">
            © 2026 MyBuilders Malaysia.
            <br className="md:hidden" /> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
