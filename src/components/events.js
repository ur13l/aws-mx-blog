import { useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import "../styles/global.css"
import { graphql, Link } from "gatsby"
import PostItem from "./post-item"

/**
 * SearchPanelWrapper element, used to set style to a component.
 */
const EventsWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  
  
  .tags-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 42px;
    grid-gap: 12px 24px;
    align-content:center;
    align-self: center;
    align-items: center;
  }
  
  .tags-container a {
    align-self: center;
    color: #aaa;
    font-size: 18px;
  } 
`


/**
 * @function SearchPanel
 * @author Uriel
 * SearchPanel will render all the posts that will be filtered by a JS function.
 */
const Events = () => {
  const data = useStaticQuery(graphql`
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

  const events = data.events.edges
  return (
    <EventsWrapper>
      <h3>Eventos</h3>
      <div className="post-container">
        {
            events.map((elem, key) =>  (<PostItem post={elem} key={key} i={key} />))
        }
      </div>
    </EventsWrapper>
  )
}

export default Events
