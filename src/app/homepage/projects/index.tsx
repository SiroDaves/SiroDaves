"use client";

import Image from "next/image";
import { useScroll, MotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { Project, projects } from "@/data/projects";
import ProjectCard from "@/components/project-card";

const Projects = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } =
    useScroll({
      target: container,
      offset: ["start start", "end end"],
    });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number): void {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <section
      id="projects"
      ref={container}
      className="relative z-50 my-12 lg:my-24"
    >
       <Image
              src="/section.svg"
              alt="Section Background"
              width={1572}
              height={795}
              className="absolute top-0 -z-10"
            />
      <div className="sticky top-10 z-10">
        <div className="w-[80px] h-[80px] bg-red-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#c2410c] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS I HAVE WORKED ON
          </span>
          <span className="w-full h-[2px] bg-[#c2410c]"></span>
        </div>
      </div>

      {projects.map((project: Project, p: number) => {
        const targetScale: number = 1 - (projects.length - p) * 0.05;
        return (
          <ProjectCard
            key={`p_${p}`}
            index={p}
            project={project}
            progress={scrollYProgress}
            range={[p * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
};

export default Projects;
