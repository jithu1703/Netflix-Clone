import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './TopBanner.css'
// import {Link} from 'react-router-dom'

function TopBanner() {
    const [isOpen,setisOpen] = useState(true)
    const toggleDropdown= ()=>{
        setisOpen(!isOpen)
    }
  return (
    <div className='TopBanner'>
      <div className='container'>
        <div className='bg-overlay'>

        </div>
        <div className='logo'>
             <Link to='/'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
            </Link>
          
        </div>
        <div className='buttons'>
            <div className={isOpen ? 'dropdown' : 'dropdown-active'}>
                <button onClick={toggleDropdown}>English</button>
                <div className="dropdown-content">
                            <a href="#/">English</a>
                            <a href="#/">Hindi</a>
                        </div>
            </div>
            { <Link className='signin-btn' to='/signin'>Sign In</Link> }
        </div>
        <div className='contents'>
            <h2>The biggest Indian hits. Ready to <br></br>watch here from ₹ 149.</h2>
            <h3>Join today. Cancel anytime.</h3>
            <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
            <div className='Email-section'>
            <input type="text" placeholder='Email address' />
             <button>Get Started</button> 
            </div>
        </div>

      </div>
    </div>
  )
}

export default TopBanner
