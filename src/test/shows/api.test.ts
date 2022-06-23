import { getShows } from '../../main/shows/api';
import { readApiResponse } from '../common/api-test-utils';

test('reads TV show list', async () => {
  const fetchShows = () => Promise.resolve([
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

  const actual = await readApiResponse(getShows(fetchShows));

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

test('reading TV shows throws error', async () => {
  const fetchShows = () => Promise.reject('A reason');

  const actual = () => readApiResponse(getShows(fetchShows));

  await expect(actual).rejects.toEqual('A reason');
});
