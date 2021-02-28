import styled from "styled-components"

export default styled.div`

  background-color: white;

  &.main-content-mobile-effect {
    position:absolute;
    transition:transform 0.4s ease-in-out;
    transform: translateX(60%);
  }
  
  
  &.main-content-mobile-second-effect {
    position:absolute;
    transition:transform 0.4s ease-in-out;
    transform: translateX(0%);
  }
  
  
  .is-hidden {
    visibility: hidden;
    height: 0px !important;
    width: 0px;
    padding: 0 !important;
    margin: 0 !important;
    overflow: hidden;
  }

  p.deflat {
    font-style: italic;
  }
  
  .uppercase {
    text-transform: uppercase;
  }

  .white-background {
    background: white;
  }

  .section {
    width: 100%;
  }

  .italic {
    font-style: italic;
  }

  .black {
    font-weight: 700;
  }

  .truncate-text {
    color: #707070;
  }

  .align-right {
    text-align: right;
  }

  .no-scroll {
    overflow-y: hidden !important ;
  }

  .menu-hidden {
    width: 0;
    color: #171717 !important;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (max-width: 768px) {
    .hide-on-small {
      display: none;
    }
    .hide-on-med-and-down {
      display: none;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    .hide-on-med-and-down {
      display: none;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) and (max-width: 1280px) {
    .hide-on-large-and-up {
      display: none;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1280px) {
    .hide-on-large-and-up {
      display: none;
    }

    .hide-on-xlarge {
      display: none;
    }
  }
`
