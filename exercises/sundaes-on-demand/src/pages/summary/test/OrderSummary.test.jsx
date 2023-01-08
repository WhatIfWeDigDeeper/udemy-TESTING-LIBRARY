import { render, screen } from '@testing-library/react';

import { OrderSummary } from '../OrderSummary';

describe('Order Summary', ()=> {
  test('Order Summary Text', () => {
    render(<OrderSummary />);

    const orderSummaryText = screen.getByText(/Order Summary/i);
    expect(orderSummaryText).toBeInTheDocument();
 });
});
