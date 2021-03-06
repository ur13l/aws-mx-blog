import "../styles/global.css"
import React, { Component } from "react"
import { Link } from "gatsby"
import Logo from '../assets/svg/aws-logo.svg';
import PropTypes from "prop-types"
import Menu from "./menu"
import SearchBar from "./SearchBar"
import Wrapper from "../styles/Header"
import { FaBars, FaSearch } from "react-icons/fa/index"


const Header = ({location}) => {
  const openMenu = () => {
    const main_content = document.getElementById("main-content")
    main_content.classList.add("main-content-mobile-effect")
    main_content.classList.remove("main-content-mobile-second-effect")
  }

  /**
   * Method called when the search icon or the close icon are clicked.
   */
  const onClickSearchToggle = () => {
    const headerSearch = document.getElementById("header-search")
    const searchContent = document.getElementById("search-content")
    const headerMobile = document.getElementById("header-mobile")
    const headerInput = document.getElementsByClassName("large-input")[0]
    headerSearch.classList.toggle("is-hidden")
    searchContent.classList.toggle("is-hidden")
    headerMobile.classList.toggle("is-hidden")
    headerInput.classList.toggle("input-full-width")
    headerInput.focus()
  }



  return (
    <Wrapper style={{backgroundColor: location === "/" ? "rgba(0,0,0,0)" : "white" }}>
      <Menu/>
      <div id="header-content" className="container">
        <div id="header-mobile" className="container hide-on-large-and-up">
            <div
              className="menu-icon-container pointer"
              onClick={ openMenu }
              onKeyDown={ openMenu }
              role={"button"}
              tabIndex={0}
            >
              <FaBars/>
            </div>
            <Logo className="logo-icon"/>
            <div
              className="search-icon-container pointer"
              onClick={ onClickSearchToggle }
              onKeyDown={ onClickSearchToggle }
              role={"button"}
              tabIndex={0}
            >
              <FaSearch/>
            </div>
          </div>
        <Link to="/">
          <Logo className="logo-icon hide-on-med-and-down"/>
        </Link>
        <ul className="menu-item-toolbar hide-on-med-and-down">
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

Header.propTypes = {
  siteTitle: PropTypes.string,
  location: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  location: `/`,
}

export default Header