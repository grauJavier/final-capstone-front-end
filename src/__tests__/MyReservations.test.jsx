import { render, screen } from '@testing-library/react';
import MyReservations from '../components/my_reservations/MyReservations';
import { describe, it, expect } from 'vitest';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { store } from '../redux/store';

const mockStore = configureStore([thunk]);

describe('My Reservations Component', () => {
  it('MyReservations renders correctly', () => {
    render(
      <Provider store={store}>
        <MyReservations />
      </Provider>
    );

    expect(MyReservations).toMatchSnapshot();
  });

  it('Should show "You haven\'t registered any visit yet" when there are no reservations', () => {
    render(
      <Provider store={store}>
        <MyReservations />
      </Provider>
    );

    expect(screen.getByText(/You haven't registered any visit yet/)).toBeTruthy();
  });

  it('Should display reservations when there are reservations', () => {
    const fedStore = mockStore({
      user: {
        currentUser: { id: 1, email: 'graujavier@gmail.com', username: 'Javier' },
      },
      myReservations: {
        reservations: [
          {
            id: 1,
            user_id: 1,
            place_id: 1,
            schedule_date: '2023-11-22',
            created_at: '2023-11-08T23:28:39.425Z',
            updated_at: '2023-11-08T23:28:39.425Z',
            place: {
              name: 'Test Hotel',
              image_url: 'https://www.testimage.com/image.jpg',
              description: 'Description of Beautiful Hotel',
              city: {
                name: 'Test City, Test Country',
              },
            },
          },
        ],
      },
    });

    render(
      <Provider store={fedStore}>
        <MyReservations />
      </Provider>
    );

      expect(screen.getByText('Test Hotel')).toBeTruthy();
      expect(screen.getByText('Test City, Test Country')).toBeTruthy();
  });
});
