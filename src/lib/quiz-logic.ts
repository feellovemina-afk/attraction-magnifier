import { Scores, AttachmentType } from "@/types/quiz";

export function calculateResult(answers: Scores[]): AttachmentType {
  const total: Scores = { secure: 0, anxious: 0, avoidant: 0, fearful: 0 };

  for (const answer of answers) {
    total.secure += answer.secure;
    total.anxious += answer.anxious;
    total.avoidant += answer.avoidant;
    total.fearful += answer.fearful;
  }

  const entries: [AttachmentType, number][] = [
    ["secure", total.secure],
    ["anxious", total.anxious],
    ["avoidant", total.avoidant],
    ["fearful", total.fearful],
  ];

  entries.sort((a, b) => b[1] - a[1]);
  return entries[0][0];
}
