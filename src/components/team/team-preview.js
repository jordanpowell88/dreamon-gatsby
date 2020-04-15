import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Img from 'gatsby-image';

const TeamPreview = ({
  data: {
    name,
    title,
    photo,
    facebook,
    twitter,
    instagram
  },
  photos
}) => {
  const profilePhoto = photos.find(edge => 
    edge.node.childImageSharp.fluid.originalName === photo).node.childImageSharp.fluid
  return (
    <div className="col-md-3 col-sm-6">
      <div className="single-volunteers">
          <div className="volunteers-info">
              <Img fluid={profilePhoto} />
              <div className="single-team-con">
                  <div className="single-team-txt">
                      <ul>
                          {facebook ? <li><OutboundLink href={facebook} target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i> </OutboundLink></li> : null}
                          {twitter ? <li><OutboundLink href={twitter} target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i> </OutboundLink></li> : null}
                          {instagram ? <li><OutboundLink href={instagram} target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i> </OutboundLink></li> : null}
                      </ul>
                  </div>
              </div>
          </div>
          <h3>{name}</h3>
          <span>{title}</span>
      </div>
    </div>
  )
}
export default TeamPreview;