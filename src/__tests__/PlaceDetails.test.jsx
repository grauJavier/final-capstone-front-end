import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import PlaceDetails from '../components/place_details/PlaceDetails';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { createMemoryHistory } from 'history';
import { describe, it, expect } from 'vitest';

const mockStore = configureStore([thunk]);
const store = mockStore({
  user: {
    currentUser: { id: 1, email: 'graujavier@gmail.com', username: 'Javier' },
  },
  placesSlice: {
    details: {
      id: 1,
      place_id: 1,
      place_type: 'Entire Place',
      bedrooms: 4,
      beds: 9,
      bathrooms: 1,
      property_type: 'Guest House',
      price: 1725,
      created_at: '2023-11-08T17:33:32.063Z',
      updated_at: '2023-11-08T17:33:32.063Z',
      place: {
        user_id: 3,
        name: 'Magnificent Hotel',
        image_url:
          'https://images.unsplash.com/photo-1634072319894-107e61606191?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjM3MzR8MHwxfHNlYXJjaHw1fHxob3RlbC1yb29tfGVufDB8Mnx8fDE2OTk0NTgyNDZ8MA&ixlib=rb-4.0.3&q=80&w=1080',
        description: 'Description of Magnificent Hotel',
        city: {
          id: 1,
          name: 'New York City, USA',
        },
      },
    },
  },
});

describe('PlaceDetails Component', () => {
  it('PlaceDetails renders correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <PlaceDetails />;
        </MemoryRouter>
      </Provider>
    );

    expect(PlaceDetails).toMatchSnapshot();
  });

  it('Clicking "Return" link redirects to the previous page', async () => {
    const history = createMemoryHistory({ initialEntries: ['/places', '/places/1/details'] });

    render(
      <Provider store={store}>
        <MemoryRouter history={history}>
          <PlaceDetails />
        </MemoryRouter>
      </Provider>
    );

    const returnLink = screen.getByText(/Return/);
    fireEvent.click(returnLink);

    // There is no way to test the useNavigate hook, so we are simulating with history
    history.back();

    await waitFor(() => {
      expect(history.location.pathname).toBe('/places');
    });
  });

  it('"Make a visit reservation" has build the right href', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <PlaceDetails />
        </MemoryRouter>
      </Provider>
    );

    const reservationLink = screen.getByText(/Make a visit reservation here!/);
    expect(reservationLink).toBeTruthy();

    const expectedHref = '/reservation?city_id=1&place_id=1';
    expect(reservationLink.getAttribute('href')).toBe(expectedHref);
  });

  it('"Make a visit reservation" has build the right href', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <PlaceDetails />
        </MemoryRouter>
      </Provider>
    );

    const reservationLink = screen.getByText(/Make a visit reservation here!/);
    expect(reservationLink).toBeTruthy();

    const expectedHref = '/reservation?city_id=1&place_id=1';
    expect(reservationLink.getAttribute('href')).toBe(expectedHref);
  });

  const modifiedStore = mockStore({
    ...store.getState(),
    placesSlice: {
      ...store.getState().placesSlice,
      details: {
        ...store.getState().placesSlice.details,
        place: {
          ...store.getState().placesSlice.details.place,
          user_id: 1,
        },
      },
    },
  });

  it('"Remove" button available only when the currentUser was the creator of the Place', () => {
    render(
      <Provider store={modifiedStore}>
        <MemoryRouter>
          <PlaceDetails />
        </MemoryRouter>
      </Provider>
    );

    const reservationLink = screen.queryByText(/Make a visit reservation here!/);
    expect(reservationLink).toBeNull();

    const removeButton = screen.getByText(/Remove this place/);
    expect(removeButton).toBeTruthy();
  });
});
