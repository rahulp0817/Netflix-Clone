import React from 'react'
import Nav from '../my components/Nav';
import Banner from '../my components/Banner';
import requests from '../Requests';
import Rows from '../my components/Rows';
import Videobg from '../my components/Videobg';
function Homepage() {
  return (
      <div id='home-section' className="relative top-0 left-0  bg-black">
        <Nav/>
        <Banner/>
        {/* <Videobg/> */}
        <Rows
          title = "Trending Now"
          fetchUrl = {requests.fetchTrending}
          
        /> 
        <Rows title="Action Movies" fetchUrl = {requests.fetchActionMovies}/>
        <Rows title="Bollywood Hits" fetchUrl = {requests.fetchHindiMovies}/>
        <Rows title="Tv shows" fetchUrl = {requests.fetchHindiWebSeries}/>
        <Rows title="Comedy Movies" fetchUrl = {requests.fetchComedyMovies}/>
        <Rows title="Drama Movies" fetchUrl = {requests.fetchDramaMovies}/>
        <Rows title="Horror Movies" fetchUrl = {requests.fetchHorrorMovies}/>
        <Rows title="Documentaries" fetchUrl = {requests.fetchDocumentaries}/>
        <Rows title="Romance Movies" fetchUrl = {requests.fetchRomanceMovies}/>
        <Rows title="Netflix Originals" fetchUrl = {requests.fetchNetflixOriginals}/>
        <Rows title="News TV Shows" fetchUrl={requests.fetchNewsTV} />
        <Rows title="Animes" fetchUrl={requests.fetchAnime} />
        <Rows title="Top Rated Movies" fetchUrl = {requests.fetchTopRated}/>
      </div>
  )
}

export default Homepage;