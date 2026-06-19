import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section
      id="top"
      className="bg-brand-deep relative overflow-hidden text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <span className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/[0.04]" />
        <span className="absolute right-[-6rem] top-24 h-96 w-96 rounded-full bg-white/[0.05]" />
        <span className="absolute bottom-24 left-1/3 h-64 w-64 rounded-full bg-white/[0.03]" />
      </div>

      <Container className="relative z-10 flex flex-col items-center pb-44 pt-40 text-center sm:pb-52 sm:pt-44">
        {/* Above-the-fold (LCP) content paints immediately — no opacity gating,
            so Largest Contentful Paint is not delayed behind client hydration. */}
        <h1 className="font-heading text-[clamp(2.4rem,5.2vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-white">
          RemoteRecruit&rsquo;s Difference
        </h1>
        <p className="mt-6 max-w-[42rem] text-[clamp(1rem,1.4vw,1.125rem)] leading-[1.7] text-white/85">
          RemoteRecruit is connecting the world with an easy-to-use platform
          that lets full-time, part-time, and freelance workers showcase their
          talents to businesses that need them. With no paywalls, no fees, and
          no barriers, there&rsquo;s nothing but you, your talents, and the next
          step in your career.
        </p>
      </Container>

      {/* Wave separator into the features section, derived from
          design/Background.svg: a lighter sky wedge behind a white wave. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 leading-[0]"
      >
        <svg
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          className="block h-[90px] w-full sm:h-[150px] lg:h-[200px]"
          fill="none"
        >
          <path
            d="M0 104 C 70 150 150 184 250 200 L0 200 Z"
            fill="#4374AD"
            opacity="0.8"
          />
          <path
            d="M0 200 C 150 198 320 192 490 170 C 720 140 850 18 1055 14 C 1235 11 1350 34 1440 44 L1440 200 L0 200 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
