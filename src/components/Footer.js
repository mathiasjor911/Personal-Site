import React, { Fragment } from "react"
import style from "./styles/footer.module.scss"

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <div className={style.footerInfo}>
          <h3>Get in touch</h3>
          <a href="mailto:mj@mathiasjorgensen.dk">mj@mathiasjorgensen.dk</a>
          <a href="tel:+4526460034">+45 2646 0034</a>
        </div>
        <div className={style.footerInfo}>
          <h3>Get in touch</h3>
          <a href="https://github.com/mathiasjor911">GitHub</a>
          <a href="https://www.linkedin.com/in/mathias-j%C3%B8rgensen-595876152/">
            LinkedIn
          </a>
          <a href="https://www.instagram.com/mathias.jor/">Instagram</a>
        </div>
      </footer>
      <div className={style.copyright}>
        Copyright © {new Date().getFullYear()} - Mathias Jørgensen{" "}
        <span className={style.seperator}></span> Build with React and Gatsby
      </div>
    </Fragment>
  )
}

export default Footer
