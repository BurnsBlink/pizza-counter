import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Add a PIZZA!/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link00', () => {
  const { getByTestId } = render(<App />)
  const count = getByTestId(`count`)
  const add = screen.getByText(/Add a PIZZA!/i)

  fireEvent.click(add)
  expect(count.innerHTML).toBe('1')
});
