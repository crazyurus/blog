import { Star } from 'lucide-react';
import React from 'react';

import GlitchHeader from '@/components/home/GlitchHeader';

import { getMovieList } from '../../service';
import type { Movie } from '../../types';

interface Props {
  title: string;
  movies: Movie[];
}

function MovieList(props: Props): JSX.Element {
  const { title, movies } = props;

  return (
    <div className="my-12">
      <GlitchHeader text={title} />
      <div className="space-y-4">
        {movies.map(item => (
          <div
            key={item.id}
            className="flex items-center justify-between border-l-2 border-green p-4 transition-colors gap-6">
            <div className="flex-grow">
              <div className="flex items-baseline gap-3">
                <a
                  className="flex-shrink-0"
                  href={`https://www.themoviedb.org/movie/${item.id}`}
                  target="_blank"
                  rel="noopener noreferrer">
                  <h3 className="text-lg font-bold text-white hover:text-blue">{item.title}</h3>
                </a>
                <span className="text-sm text-gray-500 font-mono">({item.time})</span>
              </div>
              <div className="text-xs text-gray-400 font-mono mt-2 line-clamp-2">{item.description}</div>
            </div>
            <div className="flex items-center gap-6 text-right flex-shrink-0">
              <div>
                <div className="flex items-center gap-1 text-yellow-500 text-sm font-mono">
                  <Star size={12} fill="currentColor" /> {item.rate}
                </div>
                <div className="text-[10px] text-gray-600 uppercase">Critic Score</div>
              </div>
              <div>
                <div className="text-cyan text-sm font-mono">{item.count}</div>
                <div className="text-[10px] text-gray-600 uppercase">Vote Count</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(): Promise<{ props: Props }> {
  const movies = await getMovieList();

  return {
    props: {
      title: 'Favorite movies',
      movies
    }
  };
}

export default MovieList;
