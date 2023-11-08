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
    <div className="lg:ml-[15%] bg-turquoise-img bg-cover min-h-screen flex flex-col items-center justify-center p-4 pt-20">
      <div className="container flex flex-col items-center justify-center sm:p-24 sm:pb-40">
        <h1 className="secondary-font text-4xl text-zinc-50 mb-12 font-bold text-center">
          Add new place
        </h1>
        <form
          className="flex md:flex-row md:!items-start gap-16 forms-layout "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-5">
            <input
              {...register('place.name', {
                required: { value: true, message: 'Name is required' },
              })}
              placeholder="Name"
              type="text"
              className="w-64 md:w-80 forms-inputs bg-turquoise-blue"
            />
            {errors.place?.name?.message && (
              <p className="text-white italic">*{errors.place.name.message}</p>
            )}

            <select
              {...register('place.city_id', {
                required: { value: true, message: 'Select a location' },
              })}
              id="citySelect"
              placeholder="Select Location"
              className="w-64 md:w-80 forms-inputs bg-turquoise-blue"
            >
              <option value="">Select Location</option>
              {cities.map((city, index) => (
                <option key={index} value={city.id}>
                  {city.name}
                </option>
              ))}
            </select>
            {errors.place?.city_id?.message && (
              <p className="text-white italic">*{errors.place.city_id.message}</p>
            )}

            <textarea
              {...register('place.description', {
                required: { value: true, message: 'Description is required' },
              })}
              placeholder="Add a description"
              className="w-64 md:w-80 forms-inputs bg-turquoise-blue rounded-lg h-48"
              maxLength="255"
            />
            {errors.place?.description?.message && (
              <p className="text-white italic">*{errors.place.description.message}</p>
            )}

            <ImageUploader setValue={setValue} />
          </div>
          <div className="flex flex-col gap-5 w-64 md:w-80">
            <select
              {...register('details.place_type', {
                required: { value: true, message: 'Introduce a place type' },
              })}
              placeholder="Place type"
              className="w-full forms-inputs bg-turquoise-blue "
              id="citySelect"
            >
              <option value="">Place type</option>
              <option value="Room">Room</option>
              <option value="Entire Home">Entire Home</option>
            </select>
            {errors.details?.place_type?.message && (
              <p className="text-white italic">*{errors.details.place_type.message}</p>
            )}

            <select
              {...register('details.property_type', {
                required: { value: true, message: 'Introduce a property type' },
              })}
              placeholder="Property type"
              className="w-full forms-inputs bg-turquoise-blue"
              id="citySelect"
            >
              <option value="">Property type</option>
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
              <option value="Guest House">Guest House</option>
              <option value="Hotel">Hotel</option>
            </select>
            {errors.details?.property_type?.message && (
              <p className="text-white italic">*{errors.details.property_type.message}</p>
            )}

            <div className="flex flex-row items-center justify-between">
              <label htmlFor="number-of-bedrooms" className="text-white mr-2">
                Number of bedrooms
              </label>
              <input
                {...register('details.bedrooms', {
                  required: { value: true, message: 'Introduce the amount of bedrooms' },
                  validate: {
                    isInteger: (value) =>
                      Number.isInteger(Number(value)) || 'Please enter an integer',
                  },
                  min: { value: 1, message: 'Minimum value is 1' },
                })}
                name="number-of-bedrooms"
                type="number"
                min="1"
                defaultValue={1}
                className="forms-inputs bg-turquoise-blue w-20"
              />
              {errors.details?.bedrooms?.message && (
                <p className="text-white italic">*{errors.details.bedrooms.message}</p>
              )}
            </div>
            <div className="flex flex-row items-center justify-between">
              <label htmlFor="number-of-beds" className="text-white mr-2">
                Number of beds
              </label>
              <input
                {...register('details.beds', {
                  required: { value: true, message: 'Introduce the number of beds' },
                  validate: {
                    isInteger: (value) =>
                      Number.isInteger(Number(value)) || 'Please enter an integer',
                  },
                  min: { value: 1, message: 'Minimum value is 1' },
                })}
                name="number-of-beds"
                type="number"
                min="1"
                defaultValue={1}
                className="forms-inputs bg-turquoise-blue w-20"
              />
              {errors.details?.beds?.message && (
                <p className="text-white italic">*{errors.details.beds.message}</p>
              )}
            </div>
            <div className="flex flex-row items-center justify-between">
              <label htmlFor="number-of-bathrooms" className="text-white mr-2">
                Number of bathrooms
              </label>
              <input
                {...register('details.bathrooms', {
                  required: { value: true, message: 'Introduce the number of bathrooms' },
                  validate: {
                    isInteger: (value) =>
                      Number.isInteger(Number(value)) || 'Please enter an integer',
                  },
                  min: { value: 1, message: 'Minimum value is 1' },
                })}
                name="number-of-bathrooms"
                type="number"
                min="1"
                defaultValue={1}
                className="forms-inputs bg-turquoise-blue w-20"
              />
              {errors.details?.bathrooms?.message && (
                <p className="text-white italic">*{errors.details.bathrooms.message}</p>
              )}
            </div>
            <div className="flex flex-row items-center justify-between">
              <label htmlFor="price" className="text-white mr-5">
                Price
              </label>
              <input
                {...register('details.price', {
                  required: { value: true, message: 'Introduce the price' },
                  validate: {
                    isInteger: (value) =>
                      Number.isInteger(Number(value)) || 'Please enter an integer',
                  },
                  min: 1,
                })}
                name="price"
                type="number"
                defaultValue={0}
                min="0"
                className="w-full bg-turquoise-blue forms-inputs"
              />
              {errors.details?.price?.message && (
                <p className="text-white italic">*{errors.details.price.message}</p>
              )}
            </div>
            <input
              type="submit"
              className="forms-submit text-turquoise-blue hover:bg-turquoise-blue hover:text-white min-w-fit md:self-end self-center"
              value="Add new place"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlacesForm;
