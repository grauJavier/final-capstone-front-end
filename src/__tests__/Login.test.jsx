import '@testing-library/jest-dom'; // For better DOM assertions
import { beforeEach, expect, describe, test } from 'vitest';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../components/Register_Login_forms/Login';
import Register from '../components/register_login_forms/Register';
import { store } from '../redux/store';

describe('login form', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  });

  test('should display the correct elements', async () => {
    const login = await screen.findByText('LOGIN');
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const button = screen.getByRole('button', { name: 'Sign in' });

    expect(login).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('should render correctly', async () => {
    await waitFor(() => expect(Login).toMatchSnapshot());
  });

  test('should redirect to /register page when "Sign up" link is clicked', async () => {
    const signUpLink = screen.getByText('Sign up');

    fireEvent.click(signUpLink);

    const registerPage = await screen.findByText('REGISTER'); 

    expect(registerPage).toBeInTheDocument();
  });
});
