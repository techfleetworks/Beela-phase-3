import { SectionWrapper } from "../../../layout/SectionWrapper"
import styles from "./support.module.scss"

import BeeCard from "../../../elements/BeeCard"
import Image from "next/image"
// import Button from "../../../elements/Button/index"
import {Button} from "../../../elements/Button/index"
export default function Support() {
  return (
    <div>
    <SectionWrapper padding="main" maxWidth={880}>
      <h2 className="primary-berry text-center my-2">Support Beela</h2>

      <p className={`B2 ${styles.text}`}>
      Beela is a 100% volunteer-run organization. 
      We are grateful for your support in any capacity. 
      </p>
    </SectionWrapper>
 
       <div className={styles.moreInfoContainer}>
         <div className={styles.infoWrapper}>
           <h4 className="primary-berry">Volunteer</h4>
           <p className="B2 text-center">
           Our team is always on the lookout for new volunteers. Tell us about your skills (this could be writing, social media, or design), and we&apos;ll see if there&apos;s a match!
           </p>
           <div>
             <Button
               variant="secondary_lightBG"
               title="Email Us"
               href="emailto:contact@beela.se"
             />
           </div>
         </div>
         <div className={styles.infoWrapper}>
           <h4 className="primary-berry">Donate</h4>
           <p className="B2 text-center">
           We are a nonprofit organization, and any monetary donation helps us reach more female and non-binary immigrants in Sweden.
           </p>
           <div>
             <Button
               variant="secondary_lightBG"
               title="LDonate"
               href="/donate"
             />
           </div>
         </div>
       </div>
    

   </div>
 )}
