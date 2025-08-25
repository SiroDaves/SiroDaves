"use client";

import { useTransform, motion, MotionValue } from "framer-motion";
import { JSX, useRef } from "react";
import React from "react";
import styles from "./style.module.scss";
import { Project } from "@/data/projects";

interface CardProps {
  index: number;
  project: Project;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const ProjectCard = ({
  index,
  project,
  progress,
  range,
  targetScale,
}: CardProps): JSX.Element => {
  const container = useRef<HTMLDivElement>(null);

  const scale: MotionValue<number> = useTransform(progress, range, [
    1,
    targetScale,
  ]);

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{
          backgroundColor: project.color,
          scale,
          top: `calc(-5vh + ${index * 25}px)`,
        }}
        className={styles.card}
      >
        <div className="relative pb-4">
          <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
            <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
          </div>
          <h2>{project.title}</h2>
        </div>

        <div className="overflow-hidden border-t-[2px] border-white px-4 lg:px-8 py-4 lg:py-8">
          <div className={styles.body}>
            <div className={styles.description}>
              <p>
                <ul className="list-disc">
                      {project.descriptions.map((descr, i) => (
                        <li key={`d_${i}`} className="text-sm mb-2">{descr}</li>
                      ))}
                    </ul>
              </p>

              <div className={styles.tools}> Skills/Tech Used: {" "}
                {project.tools.map((tool, i) => (
                  <a key={i} href="#" className={styles.tool}>
                    {tool}
                  </a>
                ))}
              </div>

              <p className="role">Role: {project.role}</p>

              <p>
                Project Link:{" "}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.link}
                </a>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
