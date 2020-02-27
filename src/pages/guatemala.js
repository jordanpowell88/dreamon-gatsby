import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeader from '../components/page-header';

const Guatemala = () => {
  const title = "Guatemala"
  const breadcrumbs = [{name: "Missions", link: '/missions'}]
  return (
    <Layout>
      <SEO title={title} />
      <PageHeader title={title} breadcrumbs={breadcrumbs} />
      <section className="single-causes-area section-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/hoD_q6UiLRM" title="Guatemala Video" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    </div>

                    <p>Dream ON has partnered with Wright &amp; Schulte an Ohio based law firm. Working with Rick and Tripp Schulte for a Volcano relief fund on August 4th, 2018 in Guatemala City. Those wishing to donate below where 100% of donations will be given to efforts supporting those in Guatemala.</p>                           
                    <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=DMS79JZ3RVX3U" target="_blank" rel="noopener noreferrer" className="tem-btn nav-link move-eff"><span>donate now</span></a>
                    </div>
                </div>
            </div>
      </section>
    </Layout>
  )
}

export default Guatemala