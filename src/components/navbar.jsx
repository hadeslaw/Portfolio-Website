import React, { useState, useEffect } from 'react';
import { Button } from './button';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {} //setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            ZDM
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                {button && <Button buttonStyle='btn--outline'>Home</Button>}
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Portfolio' className='nav-links' onClick={closeMobileMenu}>
                <Button buttonStyle='btn--outline'>Portfolio</Button>
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link to='/CV' className='nav-links' onClick={closeMobileMenu}>
                {button && <Button buttonStyle='btn--outline'>CV</Button>}
              </Link>
            </li>
          </ul>
               
        </div>
      </nav>
    </>
  );
}

export default Navbar;