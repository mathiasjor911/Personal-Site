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
      <h1>About</h1>
      <div className="aboutgrid">
        <div className="about-content">
          <p>
            My name is Mathias Jørgensen and I’m{" "}
            {moment().diff("11-Sep-1998", "years")} years old.
            <br /> <br />
            I'm currently studying Web Development at KEA in Copenhagen.
            <br />
            <br />
            I'm a young and aspiring front-end developer, who strives to learn
            more everyday. Right now I'm very interested in React and the
            JAMstack way of buidling websites.
            <br />
            <br />
            Besides Front-End development I like to stay up-to-date on the
            newest design trends and tools - and I frequently sketch out
            projects in Figma, both for school or personal use.
            <br />
            <br />
            In my spare time I like to hang out with friends and shoot 35mm
            photos.
          </p>
          <div className="interrests">
            <h3>Interests</h3>
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
