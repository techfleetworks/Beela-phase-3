/* 
Component used to wrap around <main></main> element (page content)
Adds margin to allow for sticky navbar
*/

import styles from "./PageWrapper.module.scss"

const PageWrapper = ({ children }) => {
  return <main className={styles.mainContainer}>{children}</main>
}

export default PageWrapper
