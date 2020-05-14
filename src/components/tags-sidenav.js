import { Link, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import "../styles/global.css"
import { graphql } from "gatsby"

/**
 * TagsSideNavWrapper element, used to set style to a component.
 */
const TagsSideNavWrapper = styled.div`
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
 * @function TagsSideNav
 * @author Uriel
 * TagsSideNav to show the main tags.
 * Note: The order is taken from the most popular tag (the one with most
 * publicated posts) to the least one.
 */
const TagsSideNav = () => {
  const data = useStaticQuery(graphql`
    query {
      tags: allWordpressTag(
        sort: { fields: [count], order: [DESC] }
        limit: 10
      ) {
        edges {
          node {
            id
            name
            count
            slug
            description
          }
        }
      }
    }
  `)

  const tags = data.tags.edges
  let tagsElem = []
  tags.forEach(tag => {
    tagsElem.push(
      <Link key={tag.node.id} to={"/publicaciones/" + tag.node.slug}>
        {tag.node.name}
      </Link>
    )
  })

  return (
    <TagsSideNavWrapper>
      <h3>Etiquetas</h3>
      <div className="tags-container">{tagsElem}</div>
    </TagsSideNavWrapper>
  )
}

/**
 * Default props for the TagsSideNav Component
 */
TagsSideNav.propTypes = {}

export default TagsSideNav
