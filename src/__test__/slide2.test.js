import React from 'react';
import { render } from '@testing-library/react';
import SlideTwo from '../homePage/javascripts/slide2';

test('renders SlideTwo correctly', () => {
  const { asFragment } = render(<SlideTwo />);
  
  // Initial render snapshot
  expect(asFragment()).toMatchSnapshot();
});
