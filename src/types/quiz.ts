export type AttachmentType = "secure" | "anxious" | "avoidant" | "fearful";

export interface Scores {
  secure: number;
  anxious: number;
  avoidant: number;
  fearful: number;
}

export interface Answer {
  text: string;
  scores: Scores;
}

export interface Question {
  id: number;
  question: string;
  answers: Answer[];
}

export interface AttachmentTypeInfo {
  type: AttachmentType;
  name: string;
  nameEn: string;
  emoji: string;
  color: string;
  summary: string;
  traits: string[];
  lovePattern: string;
  advice: string[];
  books: { title: string; author: string; url: string }[];
}
