import { fireEvent, logRoles, render, screen } from '@testing-library/react';

import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
  expect(colorButton.textContent).toBe('Change to blue');

});

test.skip('debug roles', () => {
    const { container } = render(<App />);
    logRoles(container);
});

test('button turns blue when clicked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
  expect(colorButton).toHaveTextContent('Change to red');
});

test('initial conditions', () => {
  // check that the button starts out enabled
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  // button is enabled on first render
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');

  expect(checkbox).not.toBeChecked();
});

test('checkbox disables button on 1st click & enables it on 2nd click', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkbox = screen.getByRole('checkbox');

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});
