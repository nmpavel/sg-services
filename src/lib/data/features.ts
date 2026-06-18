import type { FeatureContent } from "@/lib/types";

// One reusable FeatureSection renders every entry here; adding a feature is a
// data change, not a component change.
export const features: FeatureContent[] = [
  {
    id: "global-reach",
    badge: "Global Reach",
    title: "The First Fully Global Job Board, Anywhere, Ever",
    body: "RemoteRecruit connects candidates with opportunities around the world. With today’s remote-first workforce, you need to be able to find the best jobs and the best people for them, wherever they may be.",
    image: {
      src: "/assets/mockup-global-reach.png",
      alt: "RemoteRecruit “Let’s Find Work” dashboard with floating candidate cards for a Python Developer and a Front End Wizard.",
      width: 956,
      height: 1021,
    },
    reverse: false,
  },
  {
    id: "fee-free",
    badge: "Actually Fee Free",
    title: "Fee-Free Forever",
    body: "We don’t charge you fees and we don’t put up paywalls. We’re the bridge that connects job opportunities with the best candidates, with no middleman involved.",
    image: {
      src: "/assets/mockup-fee-free.png",
      alt: "Premium membership tier card listing included features with an upcoming payment of $79.99 in 14 days.",
      width: 958,
      height: 1119,
    },
    reverse: true,
  },
  {
    id: "showcase",
    badge: "Custom Profile",
    title: "Showcase Your Talents",
    body: "Personalize your profile with everything that makes you unique. Add an introductory video and other media for a personal touch that stands out to employers and candidates.",
    image: {
      src: "/assets/mockup-showcase.png",
      alt: "Candidate profile card showing 102 jobs completed, an intro video, “Best Developer Ever!” client feedback and skill tags.",
      width: 488,
      height: 520,
    },
    reverse: false,
  },
];
