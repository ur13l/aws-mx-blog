
import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import "../styles/global.css"
import Wrapper from "../styles/event-item"

function createEventUrl(content) {
  return content.replace("<p>", "").replace("</p>", "").match(/href="([^"]*)/)[1];
}

const EventItem = ({post, isCover = false, hiddenDescription = false}) => {
    const urlEvent = createEventUrl(post.node.content);
    const clss = isCover ? "img-cover" : "img-container";
    const { featured_media: { localFile: { childImageSharp: { fluid} } } } = post.node;
    const { excerpt } = post.node;
    const { title } = post.node;
  return (
      <Wrapper>
          <a href={urlEvent} target="blank">
              <div className={clss}>
                  <Img fluid={fluid} />
              </div>
              <div className="event-content">
                  <p className="date-name"> {excerpt}  </p>
                  {isCover ?
                    <h3 dangerouslySetInnerHTML={{ __html: title }}/> :
                    <h4 className="event-item-title" dangerouslySetInnerHTML={{ __html: title }}/>
                  }
              </div>
          </a>
      </Wrapper>
    )
}
export default EventItem
