
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Mail, Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', icon: Home, href: '#home' },
  { name: 'About', icon: User, href: '#about' },
  { name: 'Projects', icon: Briefcase, href: '#projects' },
  { name: 'Contact', icon: Mail, href: '#contact' }
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      
      let currentSection = 'home';
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 100) {
          currentSection = section.id;
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile menu button */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-dark-secondary rounded-full text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar for desktop */}
      <motion.aside 
        className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-8" 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="w-10 h-10 rounded-full bg-accent-purple flex items-center justify-center text-white font-space text-lg mb-4">
          G
        </div>
        
        <nav className="flex flex-col gap-6">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className={`relative group flex items-center gap-2 ${activeSection === item.href.substring(1) ? 'text-accent-cyan' : 'text-white'}`}
            >
              <item.icon size={20} className="group-hover:text-accent-cyan transition-colors" />
              <span className="absolute left-8 opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                {item.name}
              </span>
              {activeSection === item.href.substring(1) && (
                <span className="absolute -left-3 w-1 h-5 bg-accent-cyan rounded-full" />
              )}
            </a>
          ))}
        </nav>
      </motion.aside>

      {/* Mobile menu */}
      <motion.div 
        className={`fixed inset-0 z-40 bg-dark-secondary/95 md:hidden flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <nav className="flex flex-col gap-8 items-center">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 text-lg ${activeSection === item.href.substring(1) ? 'text-accent-cyan' : 'text-white'}`}
            >
              <item.icon size={20} />
              <span>{item.name}</span>
            </a>
          ))}
        </nav>
      </motion.div>
    </>
  );
}
