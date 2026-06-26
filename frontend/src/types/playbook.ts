export interface PlaybookDrop {
  id: string;
  type: 'Audio' | 'Video' | 'Article';
  title: string;
  meta?: string;
  date: string;
  path?: string;
}

export interface PlaybookWeek {
  id: string;
  week: number;
  label: string;
  dateRange: string;
  theme: string;
  drops: PlaybookDrop[];
}