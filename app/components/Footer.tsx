// components/Footer.js
import Link from 'next/link';

// You would typically install an icon library like 'lucide-react' or 'react-icons'
// For this example, we'll use simple text placeholders for the icons.
// Example: import { Github, Linkedin, Mail } from 'lucide-react'; 

const Footer = () => {
  return (
    // Outer container: dark background, light text, full width
    <footer className="bg-gray-900 text-gray-400">
      
      {/* Content wrapper: centered, max width, padding */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Main Grid Layout (Responsive) */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-3">
          
          {/* Column 1: Personal Branding/Contact Info (Takes up more space on small screens) */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-2">Your Name | Developer</h3>
            <p className="mt-2 text-sm">
              Building responsive, high-performance web applications with modern frameworks.
            </p>
            
            {/* Social Media & Contact Links */}
            <div className="mt-6 flex space-x-6">
              {/* Replace # with your actual URLs */}
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="hover:text-blue-400 transition duration-150">
                {/* [GitHub Icon] */}
                <span className="text-xl">GitHub</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="hover:text-blue-400 transition duration-150">
                {/* [LinkedIn Icon] */}
                <span className="text-xl">LinkedIn</span>
              </a>
              <a href="mailto:your.email@example.com" aria-label="Email Me" className="hover:text-blue-400 transition duration-150">
                {/* [Email Icon] */}
                <span className="text-xl">Email</span>
              </a>
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
                {/* Example of linking to a PDF resume, opening in a new tab */}
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-150 ease-in-out">
                  Download Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Professional Links & Info */}
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

        {/* Bottom Copyright Section */}
        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} [Your Name]. All rights reserved. Crafted with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;