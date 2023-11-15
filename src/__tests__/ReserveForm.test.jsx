import '@testing-library/jest-dom'; // For better DOM assertions
import { beforeEach, expect, describe, test } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReservationForm from '../components/reservation_form/ReservationForm';
import { store } from '../redux/store';

describe('reservation form', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<ReservationForm />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  });

  test('should display the correct elements', async () => {
    const cityInput = screen.getByPlaceholderText('Select a City');
    const placeInput = screen.getByPlaceholderText('Select a Place');
    const dateInput = screen.getByPlaceholderText('Select a Date');

    const button = screen.getByRole('button', { name: 'Submit' });

    expect(cityInput).toBeInTheDocument();
    expect(placeInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('should render correctly', async () => {
    await waitFor(() => expect(ReservationForm).toMatchSnapshot());
  });
});
