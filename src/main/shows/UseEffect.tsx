import { useEffect, useRef, useState } from 'react';
import { Show, Shows } from './shows';
import { fetchShows as defaultFetchShows } from './api';

const UseEffect = ({fetchShows = defaultFetchShows}) => {
  const shows = useFetchShows(fetchShows);

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

const useFetchShows = (fetchShows: () => Promise<Show[]>) => {
  const fetched = useRef(false);
  const [shows, setShows] = useState<Shows>([]);

  useEffect(() => {
    // In React 18, `useEffect` is called twice, because the component is rendered twice.
    // It should not be used for fetching data, without further guards.
    // The guard in this example is a Ref. https://reactjs.org/docs/hooks-reference.html#useref
    if (fetched.current) {
      return;
    }
    fetched.current = true;

    fetchShows()
      .then(setShows);
  }, [fetchShows]); // using the dependency block means this only runs when the objects change, not in the default infinite loop. https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects

  return shows;
};

export default UseEffect;
