import React from 'react';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const About = ({ about: { mission, missionDescription, history, historyDescription, coreValues, coreValueListItems, join, joinDescription, give, giveDescription, partner, partnerDescription } }) => (
  <section className="about-area section-padding" id="about">
    <div className="container">
        <div className="row">
            <div className="col-sm-8 col-sm-offset-2">
                <div className="title text-center">
                    <h2>{mission}</h2>
                    <div className="separate"><span className="separate-icon"></span></div>
                    <p>{missionDescription}</p>
                </div>
            </div>
        </div>
        <div className="row mb">
            <div className="col-sm-5">
                <div className="about-img">
                    <img src="images/about/dream-team.jpg" alt="Dream On: Global - Dream Team" />
                </div>
            </div>
            <div className="col-sm-7">
                <div className="about-details">
                    <h2>{history}</h2>
                    <p>{historyDescription}</p>
                    
                    <h2>{coreValues}</h2>
                    <div dangerouslySetInnerHTML={{__html: coreValueListItems}}></div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 col-sm-6">
                <div className="service-content">
                    <h3>{join}</h3>
                    <div className="service-icon">
                        <i className="fa fa-child" aria-hidden="true"></i>
                    </div>
                    <p>{joinDescription}</p>
                    <Link to="/join" className="tem-btn move-eff"><span>learn more</span></Link>
                </div>
            </div>
            <div className="col-md-4 col-sm-6">
                <div className="service-content">
                    <h3>{give}</h3>
                    <div className="service-icon">
                        <i className="fa fa-globe" aria-hidden="true"></i>
                    </div>
                    <p>{giveDescription}</p>
                    <OutboundLink href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SCJ6SAWVF5U5Q" className="tem-btn move-eff"><span>learn more</span></OutboundLink>
                </div>
            </div>
            <div className="col-md-4 col-sm-12">
                <div className="service-content mobile-auto">
                    <h3>{partner}</h3>
                    <div className="service-icon">
                        <i className="fa fa-money" aria-hidden="true"></i>
                    </div>
                    <p>{partnerDescription}</p>
                    <OutboundLink href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SCJ6SAWVF5U5Q" target="_blank" rel="noopener noreferrer" className="tem-btn nav-link move-eff"><span>donate now</span></OutboundLink>
                </div>
            </div>
        </div>
    </div>
  </section>
)
export default About;
