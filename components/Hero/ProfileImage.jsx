"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Atom, Database, Server } from "lucide-react";
import { heroData } from "@/data/heroData";
import { floatingBadgeAnimation } from "./animations";

const badgeIcons = {
  atom: Atom,
  server: Server,
  database: Database,
};

const badgePositions = {
  react: "left-0 top-[22%] sm:-left-3 lg:-left-7",
  node: "right-0 top-[45%] sm:-right-3 lg:-right-7",
  mongodb: "bottom-[20%] left-2 sm:-left-2 lg:left-0",
};

export default function ProfileImage() {
  const [imageFailed, setImageFailed] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-[3/4] w-full">
      {/* Soft plum circle sits behind the transparent portrait. */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[17%] aspect-square w-[88%] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#4a1d4f] via-[#7b2d6e] to-[#c04a8f] opacity-90 shadow-[0_0_100px_rgba(192,74,143,0.28)]"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[22%] aspect-square w-[72%] -translate-x-1/2 rounded-full bg-[#c04a8f]/25 blur-3xl"
      />

      {/* Show initials instead of a broken image if the PNG cannot load. */}
      {imageFailed ? (
        <div className="absolute inset-0 z-10 grid place-items-center">
          <div className="grid aspect-square w-[72%] place-items-center rounded-full bg-gradient-to-br from-[#4a1d4f] via-[#7b2d6e] to-[#c04a8f] shadow-[0_0_80px_rgba(192,74,143,0.3)]">
            <span className="font-heading text-5xl font-extrabold tracking-[-0.06em] text-white sm:text-6xl">
              {heroData.initials}
            </span>
          </div>
        </div>
      ) : (
        <Image
          src="/profile.png"
          width={600}
          height={800}
          preload
          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 340px, 470px"
          alt={heroData.photoAlt}
          onError={() => setImageFailed(true)}
          style={{
            maskImage: "linear-gradient(to top, transparent 0%, black 20%)",
            WebkitMaskImage:
              "linear-gradient(to top, transparent 0%, black 20%)",
          }}
          className="absolute inset-0 z-10 h-full w-full object-contain object-bottom drop-shadow-[0_24px_35px_rgba(0,0,0,0.24)]"
        />
      )}

      {heroData.floatingBadges.map((badge, index) => {
        const Icon = badgeIcons[badge.icon] ?? Atom;

        return (
          <motion.div
            key={badge.id}
            animate={shouldReduceMotion ? undefined : floatingBadgeAnimation.animate}
            transition={{
              ...floatingBadgeAnimation.transition,
              delay: index * 0.55,
            }}
            className={`absolute z-30 hidden items-center gap-2 rounded-full border border-line bg-surface/90 px-3 py-2 text-[11px] font-semibold text-ink shadow-[0_12px_30px_rgba(16,16,16,0.12)] backdrop-blur-md sm:flex ${badgePositions[badge.position]}`}
          >
            <Icon aria-hidden="true" className="size-3.5 text-[#c04a8f]" />
            {badge.label}
          </motion.div>
        );
      })}
    </div>
  );
}
