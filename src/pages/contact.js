import React from 'react';
import Contact from '../components/contact';
import PageHeader from '../components/page-header';
import Seo from '../components/seo';

const ContactPage = () => {
  const title = 'Contact'
  
  return (
    <>
      <Seo title={title} />
      <PageHeader title={title} />
        <Contact />
    </>
  )
}

export default ContactPage;