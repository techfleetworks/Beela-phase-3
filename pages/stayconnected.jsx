import React from 'react'
import Navbar from "../components/layout/Navbar/index"
import StayConnected from "../components/sections/stayconnected/AboutBeela/index"
import JoinOurCommunity from "../components/sections/stayconnected/joinourcommunity/join"
import Newsletter from "../components/sections/stayconnected/newsletter/newsletter"
import Podcast from "../components/sections/stayconnected/podcast/podcast"
import Support from "../components/sections/stayconnected/support/support"
import Footer from "./../components/layout/Footer/index"

// Dont convert to Typescript. for easier collaboration. :D 
export default function stayconnected() {


  return (
    <div>
        {/* Navbar component */}
      <Navbar/>
    <StayConnected/>
    <JoinOurCommunity/>
    <Newsletter />
    <Podcast/>
    <Support/>
    <Footer/>
    </div>
  )
}
