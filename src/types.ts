export type ActiveView = 'home' | 'about' | 'methodology';

export interface TimelineMilestone {
  id: string;
  tag: string;
  title: string;
  role: string;
  institution: string;
  description: string;
  takeaway?: string;
}

export interface MagePillar {
  letter: string;
  name: string;
  tagline: string;
  objective: string;
  tools: string[];
  deliverables: string;
  indicators: string;
}

export interface MagePrinciple {
  number: string;
  title: string;
  description: string;
}

export interface MageArea {
  id: number;
  name: string;
  description: string;
}
