import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import Planpage from '../my components/Planpage';
import { CircleArrowLeft } from 'lucide-react';

function Profile() {
 
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => { 
      setUser(userAuth);
    });
  }, []);
  
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setUserName(user.displayName)
      }
    });
  }, []);
  // the key of authentication
  const handleLogohomeClick = () => {
    navigate('/homepage');
  }
  const handleSignout = () => {
    auth.signOut();
    navigate('/signup');
  }
  return (
    <div id='Container' className='bg-black h-screen'>
      <div id='profile-section'>
        <div id='nav_logo' className=' p-3 py-16 px-12 cursor-pointer object-contain ' onClick={handleLogohomeClick}>
          <CircleArrowLeft size={50}  color="white" className='hover:scale-90 transition-transform duration-200' />
        </div>
        <div id='profile-form' className='absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] max-w-[900px] z-20 text-center mt-5 boder-box py-20'>
          <h1 className='text-white text-center text-4xl font-bold mt-10'>My Profile</h1>
          <h2 className='text-white text-center text-2xl font-bold mt-8' >{user ? user.email : 'Loading...'}</h2>
          <h2 className='text-white text-center text-2xl font-bold mt-8' >{user ? userName : 'Loading...'}</h2>
          <h1 className='text-white text-center text-3xl font-bold pt-10 pb-5'>Plans</h1>
          <hr  className='bg-white border'/>
          <Planpage/>
          <button onClick={handleSignout} type='submit' className='w-full bg-red-500 hover:bg-purple-700 py-4 text-white rounded-md font-bold px-4 mt-10 ease-in transition-all duration-300'>Signout</button>
        </div>
      </div>
    </div>
  )
}

export default Profile;
