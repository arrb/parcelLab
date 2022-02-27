import { render, screen } from '@testing-library/react';
import App from './App';

test('renders first screen', () => {
  render(<App />);

  const checkFirstScreen = screen.getByText(/Please enter your email address to see your recent orders/i);
  expect(checkFirstScreen).toBeInTheDocument();
});

