//Next.js component imports
import type { NextPage } from "next"
import Head from "next/head"

//Component imports
import Hero from "../components/sections/about/Hero"
import OurMission from "../components/sections/about/OurMission"
import EmpowerInformInspire from "../components/sections/about/EmpowerInformInspire"
import OurName from "../components/sections/about/OurName"
import OurTeam from "../components/sections/about/OurTeam"
import SupportBeela from "../components/sections/about/SupportBeela"

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About us - Beela</title>
        <meta
          name="description"
          content="Beela is a non-profit organization that helps immigrant women and non-binary people in Sweden kick start their tech careers. "
        />
      </Head>
      <Hero />
      <OurMission />
      <EmpowerInformInspire />
      <OurName />
      <OurTeam />
      <SupportBeela />
    </div>
  )
}
export default About
