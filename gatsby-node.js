const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const nodeTypes = ['MarkdownRemark', 'Mdx']

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (nodeTypes.includes(node.internal.type)) {
    const slug = createFilePath({ node, getNode, basePath: `articles` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMdx {
          nodes {
            frontmatter {
              date
              title
              author
            }
            fields {
              slug
            }
          }
        }
      }
    `).then(result => {
      const { nodes } = result.data.allMdx

      // This is simply to parse the date so that it can be used in a date object
      // And also to provide the left and right link (forward and back)

      articles = nodes
      const parsedDates = articles.map((el, idx) => {
        const { date } = el.frontmatter
        return {
          ...el,
          date: date.split('-').map(stringDate => stringDate),
          idx,
        }
      })
      // Feeding parsed date into Date object to create a new data
      const dateObjects = parsedDates.map(el => ({
        ...el,
        date: new Date(el.date[0], el.date[1], el.date[2]),
        idx: el.idx,
      }))
      const sortedDates = dateObjects.sort((a, b) => b.date - a.date)

      articles.forEach((node, idx) => {
        let arrayLocation = null
        sortedDates.forEach((el, innerIdx) => {
          if (el.idx === idx) {
            arrayLocation = innerIdx
          }
        })
        const leftLink = sortedDates[arrayLocation - 1]
        const rightLink = sortedDates[arrayLocation + 1]

        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/BlogPost.jsx`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            leftLink: leftLink ? leftLink.fields.slug : null,
            rightLink: rightLink ? rightLink.fields.slug : null,
            leftLinkTitle: leftLink ? leftLink.frontmatter.title : null,
            rightLinkTitle: rightLink ? rightLink.frontmatter.title : null,
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}
