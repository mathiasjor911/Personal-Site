import React from "react"
import Layout from "../components/Layout"
import Listening from "../components/Listening"
import "../styles/about.scss"
import Experience from "../components/Education"
import Education from "../components/Education"

export default function Home() {
  return (
    <Layout>
      <div className="aboutgrid">
        <div className="about-content">
          <h1>About</h1>
          <p>
            My name is Mathias Jørgensen, I’m currently 21 years old.
            <br /> <br />I study Web Development at Københavns Erhvervsakdemi
            (KEA).
            <br />
            <br /> A good fucking composition is the result of a hierarchy
            consisting of clearly contrasting elements set with distinct
            alignments containing irregular intervals of negative space.
            Creativity is a fucking work-ethic.
          </p>
          <div className="interrests">
            <h3>Interrests</h3>
            <p>Film Photography, Mountain Biking and listening to music.</p>
          </div>

          <Education />
        </div>
        <Listening />
      </div>
    </Layout>
  )
}
