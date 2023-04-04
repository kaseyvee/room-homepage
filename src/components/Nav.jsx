import { useState, useEffect } from 'react';

function Nav() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    setOpenNav(false);
  }, [])

  function handleNavToggle() {
    if (openNav) {
      return setOpenNav(false);
    }

    return setOpenNav(true);
  }

  return (
    <header className='nav'>
      <div className='nav_main'>
        <div
          className='nav_main_menu-open'
          onClick={handleNavToggle}
        >
          <img src='icon-hamburger.svg' alt='open mobile navigation menu' />
        </div>

        <div className='nav_main_logo-container'>
          <img
            src='logo.svg'
            alt='logo'
          />
        </div>

        <div className='nav_main_list'>
          <a href='' className='nav_list_item'>home</a>
          <a href='' className='nav_list_item'>shop</a>
          <a href='' className='nav_list_item'>about</a>
          <a href='' className='nav_list_item'>contact</a>
        </div>
      </div>

      {openNav && <div className='nav_mobile-overlay'>
        <div className='nav_mobile-overlay_background'></div>

        <div
          className='nav_mobile-overlay_menu-open'
          onClick={handleNavToggle}
        >
          <img
            src='icon-close.svg'
            alt='close mobile nagvigation menu'
          />
        </div>

        <div className='nav_mobile-overlay_list'>
          <a href='' className='nav_mobile-overlay_list_item'>home</a>
          <a href='' className='nav_mobile-overlay_list_item'>shop</a>
          <a href='' className='nav_mobile-overlay_list_item'>about</a>
          <a href='' className='nav_mobile-overlay_list_item'>contact</a>
        </div>
      </div>}
    </header>
  );
}

export default Nav;