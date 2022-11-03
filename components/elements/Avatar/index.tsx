import styles from "./Avatar.module.scss"
type AvatarProps = {
  style?: any
  size?: number
  onClick?: () => void
  // source?: number | { uri: string },
  imgSource?: any
  // loading?: boolean,
  isIcon?: boolean
  isTeam?: boolean
  isTestimonial?: boolean
  isVolunteer: boolean
}

const Avatar = ({
  onClick,
  imgSource = "../icons/bee-happy2.png",
  isTestimonial = false,
  isVolunteer = false,
}: AvatarProps): JSX.Element => {
  return (
    <div
      className={
        isVolunteer
          ? styles.volunteerImageContainer
          : isTestimonial
          ? styles.testimonialImageContainer
          : styles.imageContainer
      }
    >
      <img
        // height={isTestimonial ? 88 : 167}
        className={
          isVolunteer
            ? styles.imageVolunteer
            : isTestimonial
            ? styles.imageTestimonial
            : styles.image
        }
        src={imgSource}
        alt={isTestimonial ? "Beela member who provided a testimonial " : "Beela team member"}
      />
    </div>
  )
}

export default Avatar
