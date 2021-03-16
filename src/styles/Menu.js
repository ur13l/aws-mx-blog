import styled from "styled-components"

/**
 * LayoutWrapper content
 */

export default styled.div`
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