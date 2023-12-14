import React, { useState,useContext } from 'react'
import './SignIn.css'
import {useNavigate,Link} from 'react-router-dom'
import { FirebaseContext } from '../../Store/FirebaseContext'
import {initializeApp} from 'firebase/app'
import { firebaseConfig } from '../../firebase/Config'



function SignIn() {
  const app =initializeApp(firebaseConfig)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [errormessage, setErrormessage] = useState('')
    const [loading, setLoading] = useState(false);
    const { firebase } = useContext(FirebaseContext);
    const navigate = useNavigate();


    const handleEmailChange = (e)=>{
      setEmail(e.target.value.replace(/\s/g, ''))
    }

    const handlePasswordChange = (e)=>{
      setPassword(e.target.value)
    }

    // const handleSignin = (e)=>{
    //   e.preventDefault();
    //   setLoading(true);
    //   firebase.auth().signInwithEmailAndPassword(email,password)
    //   .then((result)=>{
    //     console.log(result)
    //     navigate("/home")
    //   }).catch((error)=>{
    //     console.log(error);
    //     setErrormessage('Oops! The email or password you entered is incorrect. Please try again.')
    //   }).finally(()=>{
    //     setLoading(false)
    //   })
    // }
        
  return (
    <div className='SignIn'>
      <div className='container'>
        <div className='logo'>
        <Link to='/'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
        </Link>
        </div>
        <div className={loading ? 'loader-active' : 'loader'}>
          <div className='lds-ring'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className='bg-overlay'>

        </div>
        <div className='card'>
            <h2>Sign In</h2>
            <form  >
              {errormessage && <p className='error-message'>{errormessage}</p>}

              <div className='form-element'>
                <input type="text" name='username' value={email} placeholder='Email' onChange={handleEmailChange} id='username' required />
              </div>
              <div className='form-element'>
                <input type="text" name='password' value={password} placeholder='Password' onChange={handlePasswordChange} id='password' required />
              </div>
              <button type='submit'  className='btn-sign-in'>
              { <Link className='btn-sign-in' to='/home'>Sign In</Link> }
              </button>
              <div className='forgot-password'>
                <label for='checkboxId'>
                <input type="checkbox" id='checkboxId' />
                Remember Me
                </label>
                <p>Need Help</p>
              </div>
            </form>
            <div className='signup-section'>
              <p>New to Netflix
                <Link className='signup' to="/signup">Sign Up</Link>
              </p>

              <p className='learn-more'>
                This page is protected by Google reCAPTCHA to ensure you're not a bot.
                <a href="#/" className='learn'>Learn more</a>
              </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
