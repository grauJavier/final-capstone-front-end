import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCities, fetchPlaces } from '../../redux/reservation_form/reservationSlice.js';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { selectUserId } from '../../redux/user/userSlice.js';

function ReservationForm() {
  const cities = useSelector((state) => state.reservation.cities);
  const places = useSelector((state) => state.reservation.places);
  const status = useSelector((state) => state.reservation.status);
  const dispatch = useDispatch();

  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState('');

  const userId = useSelector(selectUserId);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCities());
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (selectedCity) {
      const selectedCityObj = cities.find((city) => city.id === parseInt(selectedCity, 10));
      if (selectedCityObj) {
        dispatch(fetchPlaces(selectedCityObj.id));
      }
    }
  }, [selectedCity, dispatch, cities]);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const handleSubmit = () => {
    if (!selectedCity || !selectedDate || !selectedPlace) {
      alert('Please make sure you have selected a city, place, and date.');
      return;
    }

    // Send the data to the server
    const data = {
      user_id: userId,
      place_id: selectedPlace,
      schedule_date: selectedDate.toISOString().split('T')[0],
    };

    axios
      .post(`http://127.0.0.1:3000/users/${userId}/reservations`, data)
      .then((response) => {
        console.log('Reservation submitted successfully', response);
      })
      .catch((error) => {
        console.error('Error submitting reservation', error);
      });
  };

  return (
    <div className="flex flex-col gap-3 m-3">
      <div>
        <label htmlFor="citySelect">Select a City:</label>
        <select
          id="citySelect"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="">Select a City</option>
          {cities.map((city) => (
            <option key={city.id} value={city.id}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="placeSelect">Select a Place:</label>
        <select
          id="placeSelect"
          value={selectedPlace}
          onChange={(e) => setSelectedPlace(e.target.value)}
        >
          <option value="">Select a Place</option>
          {places.map((place) => (
            <option key={place.id} value={place.id}>
              {place.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="datePicker">Select a Date:</label>
        <DatePicker
          id="datePicker"
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          minDate={today}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default ReservationForm;
