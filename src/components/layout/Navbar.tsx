"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useDisclosure } from "@/hooks/useDisclosure";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Sign In", href: "#" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const menu = useDisclosure(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menu.isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menu.isOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled ? "bg-brand-deep shadow-soft" : "bg-transparent",
      )}
    >
      <Container className="flex h-[76px] items-center justify-between">
        <a href="#top" aria-label="RemoteRecruit home" className="shrink-0">
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-heading text-[15px] font-medium text-white/90 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <Button variant="sky" size="sm" href="#" className="text-white">
            Sign Up
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={menu.toggle}
          aria-label={menu.isOpen ? "Close menu" : "Open menu"}
          aria-expanded={menu.isOpen}
          className="grid h-10 w-10 place-items-center rounded-lg text-white md:hidden"
        >
          <div className="relative h-4 w-6">
            <span
              className={cn(
                "absolute left-0 top-0 h-0.5 w-6 rounded-full bg-white transition-all duration-300",
                menu.isOpen && "top-1.5 rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1.5 h-0.5 w-6 rounded-full bg-white transition-all duration-300",
                menu.isOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-3 h-0.5 w-6 rounded-full bg-white transition-all duration-300",
                menu.isOpen && "top-1.5 -rotate-45",
              )}
            />
          </div>
        </button>
      </Container>

      <AnimatePresence>
        {menu.isOpen && (
          <motion.nav
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="bg-brand-deep px-6 pb-8 pt-2 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={menu.close}
                  className="font-heading text-lg font-medium text-white/90"
                >
                  {link.label}
                </a>
              ))}
              <Button variant="sky" href="#" onClick={menu.close} fullWidth className="text-white">
                Sign Up
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
