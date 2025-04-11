
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, ChevronRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  repoUrl?: string;
  liveUrl?: string;
  index: number;
}

export default function ProjectCard({ 
  title, 
  description, 
  tags, 
  image, 
  repoUrl, 
  liveUrl,
  index
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      className="card-hover rounded-lg overflow-hidden bg-dark-secondary relative"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut" 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-secondary via-dark-secondary/30 to-transparent opacity-70" />
      </div>
      
      <div className="p-6 relative z-10">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs px-2 py-1 rounded-full bg-accent-purple/20 text-accent-purple"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center gap-4 mt-4 text-sm">
          {repoUrl && (
            <a 
              href={repoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-white/70 hover:text-accent-cyan transition-colors"
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          )}
          
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-white/70 hover:text-accent-cyan transition-colors"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
          
          <motion.a 
            href="#" 
            className="ml-auto flex items-center gap-1 text-accent-cyan"
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <span>View Details</span>
            <ChevronRight size={16} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
