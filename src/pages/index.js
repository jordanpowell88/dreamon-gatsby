import { graphql } from 'gatsby';
import React from "react";
import About from '../components/about';
import Buckets from '../components/buckets';
import Layout from "../components/layout";
import PlayVideo from "../components/play-video";
import SEO from "../components/seo";
import Slider from '../components/slider';
import Team from '../components/team';
import TeamPreview from "../components/team-preview";
import Contact from '../components/contact';
import { teamMembersFilter } from './about';


const IndexPage = ({
  data: {
      allMarkdownRemark: { edges }
  }
}) => {
    const TeamMembers = teamMembersFilter(edges)
      .map(edge =>
        <TeamPreview key={edge.node.id} data={edge.node.frontmatter} />
      )

    return (
    <Layout>
        <SEO title="Home" />
        <Slider />
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