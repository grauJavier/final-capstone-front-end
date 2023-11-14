import { render, waitFor, fireEvent } from '@testing-library/react';
import NavBar from '../components/navigation_bar/NavBar';
import { describe, it, expect, beforeEach } from 'vitest';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/Store';

describe('NavBar Component', () => {
  let component;

  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <Router>
          <NavBar />
        </Router>
      </Provider>
    );
  });

  it('NavBar renders correctly', async () => {
    await waitFor(() => {
      expect(NavBar).toMatchSnapshot();
    });
  });

  it('Clicking "Places" link navigates to the "/places" path', async () => {
    const placesLink = component.getByText('Places');
    fireEvent.click(placesLink);

    await waitFor(() => {
      expect(window.location.pathname).toBe('/places');
    });
  });

  it('Clicking "New Reservation" link navigates to the "/reservation" path', async () => {
    const newReservationLink = component.getByText('New Reservation');
    fireEvent.click(newReservationLink);

    await waitFor(() => {
      expect(window.location.pathname).toBe('/reservation');
    });
  });

  it('Clicking "My Reservations" link navigates to the "/my-reservations" path', async () => {
    const myReservationsLink = component.getByText('My Reservations');
    fireEvent.click(myReservationsLink);

    await waitFor(() => {
      expect(window.location.pathname).toBe('/my-reservations');
    });
  });

  it('Clicking "My Places" link navigates to the "/my-places" path', async () => {
    const myPlacesLink = component.getByText('My Places');
    fireEvent.click(myPlacesLink);

    await waitFor(() => {
      expect(window.location.pathname).toBe('/my-places');
    });
  });

  it('Clicking "New Place" link navigates to the "/new-place" path', async () => {
    const newPlaceLink = component.getByText('New Place');
    fireEvent.click(newPlaceLink);

    await waitFor(() => {
      expect(window.location.pathname).toBe('/new-place');
    });
  });
});
