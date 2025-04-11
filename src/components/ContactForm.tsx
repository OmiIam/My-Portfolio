
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for contacting me. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const inputVariants = {
    focus: { 
      boxShadow: "0 0 0 2px rgba(110, 86, 207, 0.5)",
      borderColor: "#6E56CF",
      scale: 1.01
    }
  };

  return (
    <motion.form
      ref={ref}
      className="bg-dark-secondary p-6 rounded-lg shadow-xl max-w-xl mx-auto"
      variants={formVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      onSubmit={handleSubmit}
    >
      <div className="mb-6">
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <motion.input
          type="text"
          id="name"
          name="name"
          required
          className="w-full bg-dark/50 border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none"
          value={formData.name}
          onChange={handleChange}
          whileFocus="focus"
          variants={inputVariants}
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <motion.input
          type="email"
          id="email"
          name="email"
          required
          className="w-full bg-dark/50 border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none"
          value={formData.email}
          onChange={handleChange}
          whileFocus="focus"
          variants={inputVariants}
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <motion.textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full bg-dark/50 border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none resize-none"
          value={formData.message}
          onChange={handleChange}
          whileFocus="focus"
          variants={inputVariants}
        />
      </div>
      
      <motion.button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-accent-purple hover:bg-accent-purple/90 text-white font-medium py-3 px-6 rounded-md transition-colors"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : (
          <>
            <Send size={18} />
            Send Message
          </>
        )}
      </motion.button>
    </motion.form>
  );
}
