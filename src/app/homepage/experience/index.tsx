"use client";

import { experiences } from "@/data/experiences";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import GlowCard from "@/components/helper/glow-card";
import { durationCalculation } from "@/utils/main-utils";

interface Experience {
  id: number;
  duration: string;
  title: string;
  company: string;
  type: string;
}

export default function Experience() {
  return (
    <div
      id="experience"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <Image
        src="/section.svg"
        alt="Section Background"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#c2410c]"></span>
          <span className="bg-[#c2410c] w-fit text-white p-2 px-5 text-xl rounded-md">
            EXPERIENCES
          </span>
          <span className="w-24 h-[2px] bg-[#c2410c]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {experiences.map((experience: Experience) => (
            <GlowCard
              key={experience.id}
              identifier={`experience-${experience.id}`}
            >
              <div className="p-3 relative">
                <Image
                  src="/blur-23.svg"
                  alt="Blur Background"
                  width={1080}
                  height={200}
                  className="absolute bottom-0 opacity-80"
                />

                <div className="flex justify-center">
                  <p><span className="text-m m:text-sm text-[#16f2b3]">
                    {experience.duration}
                  </span>
                  <span> - </span>
                  <span className="text-m sm:text-m text-[#c2410c]">
                    {durationCalculation(experience.duration)}
                  </span>
                  </p>
                </div>

                <div className="flex items-center gap-x-8 px-3 py-5">
                  <div className="text-red-500 transition-all duration-300 hover:scale-125">
                    <BsPersonWorkspace size={36} />
                  </div>
                  <div>
                    <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                      {experience.title}
                    </p>

                    <p className="text-sm sm:text-base font-semibold">
                      {experience.company} - {experience.type}
                    </p>
                  </div>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </div>
  );
}
