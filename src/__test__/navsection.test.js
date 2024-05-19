import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer'; // Import renderer from react-test-renderer

// Import NavSection component
import NavSection from '../homePage/javascripts/navsection';

test('renders NavSection correctly', () => {
  const { asFragment } = render(<NavSection />);

  // Initial render snapshot
  expect(asFragment()).toMatchSnapshot();
});

// Snapshot testing with react-test-renderer
test('NavSection snapshot', () => {
  const tree = renderer.create(<NavSection />).toJSON();
  expect(tree).toMatchSnapshot();
});
