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

   </div>
  )
}
export default About