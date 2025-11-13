"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Palette, Zap, Users, BookOpen, Trophy } from "lucide-react";

export default function AboutPage() {
 const skills = [
  "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Tailwind CSS",
    "Python",
    "Git",
    "RESTful APIs",
    "UI/UX Design",
    "Responsive Design",
    "Agile Workflow",
];


  const features = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code that follows best practices and design patterns.",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Focus",
      description:
        "Creating beautiful interfaces that prioritize user experience and accessibility.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description:
        "Optimizing applications for speed and efficiency to deliver the best experience.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description:
        "Working effectively with teams to build products that users love.",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Continuous Learning",
      description:
        "Always exploring new technologies and staying updated with industry trends.",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Quality Driven",
      description:
        "Committed to delivering high-quality solutions that exceed expectations.",
    },
  ];

  return (
    <section id="about" className="relative min-h-screen pt-20 pb-12 bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-16">
        {/* Main Section - Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-24">
          {/* Left Side - Text Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h1 className="text-4xl text-white md:text-5xl font-bold mt-2 mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                About Me
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base text-gray-300 leading-relaxed"
            >
              Hi, I'm Md Zikrullah — a passionate Full-Stack Developer and Problem Solver who loves crafting beautiful, high-performance web applications. With hands-on experience in React.js, Next.js, TypeScript, and Node.js, I specialize in creating clean, scalable, and user-friendly solutions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-gray-400 leading-relaxed text-base"
            >
              My journey began with curiosity about how things work behind the scenes, and today, I turn ideas into impactful digital experiences. I focus on writing clean, maintainable code and designing intuitive, accessible interfaces that put users first.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4 pt-4"
            >
              <h3 className="text-2xl font-semibold text-white">What I Do</h3>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-300">
                  <span className="text-purple-400 mr-3 mt-1">▹</span>
                  <span>
                    <strong className="text-white">
                      Frontend Development:
                    </strong>{" "}
                    uilding responsive, dynamic, and modern UIs using React.js, Next.js, and Tailwind CSS
                  </span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-purple-400 mr-3 mt-1">▹</span>
                  <span>
                    <strong className="text-white">Backend Development:</strong>{" "}
                    Ceveloping robust APIs and scalable server-side applications using Node.js
                  </span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-purple-400 mr-3 mt-1">▹</span>
                  <span>
                    <strong className="text-white">UI/UX Design:</strong>{" "}
                    Designing clean, user-centered interfaces that enhance usability and engagement
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 
                             rounded-lg text-gray-300 text-sm font-medium 
                             hover:border-purple-500 hover:text-purple-400 transition-all 
                             cursor-default shadow-lg"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 pt-6"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white 
                         rounded-full font-semibold shadow-lg shadow-purple-500/50 
                         hover:shadow-purple-500/70 transition-all"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-purple-400 text-purple-400 rounded-full 
                         font-semibold hover:bg-purple-400/10 transition-all text-white"
              >
                View Projects
              </motion.a>
            </motion.div>
          </div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 w-72 h-72 bg-purple-500/10 rounded-2xl 
                         -z-10 hidden md:block border border-purple-500/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-6 -left-6 w-72 h-72 bg-blue-500/10 rounded-2xl 
                         -z-10 hidden md:block border border-blue-500/20"
              />

              {/* Image container */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: [0, -5, 0], // Floating motion
                }}
                transition={{
                  opacity: { duration: 0.5 },
                  x: { duration: 0.85 },
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: [0, 0, 0, 0],
                  transition: { duration: 0.3 }
                }}
                className="relative w-64 h-[400px] sm:w-72 sm:h-[450px] md:w-80 md:h-[500px] lg:w-[350px] lg:h-[550px] overflow-hidden cursor-pointer shadow-2xl"
              >
               <Image
  src="/images/zikrullahone.png"
  alt="Zikrullah's Profile Picture"
  fill
  style={{ objectFit: "cover" }}
  className="grayscale hover:grayscale-0 transition-all duration-500"
/>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2
            className="text-3xl font-bold text-center mb-12 cursor-pointer text-white"
          >
            Why Work With Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl 
                         p-6 hover:border-yellow-500/50 transition-all group cursor-pointer"
              >
                <div
                  className="w-12 h-12 bg-yellow-900 from-yellow-500/20 to-blue-500/20
                              rounded-lg flex items-center justify-center mb-4 text-white 
                              group-hover:scale-110 transition-transform"
                >
                  {feature.icon}
                </div>
                <h3
                  className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 
                             transition-colors"
                >
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative code tags */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute top-32 left-10 text-purple-300 font-mono text-sm hidden xl:block"
      >
        {"<about>"}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1.2, duration: 2 }}
        className="absolute bottom-32 right-10 text-purple-300 font-mono text-sm hidden xl:block"
      >
        {"</about>"}
      </motion.div>
    </section>
  );
}