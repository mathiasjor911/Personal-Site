import React from "react"
import style from "./styles/project.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

export default function Projects() {
  const projects = [
    {
      title: "Massweb.",
      type: "School Project",
      description:
        "Website for a fictional web agency as part of a school project. The site was created with HTML, CSS and jQuery",
      image: "massweb.jpg",
    },
    {
      title: "JMM Group",
      type: "Freelance project",
      description:
        "Wordpress website for a nation-wide construction-machinery dealer, with a WooCommerce powered spare-parts shop.",
      image: "johs.jpg",
    },
    {
      title: "Personal Portfolio",
      type: "Personal project",
      description:
        "Personal portfolio site I made with PHP, HTML, CSS and JavaScript. The site has been replaced by the current one.",
      image: "portfolio.jpg",
    },
  ]

  const data = useStaticQuery(graphql`
    query Projects {
      allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(fit: CONTAIN) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return projects.map(({ title, type, description, image }) => {
    const img = data.allFile.edges.find(
      ({ node }) => node.relativePath === image
    ).node

    return (
      <div className={style.project}>
        <div className={style.projectimg}>
          <Image fluid={img.childImageSharp.fluid} alt={title} />
        </div>
        <h3>{title}</h3>
        <span>{type}</span>
        <p>{description}</p>
        <a></a>
      </div>
    )
  })
}
