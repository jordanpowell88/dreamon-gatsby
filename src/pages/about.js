import React from 'react';
import { graphql } from 'gatsby';
import About from '../components/about';
import Seo from '../components/seo';
import PageHeader from '../components/page-header';
import TeamPreview from '../components/team/team-preview';
import Team from '../components/team/team';
import { useAboutTranslation } from '../hooks';

const AboutPage = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  const { about } = useAboutTranslation();

  const TeamMembers = edges
    .filter(edge => edge.node.frontmatter.category === 'Team')
    .map(edge =>
      <TeamPreview key={edge.node.id} data={edge.node.frontmatter} /> 
    )
  return (
    <>
      <Seo title={about.pageTitle} />
      <PageHeader title={about.pageTitle} />
      <About about={about} />
      <Team TeamMembers={TeamMembers} />
    </>
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
    }
  }
`