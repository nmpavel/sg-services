"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useDisclosure } from "@/hooks/useDisclosure";
import type { FaqEntry } from "@/lib/types";
import { cn } from "@/lib/utils";

// Accordion item, collapsed by default and keyboard-accessible
// (native button + aria-expanded/aria-controls).
export function FaqItem({ entry }: { entry: FaqEntry }) {
  const { isOpen, toggle } = useDisclosure(false);
  const panelId = `faq-panel-${entry.id}`;
  const buttonId = `faq-button-${entry.id}`;

  return (
    <div className="border-b border-slate-200/80 py-2">
      <h3>
        <button
          id={buttonId}
          type="button"
          onClick={toggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-6 py-5 text-left"
        >
          <span className="font-heading text-[clamp(1.05rem,1.6vw,1.3rem)] font-semibold text-heading">
            {entry.question}
          </span>
          <span
            className={cn(
              "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-badge/60 text-brand-blue transition-transform duration-300",
              isOpen && "rotate-180",
            )}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-[52rem] pb-6 pr-12 text-[16px] leading-[1.8] text-body-soft">
              {entry.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
