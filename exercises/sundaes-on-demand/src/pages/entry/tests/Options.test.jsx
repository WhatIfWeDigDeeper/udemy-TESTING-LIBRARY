import { render, screen } from '@testing-library/react';

import { Options } from '../Options';

describe('Options', ()=> {
  test('displays images for each scoop option from server', async () => {
    render(<Options optionType="scoops" />);

    // find images
    const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
    expect(scoopImages).toHaveLength(2);

    // confirm alt text of images
    const altText = scoopImages.map((element) => element.alt)
    expect(altText).toEqual([
      'Chocolate scoop',
      'Vanilla scoop'
    ]);
  });

  test('displays images for each topping option from the server', async () => {
    render(<Options optionType="toppings" />);

    const toppingImages = await screen.findAllByAltText(/topping/i);
    expect(toppingImages).toHaveLength(3);

    //confirm alt text of images
    const altText = toppingImages.map((elem) => elem.alt);
    expect(altText).toEqual([
      'Cherries topping',
      'M&Ms topping',
      'Hot fudge topping'
    ])
  });
});
