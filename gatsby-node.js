/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const teamMemberTemplate = path.resolve(`src/templates/TeamMember.js`)
  const musicianTemplate = path.resolve(`src/templates/MusicMember.js`)

  const teamMemberResult = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___order] }
        limit: 100
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  const musicianResult = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___order] }
        limit: 100
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (teamMemberResult.errors || musicianResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  teamMemberResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: teamMemberTemplate,
      context: {}, // additional data can be passed via context
    })
  })

  musicianResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: musicianTemplate,
      context: {}
    })
  })
}