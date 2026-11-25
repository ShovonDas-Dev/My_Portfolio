import type { Technology } from "@/data/expertise";

import TechnologyIcon from "./TechnologyIcon";

type TechnologyItemSize = "sm" | "md" | "lg" | "xl";

type TechnologyItemProps = {
  technology: Technology;
  size?: TechnologyItemSize;
  showLabel?: boolean;
  className?: string;
};

const tileSizes: Record<TechnologyItemSize, string> = {
  sm: "size-9",
  md: "size-12",
  lg: "size-16 sm:size-[4.5rem]",
  xl: "size-24 sm:size-28",
};

const iconSizes: Record<TechnologyItemSize, string> = {
  sm: "size-[18px]",
  md: "size-6",
  lg: "size-8 sm:size-9",
  xl: "size-14 sm:size-16",
};

const labelSizes: Record<TechnologyItemSize, string> = {
  sm: "text-[9px]",
  md: "text-[10px]",
  lg: "text-[10px]",
  xl: "text-xs",
};

export default function TechnologyItem({
  technology,
  size = "md",
  showLabel = true,
  className = "",
}: TechnologyItemProps) {
  return (
    <div className={`group/tech inline-flex items-center gap-2.5 ${className}`}>
      <span
        className={`grid shrink-0 place-items-center border border-line bg-surface text-ink shadow-sm transition-[transform,border-color,box-shadow] duration-300 group-hover/tech:-translate-y-0.5 group-hover/tech:border-accent/50 group-hover/tech:shadow-[0_10px_28px_rgba(192,74,143,0.14)] ${tileSizes[size]}`}
      >
        <TechnologyIcon
          id={technology.icon}
          className={`${iconSizes[size]} transition-transform duration-300 group-hover/tech:scale-110`}
        />
      </span>
      {showLabel ? (
        <span
          className={`font-mono font-medium uppercase tracking-[0.14em] ${labelSizes[size]}`}
        >
          {technology.name}
        </span>
      ) : (
        <span className="sr-only">{technology.name}</span>
      )}
    </div>
  );
}
