import { Container, Row, Col } from "react-bootstrap"
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
      <Container className="p-0">
        <div className={styles.teamContainer}>
          <Row className={`p-0 ${styles.leaderContainer}`}>
            {data &&
              leaders.map((data) => (
                <Col sm={12} md={6} className="d-flex justify-content-center px-3" key={data.id}>
                  <TeamCard
                    imgSource={data.imgSource}
                    name={data.name}
                    title={data.title}
                    description={data.description}
                    isVolunteer={data.isVolunteer}
                  />
                </Col>
              ))}
          </Row>

          <Row className={styles.volunteerContainer}>
            {data &&
              volunteers.map((data) => (
                <Col
                  xs={6}
                  sm={4}
                  lg={3}
                  className="px-1 justify-content-center text-center"
                  key={data.id}
                >
                  <TeamCard
                    key={data.id}
                    imgSource={data.imgSource}
                    name={data.name}
                    title={data.title}
                    description={data.description}
                    isVolunteer={data.isVolunteer}
                  />
                </Col>
              ))}
          </Row>
        </div>
      </Container>
    </SectionWrapper>
  )
}
