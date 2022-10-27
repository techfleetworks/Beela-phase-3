import Image from "next/image"
import styles from "./ExpectCard.module.scss"

interface ExpectCard {
  altText: string
  bgcolor: string
  description?: string
  imgSource: any
  title: string
}

export const ExpectCard = (props: ExpectCard) => {
  const { altText, description, imgSource, title } = props
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src={imgSource}
            alt={altText}
            layout="intrinsic"
            height={153}
            width={153}
          />
        </div>
      </div>
      <div className={styles.bodyContainer}>
        {title && <h5 className="">{title}</h5>}
        <p className="B2 m-0">{description}</p>
      </div>
    </div>
  )
}
