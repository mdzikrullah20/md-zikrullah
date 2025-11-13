// components/Footer.js
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/mdzikrullah20", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/md-zikrullah/", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://x.com/MdZikru57949319", label: "Twitter" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:work.zikrullah@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-3">
          
          {/* Column 1: Personal Branding */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-2">Md Zikrullah | Developer</h3>
            <p className="mt-2 text-sm">
              Passionate about crafting interactive and scalable web applications using modern technologies.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex space-x-6">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="hover:text-blue-400 transition duration-150 flex items-center gap-1"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Portfolio Navigation */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Portfolio</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/projects" className="hover:text-white transition duration-150 ease-in-out">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-white transition duration-150 ease-in-out">
                  Skills & Tech Stack
                </Link>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition duration-150 ease-in-out"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Explore More */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Explore More</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="hover:text-white transition duration-150 ease-in-out">
                  Technical Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition duration-150 ease-in-out">
                  Contact Me
                </Link>
              </li>
              <li>
                <Link href="/colophon" className="hover:text-white transition duration-150 ease-in-out">
                  Site Colophon
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        {/* Footer Bottom */}
        <div className="text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Md Zikrullah. All rights reserved. Crafted with{" "}
            <span className="text-blue-400">Next.js</span> & <span className="text-teal-400">Tailwind CSS</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
