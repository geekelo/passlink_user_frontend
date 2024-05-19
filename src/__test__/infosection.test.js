import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import InfoSection from '../homePage/javascripts/infosection';

// Mock useLocation to return a pathname for testing
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
}));

test('renders InfoSection component correctly for /about route', () => {
  useLocation.mockReturnValue({ pathname: '/about' });
  const { asFragment } = render(
    <BrowserRouter>
      <InfoSection />
    </BrowserRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders InfoSection component correctly for /contact route', () => {
  useLocation.mockReturnValue({ pathname: '/contact' });
  const { asFragment } = render(
    <BrowserRouter>
      <InfoSection />
    </BrowserRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
