import "../styles/global.css"
import React, { Component } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { FaSearch, FaTimes, FaBars } from "react-icons/fa"
import SearchPanel from "./search-panel"
import Logo from '../assets/svg/logo-aws.svg';
import Wrapper from "../styles/SearchBar"

/**
 * SearchWrapper element, used to set style to a component.
 */
class SearchBar extends Component {
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
    const searchContent = document.getElementById("search-content")
    const headerMobile = document.getElementById("header-mobile")
    const headerInput = document.getElementsByClassName("large-input")[0]
    headerSearch.classList.toggle("is-hidden")
    searchContent.classList.toggle("is-hidden")
    headerMobile.classList.toggle("is-hidden")


    headerInput.classList.toggle("input-full-width")
    headerInput.focus()
  }

  /**
   * Called when the close button on the search bar is clicked.
   */
  onClickCancel() {
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
    return (
      <Wrapper style={{backgroundColor: this.props.location === "/" ? "rgba(0,0,0,0)" : "white" }}>
        <div id="header-search" className="container is-hidden">
          <span className="closable">
            <input
              onKeyUp={this.onKeyUp}
              className="large-input"
              type="search"
              placeholder="Buscar"
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
      </Wrapper>
    )
  }
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
