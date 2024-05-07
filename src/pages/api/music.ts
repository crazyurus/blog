import { getMusicList } from '../../service';
import { createHandler } from '../../utils/api';

const handler = createHandler('music', getMusicList);

export default handler;
