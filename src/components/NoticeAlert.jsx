import { useSelector } from "react-redux";
import { useEffect } from "react";

const NoticeAlert = () => {
  const notice = useSelector((state) => state.user.notice);
  const error = useSelector((state) => state.user.error);

  useEffect(() => {
    const alertElement = document.querySelector('.alert');
    const noticeElement = document.querySelector('.notice');
    
    if (alertElement) {
      setTimeout(function() {
        alertElement.classList.remove('animate-show-message');
        alertElement.classList.add('animate-hide-message');
        setTimeout(() => {
          alertElement.style.display = 'none';
        }, 500);
      }, 5000)
    }
    
    if (noticeElement) {
      setTimeout(function() {
        noticeElement.classList.remove('animate-show-message');
        noticeElement.classList.add('animate-hide-message');
        setTimeout(() => {
          noticeElement.style.display = 'none';
        }, 500);
      }, 5000)
    }
  }, [notice, error]);

  return (
    <>
      {notice && <p className="notice bg-emerald-950 text-white text-center fixed top-0 w-full font-poppins rounded-lg py-2 shadow-md shadow-black animate-show-message">{notice}</p>}
      {error && <p className="alert bg-red-950 text-white text-center fixed top-0 w-full font-poppins rounded-lg py-2 shadow-md shadow-black animate-show-message">{error}</p>}
    </>
  );
};

export default NoticeAlert;
