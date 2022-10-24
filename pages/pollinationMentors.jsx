import React from 'react'
import Hero from "../components/sections/pollinationMentors/Hero/hero"
import Navbar from "../components/layout/Navbar/index"
import WhatToExpectAsaMentor from "../components/sections/pollinationMentors/whattoexpectasamentor/expectmentor"



export default function pollinationMentors() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <WhatToExpectAsaMentor/>
    </div>
  )
}
