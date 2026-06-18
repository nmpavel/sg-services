import { Monogram } from "@/components/brand/Monogram";
import { cn } from "@/lib/utils";

/**
 * Lockup: angular monogram + stacked "Remote / Recruit" wordmark.
 * Used on dark backgrounds (navbar + footer) — "Remote" in sky, "Recruit" white.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Monogram className="h-9 w-auto" />
      <span className="font-heading text-[22px] font-semibold leading-[0.95] tracking-tight">
        <span className="block text-logo-cyan">Remote</span>
        <span className="block text-white">Recruit</span>
      </span>
    </span>
  );
}
