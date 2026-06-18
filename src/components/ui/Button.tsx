import { cn } from "@/lib/utils";
import type { ButtonVariant } from "@/lib/types";

type CommonProps = {
  variant?: ButtonVariant | "sky" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  /** Leading circular arrow (the "Get Started" CTA in the lavender band). */
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-[14px] font-heading font-semibold " +
  "transition-all duration-200 ease-out cursor-pointer select-none " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
  "focus-visible:ring-brand-sky disabled:pointer-events-none disabled:opacity-60";

const variants: Record<NonNullable<CommonProps["variant"]>, string> = {
  filled:
    "bg-button-primary text-white shadow-soft hover:-translate-y-0.5 hover:shadow-card active:translate-y-0",
  outline:
    "border-2 border-brand-blue text-brand-blue bg-transparent hover:bg-brand-blue hover:text-white",
  sky: "bg-[#5BA8CE] text-[#1f4e8c] hover:bg-[#6fb6d8] hover:-translate-y-0.5 shadow-sm",
  // Borderless CTA: navy text + solid cyan arrow circle on the lavender band.
  ghost: "group bg-transparent text-brand-navy hover:text-brand-navy",
};

const sizes: Record<NonNullable<CommonProps["size"]>, string> = {
  sm: "h-9 px-5 text-sm",
  md: "h-11 px-7 text-[15px]",
  lg: "h-[58px] px-9 text-base",
};

function ArrowCircle({ solid = false }: { solid?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "grid place-items-center rounded-full text-white transition-transform duration-200",
        solid
          ? "h-[52px] w-[52px] bg-brand-sky shadow-soft group-hover:scale-105"
          : "h-9 w-9 bg-white/20",
      )}
    >
      <svg
        width={solid ? 22 : 18}
        height={solid ? 22 : 18}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M4 12h14M13 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function Button({
  variant = "filled",
  size = "md",
  fullWidth,
  arrow,
  className,
  children,
  ...rest
}: ButtonProps) {
  const isGhost = variant === "ghost";
  const classes = cn(
    base,
    variants[variant],
    isGhost ? "gap-4 text-[17px]" : sizes[size],
    !isGhost && arrow && "pl-2 pr-7",
    fullWidth && "w-full",
    className,
  );

  const content = (
    <>
      {arrow && <ArrowCircle solid={isGhost} />}
      <span>{children}</span>
    </>
  );

  if ("href" in rest && rest.href !== undefined) {
    const { href, ...anchorRest } = rest as ButtonAsLink;
    return (
      <a href={href} className={classes} {...anchorRest}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonAsButton)}>
      {content}
    </button>
  );
}
