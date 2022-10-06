import React from 'react'
import style from "./button.module.scss"  

export default function Button(prop:any) {
    return (
        <button className={style.button}>{prop.name}</button>
    )
  }