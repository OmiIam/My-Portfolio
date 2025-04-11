
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import DynamicBackground from '@/components/DynamicBackground';
import Sidebar from '@/components/Sidebar';
import SectionHeader from '@/components/SectionHeader';
import ProjectCard from '@/components/ProjectCard';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

import { projects } from '@/data/projectsData';

const Index = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full">
      <DynamicBackground />
      <Sidebar />

      {/* Hero Section */}
      <section 
        ref={targetRef} 
        id="home" 
        className="h-screen flex flex-col justify-center px-6 relative"
      >
        <motion.div
          style={{ opacity, scale, y }}
          className="container mx-auto max-w-4xl z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 text-accent-cyan"
          >
            Hello, I'm
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            Godson Igoniwari
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-3xl font-medium mb-8 text-gray-300"
          >
            Full-Stack Developer & <span className="text-gradient">Creative Technologist</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-gray-400 max-w-xl mb-10"
          >
            I build immersive digital experiences that blend technology and creativity, 
            bringing innovative ideas to life through code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#projects"
              className="bg-accent-purple hover:bg-accent-purple/90 text-white font-medium py-3 px-8 rounded-md transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="bg-transparent border border-accent-cyan text-accent-cyan hover:bg-accent-cyan/10 font-medium py-3 px-8 rounded-md transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <SectionHeader 
            title="About Me" 
            subtitle="Get to know me better"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-6 text-gradient">
              Creative Technologist & Problem Solver
            </h3>
            
            <div className="space-y-4 text-gray-300">
              <p>
                I'm a Full Stack Developer with over 7 years of experience crafting digital experiences that merge creativity and technology. I specialize in building interactive web applications that are both functional and visually stunning.
              </p>
              <p>
                My journey began with a background in visual design before transitioning to frontend development. Eventually, I expanded into backend technologies to create end-to-end solutions that address complex challenges.
              </p>
              <p>
                When I'm not coding, you can find me exploring new creative coding techniques, contributing to open source, or speaking at tech conferences about emerging web technologies.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-medium mb-3 text-white">Frontend</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>React / Next.js</li>
                  <li>TypeScript</li>
                  <li>WebGL / Three.js</li>
                  <li>Framer Motion</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-3 text-white">Backend</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Node.js</li>
                  <li>GraphQL</li>
                  <li>PostgreSQL / MongoDB</li>
                  <li>AWS / Firebase</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-dark-secondary/50">
        <div className="container mx-auto max-w-5xl">
          <SectionHeader 
            title="Featured Projects" 
            subtitle="A selection of my recent work"
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
                repoUrl={project.repoUrl}
                liveUrl={project.liveUrl}
                index={index}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <motion.a
              href="#"
              className="inline-flex items-center gap-2 text-accent-cyan hover:text-accent-purple transition-colors"
              whileHover={{ x: 5 }}
            >
              <span>View All Projects</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-dark-secondary/50">
        <div className="container mx-auto max-w-5xl">
          <SectionHeader 
            title="Get In Touch" 
            subtitle="Have a project in mind? Let's collaborate"
            align="center"
          />
          
          <ContactForm />
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-16">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-accent-cyan mb-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12H2M22 12L16 6M22 12L16 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-1">Email</h3>
              <a href="mailto:hello@godsonigoniwari.com" className="text-gray-400 hover:text-accent-cyan transition-colors">
                hello@godsonigoniwari.com
              </a>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-accent-cyan mb-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12H2M22 12L16 6M22 12L16 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-1">Location</h3>
              <p className="text-gray-400">
                San Francisco, CA
              </p>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="text-accent-cyan mb-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12H2M22 12L16 6M22 12L16 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-1">Follow</h3>
              <div className="flex items-center justify-center gap-4">
                <a href="#" className="text-gray-400 hover:text-accent-cyan transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-accent-cyan transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-accent-cyan transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
