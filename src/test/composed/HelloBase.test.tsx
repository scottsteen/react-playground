import { render, screen } from '@testing-library/react';
import HelloBase from '../../main/composed/HelloBase';

test('renders Hello text', async () => {
  render(<HelloBase  element={<div>Test</div>}/>);

  expect(screen.getByText('Composed Page')).toBeInTheDocument();
  expect(screen.getByText('Hello,')).toBeInTheDocument();
  expect(screen.getByText('Test')).toBeInTheDocument();
});
