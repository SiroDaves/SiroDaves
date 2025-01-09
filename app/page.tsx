import AboutSection from "./components/homepage/about";
import BlogSection from "@/app/components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";

export default function Home() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Projects />
      <BlogSection />
      <ContactSection />
    </div>
  );
};
