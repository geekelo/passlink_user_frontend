import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import FooterSection from '../homePage/javascripts/footersection';

test('renders FooterSection component correctly', () => {
  const { asFragment } = render(
    <Router>
      <FooterSection />
    </Router>,
  );
  expect(asFragment()).toMatchSnapshot();
});
