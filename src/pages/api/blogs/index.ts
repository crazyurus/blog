import type { NextApiRequest, NextApiResponse } from 'next';

import { getBlogList } from '../../../service';

async function handler(request: NextApiRequest, response: NextApiResponse) {
  const blogs = await getBlogList();

  response.json({
    code: 0,
    message: '',
    data: {
      blogs
    }
  });
}

export default handler;
