import { Code2, Globe, Database, Shield, Monitor, Cloud, Code, Smartphone, BarChart3 } from 'lucide-react';

export const SKILLS = {
  'Programming Languages': ['C#', 'JavaScript', 'TypeScript', 'Java', 'Python', 'Kotlin', 'PHP', 'SQL', 'C', 'Solidity'],
  'Frontend & UI': ['React', 'Next.js', 'Blazor', 'HTML5', 'CSS3', 'Tailwind CSS', 'Shadcn UI', 'Vite', 'Syncfusion', 'Figma'],
  'Backend & APIs': ['.NET 8', 'ASP.NET Core', 'Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'Entity Framework Core', 'Prisma'],
  'Databases & Cloud': ['SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'Supabase', 'Azure Web Apps', 'Vercel', 'Upstash Redis'],
  'Mobile & Desktop': ['React Native', 'Expo', 'Android', 'JavaFX', 'Windows Forms', 'WPF'],
  'Blockchain Technology': ['Hardhat', 'Ethers.js', 'Smart Contracts', 'Sepolia'],
  'APIs & Services': ['Stripe', 'Webhooks', 'Google Maps/Places', 'Firebase Cloud Messaging', 'Cloudinary', 'Open Food Facts', 'Alchemy'],
  'Software Engineering': ['Object-Oriented Programming (OOP)', 'Data Structures & Algorithms', 'MVC/MVP Architecture', 'Database Design (ERD)', 'xUnit', 'Playwright', 'Debugging', 'Unit Testing'],
  'Development Tools': ['Git/GitHub', 'Azure DevOps', 'Postman', 'Visual Studio', 'VS Code', 'Android Studio', 'IntelliJ IDEA', 'Apache NetBeans', 'Cursor', 'GitHub Copilot', 'Codex'],
  Methodologies: ['Agile', 'Scrum', 'Waterfall'],
};

export const SKILL_ICONS = {
  'Programming Languages': Code2,
  'Frontend & UI': Globe,
  'Backend & APIs': Code,
  'Databases & Cloud': Database,
  'Mobile & Desktop': Smartphone,
  'Blockchain Technology': Shield,
  'APIs & Services': Cloud,
  'Software Engineering': Code,
  'Development Tools': Monitor,
  Methodologies: BarChart3,
};
