import { useState, useEffect } from 'react';

function Nav() {
  const [openNav, setOpenNav] = useState(false);
  const [navToggleImage, setNavToggleImage] = useState("icon-hamburger.svg");

  useEffect(() => {
    setOpenNav(false);
    setNavToggleImage("icon-hamburger.svg");
  }, [])

  function handleNavToggle() {
    if (openNav) {
      setOpenNav(false);
      return setNavToggleImage("icon-close.svg");
    }

    setOpenNav(true);
    return setNavToggleImage("icon-hamburger.svg");
  }

  return (
    <div className='nav'>
      <div
        className='nav_menu-toggle'
        onClick={handleNavToggle}
      >
        <img src={navToggleImage} alt='toggle mobile navigation menu' />
      </div>

      <div className='nav_logo-container'>
        <img
          src='logo.svg'
          alt='logo'
        />
      </div>

      <div className='nav_list'>
        <a href='' className='nav_list_item'>home</a>
        <a href='' className='nav_list_item'>shop</a>
        <a href='' className='nav_list_item'>about</a>
        <a href='' className='nav_list_item'>contact</a>
      </div>
    </div>
  );
}

export default Nav;