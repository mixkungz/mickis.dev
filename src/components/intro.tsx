"use client";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";
import { BubbleBackground } from "@/components/animate-ui/components/backgrounds/bubble";
import { useEffect, useState } from "react";

export function Intro() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const bubbleColors = theme === "dark"
    ? {
        first: '80,80,90',      // subtle dark blue-gray
        second: '60,60,70',     // darker gray
        third: '70,75,85',      // subtle blue-tinted gray
        fourth: '50,50,55',     // very dark gray
        fifth: '65,65,75',      // muted gray
        sixth: '75,80,90',      // subtle cool gray
      }
    : {
        first: '235,240,250',   // very light blue-tinted
        second: '245,245,248',  // very light gray
        third: '240,242,250',   // subtle light blue
        fourth: '250,250,252',  // almost white
        fifth: '242,244,250',   // light cool gray
        sixth: '238,240,248',   // light blue-gray
      };

  return (
    <BubbleBackground
      className="flex min-h-[60vh] h-[60vh] w-full flex-col items-center justify-center !bg-gradient-to-br !from-zinc-100 !via-neutral-50 !to-zinc-50 dark:!from-zinc-950 dark:!via-zinc-900 dark:!to-neutral-950"
      colors={bubbleColors}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 flex flex-col items-center gap-8 px-4 text-center"
      >
        <div className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl text-foreground">
          <LayoutTextFlip
            text="Mick is"
            words={["Dev", "Software Engineer 💻", "Shiba Enthusiast 🐕", "Techie 💾", "Liverpool Supporter ⚽"]}
          />
        </div>
        <p className="max-w-3xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-200 sm:text-xl">
          <motion.span
            className="mr-1 inline-block origin-[70%_70%]"
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1
            }}
          >
            👋🏻
          </motion.span>
          Howdy! I'm Mick, a fullstack software engineer based in Austin, TX 🇺🇸
        </p>
      </motion.div>
    </BubbleBackground>
  );
}
