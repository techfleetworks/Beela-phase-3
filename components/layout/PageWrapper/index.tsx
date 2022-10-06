/* 
Component used to wrap around <main></main> element (page content)
Adds margin to allow for sticky navbar
*/

import styles from "./PageWrapper.module.scss"

type PageWrapperProps = {
  children?: React.ReactNode
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
  return <main className={styles.mainContainer}>{children}</main>
}
