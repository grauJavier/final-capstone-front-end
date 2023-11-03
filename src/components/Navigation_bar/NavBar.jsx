import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useState } from 'react';
import Logout from '../Register_Login_forms/Logout';

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [showItem, setShowItem] = useState(true);

  const showHideNav = () => {
    if (show) {
      setShow(false);
      setShowItem(true);
    } else {
      setShow(true);
      setShowItem(false);
    }
  };

  return (
    <>
      {showItem && <GiHamburgerMenu onClick={showHideNav} />}
      { show && 
      <div>
        <AiFillCloseCircle onClick={showHideNav}/>
        <img src="src/assets/logo-black.png" className="w-[100px]" />
        <nav>
          <ul className="flex flex-col">
            <li>Places</li>
            <li>My Reservations</li>
            <li>New Reservation</li>
            <li>New Place</li>
            <li>Remove Place</li>
          </ul>
        </nav>
        <Logout />
      </div>}
    </>
  );
};

export default NavBar;
