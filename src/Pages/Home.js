import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Banner from '../Components/Banner/Banner'
import RowPost from '../Components/RowPost/RowPost'
import { action, comedy, documentaries, horror, originals, romance, trending } from '../urls'
import HomeFooter from '../Components/HomeFooter/HomeFooter'

function Home() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={trending} title='Trending'/>
      <RowPost url={action} title='Action'/>
      <RowPost url={comedy} title='Comedy'/>
      <RowPost url={horror} title='Horror'/>
      <RowPost url={romance} title='Romance'/>
      <RowPost url={documentaries} title='Documentaries'/>
      <HomeFooter/>
    </div>
  )
}

export default Home
