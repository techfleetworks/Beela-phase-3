import React from 'react'

type TeamAvatarProps = {
    style?: any,
    size?: number,
    onClick?: (() => void),
    // source?: number | { uri: string },
    imgSource?:any
    // loading?: boolean,
    isIcon?: boolean,
    isTeam?: boolean,
}

const TeamAvatar = ({
    style,
    size = 40,
    onClick,
    imgSource,
    isIcon = false,
    isTeam = false,
  }: TeamAvatarProps): JSX.Element => {
  return (
    <div>
    <img src={imgSource} alt="placeholder" />
  </div>
  )
}

export default TeamAvatar;