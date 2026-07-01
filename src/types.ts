export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  features: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'tool' | 'design' | 'concept';
  iconName: string;
  level: string; // e.g., 'Especialista', 'Avançado', etc.
  description: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

