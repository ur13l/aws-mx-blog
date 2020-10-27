import React from "react"
import EventItem from "./event-item"
import { useEvents } from "../hooks/useEvents"
import "../styles/global.css"
import Wrapper from "../styles/events"

const Events = () => {
  const { edges: events } = useEvents()
  const eventsElements = [];
  events.forEach(filterDate)
  function filterDate(item) {
    const formatToShow = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const formatToCompare = {year: 'numeric', month: 'long',  hour: '2-digit', minute: '2-digit'  };
    item.node.excerpt = item.node.excerpt.replace("<p>", "").replace("</p>", "").replace(/\s+/g, '');
    const today = new Date().toLocaleDateString("es-ES", formatToCompare);
    let eventDay = new Date(item.node.excerpt).toLocaleDateString("es-ES", formatToCompare);
    item.node.excerpt = new Date(item.node.excerpt).toLocaleDateString("es-ES", formatToShow);
    if(today > eventDay){
      eventsElements.push(item);
    }
  }
    return (
      <Wrapper>
        {eventsElements.length > 0 ? <h5 className="title-events">próximos eventos</h5> : ''}
        <div className="padding-events">
          {
            eventsElements.map((elem, key) => (<EventItem post={elem} key={key}/>))
          }
        </div>
      </Wrapper>
    )
}
export default Events
