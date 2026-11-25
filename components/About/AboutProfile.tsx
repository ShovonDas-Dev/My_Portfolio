"use client";

import type { ReactElement } from "react";
import { motion } from "framer-motion";
import { aboutData, type AboutSocialId } from "@/data/about";
import { profileRevealVariants } from "./motion";

type SocialIconProps = {
  className?: string;
};

type SocialIcon = (props: SocialIconProps) => ReactElement;

function GitHubIcon({ className }: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M12 .5C5.73.5.9 5.33.9 11.6c0 4.92 3.19 9.09 7.62 10.56.56.1.76-.24.76-.54v-2.1c-3.1.67-3.75-1.32-3.75-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.47-.28-5.07-1.23-5.07-5.49 0-1.21.43-2.2 1.14-2.98-.11-.28-.5-1.41.11-2.94 0 0 .93-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.22 2.66.11 2.94.71.78 1.14 1.77 1.14 2.98 0 4.27-2.61 5.2-5.09 5.48.4.34.75 1.02.75 2.06v3.05c0 .3.2.65.77.54a11.1 11.1 0 0 0 7.6-10.56C23.1 5.33 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon({ className }: SocialIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45Z" />
    </svg>
  );
}

const socialIcons: Record<AboutSocialId, SocialIcon> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
};

export default function AboutProfile() {
  return (
    <motion.aside
      variants={profileRevealVariants}
      aria-label={aboutData.profile.label}
      className="relative"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 select-none font-heading text-[7rem] font-extrabold leading-none tracking-[-0.08em] text-ink/[0.045] sm:text-[9rem]"
      >
        {aboutData.profile.initials}
      </span>

      <div className="relative border-t border-line pt-5">
        <div className="flex items-center gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            <span aria-hidden="true" className="text-accent">
              [
            </span>{" "}
            {aboutData.profile.label} / {aboutData.profile.index}{" "}
            <span aria-hidden="true" className="text-accent">
              ]
            </span>
          </p>

          <span aria-hidden="true" className="h-px flex-1 bg-line" />
        </div>

        <h3 className="mt-8 font-heading text-3xl font-extrabold leading-tight tracking-[-0.045em] text-ink sm:text-4xl">
          {aboutData.profile.name}
          <span className="text-accent">.</span>
        </h3>

        <p className="mt-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
          {aboutData.profile.role}
        </p>

        <dl className="mt-9 border-b border-line">
          {aboutData.profile.details.map((detail) => (
            <div
              key={detail.id}
              className="group grid gap-1 border-t border-line py-4 sm:grid-cols-[128px_1fr] sm:items-baseline sm:gap-4"
            >
              <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted transition-colors duration-200 group-hover:text-accent">
                {detail.label}
              </dt>
              <dd className="text-sm leading-6 text-ink/85">
                {detail.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-7 flex items-center justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            {aboutData.socialsLabel}
          </p>

          <ul className="flex items-center gap-2.5">
            {aboutData.socials.map((social) => {
              const Icon = socialIcons[social.id];

              return (
                <li key={social.id}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${social.label} (opens in a new tab)`}
                    className="inline-flex size-10 items-center justify-center rounded-full border border-line bg-surface/60 text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent focus-visible:outline-accent"
                  >
                    <Icon className="size-[17px]" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.aside>
  );
}
