import React from 'react'
import './Download.css'
function Download() {
  return (
    <div className='Download'>
      <div className='container'>
        <div className='left-section'>
          <div className='image-container'>
            <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'/>
          </div>
          <div className='card'>
            <div className='image'>
            <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png' />
            </div>
            <div className="contents">
                            <div className="text">
                                <h4>Stranger Things</h4>
                                <p>Downloading...</p>
                            </div>
                        </div>
                        <div className='gif'>
                          <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif' />
                        </div>
          </div>
        </div>
        <div className='right-section'>
            <h2>Download your shows to watch offline</h2>
            <p>Save your favourites easily and always have something to watch.</p>
        </div>
      </div>
    </div>
  )
}

export default Download
