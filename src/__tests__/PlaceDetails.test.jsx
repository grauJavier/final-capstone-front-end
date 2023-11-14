import { createMemoryHistory } from 'history';
import { render, waitFor, fireEvent, screen, getByText } from '@testing-library/react';
import PlaceDetails from '../components/place_details/PlaceDetails';
import { describe, it, expect } from 'vitest';
import { MemoryRouter, Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/Store';
import { getDetails, sendPlaces } from '../redux/places/placesSlice';

const sampleData = {
  body: {
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
};

describe('PlaceDetails Component', () => {
  it('PlaceDetails renders correctly', async () => {
    await store.dispatch(sendPlaces({ user_id: sampleData.body.place.user_id, body: sampleData }));
    await store.dispatch(getDetails(sampleData.id));
    await waitFor(() => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <PlaceDetails />
          </Provider>
        </MemoryRouter>
      );
      console.log(screen.debug());
      expect(PlaceDetails).toMatchSnapshot();
    });
  });

  it('Clicking "Return" link redirects to "/places"', async () => {
    const history = createMemoryHistory({ initialEntries: ['/places'] });

    await store.dispatch(getDetails(sampleData.id));
    await waitFor(() => {
      render(
        <MemoryRouter history={history}>
          <Provider store={store}>
            <PlaceDetails />
          </Provider>
        </MemoryRouter>
      );
    });

    const returnLink = screen.getByText(/Return/);
    fireEvent.click(returnLink);

    await waitFor(() => {
      const currentURL = history.location.pathname;
      expect(currentURL === '/places').toBe(true);
    });
  });

  it('Clicking "Return" link redirects to "/my-places"', async () => {
    const history = createMemoryHistory({ initialEntries: ['/my-places'] });

    await store.dispatch(getDetails(sampleData.id));
    await waitFor(() => {
      render(
        <MemoryRouter history={history}>
          <Provider store={store}>
            <PlaceDetails />
          </Provider>
        </MemoryRouter>
      );
    });

    const returnLink = screen.getByText(/Return/);
    fireEvent.click(returnLink);

    await waitFor(() => {
      const currentURL = history.location.pathname;
      expect(currentURL === '/my-places').toBe(true);
    });
  });

  it('Clicking "Make a visit reservation here!" link redirects to "/reservation"', async () => {
    const history = createMemoryHistory({
      initialEntries: [`/places/${sampleData.place_id}/details`],
    });
    render(
      <Provider store={store}>
        <MemoryRouter history={history}>
          <PlaceDetails />
        </MemoryRouter>
      </Provider>
    );

    const reservationLink = screen.getByRole('link', { name: /Make a visit reservation here!/i });
    fireEvent.click(reservationLink);

    const currentURL = history.location.pathname;
    const expectedURL = `/reservation?city_id=${sampleData.place.city.id}&place_id=${sampleData.place_id}`;
    expect(currentURL).toBe(expectedURL);
  });
});
