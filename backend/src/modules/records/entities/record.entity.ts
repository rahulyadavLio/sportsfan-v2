export type RecordType = 'National' | 'Olympic' | 'World';

export interface RecordEntry {
  type: RecordType;
  performance: string;
  athlete: string;
  date: string;
  venue: string;
  championship: string;
  color: string;
  numericValue: number;
}

export interface TrendEntry {
  year: string;
  national: number;
  world: number;
  olympic: number;
}

export interface ProgressEntry {
  year: string;
  gap: number;
  color: string;
}

export interface MilestoneEntry {
  year: string;
  title: string;
  description: string;
  color: string;
}

export interface StoryEntry {
  id: string;
  title: string;
  description: string;
  gradient: string;
  publishedDate: string;
  author: string;
  location: string;
  content: string[];
  keyStats: { value: string; label: string; color: string }[];
  quote: string;
  quoteAuthor: string;
}

export interface RecordInsight {
  diff: number;
  percentage: string;
  formattedDiff: string;
  unit: string;
  gapReductionPercent: string;
  globalRank: number;
}
