import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CopyButton from '../homePage/javascripts/copybtn';

test('renders CopyButton correctly', () => {
  const { asFragment, getByText } = render(<CopyButton textToCopy="Test text" />);

  // Initial render snapshot
  expect(asFragment()).toMatchSnapshot();

  // Snapshot after click
  expect(asFragment()).toMatchSnapshot();
});
