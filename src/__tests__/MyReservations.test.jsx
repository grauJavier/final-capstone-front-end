import { render, waitFor } from '@testing-library/react';
import MyReservations from '../components/my_reservations/MyReservations'; // Import the MyReservations component.
import { describe, it, expect } from 'vitest';
import { Provider } from 'react-redux';
import { store } from '../redux/Store';

describe('My Reservations Component', () => {
  it('MyReservations renders correctly', async () => {
    render(
      <Provider store={store}>
        <MyReservations />
      </Provider>
    );
  
    await waitFor(() => {
      expect(MyReservations).toMatchSnapshot();
    });
  });

  it('Should show "You haven\'t registered any visit yet" when there are no reservations', async () => {
    const { findByText } = render(
      <Provider store={store}>
        <MyReservations />
      </Provider>
    );

    await waitFor(() => {
      expect(findByText("You haven't registered any visit yet. Be brave. Make one.")).toBeTruthy();
    });
  });

  it('Should display reservations when there are reservations', async () => {
    const mockReservations = [
      {
        id: 1,
        place: {
          name: 'Sample Place 1',
          city: {
            name: 'Sample City 1',
          },
          image_url: 'sample-image-1.jpg',
        },
        schedule_date: new Date().toISOString(),
      },
    ];

    const { findByText, findByTestId } = render(
      <Provider store={store}>
        <MyReservations />
      </Provider>
    );

    await waitFor(() => {
      expect(findByText("Sample Place 1")).toBeTruthy();
      expect(findByText("Sample City 1")).toBeTruthy();
    });
  });
});
