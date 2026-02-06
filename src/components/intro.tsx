"use client";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";

export function Intro() {
  return (
    <section className="relative overflow-hidden bg-muted/5 py-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_0%,oklch(from_var(--primary)_l_c_h_/_0.16),transparent_60%)]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
        <div className="grid items-center gap-10">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs font-medium text-muted-foreground mb-2">
              <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
              Open to new opportunities!
            </div>

            <h1 className="h-auto">
              <LayoutTextFlip
                text="Mick is"
            words={["Dev", "Software Engineer", "Full-stack Developer", "Shiba Enthusiast", "Techie", "Liverpool Supporter"]}
              />
            </h1>
            
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              <motion.span
                className="mr-2 inline-block origin-[70%_70%]"
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                👋🏻
              </motion.span>
              Howdy! I'm Mick, a fullstack software engineer based in Austin, TX 🇺🇸
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex h-10 items-center justify-center rounded-full bg-brand-gradient px-5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Let's work together
              </a>
              {/* <a
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-full border border-border bg-background px-5 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Download CV
              </a> */}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-full border border-border bg-muted/40 px-3 py-1.5 text-xs font-medium text-foreground">React</span>
              <span className="rounded-full border border-border bg-muted/40 px-3 py-1.5 text-xs font-medium text-foreground">Node.js</span>
              <span className="rounded-full border border-border bg-muted/40 px-3 py-1.5 text-xs font-medium text-foreground">Spring Boot</span>
              <span className="rounded-full border border-border bg-muted/40 px-3 py-1.5 text-xs font-medium text-foreground">Django</span>
              <span className="rounded-full border border-border bg-muted/40 px-3 py-1.5 text-xs font-medium text-foreground">ASP.NET</span>
              <span className="rounded-full border border-border bg-muted/40 px-3 py-1.5 text-xs font-medium text-foreground">Automation Test</span>
            </div>
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  );
}
