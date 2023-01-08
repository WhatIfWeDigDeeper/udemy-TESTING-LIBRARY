import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const orderSummaryText = screen.getByText(/order summary/i);
  expect(orderSummaryText).toBeInTheDocument();
});
