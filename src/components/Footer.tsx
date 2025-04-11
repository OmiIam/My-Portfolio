
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com' },
    { icon: Linkedin, href: 'https://linkedin.com' },
    { icon: Twitter, href: 'https://twitter.com' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 mt-8 border-t border-[#394867]/20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg font-medium text-gradient mb-2"
            >
              Godson Igoniwari
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm text-[#9BA4B5]"
            >
              Full-Stack Developer & Creative Technologist
            </motion.p>
          </div>
          
          <motion.div 
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a 
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9BA4B5] hover:text-[#F1F6F9] transition-colors"
                whileHover={{ y: -3 }}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center text-xs text-[#9BA4B5]/70 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          &copy; {currentYear} Godson Igoniwari. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
