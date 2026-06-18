import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/common/Reveal";
import type { FeatureContent } from "@/lib/types";
import { cn } from "@/lib/utils";

// The `reverse` flag swaps the text/image columns on desktop; on mobile both
// layouts stack image-over-text for a consistent reading order.
export function FeatureSection({ feature }: { feature: FeatureContent }) {
  const { badge, title, body, image, reverse } = feature;

  return (
    <section className="py-8 sm:py-10 lg:py-12">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className={cn(reverse ? "lg:order-2" : "lg:order-1")}>
            <Badge>{badge}</Badge>
            <h2 className="mt-6 max-w-[30rem] font-heading text-[clamp(1.9rem,3.4vw,2.5rem)] font-semibold leading-[1.18] tracking-tight text-heading">
              {title}
            </h2>
            <p className="mt-6 max-w-[31rem] text-[16px] leading-[1.75] text-body">
              {body}
            </p>
          </Reveal>

          <Reveal
            delay={0.12}
            className={cn(
              "flex justify-center",
              reverse ? "lg:order-1" : "lg:order-2",
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading="lazy"
              sizes="(max-width: 1024px) 90vw, 540px"
              className="h-auto w-full max-w-[540px] drop-shadow-[0_30px_60px_rgba(30,62,133,0.18)]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
