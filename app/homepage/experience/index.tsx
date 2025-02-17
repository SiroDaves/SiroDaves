"use client";

import { experiences } from "@/utils/data/experiences";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import GlowCard from "@/components/helper/glow-card";

interface Experience {
  id: number;
  duration: string;
  title: string;
  company: string;
}

export default function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
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
            <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
              <div className="p-3 relative">
                {/* Background Blur */}
                <Image
                  src="/blur-23.svg"
                  alt="Blur Background"
                  width={1080}
                  height={200}
                  className="absolute bottom-0 opacity-80"
                />

                {/* Experience Duration */}
                <div className="flex justify-center">
                  <p className="text-xs sm:text-sm text-[#16f2b3]">
                    {experience.duration}
                  </p>
                </div>

                {/* Experience Details */}
                <div className="flex items-center gap-x-8 px-3 py-5">
                  <div className="text-red-500 transition-all duration-300 hover:scale-125">
                    <BsPersonWorkspace size={36} />
                  </div>
                  <div>
                    <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                      {experience.title}
                    </p>
                    <p className="text-sm sm:text-base">{experience.company}</p>
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
