import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import style from "./styles/listening.module.scss"

export default function Listening() {
  const data = useStaticQuery(graphql`
    query {
      allSpotifyTopArtist(
        filter: { time_range: { eq: "short_term" } }
        sort: { fields: order }
        limit: 3
      ) {
        edges {
          node {
            name
            external_urls {
              spotify
            }
            image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const spotify = data?.allSpotifyTopArtist

  return (
    <div className="spotify-data">
      <h3>Currently listening to</h3>
      {spotify.edges.map((item, i) => (
        <div className={style.artistobject} key={i} data={item}>
          <Image
            alt={"Image of " + item.node.name}
            fluid={item.node.image.localFile.childImageSharp.fluid}
          />
          <a href={item.node.external_urls.spotify}>{item.node.name}</a>
        </div>
      ))}
    </div>
  )
}
