// src/mocks/handlers.js
import { rest } from 'msw';

export const handlers = [

  // Handles a GET /user request
  rest.get('http://localhost:3000/scoops', (req, res, ctx) => {
    return res(
      ctx.json([
        { name: 'Chocolate', imagePath: '/images/chocolate.png' },
        { name: 'Vanilla', imagePath: '/images/chocolate.png' }
      ])
    );
  }),
];
