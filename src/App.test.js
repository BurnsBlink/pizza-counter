import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Counter Clicker button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Counter Clicker/i);
  expect(linkElement).toBeInTheDocument();
});
