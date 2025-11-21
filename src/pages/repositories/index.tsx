import { Github, Link } from 'lucide-react';

import GlitchHeader from '@/components/home/GlitchHeader';
import TerminalCard from '@/components/home/TerminalCard';

import { getRepositoryList } from '../../service';
import type { Repository } from '../../types';

interface Props {
  title: string;
  repositories: Repository[];
}

function RepositoryList(props: Props): JSX.Element {
  const { title, repositories } = props;

  return (
    <div className="my-12">
      <GlitchHeader text={title} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {repositories.map(item => (
          <TerminalCard key={item.id} title={item.language}>
            <div className="flex flex-col h-full justify-between space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2 gap-2">
                  <h3 className="text-xl font-bold text-white line-clamp-1">{item.name}</h3>
                  <span
                    className={`text-[10px] px-2 py-0.5 border ${
                      item.archived ? 'border-yellow-500 text-yellow-500' : 'border-green-500 text-green-500'
                    } uppercase`}>
                    {item.archived ? 'ARCHIVED' : 'ACTIVE'}
                  </span>
                </div>
                <p className="text-gray-400 text-sm line-clamp-2">{item.description}</p>
              </div>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {item.topics.map(topic => (
                    <span key={topic} className="text-xs text-blue font-mono">
                      [{topic}]
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    className="w-full flex items-center justify-center gap-2 border border-gray-700 hover:border-blue hover:text-blue text-gray-400 py-2 text-xs font-mono transition-all"
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer">
                    <Github size={14} /> VIEW REPO
                  </a>
                  {item.homepage ? (
                    <a
                      className="w-full flex items-center justify-center gap-2 border border-gray-700 hover:border-blue hover:text-blue text-gray-400 py-2 text-xs font-mono transition-all"
                      href={item.homepage}
                      target="_blank"
                      rel="noopener noreferrer">
                      <Link size={14} /> VIEW WEBSITE
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </TerminalCard>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(): Promise<{ props: Props }> {
  const repositories = await getRepositoryList();

  return {
    props: {
      title: 'Repositories',
      repositories
    }
  };
}

export default RepositoryList;
