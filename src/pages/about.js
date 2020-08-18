import React from "react"
import Layout from "../components/Layout"
import Listening from "../components/Listening"
import "../styles/about.scss"
import Education from "../components/Education"
import Sidebar from "../components/Sidebar"

export default function About() {
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
            <br />A good fucking composition is the result of a hierarchy
            consisting of clearly contrasting elements set with distinct
            alignments containing irregular intervals of negative space.
            Creativity is a fucking work-ethic.
          </p>
          <div className="interrests">
            <h3>Interrests</h3>
            <p>
              <span role="img" aria-label="Mountain bike">
                🚵‍♂️
              </span>{" "}
              Mountain Biking
            </p>
            <p>
              <span role="img" aria-label="Camera">
                📷
              </span>{" "}
              Film Photography
            </p>
            <p>
              <span role="img" aria-label="Headphones">
                🎧
              </span>{" "}
              Listening to music
            </p>
          </div>
          <Education />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span className="faded">Want to know more?</span>
            <a className="link" href="/">
              Download my resume
            </a>
          </div>
        </div>
        <Sidebar />
      </div>
    </Layout>
  )
}
