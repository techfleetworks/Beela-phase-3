//Next.js component imports
import type { NextPage } from "next"
import Head from "next/head"

//Component imports
import { PageWrapper } from "../components/layout/PageWrapper"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
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
        <title>Beela</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <PageWrapper>
        <AboutBeela />
        <OurMission />
        <EmpowerInformInspire />
        <OurName />
        <OurTeam />

        {/* Empower 

        <div className="container py-2">
          <div className="row row-cols-1 row-cols-md-3 m-5" id="empower">
            <div className="col px-5">
              <span style={{ display: "flex", justifyContent: "center" }}>
                <Image src="/images/placeholder2.png" alt="Empower" width={72} height={72} />
              </span>
              <h3 className="text-center" id="empower-text">
                Empower
              </h3>
              <p className="card-text text-center" id="empower-paragraph">
                We help immigrant women and non-binary people to achieve all their potential through
                coaching, mentoring, and networking.
              </p>
            </div>
            <div className="col px-5">
              <span style={{ display: "flex", justifyContent: "center" }}>
                <Image src="/images/placeholder2.png" alt="Inform" width={72} height={72} />
              </span>
              <h3 className="text-center" id="empower-text">
                Inform
              </h3>
              <p className="card-text text-center" id="empower-paragraph">
                We spread the word about what’s happening in the tech world: bootcamps, code
                academies, courses, and events.
              </p>
            </div>
            <div className="col px-5">
              <span style={{ display: "flex", justifyContent: "center" }}>
                <Image src="/images/placeholder2.png" alt="Inspire" width={72} height={72} />
              </span>
              <h3 className="text-center" id="empower-text">
                Inspire
              </h3>
              <p className="card-text text-center" id="empower-paragraph">
                We share stories about people who have built a career in tech, as well as employers
                who have created opportunities for newcomers.
              </p>
            </div>
          </div>

        </div>*/}

        {/* Our Name*/}

        {/*<div className="row" id="community">
          <div className="container">
            <div className="row gx-0 p-5 m-5 align-items-center">
              <div className="col px-5 mx-4">
                <Image src="/images/about-us2 1.png" alt="Our Community" width={520} height={330} />
              </div>
              <div className="col px-5 mx-5">
                <div className="container">
                  <h2 id="our-community" style={{ height: 100 }}>
                    Our Name
                  </h2>
                </div>
                <div className="container">
                  <p id="our-community-paragraph" className="B2">
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>*/}

        <SupportBeela />
        <Footer />
      </PageWrapper>
    </div>
  )
}
export default About
