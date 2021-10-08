import React from 'react';
import Seo from '../components/seo';
import PageHeader from '../components/page-header';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const TripPreview = () => (
  <div className="col-sm-12">
    <article className="news-info">
      <OutboundLink href="https://dreamon.gomethod.app/!/#/20234/honduras-2021">
        <h2 className="text-center">Honduras</h2>
        <h4 className="text-center">November 2021</h4>
        <div className="news-img">
          <img src="images/news/honduras-missions.jpg" alt="Dream On: Honduras" />
        </div>
      </OutboundLink>
    </article>
    <article className="news-info">
      {/* <OutboundLink href="https://dreamon.focusmissions.com/!/#/17348/honduras-2020"> */}
        <h2 className="text-center">Brazil</h2>
        <h4 className="text-center">March 2022</h4>
        <div className="news-img">
          <img src="images/banner/brazil.jpg" alt="Dream On: Brazil" />
        </div>
      {/* </OutboundLink> */}
    </article>
  </div>
)

const MissionsPage = () => {
  const title = 'Missions';
  return (
    <>
      <Seo title={title} />
      <PageHeader title={title} />

      <div className="blog-area section-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="col-sm-8 col-sm-offset-2">
                        <h1 className="text-center">Upcoming Trips</h1>
                        <hr />
                        <p>Our vision is to re-spark the Body of Christ to dream again, right in their very geographical location. We know that every participant will return home with their own dreams to change the world, but we also believe in the importance of the Central American people reaching their own dreams.</p>
                    
                        <TripPreview />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
export default MissionsPage;