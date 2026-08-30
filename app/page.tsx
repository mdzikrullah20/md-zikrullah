"use client";

import Head from "next/head";

import { ThemeProvider } from "./components/ThemeContextType";
import Hero from "./components/Hero";
import About from "./components/about";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";

export default function Home() {
  return (
    <ThemeProvider>
      <Head>
        {/* ============================= */}
        {/* BASIC SEO */}
        {/* ============================= */}

        <title>
          Md Zikrullah | Software Engineer | Full Stack MERN, AI & Python
        </title>

        <meta
          name="description"
          content="Md Zikrullah is a Software Engineer and Full Stack MERN Developer specializing in React, Next.js, Node.js, MongoDB, AI, Machine Learning, and Python. Explore his projects, skills, and software development work."
        />

        <meta
          name="keywords"
          content="
            Md Zikrullah,
            Zikrullah,
            Md Zikrullah Software Engineer,
            Md Zikrullah Developer,
            Software Engineer,
            Software Developer,
            Full Stack Developer,
            Full Stack MERN Developer,
            MERN Stack Developer,
            MERN Developer,
            React Developer,
            Next.js Developer,
            Node.js Developer,
            MongoDB Developer,
            Python Developer,
            AI Developer,
            Artificial Intelligence Developer,
            Machine Learning Developer,
            TypeScript Developer,
            JavaScript Developer,
            Web Developer,
            Full Stack Engineer
          "
        />

        <meta name="author" content="Md Zikrullah" />

        <meta name="robots" content="index, follow" />

        <meta name="googlebot" content="index, follow" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://md-zikrullah.vercel.app/"
        />

        {/* ============================= */}
        {/* OPEN GRAPH / FACEBOOK / LINKEDIN */}
        {/* ============================= */}

        <meta
          property="og:title"
          content="Md Zikrullah | Software Engineer | Full Stack MERN & AI Developer"
        />

        <meta
          property="og:description"
          content="Explore the portfolio of Md Zikrullah, a Software Engineer and Full Stack MERN Developer specializing in React, Next.js, Node.js, MongoDB, AI, Machine Learning, and Python."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://md-zikrullah.vercel.app/"
        />

        <meta
          property="og:site_name"
          content="Md Zikrullah Portfolio"
        />

        <meta
          property="og:image"
          content="https://md-zikrullah.vercel.app/og-image.png"
        />

        <meta
          property="og:image:alt"
          content="Md Zikrullah - Software Engineer and Full Stack Developer"
        />

        {/* ============================= */}
        {/* TWITTER / X */}
        {/* ============================= */}

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Md Zikrullah | Software Engineer | Full Stack MERN & AI Developer"
        />

        <meta
          name="twitter:description"
          content="Md Zikrullah is a Software Engineer and Full Stack MERN Developer working with React, Next.js, Node.js, MongoDB, AI, Machine Learning, and Python."
        />

        <meta
          name="twitter:image"
          content="https://md-zikrullah.vercel.app/og-image.png"
        />

        <meta
          name="twitter:image:alt"
          content="Md Zikrullah Software Engineer Portfolio"
        />

        {/* ============================= */}
        {/* THEME */}
        {/* ============================= */}

        <meta
          name="theme-color"
          content="#000000"
        />

        {/* ============================= */}
        {/* STRUCTURED DATA */}
        {/* ============================= */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",

              name: "Md Zikrullah",

              url: "https://md-zikrullah.vercel.app/",

              jobTitle: "Software Engineer",

              description:
                "Software Engineer and Full Stack MERN Developer specializing in AI, Machine Learning, Python, React, Next.js, Node.js, and MongoDB.",

              knowsAbout: [
                "Software Engineering",
                "Full Stack Development",
                "MERN Stack",
                "React",
                "Next.js",
                "Node.js",
                "MongoDB",
                "JavaScript",
                "TypeScript",
                "Python",
                "Artificial Intelligence",
                "Machine Learning",
                "Web Development",
              ],

              sameAs: [
                // Add your real profiles here
                // "https://github.com/yourusername",
                // "https://www.linkedin.com/in/yourusername",
              ],
            }),
          }}
        />
      </Head>

      {/* ============================= */}
      {/* MAIN WEBSITE */}
      {/* ============================= */}

      <main className="bg-zinc-50 dark:bg-black font-sans transition-colors duration-300">

        {/* Hero */}
        <Hero />

        {/* About */}
        <About />

        {/* Skills */}
        <Skills />

        {/* Projects */}
        <Projects />

        {/* Contact */}
        <Contact />

      </main>

      {/* ============================= */}
      {/* BACK TO TOP */}
      {/* ============================= */}

      <BackToTop />
    </ThemeProvider>
  );
}