import type { NextApiRequest, NextApiResponse } from 'next';

import { getBlogDetail } from '../../../service';

async function handler(request: NextApiRequest, response: NextApiResponse) {
  const { id } = request.query;
  const blog = await getBlogDetail(id as string);

  response.json({
    code: 0,
    message: '',
    data: blog
  });
}

export default handler;
