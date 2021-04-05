import React from "react"
import Layout from "../components/Layout"
import "../styles/index.scss"
import Projects from "../components/Projects"
import Seo from "../components/Seo"

export default function Home() {
  return (
    <Layout>
      <Seo title="Home" />
      <section className="intro">
        <h1>
          Hello, I’m Mathias{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
        </h1>

        <h2>
          Studying Web Development at{" "}
          <a href="https://www.zealand.dk/" style={{ color: "#546de5" }}>
            Zealand
          </a>{" "}
          in Roskilde.
        </h2>
        <h2>
          Student Assistant at {" "}
          <a href="https://www.synergi1.dk/" style={{ color: "#546de5" }}>
            Synergi
          </a>
          .
        </h2>
      </section>
      <section className="projects">
        <h2>Selected Work</h2>
        <div className="projects-container">
          <Projects />
        </div>
      </section>
    </Layout>
  )
}
