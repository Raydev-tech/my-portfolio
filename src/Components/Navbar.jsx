import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../index.css"; // Ensure your global CSS has `html { scroll-behavior: smooth; }`

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [activeSection, setActiveSection] = useState("home");
  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollY = 0;

  // Initialize AOS
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  // Dark mode logic
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Active section logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (let id of sections) {
        const section = document.getElementById(id);
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(id);
        }
      }

      // Navbar show/hide logic
      if (window.scrollY > lastScrollY) setShowNavbar(false);
      else setShowNavbar(true);
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full bg-white/90 dark:bg-[#0f0f0f]/90 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
      data-aos="fade-down"
      data-aos-duration="800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="font-semibold text-gray-900 dark:text-white">
                RayDev
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {["home", "services", "projects", "contact"].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className={`capitalize transition ${
                  activeSection === link
                    ? "text-blue-600 font-semibold"
                    : "text-gray-800 dark:text-gray-200 hover:text-blue-500"
                }`}
              >
                {link === "contact" ? "Contact Us" : link}
              </a>
            ))}

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/2349159329752?text=Hello%20RayDev%2C%20I%20would%20like%20to%20book%20a%20call."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            aria-label="Toggle menu"
            className="md:hidden text-gray-800 dark:text-gray-200 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="md:hidden pb-4 space-y-4"
            data-aos="fade-down"
            data-aos-duration="600"
          >
            {["home", "services", "projects", "contact"].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className={`block capitalize ${
                  activeSection === link
                    ? "text-blue-600 font-semibold"
                    : "text-gray-800 dark:text-gray-200 hover:text-blue-500"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link === "contact" ? "Contact Us" : link}
              </a>
            ))}

            {/* Mobile WhatsApp Button */}
            <a
              href="https://wa.me/2349159329752?text=Hello%20RayDev%2C%20I%20would%20like%20to%20book%20a%20call."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition"
            >
              Book a Call
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
