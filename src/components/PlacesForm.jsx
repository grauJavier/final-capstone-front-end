import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ImageUploader from './UploadFile';
import fetchCities from '../redux/reservationForm/actions/fetchCities';
import { sendPlaces } from '../redux/places/placesSlice';

const PlacesForm = () => {
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.reservation.cities);
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  const onSubmit = (data) => {
    dispatch(sendPlaces({ user_id: user.id, body: data }));
  };

  return (
    <div className="lg:ml-[15%] bg-login-img bg-cover min-h-screen flex flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center px-24 py-16">
        <h1 className="secondary-font text-4xl text-zinc-50 mb-12 text-center">Add new place</h1>
        <form
          className="flex flex-col gap-5 m-3 mt-0 forms-layout"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register('place.name')}
            placeholder="Name"
            className="w-80 forms-inputs max-sm:w-52"
            required
          />
          <select
            {...register('place.city_id')}
            id="citySelect"
            placeholder="Select Location"
            className="w-80 forms-inputs max-sm:w-52"
            required
          >
            <option value="">Select Location</option>
            {cities.map((city, index) => (
              <option key={index} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
          <input
            {...register('place.description')}
            placeholder="Add a description"
            className="w-80 forms-inputs max-sm:w-52"
            required
          />
          <ImageUploader setValue={setValue} />
          <p>Aditional information</p>
          <input
            {...register('details.place_type')}
            placeholder="Place type"
            className="w-80 forms-inputs max-sm:w-52"
            required
          />
          <input
            {...register('details.property_type')}
            placeholder="Property type"
            className="w-80 forms-inputs max-sm:w-52"
            required
          />
          <input
            {...register('details.bedrooms')}
            placeholder="Number of Bedrooms"
            type="number"
            className="w-80 forms-inputs max-sm:w-52"
            required
          />
          <input
            {...register('details.beds')}
            placeholder="Number of beds"
            type="number"
            className="w-80 forms-inputs max-sm:w-52"
            required
          />
          <input
            {...register('details.bathrooms')}
            placeholder="Number of bathrooms"
            type="number"
            className="w-80 forms-inputs max-sm:w-52"
            id="citySelect"
            required
          />
          <input
            {...register('details.price')}
            placeholder="Price"
            type="number"
            className="w-80 forms-inputs max-sm:w-52"
            required
          />
          <input type="submit" className="forms-submit" value="Add new place" />
        </form>
      </div>
    </div>
  );
};

export default PlacesForm;
