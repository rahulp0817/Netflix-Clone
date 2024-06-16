import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

function Signup() {
  const auth = getAuth(); 
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [showMainForm, setShowMainForm] = useState(true);
  const navigate = useNavigate();

  const register = async(e) => {
    e.preventDefault();
    setLoading(true);
    try {
     const authUser = await createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    );
      console.log("Successfully created user account with uid:", authUser.user.uid);
      navigate('/homepage')
    } catch(error) {
      alert(error.message + "\n Please try again");
      } finally {
        setLoading(false);
      }
  };

  const handleSignupClick = () => {
      setShowMainForm(false);
  };

  return (
    <div id='signup-section'>
      <div id="container">
      <div id='signupscreen' className="relative p-[10px] bg-[url('https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media//banner.jpg')] bg-cover bg-no-repeat top-0 bg-center left-0 h-screen ">
        <div className='flex-1 pb-[15vh] relative'>
          <div className='flex text-white items-center justify-between py-5 px-10'>
            <div id='signup_logo' className="relative z-10 w-[160px] object-contain ">
              <img src="https://davidblaine.com/wp-content/uploads/2017/04/netflix-logo.png" alt="Netflix logo" />
            </div>
            <div id='signup_buttons' className="relative flex  ">
              <Link to="/login" className='z-10'>
                <button className='bg-red-600 px-6 py-2 text-white rounded-md hover:bg-red-800'> LogIn </button>
              </Link>
          </div>
        </div>
          <div id='signupscreen_gradient'
            className="fixed top-0 left-0 w-full h-full"
            style={{
              background: 'rgba(0, 0, 0, 0.5)',
              backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.6) 0, rgba(0, 0, 0, 0.2) 40%,rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.5) 100%)',
              zIndex: 1,
            }}>
          </div>
        </div>
        <div id='signup_contents' className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] z-30 text-center px-50">
          {showMainForm ? (
            <>
              <h1 className="text-5xl font-extrabold text-white">Unlimited movies, TV shows, and more.</h1><br />
              <h2 className="text-3xl text-white font-medium">Watch anywhere. Cancel anytime.</h2><br />
              <h3 className='text-xl text-white font-normal '>Ready to watch? Enter your email to explore latest movies.</h3>
              <div id='signup_input' className='flex flex-wrap mt-6 pl-[160px] '>
                <input
                  className='p-4 min-w-[400px] rounded-md outline-none border border-white bg-transparent backdrop-blur-sm text-white'
                  type="text"
                  placeholder='Enter Your FullName'
                  id="fname"
                  required
                />
                <button className='bg-red-600 px-12 py-4 text-white rounded-md font-semibold font-xl ml-5 hover:bg-red-800' onClick={handleSignupClick}> Get Started </button>
                <div id='error_messages'></div>
              </div>
            </>
          ) : (
            <>
              <div id='Signuppage'>
                <div id='password-form' className='absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] text-center border-box py-24 ' 
                  style={{
                    background: 'rgba(0, 0, 0, 0.7)', 
                  }} >
                  <form onSubmit={register}>
                    <h1 className='text-white text-4xl font-medium mr-64'> Register </h1><br/>
                    <input className='p-4 min-w-[400px] border-none outline-none rounded-md text-black mt-6' type="email" placeholder='Email' ref={emailRef} id="Email" required/>
                    <div id='error_message'></div><br/>
                    <input className='p-4 min-w-[400px] border-none outline-none rounded-md text-black' type="password" placeholder='Add a Password' ref={passwordRef} id="Password" min={8} max={16}  required/>
                    <div id='error_message'></div><br/>
                    <button type='submit' className='bg-red-600 p-4 min-w-[400px] text-white rounded-md hover:bg-red-800 font-bold mt-10 ease-in transition-all duration-500' onClick={() => register}>
                      {loading ? <FontAwesomeIcon icon={faSpinner} /> : 'Register'}
                    </button><br/>
                  </form>
                </div>
              </div>
            </>
          )} 
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Signup;

// const handleSingnuInClick = () => {
  //   var email = document.getElementById('email').value;
  //   var password = document.getElementById('Password').value; 
  //   var error_message = document.getElementById('error_message');
  //   var text;

  //   error_message.style.padding = '2px';
  //   error_message.style.color = 'red';
  //   error_message.style.marginRight = '5vh';

  //   if (email.indexOf(@) == -1){
    //     text = "Please enter a valid Email address";
    //       error_message.innerHTML = text;
  //   if (password.length < 8 || password.length > 16) { 
  //     text = 'Please Enter a Valid Password (min 8 and max 16)';
  //     error_message.innerHTML = text;
  //   } 
  //   else {
  //     setLoading(true);

  //     setTimeout(() => {
  //       setLoading(false);
  //       navigate('/Homepage');
  //     }, 2000);
  //   }
  // };
