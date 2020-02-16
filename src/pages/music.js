import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeader from '../components/page-header';
import { Link } from 'gatsby';

const MusicPage = () => {
  const title = "Dream On: Music Collective"

  return (
    <Layout>
      <SEO title={title} />
      <PageHeader title={title} />

      <div className="blog-area section-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="col-sm-8 col-sm-offset-2">
                        <h1 className="text-center">Meet The Collective</h1>
                        <p>Dream On: Music Collective is a team of writers, singers, musicians, and worshippers. We are passionate about pursuing the presence of God in every area of our lives and re-sparking the dreams and purposes God has put in each and everyone’s life.</p>
                    </div>
                    <div className="col-sm-6">
                        <article className="news-info">
                            <Link to="/zac-howard">
                                <h2 className="text-center">Zac Howard</h2>
                                <div className="news-img">
                                    <img src="images/volunteers/zac-howard.jpg" alt="Zac Howard - Dream On: Music Collective" />
                                </div>
                            </Link>
                        </article>
                    </div>

                    <div className="col-sm-6">
                        <article className="news-info">
                            <Link to="/emily-howard">
                                <h2 className="text-center">Emily Howard</h2>
                                <div className="news-img">
                                    <img src="images/volunteers/emily-howard.jpg" alt="Emily Howard - Dream On: Music Collective" />
                                </div>
                            </Link>
                        </article>
                    </div>

                    <div className="col-sm-6">
                        <article className="news-info">
                            <Link to="/lucas-gray">
                                <h2 className="text-center">Lucas Gray</h2>
                                <div className="news-img">
                                    <img src="images/volunteers/lucas-gray.jpg" alt="Lucas Gray - Dream On: Music Collective" />
                                </div>
                            </Link>
                        </article>
                    </div>

                    <div className="col-sm-6">
                        <article className="news-info">
                            <Link to="/lilli-gray">
                                <h2 className="text-center">Lilli Gray</h2>
                                <div className="news-img">
                                    <img src="images/volunteers/lilli-gray.jpg" alt="Lilli Gray - Dream On: Music Collective" />
                                </div>
                            </Link>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Layout>
  )
}
export default MusicPage;