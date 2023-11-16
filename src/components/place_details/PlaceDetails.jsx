import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../../redux/places/placesSlice';
import { useParams, useNavigate } from 'react-router-dom';
import { selectUserId } from '../../redux/user/userSlice.js';
import { deletePlace } from '../../redux/places/placesSlice';

const PlaceDetails = () => {
  const dispatch = useDispatch();
  const placeDetails = useSelector((state) => state.placesSlice.details);
  const { id } = useParams();
  const currentUser = useSelector(selectUserId);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);

  const handleDelete = (userId, placeId) => {
    dispatch(deletePlace({ user_id: userId, place_id: placeId }));
    navigate(-1);
  };

  if (!placeDetails) {
    return <div className="flex flex-col items-center justify-center text-center">Loading...</div>;
  }

  return (
    <div className="lg:ml-[15%] flex flex-col justify-center items-center md:p-24 p-3 py-20">
      <div className="flex lg:flex-row flex-col w-full lg:justify-around gap-5 items-center">
        <div
          className="lg:w-[40vw] w-full max-h-[40vw] md:max-h-[35vw] aspect-square rounded bg-cover bg-center"
          style={{ backgroundImage: `url(${placeDetails.place.image_url})` }}
          alt="Description of the image"
        ></div>
        <div>
          <h2 className="secondary-font uppercase text-end tracking-tight font-semibold text-4xl">
            {placeDetails.place.name}
          </h2>
          <h3 className="primary-font text-end tracking-tight font-normal text-stone-400">
            {placeDetails.place.city.name}
          </h3>
          <h4 className="primary-font text-end tracking-tight font-normal">
            {placeDetails.place.description}
          </h4>
          <table className="xl:w-[75%] w-full ml-auto mt-8">
            <tbody>
              <tr>
                <td className="bg-platinum p-3">
                  Bedrooms<span className="float-right">{placeDetails.bedrooms}</span>
                </td>
              </tr>
              <tr>
                <td className="p-3">
                  Place Type <span className="float-right">{placeDetails.place_type}</span>
                </td>
              </tr>
              <tr>
                <td className="bg-platinum p-3">
                  Bathrooms<span className="float-right">{placeDetails.bathrooms}</span>
                </td>
              </tr>
              <tr>
                <td className="p-3">
                  Property Type<span className="float-right">{placeDetails.property_type}</span>
                </td>
              </tr>
              <tr>
                <td className="bg-platinum p-3">
                  Beds<span className="float-right">{placeDetails.beds}</span>
                </td>
              </tr>
              <tr>
                <td className="p-3">
                  Price<span className="float-right">{placeDetails.price}</span>
                </td>
              </tr>
            </tbody>
          </table>
          {currentUser === placeDetails.place.user_id ? (
            <a
              onClick={() => handleDelete(placeDetails.place.user_id, placeDetails.place_id)}
              className="cursor-pointer min-w-fit float-right !max-w-full w-full flex mt-8 p-3 font-semibold rounded-full bg-red-500 text-white hover:bg-white hover:text-red-500 hover:border-red-500 border-2 border-red-500 transition ease-linear duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
              Remove this place
            </a>
          ) : (
            <a
              href={`/reservation?city_id=${placeDetails.place.city.id}&place_id=${placeDetails.place_id}`}
              className="cursor-pointer min-w-fit float-right !max-w-full w-full flex mt-8 p-3 bg-golden-yellow text-white font-semibold rounded-full active:bg-white active:text-golden-yellow active:border-golden-yellow border-2 border-golden-yellow hover:bg-white hover:text-golden-yellow hover:border-golden-yellow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                />
              </svg>
              Make a visit reservation here!
            </a>
          )}
          <a
            onClick={() => navigate(-1)}
            className="cursor-pointer min-w-fit float-right !max-w-full w-full flex mt-8 p-3 bg-lime-green text-white font-semibold rounded-full active:bg-white active:text-lime-green active:border-lime-green border-2 border-lime-green hover:bg-white hover:text-lime-green hover:border-lime-green"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mr-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Return
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetails;
