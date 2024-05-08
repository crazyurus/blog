import type { NextApiRequest } from 'next';

import { createHandler } from '@/utils/api';

import { getBlogDetail } from '../../../service';

const handler = createHandler('blog', getBlogDetail, (request: NextApiRequest) => [request.query.id]);

export default handler;
