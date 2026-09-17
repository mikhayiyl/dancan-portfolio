export interface Project {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "SimplizerPro Analytics",
    description:
      "A modern SaaS analytics dashboard designed to help businesses monitor revenue, sales, customer growth, and real-time business activity.",
    category: "SaaS / Analytics",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Recharts",
    ],
    image: "/projects/simplizerpro-dashboard.png",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },

  {
    title: "E-Commerce Platform",
    description:
      "A responsive e-commerce experience with product discovery, cart management, authentication, and modern checkout flows.",
    category: "E-Commerce",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/projects/ecommerce.png",
    liveUrl: "#",
    githubUrl: "#",
  },

  {
    title: "Booking Platform",
    description:
      "A responsive booking platform focused on simple discovery, scheduling, and a smooth user experience across devices.",
    category: "Web Application",
    technologies: ["React", "Node.js", "SQL"],
    image: "/projects/booking.png",
    liveUrl: "#",
    githubUrl: "#",
  },
];
