import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SummaryForm } from '../SummaryForm';

describe('SummaryForm', () => {
  test('Initial condition: checkbox is unchecked,btn disabled', () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole('checkbox', { name: /terms and conditions/i });
    const button = screen.getByRole('button', { name: /confirm order/i });


    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
  });
  test('Checkbox enables button on first click and disables on second click', async () => {
    const user = userEvent.setup();

    render(<SummaryForm />);

    const checkbox = screen.getByRole('checkbox', { name: /terms and conditions/i });
    const button = screen.getByRole('button', { name: /confirm order/i });

    await user.click(checkbox);
    expect(button).toBeEnabled();

    await user.click(checkbox);
    expect(button).toBeDisabled();
  });

  test('popover response to hover', async () => {
    const user = userEvent.setup();

    render(<SummaryForm />);

    // popover starts out hidden
    const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i);
    expect(nullPopover).not.toBeInTheDocument();

    // popover appears upon mouseover of checkbox label
    const termsAndConditions = screen.getByText(/terms and conditions/i)
    await user.hover(termsAndConditions);

    const hoverText = screen.getByText(/no ice cream will actually be delivered/i);
    expect(hoverText).toBeInTheDocument();

    // popover disappears when we mouse out
    await user.unhover(termsAndConditions);
    expect(hoverText).not.toBeInTheDocument();

    // const nullMouseOutHoverText = screen.queryByText(/no ice cream will actually be delivered/i);
    // expect(nullMouseOutHoverText).not.toBeInTheDocument();

  });

});
