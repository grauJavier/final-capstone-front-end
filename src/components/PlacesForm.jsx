import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ImageUploader from './UploadFile';
import fetchCities from '../redux/reservationForm/actions/fetchCities';
import { sendPlaces } from '../redux/places/placesSlice';

const PlacesForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
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
            {...register('place.name', {
              required: { value: true, message: 'Name is required' },
            })}
            placeholder="Name"
            type="text"
            className="w-80 forms-inputs max-sm:w-52"
          />
          {errors.place?.name?.message && <p className='text-white italic'>*{errors.place.name.message}</p>}

          <select
            {...register('place.city_id', {
              required: { value: true, message: 'Select a location' },
            })}
            id="citySelect"
            placeholder="Select Location"
            className="w-80 forms-inputs max-sm:w-52"
          >
            <option value="">Select Location</option>
            {cities.map((city, index) => (
              <option key={index} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
          {errors.place?.city_id?.message && <p className='text-white italic'>*{errors.place.city_id.message}</p>}

          <textarea
            {...register('place.description', {
              required: { value: true, message: 'Description is required' },
            })}
            placeholder="Add a description"
            className="w-80 forms-inputs max-sm:w-52 rounded-lg h-48"
          />
          {errors.place?.description?.message && <p className='text-white italic'>*{errors.place.description.message}</p>}

          <ImageUploader setValue={setValue} />
          <p>Aditional information</p>
          <select
            {...register('details.place_type', {
              required: { value: true, message: 'Introduce a place type' },
            })}
            placeholder="Place type"
            className="w-80 forms-inputs max-sm:w-52"
            id="citySelect"
          >
            <option value="">Place type</option>
            <option value="Room">Room</option>
            <option value="Entire Home">Entire Home</option>
          </select>
          {errors.details?.place_type?.message && <p className='text-white italic'>*{errors.details.place_type.message}</p>}

          <select
            {...register('details.property_type', {
              required: { value: true, message: 'Introduce a property type' },
            })}
            placeholder="Property type"
            className="w-80 forms-inputs max-sm:w-52"
            id="citySelect"
          >
            <option value="">Property type</option>
            <option value="House">House</option>
            <option value="Apartment">Apartment</option>
            <option value="Guest House">Guest House</option>
            <option value="Hotel">Hotel</option>
          </select>
          {errors.details?.property_type?.message && <p className='text-white italic'>*{errors.details.property_type.message}</p>}

          <input
            {...register("details.bedrooms", {
              required: { value: true, message:'Introduce the amount of bedrooms' },
              validate: {
                isInteger: value => Number.isInteger(Number(value)) || 'Please enter an integer'
              }
            })}
            placeholder="Number of Bedrooms"
            type="number"
            className="w-80 forms-inputs max-sm:w-52"
          />
          {errors.details?.bedrooms?.message && <p className='text-white italic'>*{errors.details.bedrooms.message}</p>}

          <input
            {...register("details.beds", {
              required: { value: true, message: 'Introduce the number of beds' },
              validate: {
                isInteger: value => Number.isInteger(Number(value)) || 'Please enter an integer'
              }
            })}
            placeholder="Number of beds"
            type="number"
            className="w-80 forms-inputs max-sm:w-52"
          />
          {errors.details?.beds?.message && <p className='text-white italic'>*{errors.details.beds.message}</p>}

          <input
            {...register("details.bathrooms", {
              required: { value: true, message: 'Introduce the number of bathrooms' },
              validate: {
                isInteger: value => Number.isInteger(Number(value)) || 'Please enter an integer'
              }
            })}
            placeholder="Number of bathrooms"
            type="number"
            className="w-80 forms-inputs max-sm:w-52"
            id="citySelect"
          />
          {errors.details?.bathrooms?.message && <p className='text-white italic'>*{errors.details.bathrooms.message}</p>}

          <input
            {...register("details.price", {
              required: { value: true, message: 'Introduce the price' },
              validate: {
                isInteger: value => Number.isInteger(Number(value)) || 'Please enter an integer'
              }
            })}
            placeholder="Price"
            type="number"
            className="w-80 forms-inputs max-sm:w-52"
          />
          {errors.details?.price?.message && <p className='text-white italic'>*{errors.details.price.message}</p>}
          <input type="submit" className="forms-submit" value="Add new place" />
        </form>
      </div>
    </div>
  );
};

export default PlacesForm;
