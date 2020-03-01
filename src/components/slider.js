import React from 'react';
import OwlCarousel from 'react-owl-carousel';

const SliderImage = ({
    image,
    html
}) => (
    <div className="item">
        <div className="single-banner" style={{background: `"url(${image}")`}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-md-offset-1 col-lg-offset-0 col-sm-8">
                        <div className="single-banner-con">
                            <div className="single-banner-txt">
                                {html}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

const Slider = () => {
    return (
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
                <div className="single-banner" style={{background: "url('../images/banner/01.jpg')"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-md-offset-1 col-lg-offset-0 col-sm-8">
                                <div className="single-banner-con">
                                    <div className="single-banner-txt">
                                        <h1><span>dream on:</span> Honduras 2020</h1>
                                        <p className="fadeIn animated animated-08s">November 3rd, 2018</p>
                                        <a href="https://www.youtube.com/watch?v=_HWe8m0N60Y" target="_blank" className="tem-btn nav-link move-eff"><span>Watch Previous Trip</span></a>
                                        <a href="https://dreamon.focusmissions.com/!/#/17348/honduras-2020" className="tem-btn nav-link move-eff"><span>join the trip</span></a>                                
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
                                <a href="https://www.paypal.com/donate/?token=_VV4NX2yorvh4-A4aMbH1VJ75nly1JyZae94238oxw6LESsAA7Mgc7OTDhtY0yn_vCMdwG&country.x=US&locale.x=US" target="_blank" className="tem-btn nav-link move-eff"><span>donate now</span></a>                                
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
                                        <a href="music" className="tem-btn move-eff"><span>view the artists</span></a>
                                        <a href="events" className="tem-btn move-eff"><span>upcoming events</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </OwlCarousel>
    )
}
export default Slider;
