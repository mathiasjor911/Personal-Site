import React from "react"
import Layout from "../components/Layout"

import "../styles/index.scss"

export default function Home() {
  return (
    <Layout>
      <section className="intro">
        <h1>
          Hello, I’m Mathias{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
        </h1>
        <h2>
          Currently studying Web Development at{" "}
          <a href="https://kea.dk" style={{ color: "#EA5045" }}>
            KEA
          </a>{" "}
          in Copenhagen.
        </h2>
        <h2>
          Former front-end developer intern at{" "}
          <a href="https://nuuday.dk/" style={{ color: "#6E6EFF" }}>
            Nuuday
          </a>
          .
        </h2>
      </section>
    </Layout>
  )
}
