import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeader from '../components/page-header';
import MusicPreview from '../components/music-collective/music-preview';

const MusicPage = ({
    data: {
        allMarkdownRemark: { edges }
    }
}) => {
  const title = "Dream On: Music Collective"
  const MusicMembers = edges
    .filter(edge => !!edge.node.frontmatter.order && edge.node.frontmatter.title === 'Music Collective Artist')
    .map(edge =>
      <MusicPreview key={edge.node.id} data={edge.node.frontmatter} />
    )
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
                    {MusicMembers}
                </div>
            </div>
        </div>
    </div>
    </Layout>
  )
}
export default MusicPage;
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
          }
        }
      }
    }
  }

`