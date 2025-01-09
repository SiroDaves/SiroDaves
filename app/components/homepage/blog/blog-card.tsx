import { Blog } from '@/state/blog';
import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <Image
          src={blog.coverImage}
          height={1080}
          width={1920}
          alt={blog.title || "Blog cover image"}
          className="h-full w-full group-hover:scale-110 transition-all duration-300"
        />
      </div>

      <div className="p-2 sm:p-3 flex flex-col">
        <div className="flex justify-between items-center text-[#16f2b3] text-sm">
          {blog.publishedAt && <p>{timeConverter(blog.publishedAt)}</p>}

          <div className="flex items-center gap-3">
            <p className="flex items-center gap-1">
              <BsHeartFill />
              <span>{blog.reactionCount}</span>
            </p>
            <p className="flex items-center gap-1">
              <FaCommentAlt />
              <span>{blog.replyCount}</span>
            </p>
          </div>
        </div>

        <Link target="_blank" href={blog.url}>
          <p className="my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-red-500">
            {blog.title}
          </p>
        </Link>
        <div className="hidden lg:block h-[1px] bg-gray-300 w-full my-2"></div>

        {blog.brief && (
          <p className="text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3">
            {blog.brief}
          </p>
        )}

        {blog.readTimeInMinutes !== undefined && (
          <p className="text-sm text-[#16f2b3]">
            {`${blog.readTimeInMinutes} Min Read`}
          </p>
        )}

      </div>
    </div>
  );
};

export default BlogCard;
