import axios from '../axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Browse() {
  const [searchMovies, setSearchMovies] = useState("");
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const submithandle = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2b6497ae0720429617f05f93bbfc6193&query=${searchMovies}`);

      setMovies(response.data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const handleLogohomeClick = () => {
    navigate('/homepage');
  }

  useEffect(() => {
    const timerId = setTimeout(() => {
      console.log(searchMovies);
    }, 2000)
    return () => {
      clearTimeout(timerId);
    }
  }, [searchMovies])  //Debauncing

  function MovieName(e) {
    setSearchMovies(e.target.value);
  }

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '....' : string;
  }
  

  return (
    <div className='p-6 relative bg-black top-0 bottom-0'>
      <div id='nav_logo' className=' max-w-[120px] cursor-pointer' onClick={handleLogohomeClick}>
        <img src="https://davidblaine.com/wp-content/uploads/2017/04/netflix-logo.png" alt="Netflix logo" />
      </div>
      <div className='flex justify-center mt-20'>
        <form onSubmit={submithandle} className='w-[50%]'>
          <div className='flex justify-between shadow-md p-3 rounded-lg w-full space-x-4'>
            <input type="text" className='outline-none w-full rounded-md py-3 px-5' onChange={MovieName} placeholder='Search...' />
            <button className='bg-red-500 text-white py-2 px-8 rounded-md border-none hover:bg-red-700' type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div className='flex flex-wrap p-6 justify-center'>
        {movies.map((movie) => (
          <div key={movie.id} id='search-posters' className='flex flex-col items-center mx-2 mb-5 cursor-pointer mt-5'>
            {movie.backdrop_path && (
              <>
                <img 
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} 
                  alt={movie.title} 
                  style={{ width: '200px', height: '300px', objectFit: 'cover' }}
                  className='mb-2'
                />
                <h1 className='text-center text-bold text-white'>{truncate(movie?.title || movie?.name,20)}</h1>
              </>
            )}
          </div>
        ))}
      </div>  
    </div>
  )
}

export default Browse
