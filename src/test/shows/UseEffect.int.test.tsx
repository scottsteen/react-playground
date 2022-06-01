import React, { ReactElement } from 'react';
import { rest } from 'msw';
import { render, screen } from '@testing-library/react';
import App from '../../main/app/App';
import { server } from '../test-api';

test('lists TV shows', async () => {
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

  renderRoute(<App />, '/shows/use-effect');

  expect(screen.getByText('Shows')).toBeInTheDocument();
  expect(await screen.findByText('Show 1 (Documentary, English)')).toHaveAttribute('href', 'https://1.show');
  expect(await screen.findByText('Show 2 (Action, French)')).toHaveAttribute('href', 'https://2.show');
});

const renderRoute = (component: ReactElement, route: string) => {
  window.history.pushState({}, '', route);

  render(component);
};

const aScore = () => 0.1234;
