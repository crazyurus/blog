import type { NextApiRequest, NextApiResponse } from 'next';

import { getRepositoryList } from '../../service';

async function handler(request: NextApiRequest, response: NextApiResponse) {
  const repositories = await getRepositoryList();

  response.json({
    code: 0,
    message: '',
    data: {
      repositories
    }
  });
}

export default handler;
