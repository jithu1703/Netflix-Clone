import React from 'react'
import { useState } from 'react';
import "./NavBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBell } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  
  return (
    <div className={navbar ? 'navbar-active' : 'navbar'}>
      { <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" /> }
      <div className={isOpen ? 'dropdown' : 'dropdown-active'}>
        <div className="dropdown-content">
          <a href="#/"></a>
          <a href="#/">Logout</a>
        </div>
     </div>
     <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />

     <div>
        <a href="#">
          <FontAwesomeIcon icon={faMagnifyingGlass} className='searchicon' />
        </a>
        <a href="#"><FontAwesomeIcon icon={faBell} className='bellicon' /></a>

      </div>

    </div>
  )
}

export default NavBar
