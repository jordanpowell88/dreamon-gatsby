import React from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/seo';
import PageHeader from '../components/page-header';
import SpeakerPreview from '../components/speaker-collective/speaker-preview';

const SpeakersPage = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  const title = "Speaker Collective"
  const SpeakerMembers = edges
    .filter(edge => edge.node.frontmatter.category === 'Speaker')
    .map(edge => 
      <SpeakerPreview key={edge.node.id} data={edge.node.frontmatter} /> 
    )
  return (
    <>
      <Seo title={title} />
      <PageHeader title={title} />

      <div className="blog-area section-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="col-sm-8 col-sm-offset-2">
                        <h1 className="text-center">Meet The Collective</h1>
                        <p>Dream On: Speaker Collective is a team of authors, speakers, and preachers. We are passionate about empowering and teaching others to pursue their dreams and purposes God has put in each and everyone’s life.</p>
                    </div>
                    {SpeakerMembers}
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
export default SpeakersPage;
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___order] }) {
      edges {
        node {
          id
          frontmatter {
            order
            name
            title
            photo
            path
            category
          }
        }
      }
    }
  }
`