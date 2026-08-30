"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { X, ExternalLink, Github, Calendar } from "lucide-react";

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
      id: 3,
      title: "Quarter Services",
      description: "A responsive service-based web application built with modern frontend technologies.",
      fullDescription: "Quarter Services is a component-based web application developed using React.js, focusing on clean UI/UX, responsiveness, and performance. The project follows mobile-first design principles and ensures cross-browser compatibility with reusable components.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["React", "TypeScript", "Material-UI", "Stripe"],
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
    },
    {
      id: 4,
      title: "OneSpot.tv",
      description: "A video streaming platform with interactive features, personalized content, and real-time updates.",
      fullDescription: "OneSpot.tv is a modern video streaming platform that allows users to watch, share, and interact with video content seamlessly. It features a responsive interface, personalized recommendations, real-time notifications, and smooth video playback. Built for scalability and interactivity, OneSpot.tv leverages Next.js for the frontend, Node.js for the backend, Socket.io for real-time communication, and PostgreSQL for database management. Users can create accounts, manage playlists, and explore curated content, all while enjoying a fast and engaging streaming experience.",
      image: "https://images.unsplash.com/photo-1752650735506-befbb7049252?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Next.js", "TypeScript", "Socket.io", "PostgreSQL", "Tailwind CSS", "Node.js"],
      liveLink: "https://spectrum-beta.vercel.app/",
      githubLink: "https://github.com/mdzikrullah20/onespot.tv",
      date: "January 2026",
      features: [
        "User authentication and account management",
        "Video streaming with smooth playback",
        "Interactive playlists and favorites",
        "Real-time notifications and updates",
        "Responsive design for all devices",
        "Personalized content recommendations"
      ]
    },
    {
     id: 1,
      title: "Zikks",
      description: "⚡ [In Development] A modern full-stack web application designed for seamless communication and user interaction.",
      fullDescription: "Zikks is a feature-rich web platform built to streamline client inquiries and personal portfolio management. It offers a fast, accessible contact interface, responsive layouts across all device types, and efficient data handling powered by Next.js and modern API routes.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWdlbmN5fGVufDB8fDB8fHww",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
      liveLink: "https://zikks.vercel.app/",
      githubLink: "https://github.com/mdzikrullah20/md-zikrullah",
      date: "February 2026",
      features: [
        "Interactive and fast-loading contact interface",
        "Full-stack Next.js architecture",
        "Responsive, mobile-first design",
        "Integrated form submission handling",
        "Optimized SEO and accessibility standards"
      ]
    },
    {
      id: 6,
      title: "LaboZiks",
      description: "LaboZiks is a modern laboratory services platform built to showcase lab facilities, research work, and scientific services.",
      fullDescription: "LaboZiks is a professional laboratory website developed using Next.js and Tailwind CSS. The platform presents laboratory services, research projects, equipment details, and contact inquiries, providing a digital presence for scientific and medical labs.",
      image: "https://images.unsplash.com/photo-1631556759511-6ce895fbf0ad?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
      liveLink: "https://labozikks.vercel.app/",
      githubLink: "https://github.com/mdzikrullah20/labozikks",
      date: "January 2026",
      features: [
        "Modern and responsive UI",
        "Service listing for laboratory tests",
        "Research and project showcase",
        "Contact form for inquiries",
        "Fast performance with Next.js",
        "Clean and minimal design using Tailwind CSS"
      ]
    }
  ];

  return (
    <>
      <section id="projects" className="relative py-20 px-6 bg-slate-50 dark:bg-[#0F172A] overflow-hidden transition-colors duration-300">
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 text-gray-900 dark:text-white leading-tight">
              Projects
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
                className="group relative border border-gray-200 dark:border-gray-800
                           rounded-xl overflow-hidden cursor-pointer hover:border-gray-300 dark:hover:border-gray-700 
                           transition-all shadow-lg dark:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
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
              className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl max-w-4xl 
                         w-full max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-gray-200/80 dark:bg-gray-800/80 backdrop-blur-sm 
                           rounded-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-300 dark:hover:bg-gray-700 
                           transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative h-80 overflow-hidden rounded-t-2xl">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {selectedProject.title}
                    </h2>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
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
                        className="p-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg 
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
                        className="p-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg 
                                   transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">About the Project</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-gray-600 dark:text-gray-400">
                          <span className="text-purple-500 dark:text-purple-400 mr-3 mt-1">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 rounded-lg 
                                     border border-purple-300 dark:border-purple-500/30 text-sm font-medium"
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