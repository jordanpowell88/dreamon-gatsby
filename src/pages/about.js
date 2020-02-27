import React from 'react';
import About from '../components/about';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageHeader from '../components/page-header';
import TeamPreview from '../components/team-preview';
import Team from '../components/team';

export function teamMembersFilter(edges) {
  return edges.filter(edge =>
      edge.node.frontmatter.category !== 'Books' &&
      edge.node.frontmatter.title !== 'Music Collective Artist' &&
      edge.node.frontmatter.title !== 'Speaker Collective Speaker'
    );
}

const AboutPage = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  const title = "About Dream On"
  const TeamMembers = teamMembersFilter(edges)
    .map(edge =>
      <TeamPreview key={edge.node.id} data={edge.node.frontmatter} /> 
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
    }
  }
`