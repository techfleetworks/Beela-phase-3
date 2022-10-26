import React from "react"
import Avatar from "../Avatar"

import styles from "./TeamCard.module.scss"

interface ITeamCard {
  description?: string
  imgSource: any
  isTestimonial: boolean
  isVolunteer: boolean
  name: string
  title: string
  bgcolor: string
}

export const TeamCard = (props: ITeamCard) => {
  const {
    description = "Some description here blah blah",
    imgSource,
    isTestimonial,
    isVolunteer,
    name = "Beela Volunteer",
    title = "CEO of Meow",
    bgcolor,
  } = props
  return (
    // <div className="d-flex justify-content-center">
    <div className={!isVolunteer ? styles.cardContainer : styles.volunteerCardContainer}>
      <Avatar isVolunteer={isVolunteer} imgSource={imgSource} isTestimonial={isTestimonial} />

      <div
        className={!isVolunteer ? styles.bodyContainer : styles.volunteerBodyContainer}
        style={{ backgroundColor: bgcolor }}
      >
        {!isVolunteer ? <h3>{name}</h3> : <h5 className="h5 primary-berry m-0">{name}</h5>}
        <p className={!isVolunteer ? "B2" : "S2 primary-berry"}> {title}</p>

        {!isVolunteer && <p className="B2 m-0">{description}</p>}
      </div>
    </div>
    // </div>
  )
}
