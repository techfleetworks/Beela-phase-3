/* 
Component used to wrap around <section></section> elements
Accepted props:
  color: "primary_lightBG", "primary_darkBG", "secondary_lightBG", "secondary_darkBG"
*/

import styles from "./Button.module.scss"

interface ButtonProps {
  href?: string
  title: string
  type?: any
  variant: string
}

export const Button = (props: ButtonProps) => {
  const { href, title, type = "button", variant } = props
  return (
    <div className="">
      <a href={href} target="_blank" rel="noreferrer">
        <button type={type} className={`button ${styles[variant]}`}>
          {title}
        </button>
      </a>
    </div>
  )
}
