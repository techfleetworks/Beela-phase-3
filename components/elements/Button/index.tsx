/* 
Component used to wrap around <section></section> elements
Accepted props:
  color: "primary_lightBG", 
  "primary_darkBG", 
  "secondary_lightBG", 
  "secondary_darkBG"
*/

import styles from "./Button.module.scss"

interface ButtonProps {
  href?: string
  title: any
  type?: any
  variant: string
  onClick?: () => void
}

export const Button = (props: ButtonProps) => {
  const { href, title, type = "button", variant, onClick } = props
  return (
    <div className="">
      <a href={href} rel="noreferrer">
        <button type={type} onClick={onClick} className={`button ${styles[variant]}`}>
          {title}
        </button>
      </a>
    </div>
  )
}
