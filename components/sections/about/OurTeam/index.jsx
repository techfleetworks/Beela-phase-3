import Image from "next/image"
import { Button } from "../../../elements/Button"
import { SectionWrapper } from "../../../layout/SectionWrapper"
import { TeamCard } from "../../../elements/TeamCard"
import data from "../../../../mockdata/team.json"
import styles from "./OurTeam.module.scss"

export default function OurTeam() {
  let leaders = data.filter((member) => member.isVolunteer !== true)
  let volunteers = data.filter((member) => member.isVolunteer === true)
  return (
    <SectionWrapper color="SECONDARY_CORNFLOWER" padding="main">
      <div className={styles.headingContainer}>
        <h2>Meet our team</h2>
        <p className={`B2 ${styles.headingText}`}>
          We know from firsthand experience how hard it is to start over in a new country. All of us
          are here to support you.
        </p>
      </div>
      <div className={styles.teamContainer}>
        <div className={styles.leaderContainer}>
          {data &&
            leaders.map((data) => (
              <TeamCard
                key={data.id}
                imgSource={data.imgSource}
                name={data.name}
                title={data.title}
                description={data.description}
                isVolunteer={data.isVolunteer}
              />
            ))}
        </div>
        <div className={styles.volunteerContainer}>
          {data &&
            volunteers.map((data) => (
              <TeamCard
                key={data.id}
                imgSource={data.imgSource}
                name={data.name}
                title={data.title}
                description={data.description}
                isVolunteer={data.isVolunteer}
              />
            ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
