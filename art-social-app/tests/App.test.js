import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomePage from '../App'; // Import your component

describe('HomePage renders correctly', () => {
  const { getByText, getByTestId } = render(<HomePage></HomePage>);

  // Assert that the "Home" text is rendered
  const homeText = getByText('Home');
  expect(homeText).toBeDefined();

  // Assert that the "Go to Your Profile" button is rendered
  const goToProfileButton = getByText('Go to Your Profile');
  expect(goToProfileButton).toBeDefined();

  // Simulate a button click and assert that navigation is triggered
  fireEvent.press(goToProfileButton);
  // You should add your navigation logic/assertions here
});
