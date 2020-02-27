import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeader from '../components/page-header';
import EventPreview from '../components/events/event-preview';

const EventsPage = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  const title="Upcoming Events"
  const UpcomingEvents = edges
    .filter(edge => edge.node.frontmatter.category === 'Events' &&
      new Date(edge.node.frontmatter.date) >= new Date())
    .map(edge =>
      <EventPreview key={edge.node.id} data={edge.node.frontmatter} html={edge.node.html} />
    );

  return (
    <Layout>
      <SEO title={title} />
      <PageHeader title={title} />

      <div className="blog-area section-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="col-sm-8 col-sm-offset-2">
                        <h1 className="text-center">Upcoming Events</h1>
                        {UpcomingEvents}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Layout>
  )
}
export default EventsPage;
export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            date
            category
            title
            photo
            path
            buy
            location
          }
        }
      }
    }
  }
`