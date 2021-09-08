import { graphql } from 'gatsby';
import React from "react";
import Loadable from 'react-loadable';
import About from '../components/about';
import Buckets from '../components/buckets';
import Contact from '../components/contact';
import Layout from "../components/layout";
import PlayVideo from "../components/play-video";
import Seo from "../components/seo";
import Team from '../components/team/team';
import TeamPreview from "../components/team/team-preview";

const LoadableSlider = Loadable({
  loader: () => import('../components/slider'),
  loading: () => (<></>)
})

const IndexPage = ({
  data: {
      allMarkdownRemark: { edges }
  }
}) => {
    const TeamMembers = edges
      .filter(edge => edge.node.frontmatter.category === 'Team')
      .map(edge =>
        <TeamPreview key={edge.node.id} data={edge.node.frontmatter} />
      )

    return (
    <Layout>
        <Seo title="Home" />
        <LoadableSlider />
        <Buckets />
        <About />
        <PlayVideo />
        <Team TeamMembers={TeamMembers} />
        <Contact />
    </Layout>
    )
}

export default IndexPage
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
            facebook
            twitter
            instagram
            category
          }
        }
      }
    }
  }
`