import styled from "styled-components"

export default styled.div`

   padding: 0 !important;

  .search-panel-content {
    top: 140px;
    position: fixed;
    width: 100%;
    height: calc(100vh - 140px);
    background: rgba(255, 255, 255, 1);
    z-index: -1;
    display: flex;
    flex-direction: column;
    gap: 26px;
    overflow:scroll;
  }

  .text-title {
    margin-top: 26px;
    margin-left: 26px;
    color: #FBA13E;
  }

  .panel {
    display: grid;
    grid-gap: 26px;
  }

  .panel-not-results {
    text-align: center;
    display:table;
    width:100%;
    height: 100%;
  }

  .text-not-results {
    display:table-cell;
    vertical-align:middle;
    text-transform: uppercase;
    font-size: 27px;
    font-weight: 700;
    padding-bottom: 150px;
  }

  @media only screen and (min-width: 320px) {
    .panel {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media only screen and (min-width: 360px) {
    .panel {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media only screen and (min-width: 768px) {
    .panel {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media only screen and (min-width: 992px) {
    .panel {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media only screen and (min-width: 1500px) {
    .panel {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media only screen and (min-width: 2000px) {
    .panel {
      grid-template-columns: repeat(4, 1fr);
    }
  }

`