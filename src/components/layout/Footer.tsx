import { Logo } from "@/components/brand/Logo";
import { Monogram } from "@/components/brand/Monogram";
import { Container } from "@/components/ui/Container";
import { SocialIcons } from "@/components/layout/SocialIcons";
import { socialLinks } from "@/lib/data/social";

// Extra top padding leaves room for the pricing cards that overlap from above.
export function Footer() {
  return (
    <footer className="bg-brand-deep relative overflow-hidden text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="absolute right-[-4rem] top-10 h-72 w-72 rounded-full bg-white/[0.04]" />
        <span className="absolute bottom-[-6rem] left-1/4 h-80 w-80 rounded-full bg-white/[0.03]" />
      </div>

      <Container className="relative z-10 pt-44">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <a href="#top" aria-label="RemoteRecruit home">
            <Logo />
          </a>
          <SocialIcons links={socialLinks} />
        </div>

        <div className=" border-t border-white/10 flex items-center justify-center gap-6 py-4 mt-16  ">
          <Monogram className="h-10 w-auto opacity-90" />
        </div>
      </Container>
    </footer>
  );
}
