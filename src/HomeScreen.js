import React from 'react';
import Nav from './Nav';
import './g.css';
import Banner from './Banner';
import Row from './Row';
import requests from './Requests';
function HomeScreen() {
  return (
    <div className='HomeScreen'>
         {/* <div className='container'> */}
            <Nav />
            
             <Banner />
           <Row 
            title ="NETFLIX_ORIGINALS"
            fetchURL = {requests.fetchNetflixOriginals}
           />
           <Row 
           title ="Trending Now"
           fetchURL ={requests.fetchTrendingNow}
           />
            <Row 
           title ="Top Rated"
           fetchURL ={requests.fetchTopRated}
           /> <Row 
           title ="Action Movie"
           fetchURL ={requests.fetchActionMovies}
           />
        {/* </div> */}
    </div>
  )
}

export default HomeScreen