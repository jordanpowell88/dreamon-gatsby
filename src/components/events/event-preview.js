import React from 'react';

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
  html
}) => (
  <div className="col-sm-12">
    <article className="news-info">
      <a href={path}>
        <h2 className="text-center">{name}</h2>
        <div className="news-img">
          <img src={photo} alt={name + " - Dream On: Events"} />      
        </div>        
      </a>

      <h3 className="text-center">{title}</h3>
      <h4 className="text-center">{date} - {location}</h4>
      <p dangerouslySetInnerHTML={{ __html: html }}></p>

      {buy
        ? <a href={buy} className="tem-btn nav-link move-eff">Register</a>
        : <></>
      }

    </article>
    <hr />
  </div>
)
export default EventPreview;