import React,{useState} from 'react'
import './HomeFooter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faCaretDown } from '@fortawesome/free-solid-svg-icons';
function HomeFooter() {
  const [isOpen,setisOpen] =useState(true);
  const toggleDropdown =()=>{
    setisOpen(!isOpen)
  }
  return (
    <div className='HomeFooter'>
      <div className='container'>
        <h5>Questions? Call 000-800-919-1694</h5>
      </div>
      <div className='row'>
        <div className='col'>
          <ul>
            <li><a href='/Faq'>FAQ</a></li>
            <li><a href='#/'>Investor Relations</a></li>
            <li><a href="#/">Terms of Use</a></li>
            <li><a href="#/">Corporate Information</a></li>
            <li><a href="#/">Legal Notices</a></li>
          </ul>
        </div>

        <div className='col'>
          <ul>
            <li><a href="#/">Help Centre</a></li>
            <li><a href="#/">Investor Relations</a></li>
            <li><a href="#/">Terms of Use</a></li>
            <li><a href="#/">Corporate Information</a></li>
            <li><a href="#/">Legal Notices</a></li>
            </ul>
        </div>

        <div className='col'>
          <ul>
            <li><a href="#/">Account</a></li>
            <li><a href="#/">Ways to Watch</a></li>
            <li><a href="#/">Corporate Information</a></li>
            <li><a href="#/">Only on Netflix</a></li>
            </ul>
        </div>

        <div className='col'>
          <ul>
            <li><a href="#/">Media Centre</a></li>
            <li><a href="#/">Terms of Use</a></li>
            <li><a href="#/">Contact Us</a></li>
            </ul>
        </div>

      </div>

        <div className='language-btn'>
        <div className={isOpen ? 'dropdown' : 'dropdown active'}>
                        <button onClick={toggleDropdown}><FontAwesomeIcon icon={faGlobe} /><span className='button-text'>English</span><span className='downicon'><FontAwesomeIcon icon={faCaretDown} /></span></button>
                        <div className="dropdown-content">
                            <a href="#/">English</a>
                            <a href="#/">Hindi</a>
                        </div>

                    </div>
        </div>
      
    </div>
  )
}

export default HomeFooter
