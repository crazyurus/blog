import type { NextApiRequest } from 'next';

import { createHandler } from '@/utils/api';

import { getMovieDetail } from '../../../service';

const handler = createHandler('movie', getMovieDetail, (request: NextApiRequest) => [request.query.id]);

export default handler;
