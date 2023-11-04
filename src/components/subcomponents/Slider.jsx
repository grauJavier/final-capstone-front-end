import { useEffect } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux"
import { getPlaces } from "../../redux/places/placesSlice"

const Slideshow = () => {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.placesSlice.places);

  useEffect(() => {
    dispatch(getPlaces())
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
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <Slider className="mx-12 relative" {...settings}>
        {places.map((place, index) => (
          <div className="max-h-full" key={index}>
            <div className="bg-cover bg-center aspect-square rounded mx-1" style={{backgroundImage:`url(${place.image_url})`}}>
              <div className="w-full h-full bg-limerick/50 rounded flex flex-col justify-center text-white font-poppins">
                <h2 className="uppercase font-bold text-xl lg:text-2xl">{place.name}</h2>
                <hr className="mx-12 my-2" />
                <p className="text-sm break-words mx-2">{place.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slideshow;
