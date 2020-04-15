import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image'

const MusicPreview = ({
  data: {
    name,
    photo,
    path
  },
  photos
}) => {
  const musicianPhoto = photos.find(edge =>
    edge.node.childImageSharp.fluid.originalName === photo)
      .node.childImageSharp.fluid
  
  return (
    <div className="col-sm-6">
      <article className="news-info">
        <Link to={path}>
          <h2 className="text-center">{name}</h2>
          <div className="news-img">
            <Img fluid={musicianPhoto} />
          </div>
        </Link>
      </article>
    </div>
  )
}
export default MusicPreview;