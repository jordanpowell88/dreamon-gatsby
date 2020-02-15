import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeader from '../components/page-header';

const Honduras = () => {
  const title = 'Honduras'
  const breadcrumbs = [{ name: 'Missions', link: '/missions' }]
  return (
    <Layout>
      <SEO title={title} />
      <PageHeader title={title} breadcrumbs={breadcrumbs} />

      <section className="single-causes-area section-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="causes-info">
                        <div className="causes-img">
                            <div class="embed-responsive embed-responsive-16by9">
                              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/_HWe8m0N60Y" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="causes-details">
                            <h2><a href="#">Dream On: Honduras</a></h2>
                            <h3>Frequently Asked Questions:</h3>
                            <p><strong>What Are The Dates?</strong> November 4-8 2020</p>
                            <p><strong>What Is The Cost?</strong> The total cost for the trip is $1,500. This includes your airfare, hotel, food and all activities we do while in Honduras. Please note this does NOT include food in the airports or purchasing passports if needed.</p>
                            <p><strong>Will I Need A Passport?</strong> Honduras is located outside of the United States in Central America. You WILL need a passport to leave and more importantly to return home! If you already have one, please make sure that it hasn\'t expired. For more information on how to renew your passport or get a passport for the 1st time please visit <a href="https://www.usps.com/international/passports.htm\">https://www.usps.com/international/passports.htm</a></p>
                            <p><strong>What Will We Be Doing</strong> Our days in Honduras will be jam packed from sun up to sundown. At night everyone will get to experience the Dream On Party where thousands of people show up for an incredible celebration. During the day your experience will be tailer as best as possible to help you use your gifts and talents.<br /><br />While every trip is different, below are a list of things you will do during the trip</p>
                            <ul>
                                <li>Visit Orphanages</li>
                                <li>Visit Hospitals</li>
                                <li>Do TV and Radio Interviews</li>
                                <li>Teach at leadership conference</li>
                                <li>Provide construction aide</li>
                                <li>Provide health aide</li>
                                <li>Throw a pizza party for children</li>
                                <li>Shoot Video</li>
                            </ul>
                            <div className="donate-progress-bar">
                                <div id="bar2" className="barfiller bar-two">
                                    <div className="tipWrap">
                                        <span className="tip"></span>
                                    </div>
                                    <span className="fill" data-percentage="0"></span>
                                </div>
                            </div>
                            <div className="right">
                                <span>seats filled: 0</span>
                                <span>total spots: 40</span>
                            </div>

                            <hr />
                            
                            <h2>Reserve Your Spot</h2>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </Layout>
  )
}
export default Honduras;