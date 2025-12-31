import React, { useState } from 'react';
import { Download, Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Award, Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';

// Image paths
const agritrust1 = '/github-portfolio/images/agritrust/mobile/1.png';
const agritrust2 = '/github-portfolio/images/agritrust/mobile/2.png';
const agritrust3 = '/github-portfolio/images/agritrust/mobile/3.png';
const agritrust4 = '/github-portfolio/images/agritrust/mobile/4.png';
const agritrust5 = '/github-portfolio/images/agritrust/mobile/5.png';
const agritrust6 = '/github-portfolio/images/agritrust/mobile/6.png';
const agritrust7 = '/github-portfolio/images/agritrust/mobile/7.png';
const agritrust8 = '/github-portfolio/images/agritrust/mobile/8.png';
const agritrust9 = '/github-portfolio/images/agritrust/mobile/9.png';
const agritrust10 = '/github-portfolio/images/agritrust/mobile/10.png';
const agritrust11 = '/github-portfolio/images/agritrust/mobile/11.png';
const agritrust12 = '/github-portfolio/images/agritrust/mobile/12.png';
const agritrust13 = '/github-portfolio/images/agritrust/mobile/13.png';
const agritrust14 = '/github-portfolio/images/agritrust/mobile/14.png';
const agritrust15 = '/github-portfolio/images/agritrust/mobile/15.png';
const agritrust16 = '/github-portfolio/images/agritrust/mobile/16.png';

const knocktrack1 = '/github-portfolio/images/knocktrack/1.png';
const knocktrack2 = '/github-portfolio/images/knocktrack/2.png';
const knocktrack3 = '/github-portfolio/images/knocktrack/3.png';
const knocktrack4 = '/github-portfolio/images/knocktrack/4.png';
const knocktrack5 = '/github-portfolio/images/knocktrack/5.png';

const Portfolio = () => {
  // Animation styles
  const animationStyles = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .animate-fade-in-up {
      animation: fadeInUp 0.6s ease-out forwards;
    }
    .animate-fade-in {
      animation: fadeIn 0.8s ease-out forwards;
    }
  `;

  const [activeTab, setActiveTab] = useState('overview');
  const [agritrustMobileIndex, setAgritrustMobileIndex] = useState(0);
  const [knocktrackIndex, setKnocktrackIndex] = useState(0);

  const agritrustMobileImages = [
    { name: 'Farmer Dashboard', path: agritrust1 },
    { name: 'My Products', path: agritrust2 },
    { name: 'Pricing & Quantity', path: agritrust3 },
    { name: 'Sales Summary', path: agritrust4 },
    { name: 'Notifications', path: agritrust5 },
    { name: 'Transaction History', path: agritrust6 },
    { name: 'Delivery Tracker', path: agritrust7 },
    { name: 'Customer Browse', path: agritrust8 },
    { name: 'Order Summary', path: agritrust9 },
    { name: 'Payment', path: agritrust10 },
    { name: 'My Orders', path: agritrust11 },
    { name: 'Available Deliveries', path: agritrust12 },
    { name: 'Delivery Records', path: agritrust13 },
    { name: 'Pickup GPS', path: agritrust14 },
    { name: 'Delivery GPS', path: agritrust15 },
    { name: 'Delivery Complete', path: agritrust16 }
  ];

  const knocktrackImages = [
    { name: 'Landing Screen', path: knocktrack1 },
    { name: 'Home Dashboard', path: knocktrack2 },
    { name: 'Settings', path: knocktrack3 },
    { name: 'Doorbell Notification', path: knocktrack4 },
    { name: 'Activity History', path: knocktrack5 }
  ];

  const ImageGallery = ({ images, currentIndex, setCurrentIndex, projectColor, buttonColor = 'green' }) => {
    const nextImage = () => setCurrentIndex((currentIndex + 1) % images.length);
    const prevImage = () => setCurrentIndex((currentIndex - 1 + images.length) % images.length);

    const getButtonColors = () => {
      if (buttonColor === 'blue') {
        return 'bg-blue-600 hover:bg-blue-700';
      }
      return 'bg-green-600 hover:bg-green-700';
    };

    const getThumbnailColor = () => {
      if (buttonColor === 'blue') {
        return 'border-blue-600 ring-2 ring-blue-400';
      }
      return 'border-green-600 ring-2 ring-green-400';
    };

    const counterBgColor = buttonColor === 'blue' ? 'bg-blue-600' : 'bg-green-600';

    return (
      <div className="space-y-4">
        {/* Image Display - Compact Size */}
        <div className="flex justify-center">
          <div className="w-64 bg-white rounded-lg shadow-lg overflow-hidden border border-slate-200">
            {/* Image Container */}
            <div className="w-full bg-slate-50 flex items-center justify-center">
              <img 
                src={images[currentIndex].path} 
                alt={images[currentIndex].name}
                className="w-full h-auto object-contain"
                onError={(e) => e.target.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22400%22%3E%3Crect fill=%22%23f3f4f6%22 width=%22256%22 height=%22400%22/%3E%3Ctext x=%2250%25%22 y=%2750%25%27 font-size=%2214%27 fill=%22%23d1d5db%22 text-anchor=%22middle%22 dy=%22.3em%22%3EImage%3C/text%3E%3C/svg%3E'}
              />
            </div>

            {/* Info Bar */}
            <div className={`${counterBgColor} text-white border-t px-2 py-2 flex justify-between items-center gap-1`}>
              <p className="text-white font-semibold text-xs truncate">{images[currentIndex].name}</p>
              <div className="px-2 py-1 rounded text-xs font-bold whitespace-nowrap">
                {currentIndex + 1}/{images.length}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prevImage}
            className={`${getButtonColors()} text-white p-2 rounded-full transition shadow-md active:scale-95 hover:shadow-lg transform hover:scale-110 duration-200`}
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="text-center">
            <p className="text-sm font-bold text-slate-900">{currentIndex + 1} of {images.length}</p>
          </div>

          <button
            onClick={nextImage}
            className={`${getButtonColors()} text-white p-2 rounded-full transition shadow-md active:scale-95 hover:shadow-lg transform hover:scale-110 duration-200`}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Thumbnail Strip */}
        <div>
          <div className="flex gap-3 overflow-x-auto justify-center pb-4 px-4">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                title={img.name}
                className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition transform hover:scale-110 ${
                  idx === currentIndex
                    ? `${getThumbnailColor()} shadow-lg`
                    : 'border-slate-300 hover:border-slate-400'
                }`}
              >
                <img 
                  src={img.path} 
                  alt={img.name}
                  className="w-full h-full object-cover"
                  onError={(e) => e.target.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2264%22 height=%2264%22%3E%3Crect fill=%22%23e5e7eb%22 width=%2264%22 height=%2264%22/%3E%3Ctext x=%2750%25%27 y=%2750%25%27 font-size=%276%27 fill=%27%239ca3af%27 text-anchor=%27middle%27 dy=%27.3em%27%3E{idx + 1}%3C/text%3E%3C/svg%3E'}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <style>{animationStyles}</style>
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Ma. Diana Rose Angan-angan</h1>
              <p className="text-lg text-slate-600 mt-1"> Aspiring Developer | IT Student</p>
              <p className="text-sm text-slate-500 mt-2">Seeking Software Development Internship (May 2026 Graduate)</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=anganangandianarose@gmail.com" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                <Mail size={16} />
                <span className="text-sm">Email Me</span>
              </a>
              <a href="https://github.com/dianaangan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition">
                <Github size={16} />
                <span className="text-sm">GitHub</span>
              </a>
              <a href="https://linkedin.com/in/dianaangan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">
                <Linkedin size={16} />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Cebu City, Philippines</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+63 09616290962</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase size={16} />
              <span>Available: 25-35 hrs/week</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex gap-1">
            {['overview', 'projects', 'skills', 'education'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition ${
                  activeTab === tab
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* About Me */}
            <section className="bg-white rounded-xl shadow-sm p-6 border border-slate-200 animate-fade-in-up">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">About Me</h2>
              <p className="text-slate-700 leading-relaxed">
                I'm a graduating IT student at University of Cebu (May 2026) passionate about building applications that solve real-world problems. I've independently developed two production-ready mobile applications featuring blockchain technology, IoT integration, and modern full-stack architectures. I'm seeking a software development internship where I can contribute my technical skills, learn from experienced developers, and work on meaningful projects. I thrive in collaborative environments and love tackling challenging problems with modern technologies.
              </p>
            </section>

            {/* Core Strengths */}
            <section className="bg-white rounded-xl shadow-sm p-6 border border-slate-200 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Core Strengths</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  'Software Development',
                  'Application Design',
                  'Problem Solving',
                  'Team Collaboration',
                  'Adaptability',
                  'Time Management',
                  'Fast Learner',
                  'Detail-Oriented'
                ].map((strength, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1.5 text-sm font-medium text-slate-700 border border-slate-300 rounded-full hover:bg-slate-50 hover:border-slate-400 hover:shadow-md transition transform hover:scale-105"
                  >
                    {strength}
                  </span>
                ))}
              </div>
            </section>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
                <div className="text-sm text-slate-600">Production Projects</div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200 animate-fade-in-up" style={{animationDelay: '0.25s'}}>
                <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                <div className="text-sm text-slate-600">Technologies Mastered</div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <div className="text-3xl font-bold text-purple-600 mb-2">Dean's List</div>
                <div className="text-sm text-slate-600">Years 1-2</div>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200 animate-fade-in-up" style={{animationDelay: '0.35s'}}>
                <div className="text-3xl font-bold text-orange-600 mb-2">3rd Place</div>
                <div className="text-sm text-slate-600">ICT Congress 2024</div>
              </div>
            </div>

            {/* Core Strengths */}
            <section className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Core Strengths</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Full-Stack Mobile & Web Development',
                  'Blockchain & Smart Contract Development',
                  'RESTful API Design & Integration',
                  'Database Design & Optimization',
                  'Problem Solving & Debugging',
                  'Fast Learner & Self-Motivated',
                  'Team Collaboration & Communication',
                  'Agile Development Practices'
                ].map((strength, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span className="text-slate-700">{strength}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="space-y-8">
            {/* Project 1: AgriTrust */}
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">AgriTrust</h2>
                    <p className="text-green-100">Blockchain-Driven Agricultural Supply Chain Application</p>
                  </div>
                  <div className="flex gap-2">
                    <a href="https://github.com/dianaangan" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition">
                      <Github size={20} />
                    </a>
                    <a href="https://github.com/dianaangan" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Capstone Project</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Full-Stack Developer</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">December 2025</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="font-semibold text-slate-900 mb-2">Project Overview</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Developed a comprehensive mobile application that connects farmers, customers, and delivery drivers through a unified platform. The system addresses key challenges in agricultural commerce by providing transparent product tracking, secure transaction recording through blockchain technology, and automated payment distribution. Features include tamper detection for transaction security and analytics tools that help farmers set competitive prices based on historical sales data. This solution streamlines the entire supply chain process from farm to consumer, ensuring accountability and efficiency at every step.
                  </p>
                </div>

                {/* Mobile UI Gallery */}
                <div className="mb-6 pb-6 border-b border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-4">Mobile Interface Gallery (16 Screens)</h3>
                  <ImageGallery 
                    images={agritrustMobileImages} 
                    currentIndex={agritrustMobileIndex} 
                    setCurrentIndex={setAgritrustMobileIndex}
                    projectColor="from-green-100 to-emerald-100"
                    buttonColor="green"
                  />
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-slate-900 mb-4">Key Contributions</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4 pb-3 border-b border-slate-200 last:border-b-0">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-100">
                          <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Complete UI/UX Design & Development</p>
                        <p className="text-slate-700 text-sm mt-1">Designed complete user interface and user experience for all user roles, then developed the full mobile application with role-based interfaces tailored for farmers, customers, and delivery drivers</p>
                      </div>
                    </div>
                    <div className="flex gap-4 pb-3 border-b border-slate-200 last:border-b-0">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-100">
                          <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Blockchain Technology Implementation</p>
                        <p className="text-slate-700 text-sm mt-1">Implemented blockchain technology to store every completed transaction permanently with tamper detection capabilities, automatically identifying any unauthorized attempts to modify records and creating an immutable audit trail that prevents fraud</p>
                      </div>
                    </div>
                    <div className="flex gap-4 pb-3 border-b border-slate-200 last:border-b-0">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-100">
                          <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Analytics Dashboard</p>
                        <p className="text-slate-700 text-sm mt-1">Created analytics dashboard that helps farmers make data-driven pricing decisions by analyzing historical transaction records, market trends, and product performance metrics</p>
                      </div>
                    </div>
                    <div className="flex gap-4 pb-3 border-b border-slate-200 last:border-b-0">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-100">
                          <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Automated Payment Processing</p>
                        <p className="text-slate-700 text-sm mt-1">Integrated automated payment processing system that distributes funds to farmers and drivers immediately upon delivery completion, eliminating payment delays and disputes</p>
                      </div>
                    </div>
                    <div className="flex gap-4 pb-3 border-b border-slate-200 last:border-b-0">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-100">
                          <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">GPS-Based Mapping & Route Optimization</p>
                        <p className="text-slate-700 text-sm mt-1">Incorporated GPS-based mapping and route optimization features that calculate delivery fees based on actual distance traveled, ensuring fair pricing for all parties</p>
                      </div>
                    </div>
                    <div className="flex gap-4 pb-3 border-b border-slate-200 last:border-b-0">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-100">
                          <div className="h-2 w-2 bg-green-600 rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Real-Time Notification System</p>
                        <p className="text-slate-700 text-sm mt-1">Established real-time notification system that keeps all stakeholders informed throughout the order lifecycle, from initial placement through final delivery, with blockchain verification to confirm transaction authenticity</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-slate-900 mb-3">What I Learned</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Mastered full-stack mobile development with a deep understanding of blockchain architecture, smart contract security, and transaction verification. Developed expertise in building multi-role applications with complex state management, real-time payment systems, and GPS integration. Gained proficiency in designing analytics systems that process historical data for business intelligence, implementing real-time notification infrastructure, and managing secure authentication across distributed systems. Enhanced skills in building user-centric applications that solve real-world agricultural commerce challenges while maintaining security, transparency, and efficiency across the entire supply chain.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React Native', 'Expo', 'Node.js', 'Express.js', 'Solidity', 'Ethers.js', 'Firebase', 'MongoDB', 'Google Maps API', 'Stripe', 'Sepolia Testnet'].map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-green-100 text-green-800 rounded-lg text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Project 2: KnockTrack */}
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">KnockTrack</h2>
                    <p className="text-blue-100">IoT Smart Doorbell Monitoring System</p>
                  </div>
                  <div className="flex gap-2">
                    <a href="https://github.com/dianaangan" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition">
                      <Github size={20} />
                    </a>
                    <a href="https://github.com/dianaangan" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Independent Project</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Full-Stack Developer</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm">September 2025</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="font-semibold text-slate-900 mb-2">Project Overview</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Developed a complete Android-based smart doorbell monitoring system that enables homeowners to receive instant mobile notifications when visitors arrive. The application interfaces with physical doorbell hardware to provide real-time alerts and maintains comprehensive visitor activity records. This solution enhances home security and convenience by allowing remote monitoring and historical activity analysis.
                  </p>
                </div>

                {/* KnockTrack UI Gallery */}
                <div className="mb-6 pb-6 border-b border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-4">User Interface Gallery (5 Screens)</h3>
                  <ImageGallery 
                    images={knocktrackImages} 
                    currentIndex={knocktrackIndex} 
                    setCurrentIndex={setKnocktrackIndex}
                    projectColor="from-blue-100 to-indigo-100"
                    buttonColor="blue"
                  />
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-slate-900 mb-4">Key Contributions</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4 pb-3 border-b border-slate-200 last:border-b-0">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100">
                          <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Complete UI/UX Design & Development</p>
                        <p className="text-slate-700 text-sm mt-1">Designed complete user interface and user experience from wireframes to final implementation, then developed the entire Android application featuring intuitive navigation and clean visual design</p>
                      </div>
                    </div>
                    <div className="flex gap-4 pb-3 border-b border-slate-200 last:border-b-0">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100">
                          <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Real-Time Push Notification System</p>
                        <p className="text-slate-700 text-sm mt-1">Implemented real-time push notification system that delivers instant alerts to users' mobile devices whenever doorbell activity is detected, regardless of physical location</p>
                      </div>
                    </div>
                    <div className="flex gap-4 pb-3 border-b border-slate-200 last:border-b-0">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100">
                          <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Comprehensive Activity Monitoring Dashboard</p>
                        <p className="text-slate-700 text-sm mt-1">Created comprehensive activity monitoring dashboard that displays visitor patterns, daily and weekly statistics, and chronological event history for security and convenience purposes</p>
                      </div>
                    </div>
                    <div className="flex gap-4 pb-3 border-b border-slate-200 last:border-b-0">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100">
                          <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Persistent Data Storage with Cloud Synchronization</p>
                        <p className="text-slate-700 text-sm mt-1">Established persistent data storage solution with automatic cloud synchronization, ensuring visitor history remains accessible across sessions and devices</p>
                      </div>
                    </div>
                    <div className="flex gap-4 pb-3 border-b border-slate-200 last:border-b-0">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100">
                          <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Secure Device Authentication System</p>
                        <p className="text-slate-700 text-sm mt-1">Developed secure device authentication system that restricts doorbell access to authorized users only, protecting household privacy and maintaining system integrity</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-slate-900 mb-3">What I Learned</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Developed comprehensive expertise in IoT hardware integration and Android native development with Kotlin. Mastered real-time messaging systems through Firebase Cloud Messaging implementation and gained proficiency in persistent data storage patterns with cloud synchronization. Enhanced understanding of secure authentication flows and user authorization systems that protect household privacy. Gained hands-on experience in building intuitive UI/UX for mobile applications, designing activity dashboards with statistical analysis capabilities, and managing real-time data synchronization across multiple devices while maintaining system reliability and security.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Kotlin', 'Android Studio', 'Firebase', 'Firebase Cloud Messaging', 'Real-time Database', 'Authentication'].map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Skills Tab */}
        {activeTab === 'skills' && (
          <div className="space-y-6">
            <section className="bg-white rounded-xl shadow-sm p-6 border border-slate-200 animate-fade-in-up">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Technical Skills</h2>
              
              <div className="space-y-6">
                <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                  <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <Code size={20} className="text-blue-600" />
                    Programming Languages
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['JavaScript/TypeScript', 'Java', 'Python', 'Kotlin', 'C#', 'PHP', 'SQL', 'C', 'Solidity'].map((skill, idx) => (
                      <span key={idx} className="px-4 py-2 bg-blue-50 text-blue-900 rounded-lg text-sm font-medium border border-blue-200 transition hover:shadow-md hover:scale-105">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                  <h3 className="font-semibold text-slate-900 mb-3">Web & Mobile Frameworks</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React/React Native', 'Node.js/Express.js', 'ASP.NET Core', 'HTML5/CSS3', 'Expo'].map((skill, idx) => (
                      <span key={idx} className="px-4 py-2 bg-green-50 text-green-900 rounded-lg text-sm font-medium border border-green-200 transition hover:shadow-md hover:scale-105">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                  <h3 className="font-semibold text-slate-900 mb-3">Database Systems</h3>
                  <div className="flex flex-wrap gap-2">
                    {['MySQL', 'SQL Server', 'MongoDB', 'Firebase', 'Supabase'].map((skill, idx) => (
                      <span key={idx} className="px-4 py-2 bg-purple-50 text-purple-900 rounded-lg text-sm font-medium border border-purple-200 transition hover:shadow-md hover:scale-105">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                  <h3 className="font-semibold text-slate-900 mb-3">APIs & Services</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Google Maps/Places API', 'Stripe Payment Gateway', 'Firebase Cloud Messaging', 'Cloudinary', 'JWT Authentication', 'RESTful API Development', 'Alchemy API', 'Upstash Redis'].map((skill, idx) => (
                      <span key={idx} className="px-4 py-2 bg-pink-50 text-pink-900 rounded-lg text-sm font-medium border border-pink-200 transition hover:shadow-md hover:scale-105">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                  <h3 className="font-semibold text-slate-900 mb-3">Blockchain Technology</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Solidity Programming', 'Smart Contract Development', 'Hardhat Framework', 'Ethers.js', 'Sepolia Testnet'].map((skill, idx) => (
                      <span key={idx} className="px-4 py-2 bg-orange-50 text-orange-900 rounded-lg text-sm font-medium border border-orange-200 transition hover:shadow-md hover:scale-105">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                  <h3 className="font-semibold text-slate-900 mb-3">Development Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Git/GitHub', 'Postman', 'Figma', 'Visual Studio/VS Code', 'Android Studio', 'IntelliJ IDEA', 'Apache Netbeans', 'AI-assisted tools (ChatGPT, Cursor)'].map((skill, idx) => (
                      <span key={idx} className="px-4 py-2 bg-slate-50 text-slate-900 rounded-lg text-sm font-medium border border-slate-200 transition hover:shadow-md hover:scale-105">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                  <h3 className="font-semibold text-slate-900 mb-3">Software Engineering & Methodologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Object-Oriented Programming (OOP)', 'Data Structures & Algorithms', 'MVC/MVP Architecture', 'Database Design (ERD)', 'RESTful API Design', 'Agile & Scrum Methodologies', 'Version Control (Git/GitHub)', 'Unit Testing & Debugging', 'JavaFX', 'Windows Forms', 'WPF'].map((skill, idx) => (
                      <span key={idx} className="px-4 py-2 bg-indigo-50 text-indigo-900 rounded-lg text-sm font-medium border border-indigo-200 transition hover:shadow-md hover:scale-105">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Education Tab */}
        {activeTab === 'education' && (
          <div className="space-y-6">
            <section className="bg-white rounded-xl shadow-sm p-6 border border-slate-200 animate-fade-in-up">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Education</h2>
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold text-slate-900">Bachelor of Science in Information Technology</h3>
                <p className="text-slate-600 mt-1">University of Cebu Banilad Campus, Cebu City, Philippines</p>
                <p className="text-slate-500 mt-1">Expected Graduation: May 2026</p>
                
                <div className="mt-4 space-y-2">
                  <div className="flex items-start gap-3">
                    <Award size={18} className="text-blue-600 mt-1" />
                    <span className="text-slate-700"><span className="font-medium">Dean's List:</span> Years 1-2</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award size={18} className="text-blue-600 mt-1" />
                    <span className="text-slate-700"><span className="font-medium">3rd Place:</span> ICT Congress 2024 Hackathon (April 2025)</span>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="font-medium text-slate-900 mb-2">Relevant Coursework:</p>
                  <p className="text-slate-700">Data Structures & Algorithms, Database Management Systems, Software Engineering, Web Development, Mobile Application Development, Network Administration</p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl shadow-sm p-6 border border-slate-200 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Certifications</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">ICT Congress 2024 Hackathon Participation</h3>
                    <p className="text-slate-600 text-sm">University of Cebu • April 2025</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg animate-fade-in-up" style={{animationDelay: '0.225s'}}>
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award size={24} className="text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">ICT Congress 2024 Hackathon - 3rd Runner-Up</h3>
                    <p className="text-slate-600 text-sm">University of Cebu • April 2025</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg animate-fade-in-up" style={{animationDelay: '0.25s'}}>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Networking Essentials Certificate</h3>
                    <p className="text-slate-600 text-sm">Cisco • May 2022</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award size={24} className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Introduction to Cybersecurity Certificate</h3>
                    <p className="text-slate-600 text-sm">Cisco • March 2022</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg animate-fade-in-up" style={{animationDelay: '0.35s'}}>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award size={24} className="text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">NC II, Computer System Servicing</h3>
                    <p className="text-slate-600 text-sm">TESDA • March 2020</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-slate-600">
              <p className="font-medium">Ready to contribute and learn!</p>
              <p className="text-sm mt-1">Available for internship starting January 2026</p>
            </div>
            <div className="flex gap-4">
              <a href="mailto:anganangandianarose@gmail.com" className="text-slate-600 hover:text-blue-600 transition">
                <Mail size={24} />
              </a>
              <a href="https://github.com/dianaangan" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/dianaangan" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-slate-200 text-center">
            <p className="text-sm text-slate-500">Complete project source code and documentation available on GitHub</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
