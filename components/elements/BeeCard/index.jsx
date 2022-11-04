import { Card } from "react-bootstrap"
import styles from "./BeeCard.module.scss"

function BeeCard({ alt, src, text, title }) {
  return (
    <Card className={styles.card}>
      <div className={styles.imageContainer}>
        <Card.Img variant="top" src={src} alt={alt} />
      </div>
      <Card.Body className="text-center p-0">
        <Card.Title className={`primary-berry ${styles.title}`}>{title}</Card.Title>
        <Card.Text className="B2">{text}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default BeeCard
