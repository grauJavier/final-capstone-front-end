import '@testing-library/jest-dom'; // For better DOM assertions
import { beforeEach, expect, describe, test } from 'vitest';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from '../components/Register_Login_forms/Login';
import Register from '../components/register_login_forms/Register';
import { store } from '../redux/store';

describe('register form', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Navigate to="/register" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  });

  test('should display the correct elements', async () => {
    const register = await screen.findByText('REGISTER');
    const usernameInput = screen.getByPlaceholderText('Username');
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const button = screen.getByRole('button', { name: 'Sign up' });

    expect(register).toBeInTheDocument();
    expect(usernameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('should render correctly', async () => {
    await waitFor(() => expect(Register).toMatchSnapshot());
  });

  test('should redirect to /login page when "Sign in" link is clicked', async () => {
    const signInLink = screen.getByText('Sign in');

    fireEvent.click(signInLink);

    const loginPage = await screen.findByText('LOGIN'); 

    expect(loginPage).toBeInTheDocument();
  });
});
