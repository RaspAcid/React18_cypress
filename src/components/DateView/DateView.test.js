import React from 'react';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import { DateView } from './DateView';

afterEach(cleanup);

it('CheckboxWithLabel changes the text after click', () => {
  render(<DateView/>);

  const checkbox = screen.getByTestId('switcher')

  expect(checkbox).toBeInTheDocument();
  expect(checkbox.checked).toEqual(false);

  fireEvent.click(checkbox);

  expect(checkbox.checked).toEqual(true);
  expect(screen.getByTestId('currentDate')).toBeInTheDocument();
});