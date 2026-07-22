import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Linkedin, Globe, Heart, MapPin, Briefcase, Calendar, 
  ArrowLeft, Github, Twitter, Instagram, Code, Coffee, Sparkles,
  Terminal, Cpu, Layers, Compass, Feather,
  MessageCircle, Download, Users, Rocket,
  Zap as ZapIcon, GitBranch, Cloud, Monitor, Smartphone,
  Award, User, HeartHandshake
} from 'lucide-react';

export function Author({
  name = 'Sharvesh Sanjay',
  title = 'Full Stack Developer & UI/UX Designer',
  bio = 'Born and raised in Bhavani, Erode — a town nestled along the banks of the Kaveri River. Growing up surrounded by the region\'s rich agricultural heritage and vibrant turmeric fields, I developed a deep appreciation for craftsmanship and quality. Today, I channel that same passion into building digital experiences that blend creativity with functionality.',
  email = 'sharvesh@example.com',
  website = 'https://sharveshsanjay.netlify.app',
  linkedin = 'https://www.linkedin.com/in/sharveshsanjay',
  github = 'https://github.com/sharveshsanjay',
  twitter = '',
  instagram = 'https://www.instagram.com/sharveshsanjay_/',
  location = 'Bhavani, Erode, Tamil Nadu',
  experience = '4+ Years',
  onAuthor,
  onBack,
}) {
  const [activeTab, setActiveTab] = useState('about');
  const [isHovered, setIsHovered] = useState(false);

  const socialLinks = [
    { icon: <Mail className="w-5 h-5" />, href: `mailto:${email}`, label: 'Email', color: 'hover:text-erode-amber' },
    { icon: <Linkedin className="w-5 h-5" />, href: linkedin, label: 'LinkedIn', color: 'hover:text-[#0A66C2]' },
    { icon: <Github className="w-5 h-5" />, href: github, label: 'GitHub', color: 'hover:text-gray-900' },
    { icon: <Twitter className="w-5 h-5" />, href: twitter, label: 'Twitter', color: 'hover:text-[#1DA1F2]' },
    { icon: <Instagram className="w-5 h-5" />, href: instagram, label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: <Globe className="w-5 h-5" />, href: website, label: 'Website', color: 'hover:text-erode-amber' },
  ].filter(link => link.href);

  const tabs = [
    { id: 'about', label: 'About', icon: <User className="w-4 h-4" /> },
    { id: 'skills', label: 'Skills', icon: <Cpu className="w-4 h-4" /> },
    { id: 'journey', label: 'Journey', icon: <Compass className="w-4 h-4" /> },
  ];

  const skills = [
    'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 
    'Figma', 'Node.js', 'Python', 'Docker'
  ];

  const journeyMilestones = [
    { 
        year: '2023', 
        title: 'Vel Tech University', 
        desc: 'Began B.Tech in Computer Science Engineering is Specialization with Artifical Intelligence and Data Science, exploring full-stack development' 
    },
    { 
        year: '2025', 
        title: 'Smart India Hackathon', 
        desc: 'Selected as Team Lead, guiding a team of 6 developers to build impactful solutions for farmers to enhance agricultural productivity and sustainability' 
    },
    { 
        year: '2026', 
        title: 'INTI International University, Malaysia', 
        desc: 'Completed Honors program through Faculty of Data Science and Information Technology (FDSIT), gained international exposure and global network' 
    },
    { 
        year: '2027', 
        title: 'Graduation', 
        desc: 'Completing B.Tech with specialization in AI & Data Science, ready to embark on a professional journey in full-stack development and UI/UX design' 
    },
    ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-16 py-24 pointer-events-none relative bg-gradient-to-br from-erode-gold/5 via-white to-erode-amber/5">
      
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-erode-amber/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-erode-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-erode-amber/3 rounded-full blur-3xl" />
      </div>

      {/* Back Button */}
      {onBack && (
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onClick={onBack}
          className="absolute top-8 left-4 md:left-8 flex items-center gap-2 text-sm text-erode-gray/60 hover:text-erode-amber transition-colors pointer-events-auto z-10"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </motion.button>
      )}

      <div className="max-w-6xl w-full relative z-10 pointer-events-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* Left Column - Profile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="backdrop-blur-xl bg-white/40 rounded-3xl p-8 border border-white/40 shadow-xl">
              
              {/* Profile Image */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.4 }}
                className="relative mx-auto w-32 h-32 md:w-40 md:h-40"
              >
                <img
                  src="/textures/profile.jpeg"
                  alt={name}
                  className="w-full h-full rounded-full object-cover shadow-lg"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=200&background=E8A53E&color=fff`;
                  }}
                />
                
                {/* Floating decorative dots */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-2 -right-2 w-4 h-4 bg-erode-amber rounded-full shadow-lg"
                />
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-2 -left-2 w-3 h-3 bg-erode-gold rounded-full shadow-lg"
                />
                
                {/* Status dot */}
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-4 border-white shadow-lg">
                  <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
                </div>
              </motion.div>

              {/* Name */}
              <div className="text-center mt-6">
                <h1 className="text-2xl md:text-3xl font-bold text-erode-dark">
                  {name}
                </h1>
                <p className="text-sm text-erode-amber font-medium mt-1 flex items-center justify-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  {title}
                </p>
              </div>

              {/* Location & Experience */}
              <div className="flex flex-col items-center gap-2 mt-4 text-sm text-erode-gray/60">
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-erode-amber" />
                  {location}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-erode-amber" />
                  {experience} Experience
                </span>
                <span className="flex items-center gap-2">
                  <Coffee className="w-4 h-4 text-erode-amber" />
                  Available for Work
                </span>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                {socialLinks.map((link, idx) => (
                  <motion.a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2.5 rounded-xl bg-white/50 border border-gray-100/50 text-erode-gray/60 hover:bg-erode-gold/10 transition-all ${link.color}`}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="backdrop-blur-xl bg-white/40 rounded-3xl p-8 border border-white/40 shadow-xl h-full flex flex-col">
              
              {/* Tabs */}
              <div className="flex gap-2 border-b border-gray-100/50 pb-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      activeTab === tab.id
                        ? 'bg-erode-amber text-white shadow-lg shadow-erode-amber/20'
                        : 'text-erode-gray/60 hover:text-erode-dark hover:bg-white/30'
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="flex-1 mt-6">
                <AnimatePresence mode="wait">
                  {activeTab === 'about' && (
                    <motion.div
                      key="about"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-2 text-erode-amber">
                        <HeartHandshake className="w-5 h-5" />
                        <span className="text-sm font-medium">From the Heart of Erode</span>
                      </div>
                      <p className="text-erode-gray/80 leading-relaxed text-base">
                        {bio}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        <span className="px-3 py-1 text-xs bg-erode-amber/10 text-erode-amber rounded-full border border-erode-amber/20">
                          <Terminal className="w-3 h-3 inline mr-1" />
                          Full Stack
                        </span>
                        <span className="px-3 py-1 text-xs bg-purple-500/10 text-purple-600 rounded-full border border-purple-500/20">
                          <Cpu className="w-3 h-3 inline mr-1" />
                          UI/UX
                        </span>
                        <span className="px-3 py-1 text-xs bg-blue-500/10 text-blue-600 rounded-full border border-blue-500/20">
                          <Layers className="w-3 h-3 inline mr-1" />
                          Product Design
                        </span>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'skills' && (
                    <motion.div
                      key="skills"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="grid grid-cols-2 gap-3">
                        {skills.map((skill) => (
                          <div key={skill} className="bg-white/30 rounded-xl p-3 text-center border border-white/20 hover:border-erode-amber/30 transition-all group">
                            <div className="text-sm font-medium text-erode-dark group-hover:text-erode-amber transition-colors">
                              {skill}
                            </div>
                            <div className="w-full h-1 bg-gray-100/50 rounded-full mt-2 overflow-hidden">
                              <div className="h-full bg-erode-amber rounded-full" style={{ width: `${Math.random() * 40 + 60}%` }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'journey' && (
                    <motion.div
                      key="journey"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="space-y-4">
                        {journeyMilestones.map((milestone, idx) => (
                          <div key={idx} className="flex items-start gap-4 p-3 rounded-xl bg-white/20 border border-white/20 hover:border-erode-amber/30 transition-all">
                            <div className="w-12 h-12 rounded-full bg-erode-amber/10 flex items-center justify-center flex-shrink-0">
                              <span className="text-sm font-bold text-erode-amber">{milestone.year}</span>
                            </div>
                            <div>
                              <h4 className="font-bold text-erode-dark">{milestone.title}</h4>
                              <p className="text-sm text-erode-gray/60">{milestone.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-gray-100/50">
                <motion.a
                  href={`mailto:${email}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-erode-amber text-white rounded-xl font-medium hover:bg-erode-amber/90 transition-all shadow-lg shadow-erode-amber/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  Let's Connect
                </motion.a>
                <motion.a
                    href="/textures/My-Resume.pdf"
                    download="Sharvesh_Sanjay_Resume.pdf"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-6 py-3 bg-white/50 text-erode-gray rounded-xl font-medium hover:bg-white/80 hover:text-erode-dark transition-all border border-gray-100/50"
                    >
                    <Download className="w-4 h-4" />
                    Resume
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="absolute bottom-8 right-4 md:right-8 pointer-events-auto z-10"
        >
        <div className="flex flex-col items-end gap-1 text-xs text-erode-gray/40">
            <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <motion.span
                animate={isHovered ? { scale: 1.4 } : { scale: 1 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
            >
                <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            </motion.span>
            <span>by</span>
            <button
                type="button"
                onClick={onAuthor}
                className="font-medium text-erode-amber hover:text-erode-dark transition-colors"
            >
                {name.split(' ')[0]}
            </button>
            <span className="text-erode-gray/20 mx-1">|</span>
            <span>for Erode, Tamil Nadu</span>
            </div>
            <div className="text-erode-gray/20 mx-1">
                ஈரோடு, தமிழ்நாடு
            </div>
        </div>
        </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-8 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="w-6 h-6 text-erode-amber/20" />
        </motion.div>
      </div>
      <div className="absolute bottom-1/4 left-8 pointer-events-none">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <Code className="w-5 h-5 text-erode-amber/15" />
        </motion.div>
      </div>

    </section>
  );
}

export default Author;