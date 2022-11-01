import { Card } from "react-bootstrap"
import styles from "./BeeCard.module.scss"

function BeeCard({ src, text, title }) {
  return (
    <Card className={styles.card}>
      <div className={styles.imageContainer}>
        <Card.Img variant="top" src={src} />
      </div>
      <Card.Body className="text-center p-0">
        <Card.Title className={`primary-berry ${styles.heading}`}>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default BeeCard
