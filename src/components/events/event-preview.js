import React from 'react';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Img from 'gatsby-image';

const EventPreview = ({
  data: {
    path,
    name,
    photo,
    title,
    buy,
    location,
    date
  },
  html,
  photos
}) => {
  const eventPhoto = photos
    ? photos.find(edge => 
      edge.node.childImageSharp.fluid.originalName === photo)
        .node.childImageSharp.fluid
    : null;
  return (
    <div className="col-sm-12">
      <article className="news-info">
        {eventPhoto ?
          <Link to={path}>
            <h2 className="text-center">{name}</h2>
            <div className="news-img">
              <Img fluid={eventPhoto} />
            </div>        
          </Link>
          : null
        }
  
        <h3 className="text-center">{title}</h3>
        <h4 className="text-center">{date} - {location}</h4>
        <p dangerouslySetInnerHTML={{ __html: html }}></p>
  
        {buy
          ? <OutboundLink href={buy} className="tem-btn nav-link move-eff">Register</OutboundLink>
          : <></>
        }
  
      </article>
      <hr />
    </div>
  )
}
export default EventPreview;