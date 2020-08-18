import React, { Fragment } from "react"
import styles from "./styles/skill.module.scss"

export default function Skills() {
  const data = [
    {
      skill: "HTML/CSS",
      level: "Profecient",
    },
    {
      skill: "JS",
      level: "Novice",
    },
    {
      skill: "React",
      level: "Novice",
    },
    {
      skill: "Sass/SCSS",
      level: "Intermediate",
    },
    {
      skill: "Git",
      level: "Novice",
    },
    {
      skill: "Wordpress",
      level: "Intermediate",
    },
  ]

  return (
    <div className="skill-section">
      <h3>Skills</h3>
      <div className="skills">
        {data.map((data, index) => (
          <div className={styles.skill} key={index}>
            <p>{data.skill}</p>
            <span>{data.level}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
