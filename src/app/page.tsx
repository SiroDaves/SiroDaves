import AboutSection from "@/app/homepage/about";
import BlogSection from "@/app/homepage/blog";
import ContactSection from "@/app/homepage/contact";
import Experience from "@/app/homepage/experience";
import HeroSection from "@/app/homepage/hero-section";
import Projects from "@/app/homepage/projects";

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
