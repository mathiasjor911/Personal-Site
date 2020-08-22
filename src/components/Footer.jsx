import React, { Fragment } from "react"
import style from "./styles/footer.module.scss"
import moment from "moment"

export default function Footer() {
  return (
    <Fragment>
      <footer>
        <div className={style.footerInfo}>
          <h3>Get in touch</h3>
          <a href="mailto:mj@mathiasjorgensen.dk">mj@mathiasjorgensen.dk</a>
          <a href="tel:+4526460034">+45 2646 0034</a>
        </div>
        <div className={style.footerInfo}>
          <h3>Connect with me</h3>
          <a href="https://github.com/mathiasjor911">GitHub</a>
          <a href="https://www.instagram.com/mathias.jor/">
            LinkedIn
          </a>
          <a href="https://www.instagram.com/mathias.jor/">Instagram</a>
        </div>
      </footer>
      <div className={style.copyright}>
        Copyright © {moment().year()} - Mathias Jørgensen{" "}
        <span className={style.seperator}></span> Built with React and Gatsby
      </div>
    </Fragment>
  )
}
