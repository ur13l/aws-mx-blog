import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import "../styles/global.css"

/**
 * PaginatorWrapper element, used to set style to a component.
 */
const PaginatorWrapper = styled.div`
  text-align: center;
  margin-bottom: 45px;

  ul {
    display: inline;
  }

  li {
    display: inline;
    padding: 7px 13px;
    font-weight: 800;
    font-size: 21px;
    color: #000;
  }

  .current-page {
    background: #EA913A;
    color: white;
  }
`

/**
 * Paginator will render the most important new located on the News Page as a headliner.
 * @param {Object} currentPage
 * @param {Object} numPages
 * @param {Object} baseRoute
 */
const Paginator = ({ currentPage, numPages, baseRoute }) => {
  if (numPages > 1) {
    let pagElems = []

    /**
     * Checking if the current page is not the first. Then adding the "<"" character
     */
    if (currentPage > 1) {
      pagElems.push(
        <Link to={baseRoute + (currentPage - 1 === 1 ? "" : currentPage - 1)}>
          <li>«</li>
        </Link>
      )
    }

    Array.from({ length: numPages }).forEach((_, i) => {
      if (currentPage === i + 1) {
        pagElems.push(
          <Link to={baseRoute + (i + 1)}>
            <li className="current-page">{i + 1}</li>
          </Link>
        )
      } else {
        pagElems.push(
          <Link to={baseRoute + (i + 1 === 1 ? "": i + 1 )}>
            <li>{i + 1}</li>
          </Link>
        )
      }
    })

    /**
     * If the current page is not the last, we add the ">" character
     */
    if (currentPage < numPages) {
      pagElems.push(
        <Link to={baseRoute + (currentPage + 1 === 1 ? "" : currentPage + 1)}>
          <li>»</li>
        </Link>
      )
    }
    return (
      <PaginatorWrapper>
        <ul>{pagElems}</ul>
      </PaginatorWrapper>
    )
  }
  return <></>
}

/**
 * Default props for Main Post
 */
Paginator.propTypes = {
  post: PropTypes.object,
}

Paginator.defaultProps = {
  post: {},
}

export default Paginator
