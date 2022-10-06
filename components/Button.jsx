import React from 'react'
import style from "../styles/css/button.module.css"

export default function Button(prop) {
    return (
        <button className={style.button}>{prop.name}</button>
    )
  }