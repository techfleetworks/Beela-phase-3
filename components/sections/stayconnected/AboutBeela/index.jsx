import Image from "next/image"
import { SectionWrapper } from "../../../layout/SectionWrapper"
import styles from "./AboutBeela.module.scss"

export default function AboutBeela() {
  return (
    <SectionWrapper padding="hero">
      <div className={styles.sectionContainer} >
        <h1 className="primary-berry" style={{marginTop: "5rem", marginBottom: "2rem"}}>Stay Connected</h1>
        <div className={styles.imgContainer}>
          <Image
            height={369}
            width={428}
            layout="intrinsic"
            className={styles.img}
            src="images/stayconnected-hero.svg"
            alt="placeholder"
          />
        </div>
        <div className={styles.textContainer}>
          <h4 style={{marginTop: "5rem", marginBottom: "2rem"}} className="primary-berry">Come join us</h4>
          <p className="B1 mb-4">
          We're ready to support your tech journey in Sweden in a variety of ways. We want to welcome you and encourage you along the way. 
          
          </p>
          <p className="B1 mt-4 pt-4">We can't wait to connect with you.</p>
        </div>
      </div>
    </SectionWrapper>
  )
}
