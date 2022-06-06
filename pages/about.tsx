import type { NextPage } from "next"
import Head from "next/head"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import styles from "../styles/about.module.css"
import Image from "next/image"
const About: NextPage = () => {
  return (
   <div>
         <Navbar />
         <div  className={`container-fluid ${styles.abouthero}`}>
             <div className="container">
             <div className=" row"> 
                <div className="col-md-6">
                    <h1 className="text-primary">About beela</h1>
                    <p className="B1">Beela was founded in 2021 by Juliana Araújo and Denise Muniz, who are both Brazilian immigrants to Sweden. They met at an event organized by Women Hack. Along with a mentorship program, Denise received career support from Juliana—and landed a developer job. That’s how they realized how important mentorship and support are for female and non-binary immigrants. </p>
                </div>
                <div className="col-md-6">
                <Image
                          
                            src="https://via.placeholder.com/469x303.png"
                            alt="Picture of the author"
                            width={469}
                            height={303}
                            />
                </div>

            </div>
            </div>
         </div>

         <div>
         <div className="row border text-center" id="steps">
            <div className="col align-items-center border p-5">
            

              <div className="container">
                <div className="row row-cols-1 row-cols-md-3">
                  <div className="col mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <p className="card-title">
                          <span className="text-primary">Empower</span>
                        </p>
                        <p className="card-text">
                        We help immigrant women and non-binary people to achieve all their potential through coaching, mentoring, and networking.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <p className="card-title">
                          <span  className="text-primary">Inform</span>
                        </p>
                        <p className="card-text">
                        We spread the word about what’s happening in the tech world: bootcamps, code academies, courses, 
and events.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-4">
                    <div className="card h-100">
                   
                      <div className="card-body">
                        <p className="card-title">
                          <span  className="text-primary">Inspire</span>
                        </p>
                        <p className="card-text">We share stories about people who have built a career in tech, as well as employers who have created opportunities 
for newcomers.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         </div>

         <div  className={`container-fluid ${styles.abouthero}`}>
             <div className="container">
             <div className=" row"> 
             
                <div className="col-md-6">
                <Image
                          
                            src="https://via.placeholder.com/469x303.png"
                            alt="Picture of the author"
                            width={469}
                            height={303}
                            />
                </div>

                <div className="col-md-6">
                    <h2 className="text-primary">Our Community </h2>
                    <p className="B1">To date, two cohorts have gone through our Pollination Mentoring Programme. Many of the people in the programme landed jobs! We are excited to build on this success and grow our community. </p>
                </div>

            </div>
            </div>
         </div>

   </div>
  )
}
export default About