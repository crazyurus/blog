import type { NextApiRequest, NextApiResponse } from 'next';

import { getMusicList } from '../../service';

async function handler(request: NextApiRequest, response: NextApiResponse) {
  const music = await getMusicList();

  response.json({
    code: 0,
    message: '',
    data: {
      music
    }
  });
}

export default handler;
