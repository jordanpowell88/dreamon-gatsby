import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Slider from '../components/slider';
import { Link } from 'gatsby';
import Team from '../components/team';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Slider />

    <section className="donate-wraper">
        <div className="single-donate-wraper donate-wraper-bg-one">
            <h2>get details about joining our next trip</h2>
            <Link to="/honduras" className="tem-btn nav-link move-eff"><span>join</span></Link>
        </div>
        <div className="single-donate-wraper donate-wraper-bg-two">
            
        </div>
        <div className="single-donate-wraper donate-wraper-bg-three">
            <h2>we need your help changing the world</h2>
            <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SCJ6SAWVF5U5Q" target="_blank" className="tem-btn nav-link move-eff"><span>donate</span></a>
        </div>
    </section>

    <section className="about-area section-padding" id="about">
        <div className="container">
            <div className="row">
                <div className="col-sm-8 col-sm-offset-2">
                    <div className="title text-center">
                        <h2>our mission</h2>
                        <div className="separate"><span className="separate-icon"></span></div>
                        <p>We find our purpose in Him. So we dream on purpose. We are a group of young adults that have a calling to spark dreams and purposes back into the hearts of the world. Dreaming requires faith, and we believe this is something missing today.</p>
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
                        <h2>Our History</h2>
                        <p>Dream on began as an idea over breakfast at a local dinner in 2016. It since has turned into a global movement empowering people of all ages to pursue their dreams.</p>
                        
                        <h2>Our Core Values</h2>
                        <ul>
                            <li>Excellence in every way</li>
                            <li>Integrity in everything</li>
                            <li>Jesus at the center</li>
                            <li>Unity Within &amp; Unity Without</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 col-sm-6">
                    <div className="service-content">
                        <h3>join the team</h3>
                        <div className="service-icon">
                            <i className="fa fa-child" aria-hidden="true"></i>
                        </div>
                        <p>We are looking for people just like you to join the "Dream Team!"</p>
                        <Link to="/join" className="tem-btn move-eff"><span>learn more</span></Link>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="service-content">
                        <h3>give a dream</h3>
                        <div className="service-icon">
                            <i className="fa fa-globe" aria-hidden="true"></i>
                        </div>
                        <p>We are partnering with people like you to give children all across the globe their dreams.</p>
                        <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SCJ6SAWVF5U5Q" className="tem-btn move-eff"><span>learn more</span></a>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="service-content mobile-auto">
                        <h3>become a partner</h3>
                        <div className="service-icon">
                            <i className="fa fa-money" aria-hidden="true"></i>
                        </div>
                        <p>We aren't able to do anything without the support of people like you. </p>
                        <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SCJ6SAWVF5U5Q" target="_blank" className="tem-btn nav-link move-eff"><span>donate now</span></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="video-area parallax">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <a className="wmBox video-btn hvr-ripple-out" href="https://www.youtube.com/watch?v=4767SJIoVNI" target="_blank">
                        <i className="fa fa-play" aria-hidden="true"></i>
                    </a>
                    <h2>play video</h2>
                </div>
            </div>
        </div>
    </section>

    <section className="volunteers-area section-padding" id="volunteers">
        <div className="container">
            <div className="row">
                <div className="col-sm-8 col-sm-offset-2">
                    <div className="title text-center">
                        <h2>The dream team</h2>
                        <div className="separate"><span className="separate-icon"></span></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <Team />
           </div>
        </div>
    </section>

  </Layout>
)

export default IndexPage
