import React, { useState, useEffect, useRef } from 'react';
import { 
  Download, Github, Linkedin, Mail, Phone, MapPin, ExternalLink, 
  Code, Award, Briefcase, ChevronLeft, ChevronRight, Target, 
  BookOpen, Users, User, Code2, FolderOpen, Zap, GraduationCap, 
  Trophy, Moon, Sun, BarChart3, Star, ArrowRight, CheckCircle,
  Globe, Database, Smartphone, Monitor, Cloud, Shield, Calendar
} from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [animationKey, setAnimationKey] = useState(0);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : true;
  });
  const [imageModal, setImageModal] = useState({ isOpen: false, src: '', alt: '' });
  const [showAllImages, setShowAllImages] = useState({});

  // Refs for sections
  const overviewRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
  };

  const openImageModal = (src, alt) => {
    setImageModal({ isOpen: true, src, alt });
  };

  const closeImageModal = () => {
    setImageModal({ isOpen: false, src: '', alt: '' });
  };

  const toggleShowAllImages = (projectId) => {
    setShowAllImages(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    // Set active tab and trigger new animation
    setActiveTab(sectionId);
    setAnimationKey(prev => prev + 1);
    
    // Wait for DOM to update, then scroll to navigation tabs area
    requestAnimationFrame(() => {
      setTimeout(() => {
        // Find the navigation tabs element
        const navElement = document.querySelector('[class*="sticky top-16"]');
        if (navElement) {
          const headerHeight = 80; // Account for main header
          const elementPosition = navElement.offsetTop - headerHeight;
          
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    });
  };

  // Intersection Observer for active tab detection
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-120px 0px -50% 0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section');
          if (sectionId) {
            setActiveTab(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sections = [overviewRef, projectsRef, skillsRef, educationRef];
    sections.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sections.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const skills = {
    'Programming Languages': ['JavaScript/TypeScript', 'Java', 'Python', 'Kotlin', 'C#', 'PHP', 'SQL', 'C', 'Solidity'],
    'Web & Mobile Frameworks': ['React/React Native', 'Node.js/Express.js', 'ASP.NET Core', 'HTML5/CSS3', 'Expo'],
    'Database Systems': ['MySQL', 'SQL Server', 'MongoDB', 'Firebase', 'Supabase'],
    'Blockchain Technology': ['Solidity Programming', 'Smart Contract Development', 'Hardhat Framework', 'Ethers.js', 'Sepolia Testnet'],
    'Development Tools': ['Git/GitHub', 'Postman', 'Figma', 'Visual Studio/VS Code', 'Android Studio', 'IntelliJ IDEA', 'Apache Netbeans', 'AI-assisted tools (ChatGPT, Cursor)'],
    'APIs & Services': ['Google Maps/Places API', 'Stripe Payment Gateway', 'Firebase Cloud Messaging', 'Cloudinary', 'JWT Authentication', 'RESTful API Development', 'Alchemy API', 'Upstash Redis'],
    'Software Engineering': ['Object-Oriented Programming (OOP)', 'Data Structures & Algorithms', 'MVC/MVP Architecture', 'Database Design (ERD)', 'RESTful API Design', 'Agile & Scrum Methodologies', 'Version Control (Git/GitHub)', 'Unit Testing & Debugging'],
    'Desktop Development': ['JavaFX', 'Windows Forms', 'WPF']
  };

  const projects = [
    {
      id: 1,
      title: 'AgriTrust',
      subtitle: 'Blockchain Agricultural Supply Chain Platform',
      description: 'A comprehensive suite of mobile applications that revolutionizes agricultural commerce by connecting farmers, customers, and delivery drivers through blockchain technology. Each specialized app provides role-specific functionality while ensuring transparent product tracking, secure transaction recording, and automated payment distribution across the entire supply chain.',
      tech: ['React Native', 'Solidity', 'Node.js', 'MongoDB', 'Firebase', 'Blockchain'],
      features: ['Cross-platform Mobile Apps', 'Ethereum Smart Contracts', 'Real-time GPS Tracking', 'Philippine Peso Payment Gateway', 'Admin Analytics Dashboard', 'RESTful API with JWT Auth'],
      github: 'https://github.com/dianaangan/AgriTrust',
      images: [
        '/github-portfolio/images/agritrust/shop.png',
        '/github-portfolio/images/agritrust/myproducts.png',
        '/github-portfolio/images/agritrust/deliverytracker.png',
        '/github-portfolio/images/agritrust/myorders.png',
        '/github-portfolio/images/agritrust/ordersummary.png',
        '/github-portfolio/images/agritrust/payments.png',
        '/github-portfolio/images/agritrust/salesummary.png',
        '/github-portfolio/images/agritrust/transactionhistory.png',
        '/github-portfolio/images/agritrust/notifications.png',
        '/github-portfolio/images/agritrust/jobdeliveries.png',
        '/github-portfolio/images/agritrust/delivery1.png',
        '/github-portfolio/images/agritrust/delivery2.png',
        '/github-portfolio/images/agritrust/deliverysuccess.png'
      ],
      color: 'from-emerald-500 to-green-600',
      projectType: 'Capstone Project',
      role: 'Full-Stack Developer',
      date: 'Dec 2025'
    },
    {
      id: 2,
      title: 'KnockTrack',
      subtitle: 'IoT Smart Doorbell Monitoring System',
      description: 'An intelligent Android-based doorbell system that provides real-time notifications and comprehensive visitor activity tracking. Enhances home security through cloud synchronization and secure authentication protocols.',
      tech: ['Kotlin', 'Firebase', 'Android Studio', 'IoT', 'Cloud Functions'],
      features: ['MVP Architecture Pattern', 'Firebase Cloud Messaging', 'Custom Notification System', 'Analytics Dashboard', 'Persistent Data Storage', 'Cross-session Sync'],
      github: 'https://github.com/dianaangan/KnockTrack',
      images: [
        '/github-portfolio/images/knocktrack/landingpage.png',
        '/github-portfolio/images/knocktrack/home.png',
        '/github-portfolio/images/knocktrack/history.png',
        '/github-portfolio/images/knocktrack/notified.png',
        '/github-portfolio/images/knocktrack/settings.png'
      ],
      color: 'from-blue-500 to-indigo-600',
      projectType: 'Personal Project',
      role: 'Full-Stack Developer',
      date: 'September 2025'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Professional Header */}
      <header className="bg-white dark:bg-slate-900 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <nav className="flex justify-end items-center">
            <div className="flex items-center gap-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <div className="flex gap-2">
                <a href="mailto:anganangandianarose@gmail.com" 
                   className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                   aria-label="Email">
                  <Mail size={18} />
                </a>
                <a href="https://github.com/dianaangan" target="_blank" rel="noopener noreferrer" 
                   className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                   aria-label="GitHub">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com/in/dianaangan" target="_blank" rel="noopener noreferrer" 
                   className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                   aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section - Enhanced Professional Layout */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50/50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-16 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center">
            {/* Enhanced Professional Photo */}
            <div className="flex justify-center mb-6 animate-scale-in">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-xl bg-white dark:bg-slate-800 ring-4 ring-blue-50 dark:ring-slate-700/50">
                  <img 
                    src="/github-portfolio/images/profile/profile-photo.png" 
                    alt="Ma. Diana Rose Angan-angan"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Enhanced Professional Content */}
            <div className="max-w-4xl mx-auto animate-fade-in">
              <div className="mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
                  Ma. Diana Rose Angan-angan
                </h1>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-blue-600"></div>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                    Aspiring Software Developer
                  </p>
                  <div className="h-px w-8 bg-gradient-to-l from-transparent to-blue-600"></div>
                </div>
              </div>
              
              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6 max-w-3xl mx-auto">
                Passionate about technology and creating solutions that make a difference. Always learning, always building.
              </p>

              {/* Enhanced Professional Info Cards */}
              <div className="flex flex-wrap justify-center gap-3 mb-8 animate-slide-up">
                {[
                  { icon: MapPin, text: "Cebu City, Philippines", color: "blue" },
                  { icon: Briefcase, text: "Open for Job Opportunities", color: "emerald" }
                ].map(({ icon: Icon, text, color }, idx) => (
                  <div key={idx} className={`flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5`}>
                    <div className={`p-1.5 bg-${color}-100 dark:bg-${color}-900/30 rounded-md`}>
                      <Icon className={`text-${color}-600 dark:text-${color}-400`} size={14} />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium text-xs">{text}</span>
                  </div>
                ))}
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 animate-fade-in">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 sm:px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 animate-pulse hover:animate-none text-sm sm:text-base"
                >
                  View Projects 
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <a 
                  href="/github-portfolio/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 sm:px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Download size={16} />
                  Resume
                </a>
                <a 
                  href="mailto:anganangandianarose@gmail.com"
                  className="px-4 sm:px-6 py-3 border-2 border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/10 hover:-translate-y-0.5 shadow-sm hover:shadow-md text-sm sm:text-base"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-12 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8 animate-slide-up" style={{animationDelay: '0.1s'}}>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Key Achievements</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Highlights of my academic and professional journey</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              { 
                icon: FolderOpen, 
                number: '2', 
                label: 'Projects Completed', 
                desc: 'Completed & Deployed',
                gradient: 'from-blue-500 to-blue-600',
                bg: 'bg-blue-50 dark:bg-blue-900/20'
              },
              { 
                icon: Code, 
                number: '15+', 
                label: 'Technologies', 
                desc: 'Programming & Tools',
                gradient: 'from-emerald-500 to-emerald-600',
                bg: 'bg-emerald-50 dark:bg-emerald-900/20'
              },
              { 
                icon: Trophy, 
                number: '3rd', 
                label: 'ICT Congress 2024', 
                desc: 'Hackathon Achievement',
                gradient: 'from-amber-500 to-orange-500',
                bg: 'bg-amber-50 dark:bg-amber-900/20'
              },
              { 
                icon: Star, 
                number: "Dean's List", 
                label: 'Academic Excellence', 
                desc: 'Years 1-2',
                gradient: 'from-purple-500 to-purple-600',
                bg: 'bg-purple-50 dark:bg-purple-900/20'
              }
            ].map(({ icon: Icon, number, label, desc, gradient, bg }, idx) => (
              <div key={idx} className={`${bg} rounded-xl p-4 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 border border-white/50 dark:border-slate-700/50 animate-scale-in`} style={{animationDelay: `${idx * 0.1}s`}}>
                <div className={`w-12 h-12 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md`}>
                  <Icon className="text-white" size={20} />
                </div>
                <div className={`text-2xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-1`}>
                  {number}
                </div>
                <div className="text-slate-900 dark:text-white font-semibold text-xs mb-1">{label}</div>
                <div className="text-slate-600 dark:text-slate-400 text-xs">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 sticky top-16 z-40 backdrop-blur-md bg-white/95 dark:bg-slate-900/95">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex">
            {[
              { id: 'overview', label: 'Overview', icon: User },
              { id: 'projects', label: 'Projects', icon: FolderOpen },
              { id: 'skills', label: 'Skills', icon: Code },
              { id: 'education', label: 'Education', icon: GraduationCap }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-3 sm:py-4 border-b-2 font-medium transition-all duration-300 hover:scale-105 transform text-xs sm:text-sm ${
                  activeTab === id
                    ? 'border-blue-600 text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20 scale-105'
                    : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`}
              >
                <Icon size={16} className={`transition-transform duration-300 ${activeTab === id ? 'scale-110' : ''} sm:size-18`} />
                <span className="hidden sm:inline">{label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div key={`overview-${animationKey}`} ref={overviewRef} data-section="overview" className="space-y-8 animate-fade-in">
            {/* Enhanced About Section */}
            <section className="group bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-800 dark:to-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg flex items-center justify-center shadow-sm">
                  <User className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">About Me</h2>
              </div>
              <div className="pl-13">
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                  Final-year IT student (graduating May 2026) with hands-on experience in software development. Proven ability to deliver practical solutions through academic projects and competitive achievements. Passionate about technology, quick to learn, and eager to contribute to innovative teams.
                </p>
              </div>
            </section>

            {/* Enhanced Core Strengths */}
            <section className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 p-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="text-center mb-6 animate-slide-up" style={{animationDelay: '0.1s'}}>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Core Strengths</h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Key skills that drive my development approach</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { 
                    icon: Target, 
                    title: 'Problem Solving', 
                    desc: 'Breaking down complex challenges into manageable solutions',
                    gradient: 'from-blue-500 to-blue-600',
                    bg: 'bg-blue-50 dark:bg-blue-900/20'
                  },
                  { 
                    icon: BookOpen, 
                    title: 'Continuous Learning', 
                    desc: 'Staying current with evolving technologies',
                    gradient: 'from-emerald-500 to-emerald-600',
                    bg: 'bg-emerald-50 dark:bg-emerald-900/20'
                  },
                  { 
                    icon: Users, 
                    title: 'Team Collaboration', 
                    desc: 'Working effectively in development teams',
                    gradient: 'from-purple-500 to-purple-600',
                    bg: 'bg-purple-50 dark:bg-purple-900/20'
                  },
                  { 
                    icon: Zap, 
                    title: 'Fast Execution', 
                    desc: 'Rapid prototyping and efficient workflows',
                    gradient: 'from-amber-500 to-orange-500',
                    bg: 'bg-amber-50 dark:bg-amber-900/20'
                  }
                ].map(({ icon: Icon, title, desc, gradient, bg }, idx) => (
                  <div key={idx} className={`${bg} rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 border border-white/50 dark:border-slate-700/50 animate-scale-in group cursor-pointer`} style={{animationDelay: `${(idx + 3) * 0.1}s`}}>
                    <div className={`w-12 h-12 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}>
                      <Icon className="text-white" size={20} />
                    </div>
                    <h3 className={`font-bold text-sm mb-2 bg-gradient-to-r ${gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>{title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">{desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div key={`projects-${animationKey}`} ref={projectsRef} data-section="projects" className="space-y-8 animate-fade-in">
            <div className="text-center animate-slide-up" style={{animationDelay: '0.1s'}}>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Featured Projects</h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Showcasing my latest projects</p>
            </div>

            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {projects.map((project, idx) => (
                <div key={project.id} className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-slide-up" style={{animationDelay: `${(idx + 2) * 0.1}s`}}>
                  {/* Enhanced Project Header */}
                  <div className={`bg-gradient-to-r ${project.color} p-6 text-white relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/5"></div>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-10 -translate-x-10"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4 gap-3">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl font-bold mb-1 group-hover:scale-105 transition-transform duration-300">{project.title}</h3>
                          <p className="text-white/90 text-sm font-medium">{project.subtitle}</p>
                        </div>
                        <div className="flex flex-col gap-2 items-end">
                          <span className="px-3 py-1 bg-gradient-to-r from-white/30 to-white/20 backdrop-blur-sm rounded-full text-xs font-bold border border-white/50 shadow-sm">
                            {project.projectType}
                          </span>
                          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-md text-xs font-medium border border-white/30">
                            {project.role}
                          </span>
                          <span className="px-2 py-0.5 bg-white/15 backdrop-blur-sm rounded text-xs font-light border border-white/25 opacity-90">
                            {project.date}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" 
                           className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-300 hover:scale-110 border border-white/30">
                          <Github size={16} />
                        </a>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" 
                           className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-300 hover:scale-110 border border-white/30">
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Project Content */}
                  <div className="p-6">
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Project Images Gallery */}
                    {project.images && project.images.length > 0 && (
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                            App Screenshots
                          </h4>
                          {project.images.length > 4 && (
                            <button
                              onClick={() => toggleShowAllImages(project.id)}
                              className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                            >
                              {showAllImages[project.id] ? 'Show Less' : `See All (${project.images.length})`}
                            </button>
                          )}
                        </div>
                        <div className="flex gap-3 overflow-x-auto pb-2">
                          {(showAllImages[project.id] ? project.images : project.images.slice(0, 4)).map((image, idx) => (
                            <div key={idx} className="relative group cursor-pointer flex-shrink-0" onClick={() => openImageModal(image, `${project.title} Screenshot ${idx + 1}`)}>
                              <img 
                                src={image} 
                                alt={`${project.title} Screenshot ${idx + 1}`}
                                className="w-20 h-36 object-cover rounded-lg border border-slate-200 dark:border-slate-600 group-hover:scale-105 transition-transform duration-300 shadow-sm"
                                onError={(e) => {
                                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iMTQ0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmM2Y0ZjYiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmaWxsPSIjOTRhM2I4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+QXBwPC90ZXh0Pjwvc3ZnPg==';
                                }}
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded-lg transition-colors duration-300 flex items-center justify-center">
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <div className="w-6 h-6 bg-white/90 rounded-full flex items-center justify-center">
                                    <ExternalLink size={12} className="text-slate-700" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Enhanced Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                        Key Features
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 p-1.5 rounded-md hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                            <CheckCircle size={14} className="text-emerald-500 flex-shrink-0" />
                            <span className="text-slate-600 dark:text-slate-400 text-xs">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced Tech Stack */}
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((tech, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 text-slate-700 dark:text-slate-300 rounded-md text-xs font-medium hover:scale-105 transition-transform duration-200 shadow-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills Tab */}
        {activeTab === 'skills' && (
          <div key={`skills-${animationKey}`} ref={skillsRef} data-section="skills" className="space-y-8 animate-fade-in">
            <div className="text-center animate-slide-up" style={{animationDelay: '0.1s'}}>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Technical Skills</h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Technologies and tools I work with</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {Object.entries(skills).map(([category, skillList], idx) => {
                const icons = {
                  'Programming Languages': Code2,
                  'Web & Mobile Frameworks': Globe,
                  'Database Systems': Database,
                  'Blockchain Technology': Shield,
                  'Development Tools': Monitor,
                  'APIs & Services': Cloud,
                  'Software Engineering': Code,
                  'Desktop Development': Smartphone
                };
                const colors = {
                  'Programming Languages': 'blue',
                  'Web & Mobile Frameworks': 'emerald',
                  'Database Systems': 'purple',
                  'Blockchain Technology': 'amber',
                  'Development Tools': 'rose',
                  'APIs & Services': 'indigo',
                  'Software Engineering': 'cyan',
                  'Desktop Development': 'orange'
                };
                const Icon = icons[category] || Code;
                const color = colors[category] || 'blue';

                return (
                  <div key={category} className="group bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-800 dark:to-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 p-3 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{animationDelay: `${(idx + 2) * 0.1}s`}}>
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`w-8 h-8 bg-gradient-to-br from-${color}-100 to-${color}-200 dark:from-${color}-900/30 dark:to-${color}-800/30 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-lg transition-all duration-300 group-hover:scale-110`}>
                        <Icon className={`text-${color}-600 dark:text-${color}-400`} size={16} />
                      </div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-sm">{category}</h3>
                    </div>
                    <div className="space-y-1">
                      {skillList.map((skill, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-1 rounded-md hover:bg-white dark:hover:bg-slate-700/50 transition-colors group/skill">
                          <div className={`w-1 h-1 bg-${color}-500 rounded-full group-hover/skill:scale-125 transition-transform duration-200`}></div>
                          <span className="text-slate-600 dark:text-slate-300 text-xs">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Education Tab */}
        {activeTab === 'education' && (
          <div key={`education-${animationKey}`} ref={educationRef} data-section="education" className="space-y-8 animate-fade-in">
            <div className="text-center animate-slide-up" style={{animationDelay: '0.1s'}}>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Education & Achievements</h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Academic background and recognitions</p>
            </div>

            {/* Education */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                    Bachelor of Science in Information Technology (2026)
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-3 text-sm">
                    University of Cebu Banilad Campus, Cebu City, Philippines
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2">
                      <Star className="text-amber-500" size={14} />
                      <span className="text-slate-600 dark:text-slate-300 text-xs">Dean's List (Years 1-2)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="text-orange-500" size={14} />
                      <span className="text-slate-600 dark:text-slate-300 text-xs">3rd Place ICT Congress 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 animate-slide-up" style={{animationDelay: '0.3s'}}>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Certifications</h3>
              <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-blue-700 dark:text-blue-300 text-xs font-medium">
                  📋 Certificate copies available upon request for verification purposes
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { 
                    title: 'ICT Congress 2024 Hackathon – 3rd Runner Up', 
                    org: 'University of Cebu', 
                    date: 'April 2025'
                  },
                  { 
                    title: 'ICT Congress 2024 Hackathon Participation Certificate', 
                    org: 'University of Cebu', 
                    date: 'April 2025'
                  },
                  { 
                    title: 'Networking Essentials Certificate', 
                    org: 'Cisco', 
                    date: 'May 2022'
                  },
                  { 
                    title: 'Introduction to Cybersecurity Certificate', 
                    org: 'Cisco', 
                    date: 'March 2022'
                  },
                  { 
                    title: 'Introduction to Packet Tracer Certificate', 
                    org: 'Cisco', 
                    date: 'May 2022'
                  },
                  { 
                    title: 'NC II, Computer System Servicing', 
                    org: 'TESDA', 
                    date: 'March 2020'
                  }
                ].map((cert, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg animate-fade-in group hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors" style={{animationDelay: `${(idx + 4) * 0.1}s`}}>
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="text-green-600 dark:text-green-400" size={16} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-slate-900 dark:text-white text-sm">{cert.title}</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-xs mb-2">{cert.org} • {cert.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">Ready to collaborate?</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm sm:text-base">Open for Internships • Part-time • Full-time • Freelance Gigs</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:anganangandianarose@gmail.com" 
                 className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-3 rounded-lg font-medium transition-colors text-sm sm:text-base">
                Get In Touch
              </a>
              <div className="flex justify-center gap-2">
                <a href="https://github.com/dianaangan" target="_blank" rel="noopener noreferrer" 
                   className="p-3 border border-slate-300 dark:border-slate-600 rounded-lg hover:border-slate-400 dark:hover:border-slate-500 transition-colors">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com/in/dianaangan" target="_blank" rel="noopener noreferrer" 
                   className="p-3 border border-slate-300 dark:border-slate-600 rounded-lg hover:border-slate-400 dark:hover:border-slate-500 transition-colors">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700 text-center">
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
              © 2026 Ma. Diana Rose Angan-angan. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      {imageModal.isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeImageModal}>
          <div className="relative max-w-md max-h-[80vh] w-full">
            <button 
              onClick={closeImageModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <div className="flex items-center gap-2 text-sm">
                <span>Close</span>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  ✕
                </div>
              </div>
            </button>
            <img 
              src={imageModal.src} 
              alt={imageModal.alt}
              className="w-full h-auto object-contain rounded-lg shadow-2xl max-h-[70vh]"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 rounded-b-lg">
              <p className="text-white text-xs font-medium">{imageModal.alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;