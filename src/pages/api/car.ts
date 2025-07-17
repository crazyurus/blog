import { getCarBlogList } from '../../service';
import { createHandler } from '../../utils/api';

const handler = createHandler('car', getCarBlogList);

export default handler;
