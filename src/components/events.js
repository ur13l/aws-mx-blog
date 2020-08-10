import { useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import "../styles/global.css"
import { graphql, Link } from "gatsby"
import EventItem from "./event-item"

/**
 * SearchPanelWrapper element, used to set style to a component.
 */
const EventsWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  margin-bottom: 10px;
  background-color: #EFEFEF;

  
  
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

  .title-events {
    margin-left: 7%;
    color: #EA913A;
    text-transform: uppercase;
    font-weight: 800;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  .padding-events{
    width: 85%;
    margin-left: auto;
    margin-right: auto;
  }
`


/**
 * @function Events
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
  var cover = [];
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'  };
  events.forEach(filterDate)
  function filterDate(item) {
    item.node.excerpt = item.node.excerpt.replace("<p>", "").replace("</p>", "").replace(/\s+/g, '');
    item.node.excerpt = new Date(item.node.excerpt).toLocaleDateString("es-ES", options);
    var today = new Date().toLocaleDateString("es-ES", options);
    if(today  < item.node.excerpt){
      cover.push(item);
    }
  }

  return (
    <EventsWrapper>
      <h5 className="title-events">próximos eventos</h5>
      <div className="padding-events">
        {
        cover.map((elem, key) =>  (<EventItem post={elem} key={key} i={key} />))
        
        }
      </div>
    </EventsWrapper>
  )
}

export default Events
