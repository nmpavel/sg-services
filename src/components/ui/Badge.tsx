import { cn } from "@/lib/utils";

/** Sky pill label sitting above feature/section headings. */
export function Badge({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-badge px-4 py-1.5 font-heading " +
          "text-[13px] font-semibold text-badge-text",
        className,
      )}
    >
      {children}
    </span>
  );
}
