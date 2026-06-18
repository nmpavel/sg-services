import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/common/Reveal";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-surface-alt">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="absolute right-10 top-10 h-40 w-40 rounded-full bg-white/40" />
        <span className="absolute -right-10 bottom-0 h-64 w-64 rounded-full bg-brand-sky/10" />
      </div>

      <Container className="relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
          {/* Mockup bleeds off the left and sits flush on the section floor. */}
          <Reveal className="order-2 flex justify-center self-end lg:order-1 lg:-ml-24 lg:justify-start xl:-ml-32">
            <Image
              src="/assets/mockup-cta-dashboard.png"
              alt="RemoteRecruit “Let’s Find Work” job search dashboard."
              width={1430}
              height={1045}
              loading="lazy"
              sizes="(max-width: 1024px) 90vw, 680px"
              className="-mb-1 block h-auto w-full max-w-[680px] align-bottom"
            />
          </Reveal>

          <Reveal
            delay={0.1}
            className="order-1 flex flex-col justify-center py-14 lg:order-2 lg:py-24 lg:pl-6"
          >
            <Badge className="self-start bg-transparent pl-0">Are you ready?</Badge>
            <h2 className="mt-6 font-heading text-[clamp(2rem,3.6vw,2.75rem)] font-bold leading-[1.15] tracking-tight text-heading">
              Help is only a few clicks away!
            </h2>
            <p className="mt-5 max-w-[26rem] text-[16px] leading-[1.7] text-body">
              Click below to get set up super quickly and find help now!
            </p>
            <div className="mt-8">
              <Button className="bg-[#cedef7] p-2 pr-4 rounded-full" variant="ghost" arrow href="#">
                Get Started
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
