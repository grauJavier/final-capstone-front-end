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
  }, [dispatch])

  const onSubmit = (data) => {
    dispatch(sendPlaces({user_id: user.id, body: data}))
  };

  return (
    <div className='bg-login-img bg-cover min-h-screen flex flex-col items-center lg:ml-[15vw]'>
      <h1 className="font-titilium text-2xl text-zinc-50">NEW PLACE</h1>
      <form className="forms-layout" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("place.name")} placeholder='Name' />
        <ImageUploader setValue={setValue} />
        <input {...register("place.description")} placeholder='description' />
        <select {...register("place.city_id")}>
          {cities.map((city, index) => 
            <option key={index} value={city.id}>{city.name}</option>
          )}
        </select>
        <p>Aditional information</p>
        <input {...register("details.place_type")} placeholder='Place type' />
        <input {...register("details.property_type")} placeholder='Property type' />
        <input {...register("details.bedrooms")} placeholder='Number of Bedrooms' type='number' />
        <input {...register("details.beds")} placeholder='Number of beds' type='number' />
        <input {...register("details.bathrooms")} placeholder='Number of bathrooms' type='number' />
        <input {...register("details.price")} placeholder='Price' type='number' />
        <input type="submit" className='forms-submit' value="Sign up" />
      </form>
    </div>
  );
};

export default PlacesForm;
