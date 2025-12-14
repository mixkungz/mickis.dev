"use client";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";
import { BubbleBackground } from "@/components/animate-ui/components/backgrounds/bubble";

export function Intro() {
  return (
    <BubbleBackground className="flex min-h-[60vh] h-[60vh] w-full flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 flex flex-col items-center gap-8 px-4 text-center"
      >
        <div className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl text-white">
          <motion.span 
            className="mr-3 inline-block origin-[70%_70%]"
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
          <LayoutTextFlip
            text="Mick is"
            words={["Dev", "Software Engineer", "Shiba Enthusiast", "Gadget Lover", "Anime Fan", "Tech Explorer"]}
          />
        </div>
        <p className="max-w-3xl text-lg leading-relaxed text-neutral-200 sm:text-xl">
          Howdy! I'm Mick, a craftsmanship software engineer based in Austin, TX 🇺🇸
        </p>
      </motion.div>
    </BubbleBackground>
  );
}
