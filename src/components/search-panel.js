import { useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import "../styles/global.css"
import { graphql, Link } from "gatsby"
import htmlToText from "html-to-text"
import TextTruncate from "react-text-truncate"

/**
 * SearchPanelWrapper element, used to set style to a component.
 */
const SearchPanelWrapper = styled.div`
  padding: 0 !important;

  #search-panel {
    top: 70px;
    position: fixed;
    width: 100%;
    height: calc(100vh - 70px);
    background: rgba(255, 255, 255, 0.95);
    z-index: 2000;
    display: grid;
    overflow: scroll;
    grid-template-columns: 1fr;
  }

  .search-panel1 {
    height: fit-content;
    max-height: calc(100vh - 70px);
    padding-top: 21px !important;
    padding-bottom: 120px;
    margin: 0;
    display: grid;
    grid-gap: 27px;
    grid-template-columns: 1fr 1fr;
    h4 {
      margin: 0;
    }
  }

  .search-panel2 {
    grid-column: 1 / span 2;
    align-self: center;
    text-transform: uppercase;
    font-size: 27px;
    font-weight: 700;
    margin-top: -130px;
  }

  .search-hidden {
    display: none;
  }

  .entry-section-title {
    grid-column: 1 / span 2;
  }

  /* Small and median devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (max-width: 992px) {
    #search-panel,
    .search-panel1 {
      grid-template-columns: 1fr;
    }

    .entry-section-title {
      grid-column: 1;
    }

    .search-panel1 {
      margin: 0;
      padding: 24px 24px;
      h4 {
        margin: 0;
      }
    }
  }
`

/**
 * @function selectPost
 * @author Uriel
 * Change the scroll situation when a post is clicked, this way the panel won't
 * override the natural flow of the auto-scroll.
 */
const selectPost = () => {
  document.body.style = "overflow:inherit"
  document.documentElement.style = "overflow:scroll"
}

/**
 * @function SearchPanel
 * @author Uriel
 * SearchPanel will render all the posts that will be filtered by a JS function.
 */
const SearchPanel = ({ q }) => {
  const data = useStaticQuery(graphql`
    query {
      posts {
        postsByCreatedAt(type: "Post", sortDirection: DESC) {
          items {
            id
            title
            content
            excerpt
            slug
            createdAt
            tags {
              items {
                tag {
                  name
                  slug
                }
              }
            }
          }
        }
      }
    }
  `)

  // Filtering the info that will be shown on the panel, the regex are used to
  // replace accented words and other characters to get a clean search (eg. á -> a)
  const postsShown = data.posts.postsByCreatedAt.items
    .filter(
      elem =>
        elem.title
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .search(
            q
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
          ) !== -1
    )
    .splice(0, 6)

  return (
    <SearchPanelWrapper>
      <div id="search-panel" className="is-hidden">
        <div
          className={
            "search-panel1 container " +
            (postsShown.length === 0 ? "search-hidden" : "")
          }
        >
          <h3 className={"entry-section-title"}>Entradas</h3>
          {postsShown.map(entry => (
            <Link
              key={entry.id}
              onClick={() => {
                selectPost()
              }}
              to={"/publicaciones/entrada/" + entry.slug}
            >
              <div className={"post-item"}>
                <h4>{htmlToText.fromString(entry.title)}</h4>
                <TextTruncate
                  line={2}
                  element="span"
                  truncateText="…"
                  text={entry.excerpt.replace("<p>", "").replace("</p>", "")}
                  textTruncateChild=""
                />
              </div>
            </Link>
          ))}
        </div>

        <div
          className={
            "search-panel2 " + (postsShown.length !== 0 ? "search-hidden" : "")
          }
        >
          <span>No se encontraron resultados</span>
        </div>
      </div>
    </SearchPanelWrapper>
  )
}

export default SearchPanel

/**
 * Default props for the SearchPanel Component
 */
SearchPanel.propTypes = {
  q: PropTypes.string,
}
