import styles from "./PollinationTimeline.module.scss"
import data from "../../../mockdata/pollination-timeline.json"

import SessionClosed from "./SessionClosed"
import { SectionWrapper } from "../../layout/SectionWrapper"

function PollinationTimeline(props) {
  return (
    <SectionWrapper padding="none" color="SECONDARY_CREAM">
      <div className={styles.sessionContainer}>
        {data.session === true ? (
          <div className={styles.timelineContainer}>
            {data.timeline.map((data, index) => (
              <div key={index} className={styles.circleWrapper}>
                <p className="S1 text-center">
                  {data.month} {data.day} <br /> {data.year}
                </p>
                <p className="h5 text-center">{data.event}</p>
              </div>
            ))}
          </div>
        ) : (
          <SessionClosed />
        )}
      </div>
    </SectionWrapper>
  )
}

export default PollinationTimeline
