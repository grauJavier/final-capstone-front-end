import { useSelector, useDispatch } from "react-redux";
import sendLogout from "../../redux/user/actions/sendLogout";

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
    <button className="bg-[#feb500] text-white m-auto rounded-full py-[0.7rem] px-[2rem]" onClick={handleSubmit}>
      Log out
    </button>
  );
};

export default Logout;
