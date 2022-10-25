/* 
Component used to wrap around <section></section> elements
Accepted props:
  color: "SECONDARY_CREAM", "SECONDARY_CORNFLOWER", "PRIMARY_CORAL", "VIOLET_8", "GRADIENT"
  padding: "main"(default), "hero", "paymentform"
  margin: by default it centers with "margin:auto"
  maxWidth: maximum number of pixels the content inside the section could be
*/

import styles from "./SectionWrapper.module.scss"

type SectionWrapperProps = {
  children?: React.ReactNode
  className?: string
  classNameSection?: string
  color?: string
  maxWidth?: number
  padding?: string
}

export const SectionWrapper = ({
  color = "TRUE_WHITE",
  children,
  className,
  classNameSection,
  maxWidth = 945,

  padding = "main",
}: SectionWrapperProps) => {
  return (
    <section
      className={`${styles[color]} ${styles[padding]} ${classNameSection} d-flex justify-content-center`}
    >
      <div className={className} style={{ maxWidth: `${maxWidth}px` }}>
        {children}
      </div>
    </section>
  )
}
