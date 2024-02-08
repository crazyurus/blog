import { config, createMiddleware } from 'next-middlewares';

import * as MobileMiddleware from './middlewares/mobile';
import * as RSSMiddleware from './middlewares/rss';

export const middleware = createMiddleware([MobileMiddleware, RSSMiddleware]);

export { config };
