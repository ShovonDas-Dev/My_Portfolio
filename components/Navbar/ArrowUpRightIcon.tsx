type ArrowUpRightIconProps = {
  className?: string;
};

export default function ArrowUpRightIcon({
  className,
}: ArrowUpRightIconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4 12 12 4M5 4h7v7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
