import { config, createMiddleware } from 'next-middlewares';

import * as RSSMiddleware from './middlewares/rss';

export const middleware = createMiddleware([RSSMiddleware]);

export { config };
