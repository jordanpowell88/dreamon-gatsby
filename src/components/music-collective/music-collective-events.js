import React from 'react';
import EventPreview from '../events/event-preview';

const MusicCollectiveEvents = ({
  events,
  photos
}) => {
  const Events = events
    .map((event, i) => 
      <EventPreview key={i} data={event.frontmatter} photos={photos} /> 
    )
  return (
    <>
      <h2>Events</h2>
      <hr />
      <div className="col-sm-6">
          {Events}
      </div>
      <div className="clearfix"></div>
    </>
  )
}
export default MusicCollectiveEvents;