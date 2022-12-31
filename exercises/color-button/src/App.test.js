import { fireEvent, logRoles, render, screen } from '@testing-library/react';

import { replaceCamelCaseWithSpaces } from './App';

import App from './App';

const initialColor = 'MediumVioletRed';
const initialButtonLabel = 'Change to Midnight Blue';

const toggledColor = 'MidnightBlue';
const toggledButtonLabel = 'Change to Medium Violet Red';

test('button has correct initial color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: initialButtonLabel });

  expect(colorButton).toHaveStyle({ backgroundColor: initialColor });
  expect(colorButton.textContent).toBe(initialButtonLabel);

});

test.skip('debug roles', () => {
    const { container } = render(<App />);
    logRoles(container);
});

test(`button turns ${toggledColor} when clicked`, () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: initialButtonLabel });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: toggledColor });
  expect(colorButton).toHaveTextContent(toggledButtonLabel);
});

test('initial conditions', () => {
  // check that the button starts out enabled
  render(<App />);
  const colorButton = screen.getByRole('button', { name: initialButtonLabel });

  // button is enabled on first render
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');

  expect(checkbox).not.toBeChecked();
});

test('checkbox disables button on 1st click & enables it on 2nd click', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { "name": initialButtonLabel });
  const checkbox = screen.getByRole('checkbox', { "name": 'Disable button' });

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test(`Checkbox disables ${initialColor} button and sets bg color to gray & reverts to ${initialColor}`, () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { "name": initialButtonLabel });
  const checkbox = screen.getByRole('checkbox', { "name": 'Disable button' });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: initialColor });
});

test(`Checkbox disables ${toggledColor} button and sets bg color to gray & reverts to ${toggledColor}`, () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { "name": initialButtonLabel });
  const checkbox = screen.getByRole('checkbox', { "name": 'Disable button' });

  // change button to toggledColor
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: toggledColor})

  // when disabled, button should be gray
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

  // when enabled, button should be toggledColor
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: toggledColor });

});

describe('spaces before camelCase capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelCaseWithSpaces('red')).toBe('red');
  });

  test('Works for one inner capital letter', () => {
    expect(replaceCamelCaseWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelCaseWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');

  });
});
