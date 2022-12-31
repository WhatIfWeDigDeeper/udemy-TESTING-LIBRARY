import { render, screen, fireEvent } from '@testing-library/react';
import SummaryForm from '../SummaryForm';

describe('SummaryForm', () => {
  test('Checkbox is unchecked by default', () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole('checkbox', { name: /terms and conditions/i });

    expect(checkbox).not.toBeChecked();
  });
  test('Checkbox enables button on first click and disables on second click', () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole('checkbox', { name: /terms and conditions/i });
    const button = screen.getByRole('button', { name: /confirm order/i });

    fireEvent.click(checkbox);
    expect(button).toBeEnabled();

    fireEvent.click(checkbox);
    expect(button).toBeDisabled();
  });

});
