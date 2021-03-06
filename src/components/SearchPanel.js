import { useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import "../styles/global.css"
import { graphql } from "gatsby"
import SearchResultItem from '../components/SearchResultItem'

/**
 * SearchPanelWrapper element, used to set style to a component.
 */
const SearchPanelWrapper = styled.div`

  padding: 0 !important;

  .search-panel-content {
    top: 140px;
    position: fixed;
    width: 100%;
    height: calc(100vh - 70px);
    background: rgba(255, 255, 255, 1);
    z-index: -1;
    display: flex;
    flex-direction: column;
    gap: 26px;
  }

  .text-title {
    margin-top: 26px;
    margin-left: 26px;
    color: #FBA13E;
  }

  .panel {
    display: grid;
    grid-gap: 26px;
  }

  .panel-not-results {
    text-align: center;
    display:table;
    width:100%;
    height: 100%;
  }

  .text-not-results {
    display:table-cell;
    vertical-align:middle;
    text-transform: uppercase;
    font-size: 27px;
    font-weight: 700;
    padding-bottom: 150px;
  }

  @media only screen and (min-width: 320px) {
    .panel {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media only screen and (min-width: 360px) {
    .panel {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media only screen and (min-width: 768px) {
    .panel {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media only screen and (min-width: 992px) {
    .panel {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media only screen and (min-width: 1500px) {
    .panel {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media only screen and (min-width: 2000px) {
    .panel {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`
/**
 * @function SearchPanel
 * @author Uriel
 * SearchPanel will render all the posts that will be filtered by a JS function.
 */
const SearchPanel = ({ searchText }) => {

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
  
  const postList = (items) =>
  {
    var aux = [];
    for (let index = 0; index < 20; index++) {
      items.forEach(element => {
        aux.push(element);
      });
    }
    return aux;
  }

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

export default SearchPanel

/**
 * Default props for the SearchPanel Component
 */
SearchPanel.propTypes = {
  searchText: PropTypes.string,
}
