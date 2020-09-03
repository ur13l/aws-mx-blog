
import "../styles/global.css"
import React from "react"
import EventItem from "./event-item"
import { useEvents } from "../hooks/useEvents"
import Wrapper from "../styles/events"

const Events = () => {
  const { edges: events } = useEvents()
  const cover = [];
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'  };
  events.forEach(filterDate)
  function filterDate(item) {
    item.node.excerpt = item.node.excerpt.replace("<p>", "").replace("</p>", "").replace(/\s+/g, '');
    item.node.excerpt = new Date(item.node.excerpt).toLocaleDateString("es-ES", options);
    const today = new Date().toLocaleDateString("es-ES", options);
    if(today  < item.node.excerpt){
      cover.push(item);
    }
  }

  return (
    <Wrapper>
      <h5 className="title-events">próximos eventos</h5>
      <div className="padding-events">
        {
        cover.map((elem, key) =>  (<EventItem post={elem} key={key} i={key} />))
        
        }
      </div>
    </Wrapper>
  )
}

export default Events
