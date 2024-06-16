import React, { useState, useEffect } from 'react'
import axios from '../axios';
import { Play, Plus } from 'lucide-react';
import '../App.css';  //written the css in app.css

function Rows({title, fetchUrl, isLagreRow = true}) {

  const[Movies, setMovies] = useState([]);
  const base_url =  "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
    }
    fetchData();

  }, [fetchUrl]);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '....' : string;
  }
  
  return (
    <div id='rows' className='text-white ml-3 relative z-10 top-10 ease-in'>
      <h1 className='text-3xl font-bold ml-6'>{title}</h1><br/>

      <div id='row-poster' className='flex p-6 object-contain cursor-pointer overflow-x-auto'>
        {Movies && Movies.map((movie) => (
          <div id= 'row-posters' className='relative group mr-5 'style={{width:'600px'}} >
            <img id='row-img' className='z-10 object-contain'
              key={movie.id} 
              src={`${base_url}${isLagreRow ? movie.poster_path : movie.backdrop_path}`} 
              alt={movie.name} 
              style={{width:'100%', height:'auto'}}
            />
            <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-200  items-center justify-center'>
              <h1 className='opacity-0 group-hover:opacity-100 transition-all duration-200 text-sm p-3 '> 
              <span className=' text-red-500 text-bold text-md'>{truncate(movie?.title || movie?.name,32)}</span> <br/>
              {truncate(movie?.overview, 40)}
              </h1>
              <div className='fixed bottom-10 right-5 opacity-0 group-hover:opacity-100 transition-all duration-200 flex gap-4 cursor-pointer'>
                <Play size={40} className='hover:rounded-full hover:bg-slate-400 p-2'/>
                <Plus size={40} className='hover:rounded-full hover:bg-slate-400 p-2'/>
              </div>
           </div>
         </div>
       ))}
      </div>
    </div>
  );
}

export default Rows;




//   <div id='rows' className='text-white ml-3 relative z-10 top-10 ease-in'>
  //     <h1 className='text-3xl font-bold ml-6'>{title}</h1><br/>

  //     <div id='row-poster' className='flex overflow-y-hidden overflow-x-scroll p-6 object-contain '>
  //     {Movies && Movies.map((movie) => (
  //       <div className='relative group ' style={{height: '400px', width: '300px'}}>
  //         <img id='row-posters' className='z-10 object-contain mr-[14px] transition-all duration-200'
  //           key={movie.id} 
  //           src={`${base_url}${isLagreRow ? movie.poster_path : movie.backdrop_path}`} 
  //           alt={movie.name} 
  //           style={{width:'100%', height:'100%'}}
  //         />
  //         <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center'>
  //           <h1 className='opacity-0 group-hover:opacity-100 transition-all duration-200'>{movie.name}</h1>
  //         </div>
  //       </div>
  //     ))}
  //     </div>
  //  </div>