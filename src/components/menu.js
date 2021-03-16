import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import styled from "styled-components"
import "../styles/global.css"
import { FaTimes } from "react-icons/fa"
import Logo from "../assets/svg/aws-logo.svg"

/**
 * MenuWrapper element, used to set style to a component.
 */
const MenuWrapper = styled.div`
  background: white;
  position: absolute;
  left: -60%;
  width: 60%;
  height: 100vh;
  overflow: hidden;
  z-index: 2000;
  justify-content: left;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: min-content min-content min-content min-content auto;
  text-transform: uppercase;
  transition: width 0.2s;
  color: black !important;

  .mobile-logo-menu {
    margin-right: 10% !important;
    margin-top: 20% !important;
  }
  
  div {
    padding: 12px 24px !important;
    margin: 0 !important;
  }
  
  
  .bottom {
    align-self: end;
    width: 100%;
  }

  .menu-close-icon {
    justify-self: end;
    text-align: right;
  }
  
  ul {
    list-style: none;
    margin: 0;
    padding: 5px;
    
    display: inline-block;
    
    li {
      margin-bottom: 20px;
    }
  }
`

/**
 * Menu component
 * @param {boolean} open
 */

class Menu extends Component {

  onClickClose() {
    const main_content = document.getElementById("main-content")
    main_content.classList.remove("main-content-mobile-effect")
    main_content.classList.add("main-content-mobile-second-effect")
    main_content.classList.add("overflowx")
  }

  /**
   * Render method
   */
  render() {
    return (
      <MenuWrapper id="drawer-menu">
        <Logo className="logo-icon mobile-logo-menu"/>
        <div className="menu-close-icon">
        </div>
        <div>
          <ul>
            <li>
              <Link onClick={()=>{this.onClickClose()}} to="/">blog</Link>
            </li>
            <li>
              <Link onClick={()=>{this.onClickClose()}} to="/">eventos</Link>
            </li>
            <li>
              <Link onClick={()=>{this.onClickClose()}} to="/">contacto</Link>
            </li>
          </ul>
        </div>
      </MenuWrapper>
    )
  }
}

Menu.propTypes = {
  open: PropTypes.bool,
}

Menu.defaultProps = {
  open: false,
}

export default Menu
