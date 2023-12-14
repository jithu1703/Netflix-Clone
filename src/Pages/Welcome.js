import React from 'react'
import TopBanner from '../Components/WelcomeTopBanner/TopBanner'
import Enjoy from '../Components/EnjoySection/Enjoy'
import Download from '../Components/DownloadSection/Download'
import Everywhere from '../Components/EverywhereSection/Everywhere'
import Create from '../Components/CreateSection/Create'
import Frequently from '../Components/FrequentlySection/Frequently'
import HomeFooter from '../Components/HomeFooter/HomeFooter'


function Welcome() {
  return (
    <div>
        <TopBanner/>
        <Enjoy/>
        <Download/>
        <Everywhere/>
        <Create/>
        <Frequently/>
        <HomeFooter/>
    </div>
  )
}

export default Welcome
