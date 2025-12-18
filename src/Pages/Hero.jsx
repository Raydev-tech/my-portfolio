import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Star, PhoneCall, ArrowRight } from "lucide-react"; // ✅ Lucide Icons
import AOS from "aos";
import "aos/dist/aos.css";
import Services from "./Services";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

export default function Hero() {
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer",
      "Frontend & Backend Engineer",
      "UI/UX Enthusiast",
      "Problem Solver",
    ],
    loop: true,
    delaySpeed: 1500,
  });

  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-in-out", once: true });
  }, []);

  return (
    <>
    <section
      id="home"
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/30 to-background"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-8" data-aos="fade-right">
            <h2 className="text-lg text-accent font-medium flex items-center gap-2">
              👋 Hey there,
            </h2>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              I'm <span className="text-accent">Balogun Abdulrahmon Ishola</span>
            </h1>

            <h3 className="text-2xl font-semibold text-muted-foreground flex items-center gap-2">
              {text} <Cursor cursorStyle="|" />
              <Star className="text-accent w-6 h-6" />
            </h3>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I build modern, fast, and scalable web applications. I focus on
              writing clean, maintainable code that delivers real value and improves
              user experience.
            </p>

            {/* Stats */}
            <div className="flex gap-8 flex-wrap">
              <div className="bg-accent/10 border border-accent/30 rounded-lg px-4 py-3 flex items-center gap-3">
                <Star className="text-accent" />
                <div>
                  <div className="text-2xl font-bold text-accent">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>

              <div className="bg-accent/10 border border-accent/30 rounded-lg px-4 py-3 flex items-center gap-3">
                <Star className="text-accent" />
                <div>
                  <div className="text-2xl font-bold text-accent">40+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 flex-wrap">
              <a 
                href="#projects"
                className="bg-accent text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-accent/90 transition flex items-center gap-2"
              >
                View Projects <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="https://wa.me/2349159329752?text=Hello%20AbdulRahmon%2C%20I%20would%20like%20to%20book%20a%20call."
                target="_blank"
                rel="noopener noreferrer"
                className="border border-accent text-accent px-8 py-3 rounded-full font-medium hover:bg-accent/10 transition flex items-center gap-2"
              >
                Book a Call <PhoneCall className="w-5 h-5" />
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 text-2xl text-accent mt-4">
              <a href="https://github.com/hee-sholar" target="_blank" rel="noopener noreferrer" className="hover:text-accent/70 transition"><FaGithub /></a>
              <a href="https://x.com/RayDevX16" target="_blank" rel="noopener noreferrer" className="hover:text-accent/70 transition"><FaTwitter /></a>
              <a href="https://www.linkedin.com/in/rahmon-balogun-233b23362/" target="_blank" rel="noopener noreferrer" className="hover:text-accent/70 transition"><FaLinkedin /></a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative" data-aos="zoom-in">
            <div className="aspect-square rounded-2xl overflow-hidden bg-secondary/50 border border-border shadow-xl">
              <img
                src="/balo.jpg"
                alt="Profile"
                className="w-full h-full object-cover scale-105 hover:scale-110 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-accent rounded-full opacity-30 animate-pulse"></div>
          </div>
        </div>

        {/* Skills Bar */}
        <div className="mt-20 pt-12 border-t border-border" data-aos="fade-up">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center">
            {["SCALABILITY", "PERFORMANCE", "UI/UX", "CONSISTENCY", "ACCESSIBILITY", "CLEAN CODE"].map((skill) => (
              <div key={skill} className="text-sm font-semibold text-muted-foreground tracking-wide">
                {skill}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
    <Services />
    <About />
    <Projects />
    <Skills />
    <Contact />
    </>
  );
}
