"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { X, ExternalLink, Github, Calendar, Code } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  date: string;
  features: string[];
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "Construction Services",
      description: "A modern construction services website showcasing projects and offerings",
      fullDescription: "A professional construction services platform designed to showcase residential and commercial projects. The website highlights core services, completed projects, client testimonials, and contact inquiries, providing a strong online presence for construction businesses.",
      image: "https://plus.unsplash.com/premium_photo-1664477100909-72e25a69f553?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Stripe", "Tailwind CSS"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/yourusername/project1",
      date: "January 2024",
      features: [
        "User authentication with JWT",
        "Product catalog with search and filters",
        "Shopping cart and wishlist",
        "Stripe payment integration",
        "Order tracking system",
        "Admin dashboard for management"
      ]
    },
    {
      id: 2,
      title: "Deal Management",
      description: "Interactive deal management dashboard with real‑time updates, pipeline tracking, and performance insights",
      fullDescription: "Deal Management Dashboard is a collaborative, real‑time platform designed to help teams track, manage, and analyze sales opportunities with clarity and speed. It offers a visual sales pipeline, interactive deal cards, and real‑time updates so users can monitor deal progress, assign responsibilities, and collaborate across stages of the sales process. With customizable filters, performance metrics, and at‑a‑glance insights, this dashboard empowers sales teams to stay organized, prioritize high‑impact deals, and make data‑driven decisions that accelerate revenue growth",
      image: "https://images.unsplash.com/photo-1758518730136-1bf4fa26ccbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
      technologies: ["React", "Node.js", "Socket.io", "PostgreSQL", "Redux"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/yourusername/project2",
      date: "November 2024",
      features: [
        "Real-time collaboration",
        "Drag-and-drop task management",
        "Team workspace management",
        "Advanced filtering and sorting",
        "File attachments support",
        "Activity timeline and notifications"
      ]
    },
    {
      id: 3,
      title: "Portfolio Website ",
      description: "A responsive, animation‑ready portfolio builder with drag‑and‑drop design, SEO best practices, and one‑click deployment — no coding required",
      fullDescription: "An intuitive portfolio website builder that allows users to create stunning, fully responsive portfolios with animated elements and built‑in SEO optimization — all without writing code. Features customizable templates, a drag‑and‑drop editor, real‑time code animations, responsive layouts for all devices, and one‑click deployment. Perfect for developers and creatives who want visually engaging portfolios that perform well in search engines",
      image: "https://images.unsplash.com/photo-1663284110946-f3da3f52a36e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
      technologies: ["Next.js", "React", "Tailwind CSS", "Vercel", "Supabase"],
      liveLink: "https://md-zikrullah.vercel.app/",
      githubLink: "https://github.com/mdzikrullah20/md-zikrullah",
      date: "September 2025",
      features: [
        "Drag-and-drop editor",
        "Multiple customizable templates",
        "Custom domain support",
        "SEO optimization tools",
        "Analytics integration",
        "One-click deployment"
      ]
    },
    {
      id: 4,
      title: "Quarter Services",
      description: "A responsive service-based web application built with modern frontend technologies.",
      fullDescription: "Quarter Services is a component-based web application developed using React.js, focusing on clean UI/UX, responsiveness, and performance. The project follows mobile-first design principles and ensures cross-browser compatibility with reusable components.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["React", "TypeScript", "Material-UI","Stripe"],
      liveLink: "https://quarter-services.vercel.app/",
      githubLink: "https://github.com/mdzikrullah20/Quarter-Services-Page",
      date: "July 2024",
      features: [
        "Component-based architecture",
        "Fully responsive UI",
        "Mobile-first design",
        "Cross-browser compatibility",
        "Stripe payment integration",
        "Optimized performance",
        "Clean and user-friendly interface"
      ]
    }
  ];

  return (
    <>
      <section id="projects" className="relative py-20 px-6 bg-[#0F172A] overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl text-white md:text-5xl font-bold mt-2">
              Projects
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 ">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
                className="group relative border 
                         rounded-xl overflow-hidden cursor-pointer hover:border-gray-700 
                         transition-all shadow-xl"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/10"></div>

                  {/* Text on Image */}
                  <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white transition-colors z-10">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center 
                     justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-gray-900 border border-gray-800 rounded-2xl max-w-4xl 
                       w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-gray-800/80 backdrop-blur-sm 
                         rounded-full text-gray-400 hover:text-white hover:bg-gray-700 
                         transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Project Image */}
              <div className="relative h-80 overflow-hidden rounded-t-2xl">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover"
                />
              </div>

              {/* Project Details */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {selectedProject.title}
                    </h2>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      {selectedProject.date}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    {selectedProject.liveLink && (
                      <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg 
                                 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    {selectedProject.githubLink && (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg 
                                 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">About the Project</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-gray-400">
                          <span className="text-purple-400 mr-3 mt-1">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg 
                                   border border-purple-500/30 text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}