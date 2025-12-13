import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Code2,
  MonitorSmartphone,
  Palette,
  Send,
  Mail,
  MessageCircle,
  ChevronDownCircle,
} from "lucide-react";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/10 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT IMAGE AREA */}
          <div
            className="relative group flex justify-center"
            data-aos="fade-right"
          >
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border border-border bg-secondary/30 shadow-lg">
              <img
                src="/baloo.jpg"
                alt="Balogun Abdulrahmon Ishola portrait"
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>

            {/* FLOATING TECH TAGS */}
            <span className="absolute -top-5 left-0 bg-white/90 dark:bg-accent text-foreground px-4 py-2 rounded-full text-sm font-semibold shadow flex items-center gap-2 animate-float-slow">
              <MonitorSmartphone size={16} /> Frontend Dev
            </span>

            <span className="absolute top-1/3 -right-5 bg-white/90 dark:bg-accent text-foreground px-4 py-2 rounded-full text-sm font-semibold shadow flex items-center gap-2 animate-float-medium">
              <Code2 size={16} /> Backend Dev
            </span>

            <span className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/90 dark:bg-accent text-foreground px-4 py-2 rounded-full text-sm font-semibold shadow flex items-center gap-2 animate-float-fast">
              <Palette size={16} /> UI/UX
            </span>

            <span className="absolute -bottom-5 right-0 bg-white/90 dark:bg-accent text-foreground px-4 py-2 rounded-full text-sm font-semibold shadow flex items-center gap-2 animate-float-slow">
              <Send size={16} /> Deployment
            </span>
          </div>

          {/* RIGHT CONTENT AREA */}
          <div className="space-y-8" data-aos="fade-left">
            <ChevronDownCircle className="text-accent" size={32} />

            <p className="text-accent font-semibold uppercase tracking-wide">
              About Me
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Who is{" "}
              <span className="text-accent">
                Balogun Abdulrahmon Ishola?
              </span>
            </h1>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Hi, I'm <span className="text-accent">Ishola</span> 👋 <br />
              A Full Stack Developer
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              I create clean, modern and scalable digital experiences — from
              stunning UI interfaces to solid backend architecture. I combine{" "}
              <span className="text-foreground font-semibold">
                design thinking, performance optimization,
              </span>{" "}
              and real problem-solving to build products users love.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Whether it's a website, dashboard, business platform or a fully
              custom web application, I bring clarity, quality, and creativity to
              every project.
            </p>

            {/* CONTACT INFO */}
            <div className="pt-4 space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-accent" size={20} />
                <a
                  href="mailto:rahmonbalogun449@gmail.com"
                  className="text-accent hover:text-accent/80 transition"
                >
                  rahmonbalogun449@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="text-accent" size={20} />
                <a
                  href="https://wa.me/2349159329752"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 transition"
                >
                  +234 915 932 9752
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
