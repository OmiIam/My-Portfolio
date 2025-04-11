
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  url: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Immersive Web Experiences with WebGL",
    excerpt: "Learn how to create captivating 3D visuals and interactive experiences using WebGL and Three.js.",
    date: "Apr 2, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViZ2x8ZW58MHx8MHx8fDA%3D",
    url: "#"
  },
  {
    id: 2,
    title: "The Future of Frontend Development with React Server Components",
    excerpt: "Exploring how React Server Components are revolutionizing the way we build and optimize web applications.",
    date: "Mar 15, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhY3QlMjBjb2RlfGVufDB8fDB8fHww",
    url: "#"
  },
  {
    id: 3,
    title: "Designing Ethical AI Systems: Guidelines for Developers",
    excerpt: "A comprehensive guide to developing AI systems that prioritize ethics, transparency, and user privacy.",
    date: "Feb 28, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWklMjByb2JvdHxlbnwwfHwwfHx8MA%3D%3D",
    url: "#"
  }
];
