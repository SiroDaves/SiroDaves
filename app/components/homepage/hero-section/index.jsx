import { bio } from "@/utils/data/bio";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { FaHashnode } from "react-icons/fa6";
import { FaMedium, FaYoutubeSquare, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, I am <Link href={bio.linkedIn} target='_blank'>
              <span className="text-[#ea580c]">{bio.name}</span>
            </Link>,
            <div className="flex items-center gap-2">
              I just<FcLike />
              <Link href='https://flutter.dev' target='_blank'>
                <span className="text-[#3b82f6]">{bio.designation2}</span>
              </Link>
              <span className="-ml-3">.</span></div>
            I am a <Link href={bio.github} target='_blank'>
              <span className=" text-[#f97316]">{bio.designation1}</span>
            </Link>,
            <br />and a <Link href={bio.hashnode} target='_blank'>
              <span className=" text-[#22c55e]">{bio.designation4}</span>
            </Link>.
          </h1>


          <div className="my-12 flex items-center gap-5">
            <Link
              href={bio.github}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={bio.linkedIn}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
              href={bio.hashnode}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaHashnode size={30} />
            </Link>
            <Link
              href={bio.medium}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaMedium size={30} />
            </Link>
            <Link
              href={bio.youtube}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaYoutubeSquare size={30} />
            </Link>
            <Link
              href={bio.twitter}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaTwitterSquare size={30} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href={bio.cv}
            >
              <span>Get my CV</span>
              <MdDownload size={16} />
            </Link>
          </div>

        </div>
        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="flex justify-center order-1 lg:order-2">
            <Image
              src={bio.profile}
              width={280}
              height={280}
              alt="Siro Daves"
              className="rounded-lg transition-all duration-1000 hover:grayscale-0 hover:scale-110 cursor-pointer mb-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;