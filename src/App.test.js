import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { act } from 'react-dom/test-utils';

test('renders App without crashing', () => {
  render(<App />);
});

test('user can fill in and submit form', async() => {
  render(<App />);

  const firstNameInput = screen.getByPlaceholderText(/edd/i);
  const lastNameInput = screen.getByPlaceholderText(/burke/i);
  const emailInput = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);
  const messageInput = screen.getByLabelText(/message/i);

  userEvent.type(firstNameInput, "John");
  userEvent.type(lastNameInput, "Doe");
  userEvent.type(emailInput, "johndoe@gmail.com");
  userEvent.type(messageInput, "Hi, my name is John.");

  expect(firstNameInput).toHaveValue('John');
  expect(lastNameInput).toHaveValue('Doe');
  expect(emailInput).toHaveValue('johndoe@gmail.com');
  expect(messageInput).toHaveValue('Hi, my name is John.');

  await act(async () => {
    const button = screen.getByRole("button", {name: /submit/i});
    userEvent.click(button);
  });

});