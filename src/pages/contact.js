import React from 'react';
import Contact from '../components/contact';
import Layout from '../components/layout';
import PageHeader from '../components/page-header';
import SEO from '../components/seo';

const ContactPage = () => {
  const title = 'Contact'
  
  return (
    <Layout>
      <SEO title={title} />
      <PageHeader title={title} />
        <Contact />
    </Layout>
  )
}

export default ContactPage;