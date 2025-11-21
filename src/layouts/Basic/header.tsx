import { BookOpen, Bot, Car, Film, GitBranch, Music, Terminal, User, Users } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const navItems = [
  { id: '/', label: '~/HOME', icon: Terminal },
  { id: '/blogs', label: './BLOGS', icon: BookOpen },
  { id: '/car', label: './CAR', icon: Car },
  { id: '/repositories', label: './REPOS', icon: GitBranch },
  { id: '/agents', label: './AGENTS', icon: Bot },
  { id: '/music', label: './MUSIC', icon: Music },
  { id: '/movies', label: './MOVIES', icon: Film },
  { id: '/friends', label: './FRIENDS', icon: Users },
  { id: '/whoami', label: './WHOAMI', icon: User }
];

function Navbar(): JSX.Element {
  const router = useRouter();

  return (
    <nav className="flex-shrink-0 z-40 bg-black/90 backdrop-blur border-b border-[#00ff41]/50">
      <div className="px-20">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 cursor-pointer flex items-center gap-2 group">
            <span className="font-tech text-2xl tracking-tighter group-hover:animate-pulse hidden sm:block">
              <span className="text-green">CR</span>4<span className="text-green">ZY</span> URU
              <span className="text-green">5</span>
            </span>
          </div>
          <div className="overflow-x-auto scrollbar-hide md:overflow-visible">
            <div className="flex items-center gap-1">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = index === 0 ? router.asPath === item.id : router.asPath.startsWith(item.id);

                return (
                  <Link
                    key={item.id}
                    href={item.id}
                    className={`flex items-center gap-2 px-3 py-2 text-xs md:text-sm font-mono transition-all duration-200 border border-transparent whitespace-nowrap ${isActive ? 'text-black bg-green font-bold shadow-[0_0_10px_#00ff41]' : 'text-gray-400 hover:text-green hover:border-green/50'}
                    `}>
                    <Icon size={14} />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
