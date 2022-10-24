import React from 'react'
import Navbar from "../components/layout/Navbar/index"
import StayConnected from "../components/sections/stayconnected/AboutBeela/index"
import JoinOurCommunity from "../components/sections/stayconnected/joinourcommunity/join"
import Newsletter from "../components/sections/stayconnected/newsletter/newsletter"
import Podcast from "../components/sections/stayconnected/podcast/podcast"


export default function stayconnected() {


  return (
    <div>
        {/* Navbar component */}
      <Navbar/>
    <StayConnected/>
    <JoinOurCommunity/>
    <Newsletter/>
    <Podcast/>
    </div>
  )
}
