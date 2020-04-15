import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeader from '../components/page-header';
import EventPreview from '../components/events/event-preview';
import { graphql } from 'gatsby';

const EventTemplate = ({
  data
}) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const breadcrumbs = [{name: "Events", link: '/events'}]
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <PageHeader title={frontmatter.title} breadcrumbs={breadcrumbs} />
      <div className="blog-area section-padding">
        <div className="container">
          <div className="row">
            <h1 className="text-center">{frontmatter.title}</h1>
            <hr />
            <EventPreview data={frontmatter} html={html} />
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default EventTemplate;
export const musicMemberQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        photo
        date
        location
        buy
      }
    }
  }
`