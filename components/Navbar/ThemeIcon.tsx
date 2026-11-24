export type Theme = "light" | "dark";

type ThemeIconProps = {
  theme: Theme;
};

export default function ThemeIcon({ theme }: ThemeIconProps) {
  if (theme === "dark") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-[17px] w-[17px]"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-[17px] w-[17px]"
    >
      <path d="M20.1 15.1A8.5 8.5 0 0 1 8.9 3.9a8.5 8.5 0 1 0 11.2 11.2Z" />
    </svg>
  );
}
