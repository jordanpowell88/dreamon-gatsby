import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
 
const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      logoImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 200,
            placeholder: BLURRED
          )
        }
      }
    }
  `)
  const image = getImage(data.logoImage)
  return (
    <div className="col-sm-3 col-xs-6">
      <div className="logo">
          <Link className="nav-link" to="/">
            <GatsbyImage alt="Dream On: Global" image={image} />
          </Link>
      </div>
    </div>
  )
}

export default Logo