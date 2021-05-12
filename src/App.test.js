import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    render(<App />);
  })

  afterEach(cleanup);

  test('renders learn react link', () => {
    const linkElement = screen.getByText(/Add a PIZZA!/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('should update the count by 1 when clicked', () => {
    const add = screen.getByText(/Add a PIZZA!/i)
    const count = screen.getByTestId(`count`)
  
    fireEvent.click(add)
    setTimeout(() => {
      expect(count.innerHTML).toBe('Total number of pizzas clicked: <span id=\"pizza-count\">1!</span>')
    }, 1000);
  });
})
