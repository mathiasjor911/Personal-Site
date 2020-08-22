import React from "react"
import { Link } from "gatsby"
import style from "./styles/navbar.module.scss"
import { GitHub, Instagram, Linkedin } from "react-feather"

export default function Navbar() {
  return (
    <div className={style.navbar}>
      <nav>
        <Link to="/">
          <span className={style.logo}>mj</span>
        </Link>
        <Link activeStyle={{ color: "#546DE5" }} to="/">
          Home
        </Link>
        <Link activeStyle={{ color: "#546DE5" }} to="/about">
          About
        </Link>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://drive.google.com/file/d/1hiWLbG5dF0qNorUG9NSe9A5zjdxKi6ca/view?usp=sharing"
        >
          Resume
        </a>
      </nav>
      <div className={style.icons}>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/mathiasjor911"
        >
          <GitHub strokeWidth="1.5" size="20" />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.instagram.com/mathias.jor/"
        >
          <Instagram strokeWidth="1.5" size="20" />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/mathias-j%C3%B8rgensen-595876152/"
        >
          <Linkedin strokeWidth="1.5" size="20" />
        </a>
      </div>
    </div>
  )
}
