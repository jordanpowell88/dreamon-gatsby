import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { Link } from 'gatsby';

const Slider = () => (
    <OwlCarousel
        id="home"
        items="1"
        className="banner-area"
        animateOut="slideOutLeft"
        animateIn="fadeIn"
        loop={true}
        dots={true}
        mouseDrag={false}
        autoPlay={true}
        navText={[`<i class="fa fa-angle-left" aria-hidden="true"></i>
        <div class="itemprebg"></div>`, `<div class="itemnextbg"></div>
        <i class="fa fa-angle-right" aria-hidden="true"></i>`]}
        nav
    >
        
        <div className="item">
            <div className="single-banner" style={{background: "url('../images/banner/brazil.jpg')"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-md-offset-1 col-lg-offset-0 col-sm-8">
                            <div className="single-banner-con">
                                <div className="single-banner-txt">
                                    <h1><span>dream on:</span> Brazil 2021</h1>
                                    <p className="fadeIn animated animated-08s">We are excited to announce that we will be traveling to Brazil for the first time in January 2021 to share the Dream On mission with the people of Brazil</p>
                                    {/* <OutboundLink href="https://www.youtube.com/watch?v=_HWe8m0N60Y" target="_blank" rel="noopener noreferrer" className="tem-btn nav-link move-eff"><span>Watch Previous Trip</span></OutboundLink>
                                    <OutboundLink href="https://dreamon.focusmissions.com/!/#/17348/honduras-2020" className="tem-btn nav-link move-eff"><span>join the trip</span></OutboundLink> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="item">
            <div className="single-banner" style={{background: "url('../images/banner/empty.jpg')"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-md-offset-1 col-lg-offset-0 col-sm-8">
                            <div className="single-banner-con">
                                <div className="single-banner-txt">
                                    <h1><span>Listen</span> Today</h1>
                                    <p className="fadeIn animated animated-08s">Empty - Blakey Reynolds</p>
                                    <OutboundLink href="https://open.spotify.com/track/7ETXHejYLwf0u2bDFJnufk?si=CX55QXULTdyvUSZCI0LxMA" target="_blank" rel="noopener noreferrer" className="tem-btn nav-link move-eff"><span>Listen on Spotify</span></OutboundLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="item">
            <div className="single-banner" style={{background: "url('../images/banner/02.jpg')"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-md-offset-1 col-lg-offset-0 col-sm-8">
                            <div className="single-banner-con">
                                <div className="single-banner-txt">
                                <h1><span>raise</span> your helping hands</h1>
                            <p>We aren't able to do any of the things we do without the support of people just like you.</p>
                            <OutboundLink href="https://www.paypal.com/donate/?token=_VV4NX2yorvh4-A4aMbH1VJ75nly1JyZae94238oxw6LESsAA7Mgc7OTDhtY0yn_vCMdwG&country.x=US&locale.x=US" target="_blank" rel="noopener noreferrer" className="tem-btn nav-link move-eff"><span>donate now</span></OutboundLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="item">
            <div className="single-banner" style={{background: "url('../images/banner/05.jpg')"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-md-offset-1 col-lg-offset-0 col-sm-8">
                            <div className="single-banner-con">
                                <div className="single-banner-txt">
                                    <h1><span>dream on:</span> music collective</h1>
                                    <p>Dream On: Music Collective is a team of writers, singers, musicians, and worshippers. We are passionate about pursuing the presence of God in every area of our lives and re-sparking the dreams and purposes God has put in each and everyone’s life.</p>
                                    <Link to="/music" className="tem-btn move-eff"><span>view the artists</span></Link>
                                    <Link to="/events" className="tem-btn move-eff"><span>upcoming events</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </OwlCarousel>
)
export default Slider;
