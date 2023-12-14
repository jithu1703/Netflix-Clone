import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from '../../axios'
import "./Banner.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`).then((response)=>{
      console.log(response.data.results[7])
      setMovie(response.data.results[7])
    })
    
  }, [])
  
    return (
     
      <div style={{backgroundImage:`url(${movie ? imageUrl + movie.backdrop_path : ""})`}}>
      
      
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.name :""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie ? movie.overview :""}</h1>
        </div>
      <div className='fade_bottom'>
        
      </div>
    </div>
    </div>
  )
}

export default Banner
