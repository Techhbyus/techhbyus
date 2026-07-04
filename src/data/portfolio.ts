export interface CaseStudy {
  slug: string;
  title: string;
  problem: string;
  whatWeBuilt: string;
  outcome: string;
  screenshot?: string;
  testimonial?: string;
}

// DRAFT — sign-off not yet obtained from either client (see REVAMP.md, Step 7).
// Do not add a real client name, screenshot, or testimonial to any entry here
// until there is written permission for that specific field. Titles below are
// anonymized descriptors, matching what Step 8 allows in the no-sign-off case.
export const caseStudies: CaseStudy[] = [
  {
    slug: "physiotherapy-booking-platform",
    title: "Physiotherapy Booking Platform",
    problem:
      "The clinic needed a way for patients to self-report pain location and severity before their first consultation, instead of relying on paper intake forms.",
    whatWeBuilt:
      "An interactive React-based body map that lets patients tap the exact location of pain, paired with a severity scale, feeding directly into the clinic's booking flow.",
    outcome:
      "Cut back-and-forth during intake and gave the clinic a tool no competitor in their area had.",
  },
  {
    slug: "overseas-recruitment-platform",
    title: "Overseas Recruitment Job-Matching Platform",
    problem:
      "The consultancy needed a way to match candidates to overseas job openings without manually cross-referencing spreadsheets for every applicant.",
    whatWeBuilt:
      "A job-matching platform with structured candidate profiles and searchable openings, built around the consultancy's existing screening workflow.",
    outcome:
      "Replaced a manual, spreadsheet-based matching process with a searchable system built around how the consultancy already worked.",
  },
];
