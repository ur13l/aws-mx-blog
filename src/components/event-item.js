
import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import "../styles/global.css"
import TimeAgo from "react-timeago"
import esStrings from "react-timeago/lib/language-strings/es"
import buildFormatter from "react-timeago/lib/formatters/buildFormatter"
import TextTruncate from "react-text-truncate"



// Formatter to be used with the TimeAgo library to show text in spanish.
const formatter = buildFormatter(esStrings)

// EventItemWrapper styled div 
const EventItemWrapper = styled.div`
  display: inline-block;
  width: 100%;
  
  .post-date {
    margin: 0;
    color: #EA913A;
    text-transform: uppercase;
    font-weight: 800;
    text-rendering: optimizeLegibility;
    font-size: 0.7rem;
    line-height: 1.1;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  .author-name {
    margin-top: 12px;
    margin-bottom: 12px;
    color: #7a7a7a;
    text-transform: uppercase;
    font-weight: 800;
    text-rendering: optimizeLegibility;
    font-size: 0.7rem;
    line-height: 1.1;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }


  .date-name {
    margin-top: 12px;
    font-weight: 600;
    text-rendering: optimizeLegibility;
    font-size: 0.4rem;
    line-height: 1.1;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  .link-blog {
    padding: 0 15px;
  }
  
  .img-container, .img-container Img, .img-container .gatsby-image-wrapper {
    height: 200px;
  }

  a {
    color: black;
  }

  .event-content{
    text-align: end;
  }
`


 const EventItem = ({post, i, isCover = false, hiddenDescription = false}) => {
   var clss ="img-container";
   var urlEvent = post.node.content.replace("<p>", "").replace("</p>", "").match(/href="([^"]*)/)[1];
    if (isCover) {
      clss="img-cover"
    }
   return (
    <EventItemWrapper>
      <a href={urlEvent} target="blank">
        <div className={clss}>
          <Img fluid={post.node.featured_media.localFile.childImageSharp.fluid} />
        </div>
        <div className="event-content">
        <p className="date-name"> {post.node.excerpt}  </p>
          {isCover ?
            <h3 dangerouslySetInnerHTML={{ __html: post.node.title }}/> :
            <h4 style={{color:"black", textTransform:"none" }} dangerouslySetInnerHTML={{ __html: post.node.title }}/>
          }
        </div>
      </a>
    </EventItemWrapper>
  )
 }

export default EventItem
