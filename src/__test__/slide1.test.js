import React from 'react';
import { render } from '@testing-library/react';
import SlideOne from '../homePage/javascripts/slide1';

test('renders SlideOne correctly', () => {
  const { asFragment } = render(<SlideOne />);
  
  // Initial render snapshot
  expect(asFragment()).toMatchSnapshot();
});
