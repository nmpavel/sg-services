import { Button } from "@/components/ui/Button";
import { CheckIcon, ExcludeIcon } from "@/components/ui/icons";
import type { Plan } from "@/lib/types";
import { cn } from "@/lib/utils";

/** Gradient flame accent shown on the Premium tier (inside a white circle). */
function PremiumMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden="true">
      <defs>
        <linearGradient
          id="rr-flame-a"
          x1="6"
          y1="2"
          x2="18"
          y2="22"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5FC6E6" />
          <stop offset="1" stopColor="#1C4078" />
        </linearGradient>
      </defs>
      <path
        d="M12 21.6c-3.6 0-6.5-2.6-6.5-6 0-2.6 1.6-4.4 3-6 .8-.9 1.2-1.7 1.1-3 .6.9 1.2 1.3 1.9.9-.2-2.6-.1-4.4 1-6.4 1 2 1.1 3.8.9 6.4.7.4 1.3 0 1.9-.9-.1 1.3.3 2.1 1.1 3 1.4 1.6 3 3.4 3 6 0 3.4-2.9 6-6.4 6Z"
        fill="url(#rr-flame-a)"
      />
      <g
        stroke="#D4F1FA"
        strokeWidth="0.7"
        fill="none"
        strokeLinecap="round"
        opacity="0.85"
      >
        <path d="M9.7 9.6C9 12 8.8 14.6 9.6 18" />
        <path d="M12 8.3C11.7 11.6 11.7 14.9 12 18.7" />
        <path d="M14.3 9.6C15 12 15.2 14.6 14.4 18" />
      </g>
    </svg>
  );
}

// One component renders both tiers; `highlighted` drives the emphasis and the
// filled vs. outline CTA.
export function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-[1.5rem] bg-white p-6 shadow-card transition-transform duration-300 hover:-translate-y-1 sm:p-8",
        plan.highlighted && "ring-1 ring-brand-sky/30",
      )}
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
        <div className="flex min-w-[9rem] flex-col items-center justify-center rounded-2xl bg-[#EAF0FF] px-6 py-9 text-center sm:w-44">
          {plan.highlighted ? (
            <>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-badge py-1 pl-1 pr-3.5 font-heading text-[13px] font-semibold text-badge-text">
                <span className="grid h-[22px] w-[22px] place-items-center rounded-full bg-white">
                  <PremiumMark />
                </span>
                {plan.name}
              </span>
              <span className="mt-4 font-heading text-[1.9rem] font-bold leading-none text-brand-blue">
                {plan.tagline}
              </span>
              {plan.priceNote && (
                <span className="mt-1.5 text-sm text-slate-400">
                  {plan.priceNote}
                </span>
              )}
            </>
          ) : (
            <>
              <span className="font-heading text-[2rem] font-bold leading-none text-[#5BC0E8]">
                {plan.name}
              </span>
              <span className="mt-2 font-heading text-base font-medium text-slate-400">
                {plan.tagline}
              </span>
            </>
          )}
        </div>

        <ul className="flex flex-1 flex-col justify-center gap-4">
          {plan.features.map((feature) => (
            <li key={feature.label} className="flex items-center gap-3">
              {feature.included ? (
                <CheckIcon className="h-[22px] w-[22px] shrink-0" />
              ) : (
                <ExcludeIcon className="h-[22px] w-[22px] shrink-0" />
              )}
              <span
                className={cn(
                  "text-[15px]",
                  feature.included
                    ? "font-medium text-heading"
                    : "text-excluded",
                )}
              >
                {feature.label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-8">
        <Button
          variant={plan.highlighted ? "filled" : "outline"}
          fullWidth
          href="#"
        >
          {plan.ctaLabel}
        </Button>
      </div>
    </div>
  );
}
