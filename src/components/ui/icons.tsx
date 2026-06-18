import { cn } from "@/lib/utils";

/**
 * Included ✓ — gradient circle + white check.
 * Mirrors design/Active Icon.svg (brand gradient #52B4DA → #1E3E85, white glyph).
 */
export function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-6", className)}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="24" fill="url(#rr-check-grad)" />
      <path
        d="M32.3178 16.9548C33.2637 16.0234 34.7855 16.035 35.717 16.9809C36.5768 17.854 36.6329 19.2179 35.8925 20.1551L35.6909 20.38L22.257 33.6091C21.3751 34.4775 19.9948 34.5249 19.0584 33.7652L18.8341 33.5585L12.8929 27.3512C11.975 26.3922 12.0083 24.8707 12.9673 23.9528C13.8525 23.1055 15.2171 23.0687 16.1437 23.8224L16.3657 24.0272L20.621 28.4711L32.3178 16.9548Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="rr-check-grad"
          x1="-22.23"
          y1="29.85"
          x2="28"
          y2="75.98"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#52B4DA" />
          <stop offset="1" stopColor="#1E3E85" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** Excluded ✕ — flat gray circle + white cross (disabled plan feature). */
export function ExcludeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-6", className)}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="24" fill="#9CA3AF" />
      <path
        d="M17 17l14 14M31 17L17 31"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
