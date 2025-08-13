"use client";
import { bio } from "@/data/bio";
import { skills } from "@/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import lottieFile from '../../../../public/assets/lottie/development.json';
import dynamic from "next/dynamic";

const AnimationLottie = dynamic(() => import("@/components/helper/animation-lottie"), { ssr: false });

const AboutSection: React.FC = () => {
  return (
    <div id="about-me" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#c2410c] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#c2410c]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-16">
        <div className="order-1 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who am I?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {bio.description1}
          <br/> <br/>
            {bio.description2}
          </p>
        </div>
        <div className="flex justify-center order-2 lg:order-2">
          <AnimationLottie animationFile={lottieFile} />
        </div>
      </div>
      <div className="w-full">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skills.map((skill, id) => (
            <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}>
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-red-500 transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-red-500 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    <Image
                      src={skillsImage(skill) || '/path/to/default-image.jpg'}
                      alt={skill}
                      width={30}
                      height={30}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>
                  <p className="text-white text-sm sm:text-lg"> {skill} </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default AboutSection;
