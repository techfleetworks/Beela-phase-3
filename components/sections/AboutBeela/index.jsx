import { SectionWrapper } from "../../layout/SectionWrapper"
import styles from "./AboutBeela.module.css"

export default function AboutBeela() {
  return (
    <SectionWrapper backgroundColor="#f9f2d4">
      <div className={styles.container}>
        <h1 className="">About Beela</h1>
        <div className={styles.imgContainer}>
          <img src="images/Denise-Juliana.png" alt="placeholder" />
        </div>
        <div className="w-50">
          <p className="B1">
            Beela was founded on March 8, 2021 by Juliana Araújo and Denise Muniz, both Brazilian
            immigrants to Sweden. After meeting at a tech fair, Juliana gave Denise the career
            advice that helped her overcome cultural barriers and land a job in programming. From
            there, they were inspired to empower underrepresented groups to break into tech.
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}

// {/* About Beela */}
// <div className="row p-5" id="jumbotron">
// {/* Hero */}
// <div className="container px-5" id="hero">
//   {/* About Beela */}
//   <div className="row" id="hero-container">
//     <div className="col-sm-12 col-lg-6 p-5 my-4">
//       <div className="conatiner">
//         <div className="container pb-4 pt-2">
//           <h1 id="about-beela">About Beela</h1>
//         </div>
//         <div className="container">
//           <p id="about-paragraph">
//             Beela was founded in 2021 by Juliana Araújo and Denise Muniz, who are both
//             Brazilian immigrants to Sweden. They met at an event organized by Women
//             Hack. Along with a mentorship program, Denise received career support from
//             Juliana—and landed a developer job. That’s how they realized how important
//             mentorship and support are for female and non-binary immigrants.
//           </p>
//         </div>
//       </div>
//     </div>
//     <div className="col-sm-12 col-lg-6 p-5 my-5">
//       <img src="Denise-Juliana.png" alt="placeholder" />
//       {/* <Image src="/Denise-Juliana.png" alt="About Beela" layout='fill' /> */}
//     </div>
//   </div>
// </div>
// </div>
