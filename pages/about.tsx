//Next.js component imports
import type { NextPage } from "next"
import Head from "next/head"

//Component imports
import AboutBeela from "../components/sections/about/AboutBeela"
import OurMission from "../components/sections/about/OurMission"
import EmpowerInformInspire from "../components/sections/about/EmpowerInformInspire"
import OurName from "../components/sections/about/OurName"
import OurTeam from "../components/sections/about/OurTeam"
import SupportBeela from "../components/sections/about/SupportBeela"

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About - Beela</title>
        <meta
          name="description"
          content="Our welcoming community helps women and non-binary Swedish immigrants break into tech."
        />
      </Head>
      <AboutBeela />
      <OurMission />
      <EmpowerInformInspire />
      <OurName />
      <OurTeam />
      <SupportBeela />
    </div>
  )
}
export default About
