import React from 'react';
import Layout from "../components/layout"
import Seo from "../components/seo";
import TeamPreview from '../components/team/team-preview';
import { graphql } from "gatsby";

const Team = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  const TeamMembers = edges
    .filter(edge => !!edge.node.frontmatter.order)
    .map(edge =>
      <TeamPreview key={edge.node.id} data={edge.node.frontmatter} />
    )
  return (
    <Layout>
      <Seo title="Team" />
      {TeamMembers}
    </Layout>
  )
}

export default Team;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___order] }) {
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
          }
        }
      }
    }
  }

`