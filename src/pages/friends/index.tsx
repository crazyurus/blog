import { User } from 'lucide-react';

import GlitchHeader from '@/components/home/GlitchHeader';
import TerminalCard from '@/components/home/TerminalCard';
import { getFriendList } from '@/service';

import type { Friend } from '../../types';
import styles from './index.module.scss';

interface Props {
  title: string;
  friends: Friend[];
}

function FriendList(props: Props): JSX.Element {
  const { title, friends } = props;

  return (
    <div className="my-12">
      <GlitchHeader text={title} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {friends.map(item => (
          <TerminalCard key={item.name} title="">
            <div className="flex items-center gap-4 p-2">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                <User size={24} className="text-gray-400" />
              </div>
              <a className="flex-1" href={item.url} target="_blank" rel="noopener noreferrer">
                <div className="flex justify-between items-center">
                  <h4 className="text-white hover:text-blue font-bold">{item.name}</h4>
                </div>
                <div className="text-xs text-gray-500 hover:text-white mt-1 block">View &gt;</div>
              </a>
            </div>
          </TerminalCard>
        ))}
      </div>
      <p className={styles.after}>
        想成为我的朋友出现在这里？
        <a href="https://wj.qq.com/s2/11991568/cfb8/" target="_blank" rel="noopener noreferrer">
          请戳这里填写问卷
        </a>
      </p>
    </div>
  );
}

export async function getServerSideProps(): Promise<{ props: Props }> {
  const friends = await getFriendList();

  return {
    props: {
      title: 'Friends',
      friends
    }
  };
}

export default FriendList;
