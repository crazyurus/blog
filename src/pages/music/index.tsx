import { Play } from 'lucide-react';

import GlitchHeader from '@/components/home/GlitchHeader';

import { getMusicList } from '../../service';
import type { Music } from '../../types';

interface Props {
  title: string;
  music: Music[];
}

function MusicList(props: Props): JSX.Element {
  const { title, music } = props;

  return (
    <div className="my-12">
      <GlitchHeader text={title} />
      <div className="bg-dark/80 backdrop-blur border border-green-dim p-4 my-1">
        {music.map((item, index) => (
          <div key={item.id} className="flex items-center justify-between p-3 hover:bg-white/5 transition-colors group">
            <div className="flex items-center gap-4">
              <span className="font-mono text-gray-600 text-sm w-4">{index + 1}</span>
              <a
                className="text-green hover:text-white transition-colors"
                href={`https://music.163.com/#/song?id=${item.id}`}
                target="_blank"
                rel="noopener noreferrer">
                <Play size={16} />
              </a>
              <div>
                <div className="font-mono text-sm text-gray-300 group-hover:text-white">{item.name}</div>
                <div className="text-xs text-gray-500 mt-1">{item.author.join('、')}</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-gray-500">{item.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(): Promise<{ props: Props }> {
  const music = await getMusicList();

  return {
    props: {
      title: 'Favorite music',
      music
    }
  };
}

export default MusicList;
