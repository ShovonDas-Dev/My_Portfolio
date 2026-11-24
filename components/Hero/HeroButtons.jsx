"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { heroData } from "@/data/heroData";

const buttonIcons = {
  arrow: ArrowUpRight,
  download: Download,
  mail: Mail,
};

const buttonStyles = {
  primary:
    "bg-gradient-to-r from-[#7b2d6e] via-[#a63d82] to-[#c04a8f] text-white shadow-[0_14px_35px_rgba(123,45,110,0.28)] hover:shadow-[0_20px_45px_rgba(192,74,143,0.35)]",
  secondary:
    "border border-line bg-surface/70 text-ink backdrop-blur hover:border-[#c04a8f]/50 hover:bg-surface",
  ghost:
    "text-muted hover:bg-[#c04a8f]/10 hover:text-ink",
};

// Each button shares the same hover and tap interaction.
export default function HeroButtons() {
  return (
    <div className="flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
      {heroData.buttons.map((button) => {
        const Icon = buttonIcons[button.icon] ?? ArrowUpRight;

        return (
          <motion.a
            key={button.id}
            href={button.href}
            download={button.download ? "" : undefined}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className={`inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-[color,background-color,border-color,box-shadow] duration-200 focus-visible:outline-[#c04a8f] sm:w-auto ${buttonStyles[button.variant]}`}
          >
            {button.label}
            <Icon aria-hidden="true" className="size-4" />
          </motion.a>
        );
      })}
    </div>
  );
}
