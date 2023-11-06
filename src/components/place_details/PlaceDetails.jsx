import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getDetails } from "../../redux/places/placesSlice"
import { useParams } from "react-router-dom";

const PlaceDetails = () => {
  const dispatch = useDispatch();
  const placeDetails = useSelector((state) => state.placesSlice.details);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetails(id))
  }, [dispatch, id]);

  if (!placeDetails) {
    return <div className="flex flex-col items-center justify-center text-center">Loading...</div>;
  }

  return (
    <div className="lg:ml-[15%] flex flex-col justify-center items-center h-screen lg:flex-row">
      <div className="lg:mr-20">
        <h2 className="font-poppins font-bold uppercase text-center">{placeDetails.place.name}</h2>
        <img className="w-60 lg:h-[32rem] lg:w-full rounded" src={placeDetails.place.image_url} alt="Description of the image"/>
      </div>
      <table className="border border-black">
        <caption className="py-2 uppercase">Details</caption>
        <tbody>
          <tr className="border-b border-black">
            <td className="border-r border-black bg-platinum">Bedrooms: <span className="font-normal">{placeDetails.bedrooms}</span></td>
            <td>Place Type: {placeDetails.place_type}</td>
          </tr>
          <tr className="border-b border-black">
            <td className="border-r border-black">Bathrooms: {placeDetails.bathrooms}</td>
            <td className="bg-platinum">Property Type: {placeDetails.property_type}</td>
          </tr>
          <tr>
            <td className="border-r border-black bg-platinum">Beds: {placeDetails.beds}</td>
            <td>Price: {placeDetails.price}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default PlaceDetails
