import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Logout from '../Register_Login_forms/Logout';
import lb from '../../assets/logo-black.png';

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [showItem, setShowItem] = useState(true);
  const path = useLocation();
  const navigate = useNavigate();
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  // Find the right width when the window resize.
  useEffect(() => {
    const handleResize = () => {
      setwindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Hide the NavBar when tapping outside of the element.
  const hideNav = (event) => {
    const container = document.getElementById('menu-container');
    if (event.target !== container) {
      container.classList.remove('animate-show-menu');
      container.classList.add('animate-hide-menu');
      window.removeEventListener('click', hideNav);
      setTimeout(() => {
        setShow(false);
        setShowItem(true);
      }, 600);
    }
  };

  const showHideNav = (event) => {
    event.stopPropagation();
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
      window.addEventListener('click', hideNav);
    }
  };

  const elements = [['Places', '/places'], ['My Reservations', '/my-reservations'], ['New Reservation', '/reservation'], ['New Place', '/new-place'], ['Remove Place', '/my-places']];

  return (
    <>
      {showItem && windowWidth < 1024 && (
        <GiHamburgerMenu
          className="fixed ml-[15px] mt-[15px] text-[1.5rem] text-black bg-white p-2 w-12 h-12 rounded-full drop-shadow-xl"
          onClick={showHideNav}
        />
      )}
      {(show || windowWidth >= 1024) && (
        <div
          className="min-h-screen w-3/4 max-w-[320px] flex flex-col primary-font fixed z-50 bg-white drop-shadow-xl animate-show-menu lg:shadow-none lg:border-r-2 lg:border-stone-100 lg:max-w-[15vw]"
          id="menu-container"
        >
          <AiFillCloseCircle
            className="ml-[15px] mt-[15px] text-[1.5rem] lg:hidden"
            onClick={showHideNav}
          />
          <img src={lb} className="w-[100px] ml-auto mr-auto lg:mt-auto" />
          <nav className="m-auto ml-[15px] mr-0">
            <ul className="flex flex-col content-center min-h-[70vh] justify-evenly">
              {elements.map((element, index) => (
                <li
                  key={index}
                  className={`py-[10px] pl-[10px] font-bold cursor-pointer ${
                    path.pathname === element[1] ? 'bg-login-green text-white' : ''
                  }`}
                  onClick={() => navigate(`${element[1]}`)}
                >
                  {element[0]}
                </li>
              ))}
            </ul>
          </nav>
          <Logout />
        </div>
      )}
    </>
  );
};

export default NavBar;
