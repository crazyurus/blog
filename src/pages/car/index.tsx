import { Calendar, Terminal } from 'lucide-react';
import Image from 'next/image';

import GlitchHeader from '@/components/home/GlitchHeader';
import { getCarBlogList } from '@/service';

import type { CarBlog } from '../../types';

interface Props {
  title: string;
  blogs: CarBlog[];
}

function CarBlogList(props: Props): JSX.Element {
  const { title, blogs } = props;

  return (
    <div className="my-12">
      <GlitchHeader text={title} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map(item => (
          <div
            key={item.id}
            className="cursor-pointer group relative border border-green-dim hover:border-green transition-all duration-300 overflow-hidden">
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden border-b border-green-dim/50">
              <div className="absolute inset-0 bg-green/10 z-10 group-hover:bg-transparent transition-colors"></div>

              {/* Scanline overlay for image */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>

              <Image
                src={item.image}
                alt={item.title}
                height={192}
                width={256}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
              />

              <div className="absolute bottom-0 left-0 bg-black/70 px-2 py-1 text-[10px] font-mono text-green z-30 border-t border-r border-green">
                {item.type === 'image' ? '图文' : '文章'}
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 relative">
              <div className="absolute top-0 right-0 w-4 h-4 border-l border-b border-green/30"></div>

              <h3 className="text-lg font-bold text-white font-mono group-hover:text-green transition-colors leading-tight line-clamp-2">
                {item.title}
              </h3>

              <div className="flex items-center justify-between text-xs text-gray-500 font-mono border-t border-gray-800 pt-3">
                <div className="flex items-center gap-1">
                  <Calendar size={10} />
                  {item.time}
                </div>
              </div>

              <a
                className="w-full mt-2 py-2 bg-green/10 border border-green/30 text-green text-xs font-mono hover:bg-green hover:text-black transition-all flex items-center justify-center gap-2 group-hover:border-green"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer">
                <Terminal size={12} />
                READ
              </a>
            </div>

            {/* Corner Accents */}
            <div className="absolute bottom-0 right-0 w-2 h-2 border-l border-t border-green opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(): Promise<{ props: Props }> {
  const blogs = await getCarBlogList();

  return {
    props: {
      title: 'Car Blogs',
      blogs
    }
  };
}

export default CarBlogList;
