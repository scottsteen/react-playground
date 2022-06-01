import { fetchShows } from '../../main/shows/api';
import { rest } from 'msw';
import { server } from '../test-api';

test('fetches TV show list', async () => {
  server.use(rest
    .get('https://api.tvmaze.com/search/shows', (req, res, ctx) => {
      req.url.searchParams.set('q', 'heist');
      return res(ctx.json([
        {
          score: aScore(),
          show: {
            id: 'show-1',
            url: 'https://1.show',
            name: 'Show 1',
            type: 'Documentary',
            language: 'English'
          }
        },
        {
          score: aScore(),
          show: {
            id: 'show-2',
            url: 'https://2.show',
            name: 'Show 2',
            type: 'Action',
            language: 'French'
          }
        }
      ]));
    }));

  const actual = await fetchShows();

  expect(actual).toEqual([
    {
      id: 'show-1',
      url: 'https://1.show',
      name: 'Show 1',
      type: 'Documentary',
      language: 'English'
    },
    {
      id: 'show-2',
      url: 'https://2.show',
      name: 'Show 2',
      type: 'Action',
      language: 'French'
    }
  ]);
});

const aScore = () => 0.1234;
