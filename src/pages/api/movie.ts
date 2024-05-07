import type { NextApiRequest, NextApiResponse } from 'next';

import { getMovieList } from '../../service';

async function handler(request: NextApiRequest, response: NextApiResponse) {
  const movie = await getMovieList();

  response.json({
    code: 0,
    message: '',
    data: {
      movie
    }
  });
}

export default handler;
