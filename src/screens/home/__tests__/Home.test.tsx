/* eslint-disable no-undef */
import React from 'react';
import {
  render,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import HomeScreen from '../index';

test('rendering elements', () => {
  const {
    getAllByText, getAllByTestId, container,
  } = render(<HomeScreen />);

  expect(getAllByText(/Remoto Brasil/i)[0]);
  expect(getAllByText(/SOBRE A REMOTO BRASIL/i)[0]);
  expect(getAllByText(/Tem algum repositório para indicar?/)[0]);

  expect(getAllByTestId('card').length).toBeGreaterThanOrEqual(1);

  expect(container).toMatchSnapshot();
});
