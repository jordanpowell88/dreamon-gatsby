import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeader from '../components/page-header';
import { graphql } from 'gatsby';

const MusicMember = ({
  data
}) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.name} />
      <PageHeader title={frontmatter.name} />
      <div className="blog-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12" dangerouslySetInnerHTML={{ __html: html }}>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default MusicMember;
export const musicMemberQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        order
        name
        photo
        facebook,
        instagram
      }
    }
  }
`