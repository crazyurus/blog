import { getBlogList } from '../../../service';
import { createHandler } from '../../../utils/api';

const handler = createHandler('blogs', getBlogList);

export default handler;
