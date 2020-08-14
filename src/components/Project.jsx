import React from "react"
import style from "./styles/project.module.scss"

export default function Project(props) {
  return (
    <div className={style.project}>
      <img src={props.img} />
      <h3>{props.title}</h3>
      <span>{props.type}</span>
      <p>{props.text}</p>
    </div>
  )
}
