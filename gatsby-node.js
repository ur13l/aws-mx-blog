/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const slash = require(`slash`)

//Query que devuelve todos los posts y tags
const queryAllPostsAndTags = async graphql => {
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
  return result.data.posts
}

const createAllPostPages = async (posts, createPage, postTemplate) => {
  posts.forEach(async post => {
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
}

const queryPostsByPage = async () => {}

/**
 * Method that create pages dynamically.
 * Pages created: all posts entries, glosary entries and category entries (These include
 * a paginator with the posts per category).
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postsAndTags = await queryAllPostsAndTags(graphql)
  const postTemplate = path.resolve(`./src/components/Post.js`)
  const pageTemplate = path.resolve(`./src/components/Blog.js`)
  const tagTemplate = path.resolve(`./src/components/Tag.js`)
  const { items: posts } = postsAndTags.listPosts
  const { items: tags } = postsAndTags.listTags
  await createAllPostPages(posts, createPage, postTemplate)

  const limit = 10,
    numPages = Math.ceil(posts.length / limit)
  let nextToken = null
  Array.from({ length: numPages }).forEach(async (_, i) => {
    const paginatedResults = await graphql(`
      query {
        posts {
          postsByCreatedAt (type:"Post" sortDirection:DESC limit:${limit} nextToken:${
      nextToken ? `"${nextToken}"` : null
    }){
            nextToken
          }
        }
      }
    `)
    nextToken = paginatedResults.data.posts.postsByCreatedAt.nextToken

    createPage({
      path: i === 0 ? `/publicaciones/` : `/publicaciones/${i + 1}`,
      component: slash(pageTemplate),
      context: {
        id: `blog-${i + 1}`,
        limit,
        nextToken: nextToken,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  tags.forEach(async tag => {
    let numPages = 0,
      _nextToken = null
    const { id, name: tagName, slug } = tag,
      pages = []
    do {
      //do While para que lo haga la primera vez con el nextToken = null
      const results = await graphql(`
        query {
          posts {
            postsByTag(tagID:"${id}" limit: ${limit} nextToken:${
        _nextToken ? `"${_nextToken}"` : null
      }) {
              nextToken
              items {
                id
              }
            }
          }
        }
      `)
      const {
        data: {
          posts: {
            postsByTag: { nextToken, items },
          },
        },
      } = results
      _nextToken = nextToken
      /* 
        Cuando el número de elementos totales es divisible entre la variable limit (Ejemplo: 20 elementos y limit=10), se genera iteración 
        extra, ya que la última página devuelve un nextToken, pero no devuelve items. Esta condición previene que se genere una página extra 
        sin contenido.  
      */
      if (items.length > 0) {
        numPages++ //Se suma un valor al número de páginas
        pages.push({ nextToken, currentPage: numPages }) //Se guarda el valor que ayudará en la creación de las páginas posteriormente
      }
    } while (_nextToken !== null)

    pages.forEach(async page => {
      const { currentPage } = page
      createPage({
        path:
          currentPage === 1
            ? `publicaciones/${slug}`
            : `publicaciones/${slug}/${currentPage}`,
        component: slash(tagTemplate),
        context: {
          id,
          limit,
          nextToken,
          numPages,
          currentPage,
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
