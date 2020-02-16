import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeader from '../components/page-header';
import ContactForm from '../components/forms/contact-form';

const ContactPage = () => {
  const title = 'Contact'
  
  return (
    <Layout>
      <SEO title={title} />
      <PageHeader title={title} />

      <section className="contact-area section-padding" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-sm-offset-2">
              <div className="title text-center">
                <h2>contact us</h2>
                <div className="separate"><span class="separate-icon"></span></div>
              </div>
            </div>
            </div>
            <div className="row">
              <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                <div class="contact-form">
                  <ContactForm />
                </div>
              </div>
            </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage;