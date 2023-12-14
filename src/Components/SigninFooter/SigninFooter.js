import React from 'react';
import './SigninFooter.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faCaretDown } from '@fortawesome/free-solid-svg-icons';

function SigninFooter() {
  const [isOpen,setisOpen] = useState(true)
  const toggleDropdown = ()=>{
    setisOpen(isOpen);
  }
  return (
    <div className='SigninFooter'>
      <div className='container'>
        <h5>Questions? Call 000-800-919-1694</h5>
        <div className='row'>
          <div className='col'>
            <ul>
              <li><a href='#/'>Faq</a></li>
              <li><a href='#/'>Cookie preferences</a></li>
            </ul>
          </div>
          <div className='col'>
            <ul>
              <li><a href='#/'>Help centre</a></li>
              <li><a href='#/'>Corporate information</a></li>
            </ul>
          </div>
          <div className='col'>
            <ul>
              <li><a href='#/'>Terms of Use</a></li>
            </ul>
          </div>
          <div className='col'>
            <ul>
              <li><a href='#/'>Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className='language-btn'>
          <div className={isOpen ? 'dropdown' : 'dropdown-active'}>
            <button onClick={toggleDropdown}><FontAwesomeIcon icon={faGlobe} /><span className='button-text'>English</span><span className='downicon'><FontAwesomeIcon icon={faCaretDown} /></span></button>
            <div className='dropdown-content'>
              <a href='#/'>English</a>
              <a href='#/'>Hindi</a>
            </div>
          </div>
          <p>Netflix India</p>
        </div>
      </div>
    </div>
  )
}

export default SigninFooter
