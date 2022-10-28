import { render, screen } from '@testing-library/react';
import { HelloWorld } from '../../main/composed';

test('renders World text', async () => {
  render(<HelloWorld base={(e) => <div>Test {e}</div>}/>);

  expect(screen.getByText('Test')).toBeInTheDocument();
  expect(screen.getByText('World!')).toBeInTheDocument();
});
