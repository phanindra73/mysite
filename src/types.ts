export type NavItem = 'Home' | 'About' | 'Academy' | 'Products' | 'Collaboration' | 'Team' | 'Contact' | 'Privacy Policy' | 'Terms of Use' | 'Disclaimer' | 'Refund Policy';

export interface Course {
  id: string;
  title: string;
  duration: string;
  mode: 'Online' | 'Classroom' | 'Blended';
  description: string;
  rating: number;
  tags: string[];
  fee?: string;
  image?: string;
}

export interface TrainingProgram {
  id: string;
  title: string;
  targetAudience: string;
  highlights: string[];
  bannerUrl: string;
}

export interface PlacementRecord {
  company: string;
  role: string;
  salary: string;
  studentName: string;
  passoutYear: number;
  avatarSeed: string;
}
