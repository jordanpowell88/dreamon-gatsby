import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import MusicHeader from '../components/music-collective/music-header';
import MusicCollectiveStore from '../components/music-collective/music-collective-store';
import MusicCollectiveEvents from '../components/music-collective/music-collective-events';
import MusicCollectiveVideos from '../components/music-collective/music-collective-videos';
import { Link } from 'gatsby';

const MusicMember = ({
  data
}) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
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
      <MusicHeader title={frontmatter.name} socials={socials} />
      <div className="blog-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12" dangerouslySetInnerHTML={{ __html: html }}></div>
            <div className="col-md-12">
              <Link to="/book" class="tem-btn nav-link move-eff"><span>book</span></Link>

              <MusicCollectiveEvents />
              <MusicCollectiveVideos videos={frontmatter.videos} />
              <MusicCollectiveStore />
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
        videos
        facebook
        instagram
        youtube
        vimeo
        spotify
      }
    }
  }
`