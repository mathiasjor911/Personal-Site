import React from "react"
import styles from "./styles/education.module.scss"

export default function Education() {
  const data = [
    {
      time: "Currently",
      title: "BA in Web Development",
      place: "KEA, Copenhagen",
    },
    {
      time: "2018 - 2020",
      title: "AP degree in Multimedia Design",
      place: "Zealand, Slagelse",
    },
    {
      time: "2015 - 2018",
      title: "Higher Technical Examination Programme",
      place: "EUC Sjælland, Næstved",
    },
  ]
  return (
    <div className="educations">
      <h3>Education</h3>
      {data.map((data, index) => (
        <div className={styles.education} key={index}>
          <span className={styles.time}>{data.time}</span>
          <div>
            <p className={styles.title}>{data.title}</p>
            <span className={styles.place}>{data.place}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
