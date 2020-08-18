import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Listening from "./Listening"
import Image from "gatsby-image"
import styles from "./styles/sidebar.module.scss"

export default function Sidebar() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "mathias.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log("data", data)

  return (
    <div className={styles.sidebar}>
      <div className={styles.pb}>
        <Image fluid={data.file.childImageSharp.fluid} />
      </div>
      <Listening />
    </div>
  )
}
