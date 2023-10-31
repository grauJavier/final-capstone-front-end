import { useSelector, useDispatch } from "react-redux";
import sendLogout from "../../redux/actions/sendLogout";

const Logout = () => {
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state.user.token);

  const handleSubmit = () => {
    const data = {
      headers: {
        authorization: userToken
      }
    };

    dispatch(sendLogout(data));
  };

  return (
    <button className="bg-red" onClick={handleSubmit}>
      Log out
    </button>
  );
};

export default Logout;
