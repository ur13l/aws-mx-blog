import "../styles/global.css"
import React, { Component } from "react"
import { Link } from "gatsby"
import Logo from '../assets/svg/aws-logo.svg';
import PropTypes from "prop-types"
import Menu from "./menu"
import SearchBar from "./search-bar"
import Wrapper from "../styles/Header"

/**
 * HeaderWrapper element, used to set style to a component.
 */
/**
 * Header component
 * @param {string} siteTitle
 * @param {string} location
 */

class Header extends Component {
  render() {
    return (
      <Wrapper style={{backgroundColor: this.props.location === "/" ? "rgba(0,0,0,0)" : "white" }}>
        <Menu/>
        <div id="header-content" className="container hide-on-med-and-down">
          <Link to="/">
            <Logo className="logo-icon"/>
          </Link>
          <ul className="menu-item-toolbar">
            <li>
              <Link to="/">blog</Link>
            </li>
            <li>
              <Link to="/">eventos</Link>
            </li>
            <li>
              <Link to="/">contacto</Link>
            </li>
          </ul>
        </div>
        <SearchBar/>
      </Wrapper>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  location: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  location: `/`,
}

export default Header