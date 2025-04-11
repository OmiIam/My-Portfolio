
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock } from 'lucide-react';

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  url: string;
  index: number;
}

export default function BlogPostCard({
  title,
  excerpt,
  date,
  readTime,
  image,
  url,
  index
}: BlogPostCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.article
      ref={ref}
      className="card-hover group bg-dark-secondary rounded-lg overflow-hidden grid md:grid-cols-[150px_1fr] gap-4"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut"
      }}
    >
      <div className="overflow-hidden w-full h-full min-h-[120px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      
      <div className="p-4 flex flex-col">
        <div className="flex items-center gap-4 text-xs text-gray-400 mb-2">
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {date}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {readTime}
          </span>
        </div>
        
        <h3 className="text-lg font-medium mb-2 group-hover:text-accent-cyan transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-gray-400 line-clamp-2 mb-3">{excerpt}</p>
        
        <a 
          href={url} 
          className="text-sm text-accent-cyan hover:underline mt-auto"
        >
          Read More
        </a>
      </div>
    </motion.article>
  );
}
