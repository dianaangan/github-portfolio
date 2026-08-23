import {
  Code2, Globe, Database, Shield, Monitor, Cloud, Code, Smartphone, BarChart3,
} from 'lucide-react';

export const SKILLS = {
  'Programming Languages': ['JavaScript', 'Java', 'Python', 'C#', 'Kotlin', 'PHP', 'SQL', 'C', 'Solidity'],
  'Web & Mobile Frameworks': ['React', 'ASP.NET Core', 'Express.js', 'React Native', 'Expo', 'Blazor', 'HTML', 'CSS'],
  'Database Systems': ['MySQL', 'SQL Server', 'MongoDB', 'Firebase', 'Supabase'],
  'Blockchain Technology': ['Solidity', 'Hardhat', 'Ethers.js', 'Smart Contracts', 'Sepolia Testnet'],
  'Development Tools': ['Git/GitHub', 'Visual Studio', 'VS Code', 'IntelliJ IDEA', 'Android Studio', 'Azure DevOps'],
  'APIs & Services': ['Google Maps/Places API', 'Stripe', 'Cloudinary', 'JWT Authentication', 'RESTful APIs'],
  'Software Engineering': [
    'Object-Oriented Programming (OOP)',
    'Data Structures & Algorithms',
    'MVC Architecture',
    'Database Design (ERD)',
    'Entity Framework Core',
    'RESTful API Development',
  ],
  'Desktop Development': ['JavaFX', 'Windows Forms', 'WPF'],
  Methodologies: ['Agile', 'Scrum', 'Waterfall'],
};

export const SKILL_ICONS = {
  'Programming Languages': Code2,
  'Web & Mobile Frameworks': Globe,
  'Database Systems': Database,
  'Blockchain Technology': Shield,
  'Development Tools': Monitor,
  'APIs & Services': Cloud,
  'Software Engineering': Code,
  'Desktop Development': Smartphone,
  Methodologies: BarChart3,
};
