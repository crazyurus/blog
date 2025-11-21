import { BotIcon } from 'lucide-react';

import GlitchHeader from '@/components/home/GlitchHeader';
import { getBotList } from '@/service';

import type { Bot } from '../../types';
import styles from './index.module.scss';

interface Props {
  title: string;
  agents: Bot[];
}

function AgentList(props: Props): JSX.Element {
  const { title, agents } = props;

  return (
    <div className="my-12">
      <GlitchHeader text={title} />
      <p className={styles.before}>
        以下 Agent 可在{' '}
        <a href="https://www.doubao.com/" target="_blank" rel="noopener noreferrer">
          豆包
        </a>{' '}
        中打开：
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {agents.map(item => (
          <a
            key={item.id}
            className={styles.friend}
            href={`https://www.doubao.com/share?botId=${item.id}`}
            target="_blank"
            rel="noopener noreferrer">
            <div className="bg-dark border border-[#008f11] hover:border-green p-4 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <BotIcon size={24} className="text-green" />
                <div
                  className={`w-2 h-2 rounded-full ${
                    item.enable ? 'bg-green-500 shadow-[0_0_5px_#00ff41]' : 'bg-yellow-500'
                  }`}></div>
              </div>
              <div className="font-mono font-bold text-white hover:text-blue text-lg mb-1">{item.name}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(): Promise<{ props: Props }> {
  const agents = await getBotList();

  return {
    props: {
      title: 'Agents',
      agents
    }
  };
}

export default AgentList;
