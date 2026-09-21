import { GraduationCap, Briefcase, FolderOpen, Trophy, Star } from 'lucide-react';

import { EXPERIENCE } from './experience';
import { PROJECTS } from './projects';

export const STATS = [
  { icon: GraduationCap, number: '2026', label: 'BSIT Graduate' },
  { icon: Briefcase, number: String(EXPERIENCE.length), label: 'Work Experiences' },
  { icon: FolderOpen, number: String(PROJECTS.length), label: 'Featured Projects' },
  { icon: Trophy, number: '3rd Place', label: 'ICT Congress Hackathon' },
  { icon: Star, number: 'Honors', label: "Dean's List, Years 1\u20112" },
];
