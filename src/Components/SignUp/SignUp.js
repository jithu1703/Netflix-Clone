import React, { useContext, useState } from 'react'
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom'
import { FirebaseContext } from '../../Store/FirebaseContext'





function SignUp() {
  
  const [username,setUsername] = useState('')
  const [phoneno,setPhoneno] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const {firebase} = useContext(FirebaseContext)
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate();

  const [usernameValidation,setUsernameValidation] = useState('')
  const [passwordValidation,setPasswordValidation] = useState('')
  const [phoneValidation,setPhoneValidation] = useState('')

  const [createUserValidation,setcreateUserValidation] = useState('')

  const alphanumeric = /^[a-zA-Z0-9]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const phoneRegex = /^\d+$/

  

  const handleUsernameChange = (e)=>{
    setUsername(e.target.value.replace(/\s/g,''));
    if(usernameValidation){
      setUsernameValidation('')
    }
  }

  const handlePhonenoChange = (e)=>{
    setPhoneno(e.target.value.replace(/\s/g,''));
    if(phoneValidation){
      setPhoneValidation('')
    }
  }

  const handleEmailChange = (e)=>{
    setEmail(e.target.value.replace(/\s/g,''));
    
  }

  const handlePasswordChange =(e)=>{
    setPassword(e.target.value);
    if(passwordValidation){
      setPasswordValidation('')
    }
  }

   const handleSignUp = (e)=>{
     e.preventDefault();
     if(! alphanumeric.test(username)){
       setUsernameValidation('Username should only contain letters and numbers');
       return;
     }
     if(! phoneRegex.test(password)){
       setPasswordValidation('Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character')
       return;
     }
     if(! phoneRegex.test(phoneno)){
       setPhoneValidation('Please enter a phone number consisting of digits only')
       return;
     }

     try {
       setLoading(true);

       firebase.auth().createUserWithEmailAndPassword(email, password)
           .then((result) => {
               result.user.updateProfile({ displayName: username })
                   .then(() => {
                       firebase.firestore().collection('users').add({
                           id: result.user.uid,
                           username: username,
                           phone: phoneno
                       })                           .then(() => {
                               setLoading(false);
                               navigate('/signin')

                           })
                           .catch((error) => {
                            
                               setcreateUserValidation(error);
                               setLoading(false);

                           });
                   })
                   .catch((error) => {
                     
                       setcreateUserValidation(error);
                       setLoading(false);

                   });
           })
           .catch((error) => {
         
               setcreateUserValidation(error);
               setLoading(false);


          })



   } catch (error) {

      setcreateUserValidation(error.message);
       setLoading(false);

   };



 };


const clearErrorMessage = () => {
  if (createUserValidation) {
      setcreateUserValidation('');
  }
};

  return (
    <div className='SignUp'>
      <div className='container'>
      <div className="logo">
             <Link to="/">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
             </Link>
          
        </div>
        <div className={loading ? 'loading-active' : 'loading'}>
        <div className="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
        </div>
        <div className='ng-overlay'>

        </div>
        <div className='card'>
          <h2>Sign Up</h2>
          <form >
            {createUserValidation && <p className='firebase-error'>{createUserValidation.message}</p>}
            <div className='form-element'>
            <input type="text" name="username" id="username" value={username} placeholder='Username' onChange={handleUsernameChange} required />
            </div>
            {usernameValidation && <p className='validation'>{usernameValidation}</p>}
            <div className='form-element'>
            <input type="password" name="password" id="password" value={password} placeholder='Password' onChange={handlePasswordChange} required />
            </div>
            {passwordValidation && <p className='validation'>{passwordValidation}</p>}
            <div className='form-element'>
            <input type="email" name="email" id="email" value={email} placeholder='Email' onChange={handleEmailChange} required />
            </div>
            <div className="form-element">
            <input type="text" name="phoneno" id="phoneno" value={phoneno} placeholder='Phone Number' onChange={handlePhonenoChange} required />
            </div>
            {phoneValidation && <p className='validation'>{phoneValidation}</p>}
            <button type='submit' className="btn-sign-in" onClick={clearErrorMessage}>Sign Up</button>
          </form>
          <div className="signin-section">
                        <p>Already have an account?
                            <Link className='signin' to="/signin">Sign In</Link>


                        </p>

                    </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
