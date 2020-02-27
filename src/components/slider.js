import React from 'react';

const Slider = () => (
    <section id="home" className="banner-area owl-carousel">
    <div className="single-banner">
        <div className="itembg">
            <img src="../../images/banner/01.jpg" alt="Dream On: Global" />
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-md-offset-1 col-lg-offset-0 col-sm-8">
                    <div className="single-banner-con">
                        <div className="single-banner-txt">
                            <h1><span>dream on:</span> 2020</h1>
                            <p className="fadeIn animated animated-08s">November 4 - 8, 2020</p>
                            <a href="https://www.youtube.com/watch?v=_HWe8m0N60Y" target="_blank" className="tem-btn nav-link move-eff"><span>Watch</span></a>
                            <a href="https://dreamon.focusmissions.com/!/#/17348/honduras-2020" target="_blank" className="tem-btn nav-link move-eff"><span>join our next trip</span></a>                                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="single-banner">
        <div className="itembg">
            <img src="../../images/banner/02.jpg" alt="Dream On: Global Donate" />
        </div>
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
    <div className="single-banner">
        <div className="itembg">
            <img src="../../images/banner/05.jpg" alt="Dream On: Global Music Collective" />
        </div>
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
</section>
)
export default Slider;