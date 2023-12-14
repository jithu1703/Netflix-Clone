import React from 'react'
import './Everywhere.css'
function Everywhere() {
  return (
    <div className='Watch'>
      <div className='container'>
        <div className='left-section'>
          <h2>Watch everywhere</h2>
          <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
        </div>
        <div className='right-section'>
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="" />
          <video autoPlay muted loop playsInline src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"></video>
        </div>
      </div>
    </div>
  )
}

export default Everywhere
