/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const musicianTemplate = path.resolve(`src/templates/MusicMember.js`)
  const speakerTemplate = path.resolve(`src/templates/SpeakerMember.js`)

  const markdownResults = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              path
              order
              name
              photo
              facebook
              twitter
              instagram
              youtube
              vimeo
              spotify
              date
              author
              buy
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (markdownResults.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  markdownResults.data.allMarkdownRemark.edges
    .filter(edge => edge.node.frontmatter.title === 'Music Collective Artist')
    .forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: musicianTemplate,
        context: {}
      })
    });

  markdownResults.data.allMarkdownRemark.edges
    .filter(edge => edge.node.frontmatter.title === 'Speaker Collective Speaker')
    .forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: speakerTemplate,
        context: {}
      })
    })
}