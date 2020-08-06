import React, { Component } from "react"
import styled from "styled-components"
import "../styles/global.css"
import PostItem from "../components/post-item"




/**
 * TagsSideNavWrapper element, used to set style to a component.
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

class Events extends Component {

  /**
   * @function postLoop
   * @param {Array<Object>} events
   * Function to iterate over the events to render on page.
   */
  eventLoop = events => {
    let div = []
    events.forEach((event, key) => {
      if(key > 0) {
        div.push(<PostItem event={event} key={key} i={key} />)
      }
    })
    return div
  }

  render() {
    console.log(this.props);
    const events = this.props.data.events.edges
    return (
      <EventsWrapper>
        <h3>Eventos</h3>
        <div className="post-container">
            {this.eventLoop(events)}
        </div>
      </EventsWrapper>
    )
}
}

export default Events

/**
 * @function Events
 * Events to show the main events.
 * Note: The order is taken from the most popular tag (the one with most
 * publicated posts) to the least one.
 */
export const postsQuery = graphql`
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
`

