"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 300px se neeche jaane par button show hoga
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed
        bottom-6
        right-6
        z-[9999]

        flex
        h-10
        w-10
        items-center
        justify-center

        rounded-full

        bg-white
        dark:bg-gray-800
        text-gray-900
        dark:text-white
        border-[0.5px]
        border-gray-300
        dark:border-gray-600

        shadow-lg
        shadow-cyan-300/20

        transition-all
        duration-300
        ease-in-out

        hover:bg-yellow-500
        hover:text-black
        cursor-pointer
        active:bg-yellow-600

        ${
          showButton
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-5 opacity-0"
        } 
      `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    </button>
  );
}