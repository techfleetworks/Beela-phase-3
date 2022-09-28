/* 
Component used to wrap around <section></section>
Accepted props:
  backgroundColor: variable from the config file ({colors.black})
  padding: string ("4rem 2rem")
*/
type SectionWrapperProps = {
  backgroundColor?: string
  children?: React.ReactNode
  padding?: string
}

export const SectionWrapper = (props: SectionWrapperProps) => {
  const { backgroundColor, children, padding } = props
  return (
    <section style={{ padding: padding, backgroundColor: backgroundColor }}>{children}</section>
  )
}
