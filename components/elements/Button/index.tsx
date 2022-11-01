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
  children?: any
  onClick?: () => void
}

export const Button = (props: ButtonProps) => {
  const { className, children, href, style, title, type = "button", variant, onClick } = props
  return (
    <>
      {/* Buttons with no href */}
      {!href ? (
        <button
          className={`button ${styles[variant]} ${className}`}
          onClick={onClick}
          style={style}
          type={type}
        >
          {title}
          {children}
        </button>
      ) : href.charAt(0) === "/" ? (
        // Buttons linking to internal pages - navigational links
        <Link href={href}>
          <a className={`button ${styles[variant]} ${className}`} style={style}>
            {title}
            {children}
          </a>
        </Link>
      ) : (
        // Buttons linking to external pages - navigational links
        <a
          style={style}
          href={href}
          rel="noreferrer"
          target="_blank"
          className={`button ${styles[variant]} ${className}`}
        >
          {title}
          {children}
        </a>
      )}
    </>
  )
}
