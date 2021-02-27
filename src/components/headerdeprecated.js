import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import styled from "styled-components"
import "../styles/global.css"
import Logo from '../assets/svg/logo-aws.svg';
import { FaSearch, FaTimes, FaBars } from "react-icons/fa"
import SearchPanel from "./search-panel"
import Menu from "./menu"

/**
 * HeaderWrapper element, used to set style to a component.
 */
const SearchWrapper = styled.header`
  width: 100%;
  box-shadow:  none;
  position: absolute;
  z-index: 999999999;
  
  div {
    margin: 0 auto;
    padding: 0.5rem 0rem;

    ul  {
      float: right;
      height: 50px;
      line-height: 50px;
      li {
        display: inline-block;
        color: black;
        padding: 10px 12px 10px 48px;
        text-transform: uppercase;
        line-height: normal;
        font-size: 14px;
      }
    }
  }

  a  {
    vertical-align: middle;
    color: black !important;
  }

  li {
    font-weight: 800;
  }
  .pointer {
    cursor: pointer;
  }

  .large-input {
    background: none;
    border: none;
    border-bottom: 2px solid black;
    color: black;
    font-size: 30px;
    transition: width 0.3s;
    padding-right: 48px;
    width: 0%;
    height: 0%;
    float: right;
    box-sizing: border-box;
  }

  .large-input:focus {
    outline: 0;
  }

  .closable {
    position: relative;
    display: inline-block;
    width: 100%;
    font-size: 40px !important;
  }

  .input-full-width {
    width: 100% !important;
    height: 45px;
  }

  .closable_close {
    position: absolute;
    right: 0;
    top: 0;
    padding: 10px 0px 10px 0px;
    cursor: pointer;
    color: black;
  }
  
  .menu-icon-container:focus,
  .search-icon-container:focus, 
  .closable_close:focus {
    outline: none;
    
  }

  #header-search  {
    height: 70px;
    padding-top: 15px;
  }

  #header-content,
  #header-mobile {
    height: 70px;
  }

  .last-item {
    padding-right: 0 !important;
    margin-right: 0 !important;
  }
  #search-panel {
    margin: 0;
    padding: 0;
  }

  .menu-icon-container,
  .search-icon-container  {
    font-size: 20px;
    align-content: center;
    align-self: center;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (max-width: 768px) {
    #header-mobile {
      display: grid;
      grid-template-columns: auto auto auto;
      color: black;
      align-content: center;
      grid-gap: 18px;
      justify-items: center;
    }

    .menu-icon-container {
      justify-self: start;
      margin: 0;
    }

    .search-icon-container {
      justify-self: right;
      margin: 0;
    }
    .large-input {
      font-size: 20px;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    #header-mobile {
      display: grid;
      grid-template-columns: auto auto auto;
      color: black;
      align-content: center;
      grid-gap: 18px;
    }

    .large-input {
      font-size: 20px;
    }
  }
`

/**
 * Header component
 * @param {string} siteTitle
 * @param {string} location
 */

class Headerdeprecated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      q: ""
    }

    this.onClickSearchToggle = this.onClickSearchToggle.bind(this)
    this.onClickCancel = this.onClickCancel.bind(this)
    this.onChangeSearchText = this.onChangeSearchText.bind(this)
    this.onKeyUp = this.onKeyUp.bind(this)
    this.openMenu = this.openMenu.bind(this)
  }

  /**
   * Method called when the search icon or the close icon are clicked.
   */
  onClickSearchToggle() {
    const headerSearch = document.getElementById("header-search")
    const headerContent = document.getElementById("header-content")
    const headerMobile = document.getElementById("header-mobile")
    const headerInput = document.getElementsByClassName("large-input")[0]
    headerSearch.classList.toggle("is-hidden")
    headerContent.classList.toggle("is-hidden")
    headerMobile.classList.toggle("is-hidden")


    headerInput.classList.toggle("input-full-width")
    headerInput.focus()
  }

  /**
   * Called when the close button on the search bar is clicked.
   */
  onClickCancel() {
    const headerSearch = document.getElementById("header-search")
    const headerContent = document.getElementById("header-content")
    const headerMobile = document.getElementById("header-mobile")
    const headerInput = document.getElementsByClassName("large-input")[0]
    const searchPanel = document.getElementById("search-panel")

    headerInput.classList.toggle("input-full-width")
    headerInput.value = ""
    setTimeout(() => {
      headerSearch.classList.toggle("is-hidden")
      headerContent.classList.toggle("is-hidden")
      headerMobile.classList.toggle("is-hidden")

      searchPanel.classList.add("is-hidden")
      document.body.style = "overflow:auto"
      document.documentElement.style = "overflow:scroll"
    }, 300)
  }

  /**
   * @method onKeyUp
   * @author Uriel
   * Listener for the key characters introduced on search box.
   */
  onKeyUp() {
    // Header input and search panel components.
    const headerInput = document.getElementsByClassName("large-input")[0]
    const searchPanel = document.getElementById("search-panel")
    this.onChangeSearchText(headerInput.value)

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
   * @method openMenu
   * @author Uriel
   * Method called when the menu button is pressed on mobile view.
   */
  openMenu() {
    const menu = document.getElementById("drawer-menu")
    menu.classList.remove("menu-hidden")
  }

  /**
   * @method onChangeSearchText
   * @author Uriel
   * @param {string} q
   * Method executed when the user is typing a search term.
   */
  onChangeSearchText(q) {
    /** Asign the value to the state q. This state will be shared with SearchPanel Component */
    this.setState({
      q: q,
    })
  }

  /**
   * Render method
   */
  render() {
    console.log(this.props.location === "/")
    return (
      <SearchWrapper style={{backgroundColor: this.props.location === "/" ? "rgba(0,0,0,0)" : "white" }}>
        <Menu/>
        <div id="header-search" className="container is-hidden">
          <span className="closable">
            <input
              onKeyUp={this.onKeyUp}
              className="large-input"
              type="search"
              placeholder="Buscar..."
            />
            <FaTimes
              className="closable_close"
              style={{verticalAlign: 'middle'}}
              onClick={this.onClickCancel}
              onKeyDown={this.onClickCancel}
              role={"button"}
              tabIndex={0}
            />
          </span>
        </div>
        <div id="header-content" className="container hide-on-med-and-down">
          <Link to="/">
            <Logo style={{width:190}}/>
          </Link>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <div
                className="search-icon-container pointer"
                onClick={ this.onClickSearchToggle }
                onKeyDown={ this.onClickSearchToggle }
                role={"button"}
                tabIndex={0}
              >
                <FaSearch style={{verticalAlign: 'middle', height: '100%'}} />
              </div>
            </li>
          </ul>
        </div>
        <div id="header-mobile" className="container hide-on-large-and-up">
          <div
            className="menu-icon-container pointer"
            onClick={ this.openMenu }
            onKeyDown={ this.openMenu }
            role={"button"}
            tabIndex={0}
          >
            <FaBars/>
          </div>
          <Logo/>

          <div
            className="search-icon-container pointer"
            onClick={ this.onClickSearchToggle }
            onKeyDown={ this.onClickSearchToggle }
            role={"button"}
            tabIndex={0}
          >
            <FaSearch/>
          </div>
        </div>
        <SearchPanel id="search-panel" q={this.state.q}/>
      </SearchWrapper>
    )
  }
}

Headerdeprecated.propTypes = {
  siteTitle: PropTypes.string,
  location: PropTypes.string,
}

Headerdeprecated.defaultProps = {
  siteTitle: ``,
  location: `/`,
}

export default Headerdeprecated
