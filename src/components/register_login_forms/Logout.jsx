import { useSelector, useDispatch } from "react-redux";
import { BiLogOut } from "react-icons/bi";
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
    <button className="bg-[#feb500] text-white m-auto rounded-full py-[0.7rem] px-[2rem] flex items-center gap-[5px]" onClick={handleSubmit}>
      <BiLogOut className="text-white text-[1.3rem]" />
      Log out
    </button>
  );
};

export default Logout;
