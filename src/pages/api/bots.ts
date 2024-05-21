import { getBotList } from '../../service';
import { createHandler } from '../../utils/api';

const handler = createHandler('bots', getBotList);

export default handler;
