import dashboardImage from "../assets/images/dashboard.png";
import ecommerceImage from "../assets/images/ecommerce.png";
import bookingImage from "../assets/images/booking.png";

export interface Project {
  slug: string;
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
    slug: "simplizerpro-analytics",
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
    image: dashboardImage,
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    description:
      "A responsive e-commerce experience with product discovery, cart management, authentication, and modern checkout flows.",
    category: "E-Commerce",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: ecommerceImage,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    slug: "booking-platform",
    title: "Booking Platform",
    description:
      "A responsive booking platform focused on simple discovery, scheduling, and a smooth user experience across devices.",
    category: "Web Application",
    technologies: ["React", "Node.js", "SQL"],
    image: bookingImage,
    liveUrl: "#",
    githubUrl: "#",
  },
];
