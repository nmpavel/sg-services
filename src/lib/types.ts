// Shared types. Components depend on these rather than concrete data sources,
// so swapping lib/data for an API would touch only the data layer.

export type ButtonVariant = "filled" | "outline";

export interface MockupImage {
  src: string;
  alt: string;
  /** Intrinsic dimensions for next/image (prevents layout shift). */
  width: number;
  height: number;
}

export interface FeatureContent {
  id: string;
  badge: string;
  title: string;
  body: string;
  image: MockupImage;
  /** When true, image renders on the left (text right) on desktop. */
  reverse?: boolean;
}

export interface FaqEntry {
  id: string;
  question: string;
  answer: string;
}

export interface PlanFeature {
  label: string;
  included: boolean;
}

export interface Plan {
  id: string;
  /** Display name, e.g. "Free" or "Premium". */
  name: string;
  /** Secondary label under the name: "Basic" or the price "$79.99". */
  tagline: string;
  /** Optional note under the price, e.g. "Per Month". */
  priceNote?: string;
  /** Premium tier gets visual emphasis + a filled CTA. */
  highlighted: boolean;
  features: PlanFeature[];
  ctaLabel: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
}
