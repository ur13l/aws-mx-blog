import "../styles/global.css"
import React, { Component, useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { FaSearch, FaTimes, FaBars } from "react-icons/fa"
import SearchPanel from "./search-panel"
import Logo from '../assets/svg/logo-aws.svg';
import Wrapper from "../styles/SearchBar"


const SearchBar = () => {
  const [q, setState] = useState("");

  /**
   * Called when the close button on the search bar is clicked.
   */
  const onClickCancel = () => {
    const headerSearch = document.getElementById("header-search")
    const searchContent = document.getElementById("search-content")
    const headerMobile = document.getElementById("header-mobile")
    const headerInput = document.getElementsByClassName("large-input")[0]
    const searchPanel = document.getElementById("search-panel")
    headerInput.classList.toggle("input-full-width")
    headerInput.value = ""
    setTimeout(() => {
      headerSearch.classList.toggle("is-hidden")
      searchContent.classList.toggle("is-hidden")
      headerMobile.classList.toggle("is-hidden")
      searchPanel.classList.add("is-hidden")
      document.body.style = "overflow:auto"
      document.documentElement.style = "overflow:scroll"
    }, 300)
  }


  /**
   * @method onChangeSearchText
   * @author Uriel
   * @param {string} q
   * Method executed when the user is typing a search term.
   */
  const onChangeSearchText = (q) => {
    setState(q);
  }


  /**
   * @method onKeyUp
   * @author Uriel
   * Listener for the key characters introduced on search box.
   */
  const onKeyUp = () => {
    const headerInput = document.getElementsByClassName("large-input")[0]
    const searchPanel = document.getElementById("search-panel")
    onChangeSearchText(headerInput.value)
    // If the length of the search content is less than 3 characters, do not show the search panel.
    if (headerInput.value.length >= 3) {
      searchPanel.classList.remove("is-hidden")
      document.body.style = "overflow:hidden"
      document.documentElement.style = "overflow:hidden"
    } else if (headerInput.value.length <= 3) {
      searchPanel.classList.add("is-hidden")
      document.body.style = "overflow:auto"
      document.documentElement.style = "overflow:scroll"
    }
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
    <Wrapper>
      <div id="header-search" className="container is-hidden ">
          <span className="closable">
            <input
              onKeyUp={onKeyUp}
              className="large-input"
              type="search"
              placeholder="Buscar..."
            />
            <FaTimes
              className="closable_close"
              style={{verticalAlign: 'middle'}}
              onClick={onClickCancel}
              onKeyDown={onClickCancel}
              role={"button"}
              tabIndex={0}
            />
          </span>
      </div>
      <div id="search-content">
        <ul id="search-content-list">
          <li>
            <Link to="/">EC2</Link>
          </li>
          <li>
            <Link to="/">Cloud computing</Link>
          </li>
          <li>
            <Link to="/">S3</Link>
          </li>
          <li>
            <Link to="/">Amplify</Link>
          </li>
        </ul>
        <ul>
          <li className="search-icon">
            <div
              className="search-icon-container pointer"
              onClick={ onClickSearchToggle }
              onKeyDown={ onClickSearchToggle }
              role={"button"}
              tabIndex={0}
            >
              <FaSearch style={{verticalAlign: 'middle', height: '100%'}} />
            </div>
          </li>
        </ul>
      </div>
      <SearchPanel id="search-panel" q={q}/>
    </Wrapper>
  )
}

SearchBar.propTypes = {
  siteTitle: PropTypes.string,
  location: PropTypes.string,
}

SearchBar.defaultProps = {
  siteTitle: ``,
  location: `/`,
}

export default SearchBar
