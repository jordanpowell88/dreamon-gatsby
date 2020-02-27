import React from 'react';

const Video = ({
  url,
  title
}) => (
  <div className="embed-responsive embed-responsive-16by9">
    <iframe className="embed-responsive-item" src={url} title={title} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
  </div>
)
export default Video;