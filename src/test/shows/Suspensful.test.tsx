import Suspenseful from '../../main/shows/Suspenseful';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Shows } from '../../main/shows/shows';
import { ApiResponse } from '../../main/common/api';

test('renders TV show list', async () => {
  const readShows = () => response([
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

  render(<Suspenseful getShows={readShows} />);

  expect(await screen.findByText('Shows')).toBeInTheDocument();
  expect(await screen.findByText('Show 1 (Documentary, English)')).toBeInTheDocument();
  expect(await screen.findByText('Show 2 (Action, French)')).toBeInTheDocument();
});

const response = (shows: Shows): ApiResponse<Shows> => {
  return {
    read() {
      return shows;
    }
  };
}
