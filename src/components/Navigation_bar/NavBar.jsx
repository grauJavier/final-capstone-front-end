import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Logout from '../Register_Login_forms/Logout';

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [showItem, setShowItem] = useState(true);
  const path = useLocation();
  const navigate = useNavigate();
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setwindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const showHideNav = () => {
    if (show) {
      const container = document.getElementById('menu-container');
      container.classList.remove('animate-show-menu');
      container.classList.add('animate-hide-menu');
      setTimeout(() => {
        setShow(false);
        setShowItem(true);
      }, 600);
    } else {
      setShow(true);
      setShowItem(false);
    }
  };

  const elements = [['Places', '/'], ['My Reservations', '/my-reservations'], ['New Reservation', '/new-reservation'], ['New Place', '/new-place'], ['Remove Place', '/remove-place']];

  return (
    <>
      {showItem && windowWidth < 1024 && <GiHamburgerMenu className="fixed ml-[15px] mt-[15px] text-[1.5rem]" onClick={showHideNav} />}
      { (show || windowWidth >= 1024) && 
      <div className="min-h-screen w-3/4 max-w-[320px] flex flex-col primary-font fixed z-50 bg-white shadow-menu animate-show-menu lg:shadow-none lg:border-r-2 lg:border-login-green lg:max-w-[15vw]" id="menu-container">
        <AiFillCloseCircle className="ml-[15px] mt-[15px] text-[1.5rem] lg:hidden" onClick={showHideNav}/>
        <img src="src/assets/logo-black.png" className="w-[100px] ml-auto mr-auto lg:mt-auto" />
        <nav className="m-auto ml-[15px] mr-0">
          <ul className="flex flex-col content-center min-h-[70vh] justify-evenly">
            {elements.map((element, index) => 
              <li key={index} className={`py-[10px] pl-[10px] font-bold cursor-pointer ${ path.pathname === element[1] ? 'bg-login-green text-white' : '' }`} onClick={() => navigate(`${element[1]}`)}>{element[0]}</li>
            )}
          </ul>
        </nav>
        <Logout />
      </div>}
    </>
  );
};

export default NavBar;
