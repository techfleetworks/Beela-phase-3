import { SectionWrapper } from "../../../layout/SectionWrapper"
import styles from "./CommunityAnnouncement.module.scss"

function CommunityAnnouncement() {
  return (
    <SectionWrapper className={styles.sectionContainer}>
      <h2 className="secondary-violet mb-4">Beela has a community for you</h2>
      <h3 className="h5">Find out how you can engage with Beela members</h3>
    </SectionWrapper>
  )
}

export default CommunityAnnouncement
