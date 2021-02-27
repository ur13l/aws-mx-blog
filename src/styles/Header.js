import styled from "styled-components"

export default styled.header`
  width: 100%;
  box-shadow:  none;
  position: absolute;
  z-index: 999999999;
  
  div {
    margin: 0 auto;

    .menu-item-toolbar {
      float: right;
      height: 30px;
      line-height: 30px;
      li {
        display: inline-block;
        color: black;
        padding: 10px 8px 10px 42px;
        text-transform: uppercase;
        line-height: normal;
        font-size: 14px;
      }
    }
  }
  
  .logo-icon {
    width:210px;
    
  }

  a {
    vertical-align: middle;
  }

  li {
    font-weight: 800;
  }
  .pointer {
    cursor: pointer;
  }
  
  .menu-icon-container:focus,
  .search-icon-container:focus,
  .closable_close:focus {
    outline: none;
    
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
  .search-icon-container {
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

  }
`