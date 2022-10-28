import { render, screen } from '@testing-library/react';
import { HelloYou } from '../../main/composed';

test('renders You text', async () => {
  render(<HelloYou base={(e) => <div>Test {e}</div>}/>);

  expect(screen.getByText('Test')).toBeInTheDocument();
  expect(screen.getByText('You!')).toBeInTheDocument();
});
