import { useEffect } from 'react';
import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux';
import { getPlaces } from '../../redux/places/placesSlice';
import { useNavigate } from 'react-router-dom';

const Slideshow = () => {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.placesSlice.places);
  const navigate = useNavigate();

  const goToPlaceDetails = (id) => {
    navigate(`/places/${id}/details`);
  };

  useEffect(() => {
    dispatch(getPlaces());
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

  if (places.length < settings.responsive[0].settings.slidesToShow) {
    settings.responsive[0].settings.slidesToShow = places.length;
  } 
  
  if (places.length < settings.responsive[1].settings.slidesToShow) {
    settings.responsive[1].settings.slidesToShow = places.length;
  }

  const backgroundColors = ['golden-yellow', 'lime-green', 'turquoise-blue'];

  return (
    <div>
      <Slider className="md:mx-24 mx-16 h-full" {...settings}>
        {places.map((place, index) => (
          <div
            className="cursor-pointer flex flex-col justify-center"
            key={index}
            onClick={() => goToPlaceDetails(place.id)}
          >
            <div className="flex justify-center">
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
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slideshow;
