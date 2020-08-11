import React from "react"
import { Link } from "gatsby"
import style from "./styles/navbar.module.scss"
import { GitHub, Instagram, Linkedin } from "react-feather"

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <nav>
        <Link activeStyle={{ color: "#546DE5" }} to="/">
          Projects
        </Link>
        <Link activeStyle={{ color: "#546DE5" }} to="/about">
          About
        </Link>
        <a href="/">Resume</a>
      </nav>
      <div>
        <a href="https://github.com/mathiasjor911">
          <GitHub strokeWidth="1.5" size="20" />
        </a>
        <a href="https://www.instagram.com/mathias.jor/">
          <Instagram strokeWidth="1.5" size="20" />
        </a>
        <a href="https://www.linkedin.com/in/mathias-j%C3%B8rgensen-595876152/">
          <Linkedin strokeWidth="1.5" size="20" />
        </a>
      </div>
    </div>
  )
}
export default Navbar
