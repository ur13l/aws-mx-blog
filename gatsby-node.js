/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const slash = require(`slash`)

/**
 * Method that create pages dynamically.
 * Pages created: all posts entries, glosary entries and category entries (These include
 * a paginator with the posts per category).
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // query content for WordPress posts
  const result = await graphql(`
    query {
      posts: allWordpressPost {
        edges {
          node {
            id
            slug
            tags {
              id
            }
          }
        }
      }
      tags: allWordpressTag {
        edges {
          node {
            id
            slug
            name
          }
        }
      }
    }
  `)

  const postTemplate = path.resolve(`./src/components/Post.js`)
  const pageTemplate = path.resolve(`./src/components/Blog.js`)
  const tagTemplate = path.resolve(`./src/components/Tag.js`)
  const posts = result.data.posts.edges
  const tags = result.data.tags.edges

  posts.forEach(edge => {
    createPage({
      // will be the url for the page
      path: `/${edge.node.slug}`,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id: edge.node.id,
      },
    })
  })


  //Paginator options for category template.
  const postsPerPage = 11
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path:
        i === 0
          ? `/`
          : `/${i + 1}`,
      component: slash(pageTemplate),
      context: {
        id: `blog-${i+1}`,
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })



  /**
   * Creating an array from the number of pages and category posts per page.
   */
  tags.forEach(edge => {
    //Paginator options for category template.
    const postsCat = posts.filter(post => {
      const { tags } = post.node;
      if (!tags) return false

      return post.node.tags.findIndex(e => e.id === edge.node.id) !== -1
    })

    const numPages = Math.ceil(postsCat.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path:
          i === 0
            ? `publicaciones/${edge.node.slug}`
            : `publicaciones/${edge.node.slug}/${i + 1}`,
        component: slash(tagTemplate),
        context: {
          id: edge.node.id,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
          tagName: edge.node.name,
          slug: edge.node.slug
        },
      })
    })
  })
}


exports.onCreateWebpackConfig = ({
  stage,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
       
      ],
    },
    plugins: [
      plugins.define({
        __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
      }),
    ],
    node: {
      console: true,
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
    }
  })
}
