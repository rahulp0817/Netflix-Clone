import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const auth = getAuth();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const SignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const authUser = await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      console.log("Successfully Signin into the account:", authUser);
      navigate('/homepage')
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div id='login-section'>
      <div id='login-container'>
        <div id='login_screen' className="relative bg-[url('https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media//banner.jpg')] bg-cover bg-no-repeat bg-center top-0 left-0 h-screen">
          <div id='login_logo' className=' relative left-12 max-w-[160px] cursor-pointer object-contain z-10 py-7'>
            <img src="https://davidblaine.com/wp-content/uploads/2017/04/netflix-logo.png" alt="Netflix logo" />
          </div>
          <div id='login_screen_gradient'
            className="fixed top-0 left-0 w-full h-full"
            style={{
              background: 'rgba(0, 0, 0, 0.5)',
              backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.5) 0, rgba(0, 0, 0, 0.3) 40%,rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.5) 100%)', zIndex: 1,
            }}>
          </div>
          <div id='signIn-page' className='absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] max-w-[900px] z-20 text-center mt-5 boder-box py-20'>
            <form onSubmit={SignIn} className='relative z-40 ease-in'>
              <h1 className='text-white text-4xl font-medium mr-40'> Sign In </h1><br /><br />
              <input type="text" name="email or phone number" id="EmailOrPhone" placeholder='Email or phone number' required className='rounded-md px-14 py-3 outline-none border border-white text-black ' ref={emailRef} /><br /><br />
              <input type="password" name="password" id="password" placeholder='Password' required className='rounded-md px-14 py-3 outline-none border border-white  text-black ' ref={passwordRef} /><br /><br />
              <button type='submit' className='bg-red-600 px-32 py-3.5 text-white rounded-md z-80 hover:bg-red-700 font-bold mt-6 ease-in transition-all duration-500' onClick={() => SignIn}>
                {loading ? <FontAwesomeIcon icon={faSpinner} /> : 'SignIn'}
              </button><br />
              <div id='checkbox' className='flex justify-between items-center mt-3'>
                <div className='flex items-center ml-24'>
                  <input type="checkbox" name="remember-box" id="verify-checkbox" className='w-7 h-4 ' />
                  <label htmlFor="checkbox" className='text-white text-sm '> Remember me </label>
                </div>
                <a href="WWW.google.com" className='text-l text-blue-600 hover:underline mr-24 cursor-pointer'> Forgot password? </a>
              </div>
            </form>
            <div id='login-footer' className='relative z-30'>
              <h4 className='text-gray-500 text-xl mt-7 mr-10 '> New to Netflix?
                <Link to={"/Signup"}>
                  <span className='text-white hover:underline cursor-pointer pl-2'>Sign up now.</span>
                </Link>
              </h4>
            </div>
            <div id='login-footer_gradient'
              className="fixed top-0 left-0 w-full h-full"
              style={{
                background: 'rgba(0, 0, 0, 0.8)',
              }}>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;

// to change the gap of placeholder use text-left in the input