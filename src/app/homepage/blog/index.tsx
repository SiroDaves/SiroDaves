import Link from 'next/link';
import Image from "next/image";
import { bio } from "@/data/bio";
import { FaArrowRight } from 'react-icons/fa';
import BlogCard from './blog-card';
import { getHashnode } from '@/state/blog';

async function BlogSection() {
  const blogs = await getHashnode();
  return (
    <section id='blog' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      
      <Image
        src="/section.svg"
        alt="Section Background"
        width={1572}
        height={1572}
        className="absolute top-0 -z-10"
      />
      <div className="w-[100px] h-[100px] bg-red-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-red-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#c2410c]"></span>
          <span className="bg-[#c2410c] w-fit text-white p-2 px-5 text-xl rounded-md">
            FROM MY TECH BLOG
          </span>
          <span className="w-24 h-[2px] bg-[#c2410c]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {
          blogs.slice(0, 6).map((blog, i) => (
            blog?.coverImage &&
            <BlogCard blog={blog} key={i} />
          ))
        }
      </div>


      <div className="flex justify-center  mt-5 lg:mt-12">
        <Link
          className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
          role="button"
          href={bio.hashnode}
        >
          <span>View More on Hashnode</span>
          <FaArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default BlogSection;
