import { graphql, useStaticQuery } from "gatsby"

export const useEvents = () => {
  const { events } = useStaticQuery(graphql`
      query {
          events: allWordpressPost(
              sort: { fields: [date], order: DESC },
              filter: { categories: { elemMatch: { name: { eq: "Evento" } } } }
              limit: 11
          ) {
              edges {
                  node {
                      id
                      title
                      content
                      excerpt
                      slug
                      date
                      author {
                          name
                      }
                      featured_media {
                          link
                          caption
                          localFile {
                              childImageSharp {
                                  # Try editing the "maxWidth" value to generate resized images.
                                  fluid(maxWidth: 468) {
                                      ...GatsbyImageSharpFluid_tracedSVG
                                  }
                              }
                          }

                      }
                      categories {
                          id
                          name
                      }
                  }
              }
          }
      }
  `)

  return events;
}
