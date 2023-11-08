import { useEffect } from 'react';
import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux';
import { getPlacesById } from '../../redux/places/placesSlice';
import { useNavigate } from 'react-router-dom';
import { selectUserId } from '../../redux/user/userSlice.js';
import { deletePlace } from '../../redux/places/placesSlice';

const Slideshowid = () => {
  const dispatch = useDispatch();
  const placesById = useSelector((state) => state.placesSlice.placesById);
  const userId = useSelector(selectUserId);
  const navigate = useNavigate();

  const goToPlaceDetails = (id) => {
    navigate(`/places/${id}/details`);
  };

  const handleDelete = (userId, placeId) => {
    dispatch(deletePlace({ user_id: userId, place_id: placeId }));
  };

  useEffect(() => {
    dispatch(getPlacesById(userId));
  }, [dispatch]);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (placesById.length > 0 && placesById.length < settings.responsive[0].settings.slidesToShow) {
    settings.responsive[0].settings.slidesToShow = placesById.length;
  } 
  
  if (placesById.length > 0 && placesById.length < settings.responsive[1].settings.slidesToShow) {
    settings.responsive[1].settings.slidesToShow = placesById.length;
  }

  const backgroundColors = ['golden-yellow', 'lime-green', 'turquoise-blue'];

  return (
    <div>
      <Slider className="md:mx-24 mx-16 h-full" {...settings}>
        {placesById.map((place, index) => (
          <div className="cursor-pointer flex flex-col justify-center" key={index}>
            <div className="flex justify-center" onClick={() => goToPlaceDetails(place.id)}>
              <div
                className="w-full sm:max-w-[17vw] max-w-[39vw] bg-cover bg-center aspect-square rounded-full hover:saturate-0 hover:opacity-40 transition-opacity ease-linear duration-[50ms]"
                style={{ backgroundImage: `url(${place.image_url})` }}
              />
              <div
                className={`-z-10 w-full sm:max-w-[17vw] max-w-[39vw] bg-${
                  backgroundColors[index % 3]
                } absolute top-0 aspect-square rounded-full`}
              />
            </div>
            <div className="mt-8 flex flex-col h-content justify-between">
              <h2 className="uppercase font-bold text-xl lg:text-2xl">{place.name}</h2>
              <h3 className="primary-font tracking-tight font-normal text-stone-400">
                {place.city.name}
              </h3>
              <div>
                <hr className="w-40 my-8 mx-auto border border-dashed" />
                <p className="text-sm break-words mx-2 text-stone-400">{place.description}</p>
              </div>
            </div>
            <div>
              <button
                className="flex items-center justify-center gap-2 mx-auto px-5 py-3 mt-4 rounded-full bg-red-500 text-white hover:bg-white hover:text-red-500 hover:border-red-500 border-2 border-red-500 transition ease-linear duration-200"
                onClick={() => handleDelete(userId, place.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
                <span>Remove</span>
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slideshowid;
