import { SectionWrapper } from "../../../../components/layout/SectionWrapper"
import styles from "./AboutBeela.module.css"

export const AboutBeela = () => {
  return (
    <SectionWrapper backgroundColor="#f9f2d4" padding={"8rem 7.9rem"}>
      <h1 className={styles.styled}>About Beela</h1>

      <div>
        <p>
          Beela was founded in 2021 by Juliana Araújo and Denise Muniz, who are both Brazilian
          immigrants to Sweden. They met at an event organized by Women Hack. Along with a
          mentorship program, Denise received career support from Juliana—and landed a developer
          job. That’s how they realized how important mentorship and support are for female and
          non-binary immigrants.
        </p>
      </div>

      <div>
        <img src="images/Denise-Juliana.png" alt="placeholder" />
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
