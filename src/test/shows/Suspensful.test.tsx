import Suspenseful from '../../main/shows/Suspenseful';
import { render, screen } from '@testing-library/react';
import React from 'react';

test('renders TV show list', async () => {
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

  render(<React.Suspense fallback="Test"><Suspenseful fetchShows={fetchShows} /></React.Suspense>);

  expect(screen.getByText('Test')).toBeInTheDocument(); // This assertion is a race condition!
  expect(await screen.findByText('Shows')).toBeInTheDocument();
  expect(await screen.findByText('Show 1 (Documentary, English)')).toBeInTheDocument();
  expect(await screen.findByText('Show 2 (Action, French)')).toBeInTheDocument();
});
