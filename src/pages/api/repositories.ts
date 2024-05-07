import { getRepositoryList } from '../../service';
import { createHandler } from '../../utils/api';

const handler = createHandler('repositories', getRepositoryList);

export default handler;
