import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter for testing

// Import InfoNav component
import InfoNav from '../homePage/javascripts/infonav';

test('renders InfoNav correctly', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <InfoNav />
    </MemoryRouter>,
  );

  // Initial render snapshot
  expect(asFragment()).toMatchSnapshot();
});

// Snapshot testing with react-test-renderer
test('InfoNav snapshot', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <InfoNav />
    </MemoryRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
