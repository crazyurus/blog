import { getMovieList } from '../../../service';
import { createHandler } from '../../../utils/api';

const handler = createHandler('movies', getMovieList);

export default handler;
