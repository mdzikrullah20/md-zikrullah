
"use client";
import Head from "next/head";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/about";                   
export default function Home() {
  return (
    <>
      <Head>
        <title>Md Zikrullah | Software Developer</title>
        <meta
          name="description"
          content="Portfolio of Md Zikrullah, a Software developer specializing in Next.js, React, and Tailwind CSS."
        />
        <meta
          name="keywords"
          content="Software Developer, React, Next.js, Tailwind, Portfolio, TypeScript"
        />
        <meta name="author" content="Md Zikrullah" />

        {/* Open Graph */}
        <meta property="og:title" content="Md Zikrullah | Software Developer" />
        <meta
          property="og:description"
          content="Portfolio of Md Zikrullah, a Software developer specializing in Next.js, React, and Tailwind CSS."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://md-zikrullah.vercel.app/" />
        <meta property="og:image" content="/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Md Zikrullah | Software Developer" />
        <meta
          name="twitter:description"
          content="Portfolio of Md Zikrullah, a Software developer specializing in Next.js, React, and Tailwind CSS."
        />
        <meta name="twitter:image" content="/og-image.png" />
      </Head>

      <main className="bg-zinc-50 dark:bg-black font-sans">
        {/* Hero Section */}
        <Hero />
        {/* About Section */}
        <About />
        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </main>
    </>
  );
}
