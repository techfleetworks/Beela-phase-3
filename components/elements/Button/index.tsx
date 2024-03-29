/* 
Component used to display buttons
Accepted props:
  variant: 
    - "primary_lightBG"
    - "primary_darkBG"
    - "secondary_lightBG"
    - "secondary_darkBG" 
  title: [text inside button]
  type?: [type of button]
  href?: [link there button click should navigate to]

*/

import Link from "next/link"

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
    <>
      {!href ? (
        <button type={type} onClick={onClick} className={`button ${styles[variant]}`}>
          {title}
        </button>
      ) : href.charAt(0) === "/" ? (
        <Link href={`${href}`}>
          <a>
            <button type={type} onClick={onClick} className={`button ${styles[variant]}`}>
              {title}
            </button>
          </a>
        </Link>
      ) : (
        <a href={href} rel="noreferrer" target="_blank">
          <button type={type} onClick={onClick} className={`button ${styles[variant]}`}>
            {title}
          </button>
        </a>
      )}
    </>
  )
}
