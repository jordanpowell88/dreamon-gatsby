import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql } from 'gatsby';
import SpeakerHeader from '../components/speaker-collective/speaker-header';
import SpeakerBooks from '../components/speaker-collective/speaker-books';

const SpeakerMember = ({
  data
}) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark;
  const socials = {
    facebook: frontmatter.facebook,
    instagram: frontmatter.instagram,
  }
  const books = data.allMarkdownRemark.nodes;
  return (
    <Layout>
      <SEO title={frontmatter.name} />
      <SpeakerHeader title={frontmatter.name} socials={socials} />
      <div className="blog-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12" dangerouslySetInnerHTML={{ __html: html }}></div>

            <SpeakerBooks name={frontmatter.name} books={books} />
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default SpeakerMember;
export const speakerMemberQuery = graphql`
  query($path: String!) {
    allMarkdownRemark {
      nodes {
        html
        frontmatter {
          title
          photo
          date
          author
          buy
        }
      }
    }
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        videos
        title
        photo
        path
        name
        instagram
        facebook
      }
    }
  }
`
