import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../main/home/Home';

test('renders hello world text', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Hello, world!/i);
  expect(linkElement).toBeInTheDocument();
});
