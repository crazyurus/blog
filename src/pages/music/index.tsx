import { Play } from 'lucide-react';

import { getMusicList } from '../../service';
import type { Music } from '../../types';

interface Props {
  title: string;
  music: Music[];
}

function MusicList(props: Props): JSX.Element {
  const { music } = props;

  return (
    <div className="bg-dark/80 backdrop-blur border border-[#008f11] p-4 my-12">
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
  );
}

export async function getServerSideProps(): Promise<{ props: Props }> {
  const music = await getMusicList();
  const { NEXT_PUBLIC_DEFAULT_TITLE: defaultTitle } = process.env;

  return {
    props: {
      title: `${defaultTitle} favorite music`,
      music
    }
  };
}

export default MusicList;
