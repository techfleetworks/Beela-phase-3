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
  disabled?: boolean
  href?: string
  style?: any
  title: any
  type?: any
  variant: string
  onClick?: () => void
}

export const Button = (props: ButtonProps) => {
  const { className, disabled, href, style, title, type = "button", variant, onClick } = props
  return (
    <>
      {!href ? (
        <button
          className={`button ${styles[variant]} ${className}`}
          disabled={disabled}
          onClick={onClick}
          style={style}
          type={type}
        >
          {title}
        </button>
      ) : href.charAt(0) === "/" ? (
        <Link href={`${href}`}>
          <a>
            <button
              className={`button ${styles[variant]} ${className}`}
              disabled={disabled}
              onClick={onClick}
              style={style}
              type={type}
            >
              {title}
            </button>
          </a>
        </Link>
      ) : (
        <a href={href} rel="noreferrer" target="_blank">
          <button
            className={`button ${styles[variant]} ${className}`}
            disabled={disabled}
            onClick={onClick}
            style={style}
            type={type}
          >
            {title}
          </button>
        </a>
      )}
    </>
  )
}
