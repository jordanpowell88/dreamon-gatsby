import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import MusicHeader from '../components/music-header';

const MusicMember = ({
  data
}) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const breadcrumbs = [{ name: 'Music Collecdtive', link: '/music' }]
  const socials = {
    facebook: frontmatter.facebook,
    instagram: frontmatter.instagram,
    youtube: frontmatter.youtube,
    vimeo: frontmatter.vimeo,
    spotify: frontmatter.spotify
  }
  return (
    <Layout>
      <SEO title={frontmatter.name} />
      <MusicHeader title={frontmatter.name} breadcrumbs={breadcrumbs} socials={socials} />
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
        instagram,
        youtube,
        vimeo,
        spotify
      }
    }
  }
`