import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setNotice, setError } from "../../redux/notice_alert/noticeAlertSlice"; 

const NoticeAlert = () => {
  const notice = useSelector((state) => state.noticeAlert.notice);
  const error = useSelector((state) => state.noticeAlert.error);
  const dispatch = useDispatch();

  useEffect(() => {
    const alertElement = document.querySelector('.alert');
    const noticeElement = document.querySelector('.notice');
    
    if (alertElement) {
      setTimeout(function() {
        alertElement.classList.remove('animate-show-message');
        alertElement.classList.add('animate-hide-message');
        setTimeout(() => {
          dispatch(setError(null));
        }, 500);
      }, 5000)
    }
    
    if (noticeElement) {
      setTimeout(function() {
        noticeElement.classList.remove('animate-show-message');
        noticeElement.classList.add('animate-hide-message');
        setTimeout(() => {
          dispatch(setNotice(null));
        }, 500);
      }, 5000)
    }
  }, [notice, error, dispatch]);

  return (
    <>
      {notice && <p className="notice bg-emerald-950 notice-alert animate-show-message">{notice}</p>}
      {error && <p className="alert bg-red-950 notice-alert animate-show-message">{error}</p>}
    </>
  );
};

export default NoticeAlert;
