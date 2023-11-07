import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchCities from '../../redux/reservationForm/actions/fetchCities';
import fetchPlaces from '../../redux/reservationForm/actions/fetchPlacesByCityId.js';
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
    const searchParams = new URLSearchParams(location.search);
    const selectedCityFromQuery = searchParams.get('city_id');
    const selectedPlaceFromQuery = searchParams.get('place_id');

    if (selectedCityFromQuery) {
      setSelectedCity(selectedCityFromQuery);
    }
    if (selectedPlaceFromQuery) {
      setSelectedPlace(selectedPlaceFromQuery);
    }
  }, [location.search]);

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

  const handleSubmit = () => {
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

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <section className="lg:ml-[15%] bg-golden-img bg-cover min-h-screen flex flex-col items-center justify-center p-4">
      <div className="container flex flex-col items-center justify-center sm:p-24 sm:pb-40">
        <h2 className="secondary-font text-4xl font-bold text-zinc-50 mb-12 text-center">
          Add a new reservation
        </h2>
        <form className="flex flex-col gap-5 m-3 mt-0 forms-layout">
          <div>
            <select
              id="citySelect"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              placeholder="Select a City"
              className="forms-inputs bg-golden-yellow w-64 md:w-80"
              required
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
            <select
              id="placeSelect"
              value={selectedPlace}
              onChange={(e) => setSelectedPlace(e.target.value)}
              placeholder="Select a Place"
              className="forms-inputs bg-golden-yellow w-64 md:w-80"
              required
            >
              <option value="">Select a Place</option>
              {places.map((place) => (
                <option key={place.id} value={place.id}>
                  {place.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <DatePicker
              id="datePicker"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              minDate={today}
              placeholderText="Select a Date"
              className="forms-inputs bg-golden-yellow w-64 md:w-80"
              autoComplete="off"
              required
            />
          </div>
          <button className="forms-submit text-golden-yellow hover:bg-golden-yellow hover:text-white min-w-fit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default ReservationForm;
