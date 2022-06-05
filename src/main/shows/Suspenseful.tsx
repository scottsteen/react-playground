import { fetchShows as defaultFetchShows } from './api';
import { Shows } from './shows';

let result: Shows;
let error: Error;

const useFetchShows = (fetchShows: () => Promise<Shows>) => {
  const suspender = fetchShows()
    .then(setResult)
    .catch(setError);
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

const Suspenseful = ({ fetchShows = defaultFetchShows }) => {
  const shows = useFetchShows(fetchShows).read();

  return (
    <div>
      <h3>Shows</h3>
      <ul>
        {shows.map(show => (
          <li key={show.id}>
            <a href={show.url}>{show.name} ({show.type}, {show.language})</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const setResult = (r: Shows) => result = r;
const setError = (e: Error) => error = e;

export default Suspenseful;
