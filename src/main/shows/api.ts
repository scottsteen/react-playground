import { Show } from './shows';

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
