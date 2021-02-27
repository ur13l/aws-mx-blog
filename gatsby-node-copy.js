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
  // TODO: Modificar este query para devolver elementos paginados.
  const result = await graphql(`
    query {
      posts {
        listPosts {
          items {
            id
            content
            title
            slug
          }
        }
        listTags {
          items {
            id
            name
            slug
          }
        }
      }
    }
  `)

  const postTemplate = path.resolve(`./src/components/Post.js`)
  const pageTemplate = path.resolve(`./src/components/Blog.js`)
  const tagTemplate = path.resolve(`./src/components/Tag.js`)
  const posts = result.data.posts.listPosts.items
  const tags = result.data.posts.listTags.items

  posts.forEach(post => {
    const { id, slug } = post
    createPage({
      // will be the url for the page
      path: `/${slug}`,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id,
      },
    })
  })

  //Paginator options for category template.
  const limit = 11
  const numPages = Math.ceil(posts.length / limit)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: slash(pageTemplate),
      context: {
        id: `blog-${i + 1}`,
        limit,
        skip: i * limit,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  /**
   * Creating an array from the number of pages and category posts per page.
   */
  tags.forEach(tag => {
    //Paginator options for category template.
    const postsCat = posts.filter(post => {
      const { tags } = post
      if (!tags) return false
      return post.tags.findIndex(e => e.id === tag.id) !== -1
    })

    const numPages = Math.ceil(postsCat.length / limit)

    Array.from({ length: numPages }).forEach((_, i) => {
      const { id, name: tagName, slug } = tag
      createPage({
        path:
          i === 0 ? `publicaciones/${slug}` : `publicaciones/${slug}/${i + 1}`,
        component: slash(tagTemplate),
        context: {
          id,
          limit: limit,
          skip: i * limit,
          numPages,
          currentPage: i + 1,
          tagName,
          slug,
        },
      })
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, plugins, actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [],
    },
    plugins: [
      plugins.define({
        __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
      }),
    ],
    node: {
      console: true,
      fs: "empty",
      net: "empty",
      tls: "empty",
    },
  })
}
