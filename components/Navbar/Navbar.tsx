"use client";

import { useEffect, useState } from "react";
import ArrowUpRightIcon from "./ArrowUpRightIcon";
import MenuIcon from "./MenuIcon";
import ThemeIcon, { type Theme } from "./ThemeIcon";

type NavLink = {
  label: string;
  id: string;
};

const NAV_LINKS: NavLink[] = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Journey", id: "journey" },
  { label: "Contact", id: "contact" },
];

const CTA_LABEL = "Let's talk ";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  // Restore the saved theme, or use the system preference on first visit.
  // The state update is deferred so server and client HTML start identical.
  useEffect(() => {
    const savedTheme = window.localStorage.getItem("shovon-theme");
    const systemTheme: Theme = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches
      ? "dark"
      : "light";
    const initialTheme: Theme =
      savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : systemTheme;

    document.documentElement.dataset.theme = initialTheme;

    const timer = window.setTimeout(() => {
      setTheme(initialTheme);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  // Add the blurred background once the page has scrolled a little.
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keep the active link in sync with the section in the viewport.
  useEffect(() => {
    const sections: HTMLElement[] = [];

    for (const link of NAV_LINKS) {
      const section = document.getElementById(link.id);

      if (section) {
        sections.push(section);
      }
    }

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter((entry) => entry.isIntersecting);

        if (visibleSections.length === 0) {
          return;
        }

        const mostVisibleSection = visibleSections.sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio,
        )[0];

        setActiveSection(mostVisibleSection.target.id);
      },
      {
        rootMargin: "-22% 0px -62% 0px",
        threshold: [0, 0.15, 0.35],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Close the mobile menu with Escape or when the desktop layout returns.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 740) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;

    try {
      window.localStorage.setItem("shovon-theme", nextTheme);
    } catch {
      // Ignore storage errors, such as in private browsing.
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 border-b font-heading transition-[background-color,border-color,box-shadow] duration-[250ms] ${
        isScrolled
          ? "border-line bg-canvas/[0.88] shadow-[0_5px_24px_rgba(0,0,0,0.024)] backdrop-blur-[18px]"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex min-h-[76px] items-center justify-between gap-6 max-[740px]:min-h-[68px]">
        <a
          href="#home"
          onClick={closeMenu}
          aria-label="Shovon.dev, home"
          className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-[15px] font-extrabold leading-[1.7] tracking-[-0.055em] text-ink"
        >
          <span className="text-accent">[</span>
          SHOVON.DEV
          <span className="text-accent">]</span>
        </a>

        <nav
          aria-label="Main navigation"
          className="flex items-center gap-[clamp(16px,2.4vw,30px)] max-[740px]:hidden max-[900px]:gap-[15px]"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                aria-current={isActive ? "location" : undefined}
                className={`relative py-[9px] text-xs font-semibold leading-[1.7] transition-colors duration-200 max-[900px]:text-[11px] ${
                  isActive ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 bottom-[3px] h-px origin-left bg-accent transition-transform duration-200 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-[11px]">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            title="Toggle color theme"
            className="inline-grid size-10 place-items-center rounded-full border border-line text-ink transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            <ThemeIcon theme={theme} />
          </button>

          <a
            href="#contact"
            className="inline-flex min-h-10 items-center justify-center gap-[11px] rounded-[3px] border border-transparent bg-accent px-4 text-xs font-bold leading-[1.7] tracking-[0.005em] text-white transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(255,87,51,0.2)] max-[740px]:hidden"
          >
            {CTA_LABEL}
            <ArrowUpRightIcon className="h-[15px] w-[15px]" />
          </a>

          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="hidden size-10 place-items-center rounded-full border border-line text-ink transition-colors duration-200 hover:border-accent hover:text-accent max-[740px]:inline-grid"
          >
            <MenuIcon isOpen={isMenuOpen} />
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
        className={`absolute inset-x-[10px] top-full grid border border-line bg-surface px-5 py-[10px] shadow-[var(--shadow)] transition-[opacity,transform] duration-[180ms] ease-out max-[740px]:grid hidden ${
          isMenuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        {NAV_LINKS.map((link) => {
          const isActive = activeSection === link.id;

          return (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={closeMenu}
              aria-current={isActive ? "location" : undefined}
              tabIndex={isMenuOpen ? 0 : -1}
              className="border-b border-line py-3 text-sm leading-[1.7] text-muted"
            >
              {link.label}
            </a>
          );
        })}

        <a
          href="#contact"
          onClick={closeMenu}
          tabIndex={isMenuOpen ? 0 : -1}
          className="inline-flex items-center gap-2 border-b border-transparent py-3 text-sm leading-[1.7] text-muted"
        >
          {CTA_LABEL}
          <ArrowUpRightIcon className="h-[15px] w-[15px]" />
        </a>
      </nav>
    </header>
  );
}
