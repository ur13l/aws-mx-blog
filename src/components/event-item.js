import React from "react"
import "../styles/global.css"
import Wrapper from "../styles/event-item"

function createEventUrl(content) {
  return content
    .replace("<p>", "")
    .replace("</p>", "")
    .match(/href="([^"]*)/)[1]
}

const EventItem = ({ post, isCover = false, hiddenDescription = false }) => {
  const urlEvent = createEventUrl(post.node.content)
  const clss = isCover ? "img-cover" : "img-container"

  return (
    <Wrapper>
      <a href={urlEvent} target="blank">
        <div className={clss}>
          <img src={urlEvent.featured_media} alt={urlEvent.title} />
        </div>
        <div className="event-content">
          <p className="date-name"> {urlEvent.excerpt} </p>
          {isCover ? (
            <h3 dangerouslySetInnerHTML={{ __html: urlEvent.title }} />
          ) : (
            <h4
              className="event-item-title"
              dangerouslySetInnerHTML={{ __html: urlEvent.title }}
            />
          )}
        </div>
      </a>
    </Wrapper>
  )
}
export default EventItem
