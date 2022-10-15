import type { NextPage } from "next"
import Head from "next/head"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import avatar from "../public/images/avatar.png"
import Image from "next/image"
import AboutBeela from "../components/sections/about/AboutBeela"
import { PageWrapper } from "../components/layout/PageWrapper"
import React from "react"
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

        {/* Empower */}
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
        </div>

        {/* Our Community */}
        <div className="row" id="community">
          <div className="container">
            <div className="row gx-0 p-5 m-5 align-items-center">
              <div className="col px-5 mx-4">
                <Image src="/images/about-us2 1.png" alt="Our Community" width={520} height={330} />
              </div>
              <div className="col px-5 mx-5">
                <div className="container">
                  <h1 id="our-community">Our Community</h1>
                </div>
                <div className="container">
                  <p id="our-community-paragraph">
                    To date, two cohorts have gone through our Pollination Mentoring Programme. Many
                    of the people in the programme landed jobs! We are excited to build on this
                    success and grow our community.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Team */}
          <div className="container text-center" id="team-container">
            <div className="col align-items-center border p-5">
              <div className="d-flex flex-column">
                <div className="p-1">
                  <h2 id="our-team-title">Meet our Team</h2>
                </div>
                <div className="p-1">
                  <p id="header-text">
                    We know from firsthand experience how hard it is to start over in a new country.
                    All of us are here to support you.
                  </p>
                </div>
              </div>

              <div className="container">
                <div className="card-deck d-flex flex-row flex-wrap flex-md-nowrap justify-content-center">
                  <div className="col card m-3">
                    <div className="card-body">
                      <div className="card-title">
                        <div className="header">
                          <div className="avatar">
                            <Image src={avatar} alt="Avatar picture" id="avatar-image" />
                          </div>
                        </div>
                        <span id="team-name">JULIANA ARAÚJO</span>
                        <p className="text-muted" id="team-title">
                          {" "}
                          UX Designer
                        </p>
                        <p className="card-text" id="card-text">
                          Juliana is a Latina immigrant with 8+ years of experience working in tech,
                          leading product teams to develop data-driven products. She has a
                          Bachelor&apos;s in Information Systems and is currently writing her master
                          thesis in IT Project Management from Stockholm University.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col card m-3">
                    <div className="card-body">
                      <div className="card-title">
                        <div className="header">
                          <div className="avatar">
                            <Image src={avatar} alt="Avatar picture" id="avatar-image" />
                          </div>
                        </div>
                        <span id="team-name">DENISE MUNIZ</span>
                        <p className="text-muted" id="team-title">
                          {" "}
                          UX Designer
                        </p>
                        <p className="card-text" id="card-text">
                          Denise is a Latina immigrant and fullstack developer. She has over 10
                          years of experience working as a business analyst, but decided to change
                          her career path to software development after she moved to Sweden. She has
                          a Bachelor&apos;s in Information Systems and a Master&apos;s in Business &
                          Project Management.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col card m-3">
                    <div className="card-body">
                      <div className="card-title">
                        <div className="header">
                          <div className="avatar">
                            <Image src={avatar} alt="Avatar picture" id="avatar-image" />
                          </div>
                        </div>
                        <span id="team-name">MARYAM ARAI</span>
                        <p className="text-muted" id="team-title">
                          {" "}
                          UX Designer
                        </p>
                      </div>
                      <p className="card-text" id="card-text">
                        Maryam is a social entrepreneur with a passion for diversity, inclusion, and
                        belonging. She has 8 years of experience in HR-related professions,
                        including work with Arbetsförmedlingen with a focus on education,
                        recruitment, and innovation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid" id="support-beela-about-us">
          <div className="container">
            <div id="support-beela-section1">
              <h2 className="no_name_37">Support Beela</h2>
              <p className="B1">
                Beela is a 100% volunteer-run organization. <br />
                We’re grateful for your support in any capacity.{" "}
              </p>
            </div>
            <div id="support-beela-section2" className=" d-flex justify-content-center ">
              <div className="justify-content-center">
                <h5 className="text-center">Volunteer</h5>
                <p className="B2 about-support-p">
                  Our team is always on the lookout for new volunteers. Tell us about your skills
                  (this could be writing, social media, or design), and we’ll see if there’s a
                  match!
                </p>
              </div>
              <div className="justify-content-center">
                <h5 className="text-center">Donate</h5>
                <p className="B2 about-support-p">
                  We are a nonprofit organization, and any monetary donation helps us reach more
                  female and non-binary immigrants in Sweden.
                </p>
              </div>
            </div>
            <div className=" d-flex justify-content-center text-center py-5">
              <a href="mailto:contact@beela.se" target="_blank" rel="noreferrer">
                <button type="button" className="btn button">
                  Email Us
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Team */}
        {/* Get Voulnted*/}
        <Footer />
      </PageWrapper>
    </div>
  )
}
export default About
