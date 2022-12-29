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
  const colorButton = screen.getByRole('button', { "name": 'Change to blue' });
  const checkbox = screen.getByRole('checkbox', { "name": 'Disable button' });

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test('Checkbox disables red button and sets bg color to gray & reverts to red', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { "name": 'Change to blue' });
  const checkbox = screen.getByRole('checkbox', { "name": 'Disable button' });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});

test('Checkbox disables blue button and sets bg color to gray & reverts to blue', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { "name": 'Change to blue' });
  const checkbox = screen.getByRole('checkbox', { "name": 'Disable button' });

  // change button to blue
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue'})

  // when disabled, button should be gray
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

  // when enabled, button should be blue
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

});
