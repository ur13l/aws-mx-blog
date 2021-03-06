import { useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import SearchPanelWrapper from "../styles/SearchPanel"
import "../styles/global.css"
import { graphql } from "gatsby"
import SearchResultItem from '../components/SearchResultItem'

/**
 * @function SearchPanel
 * @author Uriel
 * SearchPanel will render all the posts that will be filtered by a JS function.
 */
const SearchPanel = ({ searchText }) => {

  if( searchText.length >= 3){
    document.body.style = "overflow:hidden"
    document.documentElement.style = "overflow:hidden"
  } else{
    document.body.style = "overflow:auto"
    document.documentElement.style = "overflow:scroll"
  }

  const data = useStaticQuery(graphql`
    query {
      posts: allWordpressPost(
        sort: { fields: [date], order: DESC }
      ) {
        edges {
          node {
            author {
              name
            }
            title
            slug
            date
            categories {
              id
              name
            }
            featured_media {
              link
              caption
              localFile {
                childImageSharp {
                  # Try editing the "maxWidth" value to generate resized images.
                  fluid(maxWidth: 468) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            } 
          }
        }
      }
    }
  `)

  const postsShown = data.posts.edges
    .filter(
      elem =>
        elem.node.title
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .search(
            searchText
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
          ) !== -1
    )
    .splice(0, 6)

  return (
    searchText.length >= 3 ?
      <SearchPanelWrapper>
        <div
          className="search-panel-content">
          <h3 className="text-title">
              Entradas Recientes
          </h3>
          {
            postsShown.length !== 0 ?
            <div
              className="panel">
                {
                  postsShown.map(entry => (
                    <SearchResultItem post={entry}/>
                  ))
                }
            </div>
            :
            <div className="panel-not-results">
              <span
                className="text-not-results">
                No se encontraron resultados
              </span>
            </div>
          }
        </div>
      </SearchPanelWrapper>
    :
    null
  )
}

/**
 * Default props for the SearchPanel Component
 */
SearchPanel.propTypes = {
  searchText: PropTypes.string,
}

export default SearchPanel

