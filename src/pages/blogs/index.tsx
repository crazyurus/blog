import { Calendar, Clock, Hash } from 'lucide-react';
import Link from 'next/link';

import TerminalCard from '@/components/TerminalCard';

import { getBlogList } from '../../service';
import type { Blog } from '../../types';
import styles from './index.module.scss';

interface Props {
  title: string;
  blogs: Blog[];
}

function BlogList(props: Props): JSX.Element {
  const { blogs } = props;

  return (
    <div className={styles.section}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
        {blogs.map(item => (
          <Link key={item.id} href={`./blogs/${item.id}`}>
            <TerminalCard title="">
              <div className="space-y-4">
                <h3 className="text-2xl text-white font-bold hover:text-blue transition-colors cursor-pointer line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">{item.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.categories.map(tag => (
                    <span
                      key={tag}
                      className="flex items-center text-xs text-blue border border-blue/30 px-2 py-1 rounded-sm bg-blue/5">
                      <Hash size={10} className="mr-1" /> {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-500 font-mono">
                  <div className="flex items-center gap-2">
                    <Calendar size={12} /> {item.time.year}-{item.time.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={12} />共 {item.wordCount} 字，阅读需要 {item.readTime}
                  </div>
                </div>
              </div>
            </TerminalCard>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(): Promise<{ props: Props }> {
  const blogs = await getBlogList();
  const defaultTitle = process.env.NEXT_PUBLIC_DEFAULT_TITLE;

  return {
    props: {
      title: `${defaultTitle} blogs`,
      blogs
    }
  };
}

export default BlogList;
