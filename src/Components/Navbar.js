import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <p className='navbar-logo' onClick={closeMobileMenu}>
          SCHEMEUP
        </p>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
              HOME
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/Schemes'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              SCHEMES <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/Camps'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              CAMPS
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/EditDetails'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              EDIT DETAILS
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/Log'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              LOG IN
            </Link>
          </li>
          <li>
            <Link
              to='/Logout'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              LOGOUT
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;

