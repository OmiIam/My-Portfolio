
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  repoUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Interactive Data Visualizer",
    description: "A real-time data visualization tool built with React and D3.js that transforms complex datasets into interactive charts and graphs.",
    tags: ["React", "D3.js", "TypeScript", "WebSockets"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRhdGElMjB2aXN1YWxpemF0aW9ufGVufDB8fDB8fHww",
    repoUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 2,
    title: "Immersive Audio Experience",
    description: "A WebGL and Web Audio API experiment that creates immersive 3D soundscapes that respond to user movement and interaction.",
    tags: ["WebGL", "Three.js", "Web Audio", "GLSL"],
    image: "https://images.unsplash.com/photo-1558508845-2eb0947aecd8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGF1ZGlvJTIwd2F2ZXN8ZW58MHx8MHx8fDA%3D",
    repoUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 3,
    title: "AI-Powered Content Generator",
    description: "A machine learning application that generates creative content like poetry, stories, and articles using state-of-the-art language models.",
    tags: ["Next.js", "OpenAI API", "TailwindCSS", "Vercel"],
    image: "https://images.unsplash.com/photo-1677442135185-2b542947ba62?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWklMjBnZW5lcmF0aW9ufGVufDB8fDB8fHww",
    repoUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 4,
    title: "Blockchain Explorer",
    description: "A comprehensive tool for exploring blockchain transactions, smart contracts, and network statistics with real-time updates.",
    tags: ["React", "Ethers.js", "GraphQL", "Web3"],
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJsb2NrY2hhaW58ZW58MHx8MHx8fDA%3D",
    repoUrl: "https://github.com",
    liveUrl: "https://example.com"
  }
];
