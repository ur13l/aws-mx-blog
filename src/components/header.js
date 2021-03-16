import "../styles/global.css"
import React, { Component, useState } from "react"
import { Link } from "gatsby"
import Logo from '../assets/svg/aws-logo.svg';
import PropTypes from "prop-types"
import Menu from "./menu"
import SearchBar from "./search-bar"
import Wrapper from "../styles/Header"
import { FaBars, FaSearch, FaArrowLeft, FaTimes } from "react-icons/fa/index"


const Header = ({location}) => {
  const [menu, setMenu] = useState(false)
  const openMenu = menuOption => {
    setMenu(menuOption);
    console.log(menuOption);
    if(menuOption) {
      const main_content = document.getElementById("main-content")
      const bar_icon = document.getElementById("bars-icon")
      const left_icon = document.getElementById("left-arrow-icon")
      main_content.classList.add("main-content-mobile-effect")
      main_content.classList.remove("main-content-mobile-second-effect")
      bar_icon.classList.add("icon-default-0")
      bar_icon.classList.remove("icon-default")
      left_icon.classList.add("icon-hover-active")
      bar_icon.classList.remove("icon-hover")
    } else {
      const main_content = document.getElementById("main-content")
      const bar_icon = document.getElementById("bars-icon")
      const left_icon = document.getElementById("left-arrow-icon")
      main_content.classList.remove("main-content-mobile-effect")
      main_content.classList.add("main-content-mobile-second-effect")
      main_content.classList.add("overflowx")
      bar_icon.classList.add("icon-default")
      bar_icon.classList.remove("icon-default-0")
      left_icon.classList.add("icon-hover")
      left_icon.classList.remove("icon-hover-active")
    }
  }

  /**
   * Method called when the search icon or the close icon are clicked.
   */
  const onClickMobileSearchToggle = () => {
    const headerSearch = document.getElementById("header-search-mobile")
    const headerMobile = document.getElementById("header-mobile")
    const headerInput = document.getElementsByClassName("large-input-mobile")[0]
    headerSearch.classList.toggle("is-hidden")
    headerMobile.classList.toggle("is-hidden")
    headerInput.classList.toggle("input-full-width")
    headerInput.focus()
  }


  /**
   * Called when the close button on the search bar is clicked.
   */
  const onClickCancel = () => {
    const headerSearch = document.getElementById("header-search-mobile")
    const headerMobile = document.getElementById("header-mobile")
    const headerInput = document.getElementsByClassName("large-input-mobile")[0]
    const searchPanel = document.getElementById("search-panel")
    headerInput.classList.toggle("input-full-width")
    headerInput.value = ""
    setTimeout(() => {
      headerSearch.classList.toggle("is-hidden")
      headerMobile.classList.toggle("is-hidden")
      searchPanel.classList.add("is-hidden")
      document.body.style = "overflow:auto"
      document.documentElement.style = "overflow:scroll"
    }, 300)
  }



  return (
    <Wrapper style={{backgroundColor: location === "/" ? "rgba(0,0,0,0)" : "white" }}>
      <Menu/>
      <div id="header-content" className="container">
        <div id="header-mobile" className="container hide-on-large-and-up">
            <div className="menu-icon-container pointer icon-container"
                 onClick={ ()=>openMenu(!menu) }
                 onKeyDown={ ()=>openMenu(!menu) }
                 role={"button"}
                 tabIndex={0}>
              <FaBars id="bars-icon" className="behind icon-default"/>
              <FaArrowLeft id="left-arrow-icon" className="behind icon-hover"/>
            </div>
            <Logo className="logo-icon"/>
            <div
              className="search-icon-container pointer"
              onClick={ onClickMobileSearchToggle }
              onKeyDown={ onClickMobileSearchToggle }
              role={"button"}
              tabIndex={0}
            >
              <FaSearch/>
            </div>
          </div>
        <div id="header-search-mobile" className="is-hidden ">
          <span className="closable-mobile">
            <input
              className="large-input-mobile"
              type="search"
              placeholder="Buscar..."
            />
            <FaTimes
              className="closable-close-mobile"
              style={{verticalAlign: 'middle'}}
              role={"button"}
              tabIndex={0}
              onClick={onClickCancel}
              onKeyDown={onClickCancel}
            />
          </span>
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