import React, { useEffect, useState } from 'react';
import axios from '../axios';
import requests from '../Requests';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import Videobg from '../my components/Videobg';


function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {                                             
        //Api_key"2b6497ae0720429617f05f93bbfc6193";
        const request = await axios.get(requests.fetchNetflixOriginals || requests.fetchTrending);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
          ]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '......' : string;
  }

  
  return (
        <header id='container'
          className='w-screen bg-cover object-contain bg-center top-0 relative z-1'
          style={{
            height:'80vh',
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
          }}
        >
          <div className="ml-10 pt-80 mt-0 relative z-20">
            <h1 id='movie-name' className='font-bold text-4xl text-white'>
             {movie?.title || movie?.name }
            </h1>
            <br />
            <div id='banner-buttons' className="flex">
              <button className='bg-blue-500 px-6 py-2 text-white rounded-md hover:bg-green-600 space-x-2'>
              <FontAwesomeIcon icon= { faPlay } size={35}/>
               <b>Play</b>
              </button>
              <button className='bg-blue-500 px-6 py-2 text-white rounded-md hover:bg-green-600 ml-4 space-x-2'>
              <FontAwesomeIcon icon= { faBookmark } />
                <b>My List</b>
              </button>
            </div>
            <br />
            <p id='banner_discription' className='font-bold text-xl text-white mr-64'>
              {truncate(movie?.overview, 250)}
            </p>
          </div>
        </header>
  );
}

export default Banner;


// ? is called optional changing operator in javascript
