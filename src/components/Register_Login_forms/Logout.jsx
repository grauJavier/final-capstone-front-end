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
    <button className="bg-[#feb500] text-white m-auto rounded-md py-[5px] px-[20px]" onClick={handleSubmit}>
      Log out
    </button>
  );
};

export default Logout;
