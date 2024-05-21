import { getFriendList } from '../../service';
import { createHandler } from '../../utils/api';

const handler = createHandler('friends', getFriendList);

export default handler;
