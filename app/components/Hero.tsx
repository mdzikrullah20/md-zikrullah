"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import hero from "@/public/images/hero.png";

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "Full-Stack Developer",
    "Frontend Developer",
    "React.js Specialist",
    "Next.js Developer",
    "UI/UX Enthusiast",
    "Problem Solver",
    "Clean Code Advocate",
  ];


  useEffect(() => {
    const handleType = () => {
      const currentRole = roles[loopNum % roles.length];

      if (isDeleting) {
        setText((prev) => currentRole.substring(0, prev.length - 1));
        setTypingSpeed(50);
      } else {
        setText((prev) => currentRole.substring(0, prev.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/mdzikrullah20", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/md-zikrullah/", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://x.com/MdZikru57949319", label: "Twitter" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:work.zikrullah@gmail.com", label: "Email" },
  ];

  return (
    <section id="home" className="relative min-h-screen pt-20 pb-12 flex flex-col justify-center items-center overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center max-w-6xl w-full mx-auto px-6 lg:px-8 gap-12 pt-16 pb-20">
        {/* Left: Text */}
        <div className="lg:w-1/2 md:text-center lg:text-left order-1 lg:order-1">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-3 lg:mb-4">
            <span className="text-white text-xl font-semibold">Hello, It&lsquo;s Me</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-3xl text-white sm:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            Md Zikrullah
          </motion.h1>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className=" flex justify-start mb-3 lg:mb-4  gap-2">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">And I&lsquo;m a</span>
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-500">
              {text}
              <span className="animate-pulse text-purple-400">|</span>
            </span>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }} className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl lg:mx-0 mb-4 lg:mb-4 leading-relaxed">
            Crafting beautiful, performant web experiences with modern technologies. Passionate about clean code and user-centric design.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }} className="flex flex-wrap gap-4 justify-start lg:justify-start mb-4 lg:mb-4">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={scrollToProjects} className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full font-semibold shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all text-sm sm:text-base cursor-pointer">
              View My Work
            </motion.button>
            <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-purple-400 text-white rounded-full font-semibold hover:bg-purple-400/10 transition-all text-sm sm:text-base">
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }} className="flex gap-6 justify-start lg:justify-start">
            {socialLinks.map((link, index) => (
              <motion.a key={index} href={link.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }} className="p-3 lg:mb-4 bg-gray-800/50 backdrop-blur-sm rounded-full text-gray-400 hover:text-purple-400 hover:bg-gray-700/50 transition-all border border-gray-700" aria-label={link.label}>
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -5, 0], // Floating motion
          }}
          transition={{
            opacity: { duration: 0.8 },
            x: { duration: 0.5 },
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          whileHover={{
            scale: 1.05,
            rotate: [0, 0, 0, 0],
            transition: { duration: 0.3 }
          }}
          className="relative lg:w-1/2 flex justify-center items-center order-1 lg:order-2"
        >
          <div className="relative w-84 h-106 sm:w-64 sm:h-64 md:w-100 md:h-100 lg:w-100 lg:h-[500px] rounded-md overflow-hidden cursor-pointer border-none">
            {/* <Image
              src={hero}
              alt="Zikrullah's Profile Picture"
              fill
              style={{ objectFit: "cover" }}
              className="grayscale hover:grayscale-0 transition-all duration-500"
            /> */}
          </div>
        </motion.div>
      </div>

      {/* Scroll Down */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }} className="absolute bottom-4 sm:bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.button onClick={scrollToProjects} animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="cursor-pointer text-yellow-400 hover:text-purple-300 transition-colors" aria-label="Scroll down">
          <ArrowDown className="w-8 h-8" />
        </motion.button>
      </motion.div>

      {/* Decorative code */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.1 }} transition={{ delay: 2, duration: 2 }} className="absolute top-20 left-10 text-purple-300 font-mono text-sm hidden md:block">{'<developer>'}</motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.1 }} transition={{ delay: 2.2, duration: 2 }} className="absolute bottom-20 right-10 text-purple-300 font-mono text-sm hidden md:block">{'</developer>'}</motion.div>
    </section>
  );
}
