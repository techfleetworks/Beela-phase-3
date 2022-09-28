/* 
Component used to wrap around <section></section>
Accepted props:
  backgroundColor: variable from the config file ({colors.black})
  padding: string ("4rem 2rem")
*/

import colors from "../../theme/colors"

type SectionWrapperProps = {
  backgroundColor?: string
  children?: React.ReactNode
  padding?: string
}

export const SectionWrapper = (props: SectionWrapperProps) => {
  const { backgroundColor = colors.TRUE_WHITE, children, padding = "4rem" } = props
  return (
    <section style={{ padding: padding, backgroundColor: backgroundColor }}>{children}</section>
  )
}
