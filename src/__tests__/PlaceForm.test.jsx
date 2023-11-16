import '@testing-library/jest-dom'; // For better DOM assertions
import { beforeEach, expect, describe, test } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import PlaceForm from '../components/place_form/PlaceForm';
import { store } from '../redux/store';

describe('place form', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Navigate to="/new-place" />} />
            <Route path="/new-place" element={<PlaceForm />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  });

  test('should display the correct elements', async () => {
    const nameInput = screen.getByPlaceholderText('Name');
    const locationInput = screen.getByPlaceholderText('Select Location');
    const descriptionInput = screen.getByPlaceholderText('Add a description');
    const placeTypeInput = screen.getByPlaceholderText('Place type');
    const propertyTypeInput = screen.getByPlaceholderText('Property type');

    const button = screen.getByRole('button', { name: 'Add new place' });

    expect(nameInput).toBeInTheDocument();
    expect(locationInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(placeTypeInput).toBeInTheDocument();
    expect(propertyTypeInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('should render correctly', async () => {
    await waitFor(() => expect(PlaceForm).toMatchSnapshot());
  });
});
