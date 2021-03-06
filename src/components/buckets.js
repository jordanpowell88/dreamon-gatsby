import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const Buckets = () => (
  <section className="donate-wraper">
    <div className="single-donate-wraper donate-wraper-bg-one">
        <h2>get details about joining our next trip</h2>
        <OutboundLink href="https://dreamon.focusmissions.com/!/#/17348/honduras-2020" target="_blank" rel="noopener noreferrer" className="tem-btn nav-link move-eff"><span>join</span></OutboundLink>
    </div>
    <div className="single-donate-wraper donate-wraper-bg-two">
        
    </div>
    <div className="single-donate-wraper donate-wraper-bg-three">
        <h2>we need your help changing the world</h2>
        <OutboundLink href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SCJ6SAWVF5U5Q" target="_blank" rel="noopener noreferrer" className="tem-btn nav-link move-eff"><span>donate</span></OutboundLink>
    </div>
  </section>
)
export default Buckets;