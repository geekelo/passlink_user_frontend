import React from 'react';
import { render } from '@testing-library/react';
import LandingSection from '../homePage/javascripts/landingsection';

test('renders LandingSection correctly', () => {
  const { asFragment } = render(<LandingSection />);

  // Initial render snapshot
  expect(asFragment()).toMatchSnapshot();
});
