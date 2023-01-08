import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { server } from '../../../mocks/server';

import { OrderEntry } from '../OrderEntry';

describe('Order Entry', () => {
  test('happy path', async () => {
    render(<OrderEntry />);

    const scoopImages = await screen.findAllByAltText(/scoop$/i);
    expect(scoopImages.length).toBe(2);

    const toppingImages = await screen.findAllByAltText(/topping/i);
    expect(toppingImages.length).toBe(3);
  });
  const serverErrMessage = 'An unexpected error occurred. Please try again later.'
  test('shows error message', async () => {
    server.resetHandlers(
      rest.get('http://localhost:3030/scoops',
        (req, resp, ctx) =>
          resp(ctx.status(500, serverErrMessage))
      ),
      rest.get('http://localhost:3030/toppings',
        (req, resp, ctx) =>
          resp(ctx.status(500, serverErrMessage))
      )
    );

    render(<OrderEntry />);

    await waitFor(async () => {
      const alerts = await screen.findAllByRole('alert');
      expect(alerts).toHaveLength(2)
    });
  });
});
