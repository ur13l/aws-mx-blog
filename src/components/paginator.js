import "../styles/global.css"
import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Wrapper from "../styles/Paginator"

const Paginator = ({ numPages, currentPage, baseRoute }) => {
  if (numPages === 0) return null

  let pageIndicators = []

  /**
   * Checking if the current page is not the first. Then adding the "<"" character
   */
  if (currentPage > 1) {
    pageIndicators.push(
      <Link
        key="prev"
        to={baseRoute + (currentPage - 1 === 1 ? "" : currentPage - 1)}
      >
        <li>&lt;</li>
      </Link>
    )
  }

  Array.from({ length: numPages }).forEach((_, i) => {
    if (currentPage === i + 1) {
      pageIndicators.push(
        <Link to={baseRoute + (i + 1)} key={i}>
          <li className="current-page">{i + 1}</li>
        </Link>
      )
    } else {
      pageIndicators.push(
        <Link to={baseRoute + (i + 1 === 1 ? "" : i + 1)} key={i}>
          <li>{i + 1}</li>
        </Link>
      )
    }
  })

  /**
   * If the current page is not the last, we add the ">" character
   */
  if (currentPage < numPages) {
    pageIndicators.push(
      <Link
        key="next"
        to={baseRoute + (currentPage + 1 === 1 ? "" : currentPage + 1)}
      >
        <li>&gt;</li>
      </Link>
    )
  }
  return (
    <Wrapper>
      <ul>{pageIndicators}</ul>
    </Wrapper>
  )
}

/**
 * Default props for Main Post
 */
Paginator.propTypes = {
  numPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  baseRoute: PropTypes.string.isRequired,
}

export default Paginator
