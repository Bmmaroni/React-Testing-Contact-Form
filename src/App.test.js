import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App without crashing', () => {
  render(<App />);
});

test('user can fill in and submit form', () => {
  render(<App />);

  const firstNameInput = screen.getByPlaceholderText(/first name/i);
  const firstNameInput = screen.getByPlaceholderText(/first name/i);
  const firstNameInput = screen.getByPlaceholderText(/first name/i);
  const firstNameInput = screen.getByPlaceholderText(/first name/i);

})