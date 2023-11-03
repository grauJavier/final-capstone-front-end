import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useState } from 'react';
import Logout from '../Register_Login_forms/Logout';

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [showItem, setShowItem] = useState(true);
  const path = window.location.pathname;

  const showHideNav = () => {
    if (show) {
      setShow(false);
      setShowItem(true);
    } else {
      setShow(true);
      setShowItem(false);
    }
  };

  /* const handleTap = (event) => {
    if (showItem) return;
    const container = document.getElementById('menu-container');
    if (event.target !== container) {
      setShow(false);
      setShowItem(true);
    }
  };

  document.addEventListener('click', handleTap); */

  const elements = [['Places', '/'], ['My Reservations', '/my-reservations'], ['New Reservation', '/new-reservation'], ['New Place', '/new-place'], ['Remove Place', '/remove-place']];

  return (
    <>
      {showItem && <GiHamburgerMenu className="fixed ml-[15px] mt-[15px] text-[1.5rem]" onClick={showHideNav} />}
      { show && 
      <div className="min-h-screen w-3/4 max-w-[320px] flex flex-col primary-font fixed z-50 bg-white shadow-menu" id="menu-container">
        <AiFillCloseCircle className="ml-[15px] mt-[15px] text-[1.5rem]" onClick={showHideNav}/>
        <img src="src/assets/logo-black.png" className="w-[100px] ml-auto mr-auto" />
        <nav className="m-auto">
          <ul className="flex flex-col content-center min-h-[70vh] justify-evenly">
            {elements.map((element, index) => 
              <a key={index} href={element[1]}><li className={`py-[10px] pr-[40px] pl-[10px] font-bold ${path === element[1] ? 'bg-login-green text-white' : ''}`}
              >{element[0]}</li></a>
            )}
          </ul>
        </nav>
        <Logout />
      </div>}
    </>
  );
};

export default NavBar;
