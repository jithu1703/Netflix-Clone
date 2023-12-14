import React from 'react'
import './Enjoy.css'
function Enjoy() {
  return (
    <div className='Enjoy-section'>
      <div className='container'>
          <div className='left-section'>
            <h2>Enjoy on your TV</h2>
            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
          </div>
          <div className='right-section'>
            <div className='image-container'>
              <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'/>
              <video autoPlay muted loop playsInline src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"></video>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Enjoy
