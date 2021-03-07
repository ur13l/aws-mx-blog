import { graphql, useStaticQuery } from "gatsby"

//TODO: Agregar entidad de Eventos en AppSync (Ordenados por lista)
export const useEvents = () => {
  const {
    posts: {
      postsByCreatedAt: { items: events },
    },
  } = useStaticQuery(graphql`
    query {
      posts {
        postsByCreatedAt(type: "Post", sortDirection: DESC, limit: 11) {
          items {
            id
            title
            content
            excerpt
            slug
            createdAt
            authors {
              items {
                author {
                  firstName
                  lastName
                }
              }
            }
            featured_media
          }
        }
      }
    }
  `)

  return events
}
