import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CircleUserRound } from 'lucide-react';

function Nav() {

  const [show, setShow] = useState();

  const navbarTransition = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', navbarTransition);
    return () => window.removeEventListener('scroll', navbarTransition);
  }, []);

  const navigate = useNavigate();

  const handleAvatarClick = () => {
    navigate('/profile');
  }

  const browsehandle = () => {
    navigate('/browse')
  }

  return (
    <div id='nav_black' className='fixed z-40 top-0 w-full h-[80px] transition-all duration-500'
      style={{
        backdropFilter: show ? 'blur(20px)' : 'none',
        backgroundColor: show ? 'rgba(0, 0, 0, 0.7)' : 'transparent'
      }}>
      <div className='flex-1 relative text-white'>
        <div className='flex text-white items-center justify-between py-1 px-8'>
          <div id='nav_logo' className=' max-w-[120px] cursor-pointer'>
            <img src="https://davidblaine.com/wp-content/uploads/2017/04/netflix-logo.png" alt="Netflix logo" />
          </div>
          <div className='flex items-center '>
            <div id='nav_links' className='flex justify-between items-center '>
              <ul className='flex items-center space-x-5 text-bold text-xl '>
                <li className='cursor-pointer text-red-500 hover:text-purple-600 transition-all duration-300' onClick={browsehandle}>Browse</li>
                <li className='cursor-pointer text-red-500 hover:text-purple-600 transition-all duration-300'>Developer</li>
              </ul>
            </div>
            <div id='nav_avatar' className=' px-5 py-5 cursor-pointer ' onClick={handleAvatarClick}>
              <CircleUserRound size={30} className='text-purple-600'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;

//sr-only more.....
//className= {`nav ${Show && "nav_black"}`}