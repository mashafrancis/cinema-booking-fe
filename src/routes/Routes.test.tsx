// react libraries
import React from 'react';

// third party libraries
import {screen} from '@testing-library/react'

// components
import HomePage from "../pages/HomePage";
import App from "../App";
import {renderWithRouter} from "../testHelpers";

describe.skip('The Route components', () => {
  test('should render the homepage component', () => {
    const route = '/';
    renderWithRouter(<HomePage isLoading={false}/>, {route});
    expect(screen.getByTestId('home-page').textContent).toBe('Cinema Booking')
  });

  test('should render the 404 component', () => {
    const {container} = renderWithRouter(<App />, {
      route: '/404'
    })
    expect(container.innerHTML).toMatch('404')
  });
});
