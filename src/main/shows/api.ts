import { Show, Shows } from './shows';
import { ApiResponse } from '../common/api';

interface ResponseBodyElement {
  score: number;
  show: Show;
}

type ResponseBody = ResponseBodyElement[]

export const fetchShows = async () => {
  const response = await fetch('https://api.tvmaze.com/search/shows?q=heist');
  return await unwrap(response.json());
};

const unwrap = async (json: Promise<ResponseBody>) => {
  const bodies = await json;
  return bodies.map(body => body.show);
};

export const getShows = (doFetchShows = fetchShows): ApiResponse<Shows> => {
  let result: Shows;
  let error: Error;
  const suspender = doFetchShows()
    .then(r => result = r)
    .catch(e => error = e);

  return {
    read() {
      if (result) {
        return result;
      }
      if (error) {
        throw error;
      }
      throw suspender;
    }
  };
};
