import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/common/Reveal";
import { PlanCard } from "@/components/sections/Pricing/PlanCard";
import { plans } from "@/lib/data/plans";

// The negative bottom margin makes the cards overlap the blue footer below.
export function Pricing() {
  return (
    <section className="pt-16 sm:pt-20 lg:pt-24">
      <Container>
        <Reveal>
          <h2 className="text-center font-heading text-[clamp(1.9rem,3.6vw,2.6rem)] font-semibold tracking-tight text-heading">
            Help Is One Click Away
          </h2>
        </Reveal>

        <div className="relative z-10 mx-auto -mb-24 mt-12 grid max-w-[1060px] gap-7 md:grid-cols-2 lg:gap-10">
          {plans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 0.1} className="h-full">
              <PlanCard plan={plan} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
