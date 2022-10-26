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
  className?: string
  href?: string
  title?: any
  type?: any
  variant: string
  children?:any
  onClick?: () => void
}

export const Button = (props: ButtonProps) => {
  const { className,children, href, title, type = "button", variant, onClick } = props
  return (
    <>
      {!href ? (
        <button type={type} onClick={onClick} className={`button ${styles[variant]} ${className}`}>
          {title} {children}
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
