import type { FaqEntry } from "@/lib/types";

// Placeholder answer copy from the design (lorem-style mock text).
const MOCK_ANSWER =
  "Actually beard single-origin coffee, twee 90’s PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90’s, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party.";

export const faqEntries: FaqEntry[] = [
  {
    id: "long-term-contract",
    question: "Do I have to sign a long-term contract?",
    answer: MOCK_ANSWER,
  },
  {
    id: "pay-whole-year",
    question: "Can I pay for a whole year?",
    answer: MOCK_ANSWER,
  },
  {
    id: "need-help",
    question: "What if I need help?",
    answer: MOCK_ANSWER,
  },
];
