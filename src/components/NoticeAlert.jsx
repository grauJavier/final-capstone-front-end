import { useSelector } from "react-redux";

const NoticeAlert = () => {
  const notice = useSelector((state) => state.user.notice);
  const error = useSelector((state) => state.user.error);

  return (
    <>
      {notice && <p>{notice}</p>}
      {error && <p>{error}</p>}
    </>
  );
};

export default NoticeAlert;
