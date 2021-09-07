import React from 'react';
import Contact from '../components/contact';
import Layout from '../components/layout';
import PageHeader from '../components/page-header';
import Seo from '../components/seo';

const ContactPage = () => {
  const title = 'Contact'
  
  return (
    <Layout>
      <Seo title={title} />
      <PageHeader title={title} />
        <Contact />
    </Layout>
  )
}

export default ContactPage;