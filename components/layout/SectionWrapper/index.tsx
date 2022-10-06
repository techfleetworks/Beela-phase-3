/* 
Component used to wrap around <section></section> elements
Accepted props:
  color: "SECONDARY_CREAM", "SECONDARY_CORNFLOWER", "PRIMARY_CORAL", "VIOLET_8"
  padding: string ("4rem 2rem")
*/

import styles from "./SectionWrapper.module.scss"

type SectionWrapperProps = {
  color?: string
  children?: React.ReactNode
  className?: string
  padding?: string
}

export const SectionWrapper = ({
  color = "TRUE_WHITE",
  children,
  padding = "main",
}: SectionWrapperProps) => {
  return <section className={`${styles[color]} ${styles[padding]}`}>{children}</section>
}
