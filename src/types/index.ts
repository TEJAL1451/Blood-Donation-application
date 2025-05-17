export interface Feedback {
  id: string;
  name: string;
  email: string;
  comment: string;
  createdAt: number;
}

export type Theme = 'light' | 'dark';