
import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import "../styles/global.css"
import Wrapper from "../styles/event-item"




const EventItem = ({post, isCover = false, hiddenDescription = false}) => {
    const urlEvent = post.node.content.replace("<p>", "").replace("</p>", "").match(/href="([^"]*)/)[1];
    let clss ="img-container";
    if (isCover) {
        clss="img-cover"
    }
    return (
      <Wrapper>
          <a href={urlEvent} target="blank">
              <div className={clss}>
                  <Img fluid={post.node.featured_media.localFile.childImageSharp.fluid} />
              </div>
              <div className="event-content">
                  <p className="date-name"> {post.node.excerpt}  </p>
                  {isCover ?
                    <h3 dangerouslySetInnerHTML={{ __html: post.node.title }}/> :
                    <h4 className="event-item-title" dangerouslySetInnerHTML={{ __html: post.node.title }}/>
                  }
              </div>
          </a>
      </Wrapper>
    )
}
export default EventItem
