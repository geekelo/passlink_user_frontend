import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders App correctly', () => {
  const { asFragment } = render(
    <App />
  );

  // Initial render snapshot
  expect(asFragment()).toMatchSnapshot();
});
