import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import Logout from '../Register_Login_forms/Logout';

const NavBar = () => {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <>
      <GiHamburgerMenu onClick={handleClick} />
      { show && 
      <div>
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
