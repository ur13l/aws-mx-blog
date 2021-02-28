import React, { Component } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Wrapper from "../styles/ScrollingLayout"
import Header from "./header"

class ScrollingLayout extends Component {
  state = {
    isScrolled: false,
  }

  handleScroll = () => {
    const isScreenScrolled = window.scrollY > 10
    const { isScrolled } = this.state
    if (isScreenScrolled !== isScrolled) {
      this.setState({
        isScrolled: isScreenScrolled,
      })
    }
  }

  componentDidMount() {
    document.addEventListener("scroll", this.handleScroll, { passive: true })
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll)
  }

  render() {
    const { children, location } = this.props
    const { isScrolled } = this.state
    return (
      <Wrapper id="main-content">
        <StaticQuery
          query={graphql`
            query SiteTitleQuery {
              site {
                siteMetadata {
                  title
                }
              }
            }
          `}
          render={({
            site: {
              siteMetadata: { title },
            },
          }) => (
            <Header
              siteTitle={title}
              scrolled={isScrolled}
              location={location}
            />
          )}
        />
        <main>{children}</main>
      </Wrapper>
    )
  }
}

ScrollingLayout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.string.isRequired,
}

export default ScrollingLayout
