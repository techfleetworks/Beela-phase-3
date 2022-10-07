import React from "react"
import TeamAvatar from "../Avatar"

interface ITeamCard {
  imgSource: any
  name: string
  title: string
  description?: string
}

export const TeamCard = (props: ITeamCard) => {
  const { imgSource, name, title, description } = props
  return (
    <div className="col-sm-12 col-lg-4 card m-3">
      <div className="card-body">
        <div className="card-title">
          <TeamAvatar
            imgSource={imgSource}
          />
          <div className="header">
          </div>
          <span id="team-name">{name}</span>
          <p className="text-muted" id="team-title">
            {title}
          </p>
          <p className="card-text" id="card-text">
            {description}
          </p>
        </div>
      </div>
    </div>




  )
}

