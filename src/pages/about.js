import React from 'react';
import About from '../components/about';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeader from '../components/page-header';
import TeamPreview from '../components/team/team-preview';
import Team from '../components/team/team';
import { graphql } from 'gatsby';

const AboutPage = ({
  data: {
    allMarkdownRemark: { edges },
    allFile
  }
}) => {
  const title = "About Dream On"
  const TeamMembers = edges
    .filter(edge => edge.node.frontmatter.category === 'Team')
    .map(edge =>
      <TeamPreview key={edge.node.id} data={edge.node.frontmatter} photos={allFile.edges} /> 
    )
  return (
    <Layout>
      <SEO title={title} />
      <PageHeader title={title} />
      <About />
      <Team TeamMembers={TeamMembers} />
    </Layout>
  )
}
export default AboutPage;
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
    },
    allFile(filter: { relativeDirectory: { eq: "volunteers" }}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid,
              originalName
            }
          }
        }
      }
    }
  }
`