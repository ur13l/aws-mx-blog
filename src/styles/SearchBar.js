import styled from "styled-components"

export default styled.div`
  width: 100%;
  box-shadow:  none;
  position: absolute;
  background-color: #FBA13E !important;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  div {

    ul  {
      float: right;
      height: 10px;
      line-height: 10px;
      li{
        display: inline-block;
        color: white;
        padding-top: 5px;
        padding-right: 42px;
        padding-bottom: 10px;
        padding-left: 0px;
        text-transform: uppercase;
        line-height: normal;
        font-size: 14px;
      }
    }
  }

  a {
    vertical-align: middle;
    color: white !important;
  }
  
  .search-icon {
    padding-right: 0px !important;
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
    border-bottom: 2px solid white;
    color: white;
    font-size: 20px;
    transition: width 0.3s;
    width: 0%;
    height: 0%;
    float: right;
    box-sizing: border-box;
  }

  .large-input:focus {
    outline: 0;
  }

  .large-input ::placeholder {
    color: white;
  }

  .large-input ::-webkit-search-cancel-button {
    display: none;
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
    color: white;
    height: 25px;
  }
  
  .menu-icon-container:focus,
  .search-icon-container:focus,
  .closable_close:focus {
    outline: none;
    
  }

  #header-search {
    height: 70px;
    padding-top: 15px;
    margin-right: 26px;
    margin-left: 26px;
  }

  #search-content,
  #header-mobile {
    height: 70px;
    padding-left: 2%;
    padding-right: 3%;
  }
  
  #search-content-list {
    float:left;
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