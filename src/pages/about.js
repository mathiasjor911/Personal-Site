import React from "react"
import Layout from "../components/Layout"
import "../styles/about.scss"
import Education from "../components/Education"
import Sidebar from "../components/Sidebar"
import moment from "moment"
import Seo from "../components/Seo"

export default function About() {
  return (
    <Layout>
      <Seo title="About" />
      <div className="aboutgrid">
        <div className="about-content">
          <h1>About</h1>
          <p>
            My name is Mathias Jørgensen, I’m currently{" "}
            {moment().diff("11-Sep-1998", "years")} years old.
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
            <a
              className="link"
              rel="noreferrer"
              target="_blank"
              href="https://drive.google.com/file/d/1hiWLbG5dF0qNorUG9NSe9A5zjdxKi6ca/view?usp=sharing"
            >
              Download my resume
            </a>
          </div>
        </div>
        <Sidebar />
      </div>
    </Layout>
  )
}
