import React from 'react';
import Video from '../components/video';

const Testimonials = () => (
  <div className="row">
    <h2 className="text-center">Testimonial Videos</h2>
    <hr />
    <div className="col-sm-12">
      <Video url="https://www.youtube.com/embed/hdovhod9QXQ" title="Pastor Hughes Video Testimony" />
      <hr />
      <Video url="https://www.youtube.com/embed/YImXuNOC3Xg" title="Pastor Ty Watson Video Testimony" />
    </div>
  </div>
)
export default Testimonials;
