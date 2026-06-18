import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/common/Reveal";
import { FaqItem } from "@/components/sections/Faq/FaqItem";
import { faqEntries } from "@/lib/data/faq";

/** Common Questions — heading + accordion list + "More Questions" CTA. */
export function FaqSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-semibold tracking-tight text-heading">
            Common Questions
          </h2>
        </Reveal>

        <div className="mt-10">
          {faqEntries.map((entry, i) => (
            <Reveal key={entry.id} delay={i * 0.06}>
              <FaqItem entry={entry} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10">
            <Button variant="outline" href="#">
              More Questions
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
