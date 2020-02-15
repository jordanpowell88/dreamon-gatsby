import React from 'react';


const TeamPreview = ({
  data: {
    name,
    title,
    photo,
    facebook,
    twitter,
    instagram
  }
}) => {
  return (
    <div className="col-md-3 col-sm-6">
      <div className="single-volunteers">
          <div className="volunteers-info">
              <img src={photo} alt="Ben Swartz - Dream On: Global" />
              <div className="single-team-con">
                  <div className="single-team-txt">
                      <ul>
                          {facebook ? <li><a href={facebook} target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a></li> : null}
                          {twitter ? <li><a href={twitter} target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a></li> : null}
                          {instagram ? <li><a href={instagram} target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a></li> : null}
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