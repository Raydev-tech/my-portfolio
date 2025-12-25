import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    AOS.init({ once: true, duration: 700, easing: "ease-out-cubic" });
  }, []);

  // Scroll logic (active link + hide on scroll)
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "projects", "contact"];
      const scrollPosition = window.scrollY + 120;

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(id);
        }
      });

      setShowNavbar(window.scrollY < lastScrollY.current);
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-transform duration-300
      ${showNavbar ? "translate-y-0" : "-translate-y-full"}
      bg-white/90 backdrop-blur-xl border-b border-gray-200/70`}
      data-aos="fade-down"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition">
              RayDev
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {["home", "services", "projects", "contact"].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className={`relative capitalize text-sm transition
                ${
                  activeSection === link
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-500"
                }`}
              >
                {link === "contact" ? "Contact Us" : link}
                {activeSection === link && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
                )}
              </a>
            ))}

            {/* CTA */}
            <a
              href="https://wa.me/2349159329752?text=Hello%20RayDev%2C%20I%20would%20like%20to%20book%20a%20call."
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 bg-blue-600 text-white px-6 py-2 rounded-full 
              text-sm font-medium hover:bg-blue-700 hover:shadow-lg transition"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="md:hidden mt-4 space-y-5 pb-6 
            bg-white rounded-xl p-5 shadow-lg"
            data-aos="fade-down"
          >
            {["home", "services", "projects", "contact"].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className={`block capitalize text-sm transition
                ${
                  activeSection === link
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link === "contact" ? "Contact Us" : link}
              </a>
            ))}

            <a
              href="https://wa.me/2349159329752?text=Hello%20RayDev%2C%20I%20would%20like%20to%20book%20a%20call."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-blue-600 text-white py-2 rounded-full font-medium"
            >
              Book a Call
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
