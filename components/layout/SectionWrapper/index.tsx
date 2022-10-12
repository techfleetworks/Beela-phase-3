/* 
Component used to wrap around <section></section> elements
Accepted props:
  color: "SECONDARY_CREAM", "SECONDARY_CORNFLOWER", "PRIMARY_CORAL", "VIOLET_8"
  padding: "main"(default), "hero"
  margin: by default it centers with "margin:auto"
  maxWidth: maximum number of pixels the content inside the section could be
*/

import styles from "./SectionWrapper.module.scss"

type SectionWrapperProps = {
  children?: React.ReactNode
  className?: string
  color?: string
  maxWidth?: number
  padding?: string
}

export const SectionWrapper = ({
  color = "TRUE_WHITE",
  children,
  className,
  maxWidth = 945,
  padding = "main",
}: SectionWrapperProps) => {
  return (
    <section className={`${styles[color]} ${styles[padding]}`}>
      <div className={className} style={{ maxWidth: `${maxWidth}px` }}>
        {children}
      </div>
    </section>
  )
}
