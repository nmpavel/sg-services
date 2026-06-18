import type { Plan } from "@/lib/types";

/** Pricing tiers. One PlanCard renders both; `highlighted` drives the emphasis. */
export const plans: Plan[] = [
  {
    id: "free",
    name: "Free",
    tagline: "Basic",
    highlighted: false,
    ctaLabel: "Get Started",
    features: [
      { label: "1 Active Job", included: true },
      { label: "Basic List Placement", included: true },
      { label: "Unlimited Job Applicants", included: false },
      { label: "Invite Anyone to Apply to Your Jobs", included: false },
    ],
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "$79.99",
    priceNote: "Per Month",
    highlighted: true,
    ctaLabel: "Get Started",
    features: [
      { label: "Unlimited Job Posts", included: true },
      { label: "Instant Job Post Approval", included: true },
      { label: "Premium List Placement", included: true },
      { label: "Unlimited Job Applicants", included: true },
    ],
  },
];
