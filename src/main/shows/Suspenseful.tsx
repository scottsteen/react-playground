import { getShows as defaultGetShows } from './api';

const Suspenseful = ({ getShows = defaultGetShows }) => {
  const shows = getShows().read();

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

export default Suspenseful;
