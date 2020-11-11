import styled from "styled-components"

export default styled.div`
  display: grid;
  grid-template-columns: 100%;
  margin-bottom: 10px;
  background-color: #EFEFEF;

  .tags-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 42px;
    grid-gap: 12px 24px;
    align-content:center;
    align-self: center;
    align-items: center;
  }
  
  .tags-container a {
    align-self: center;
    color: #aaa;
    font-size: 18px;
  } 

  .title-events {
    margin-left: 7%;
    color: #EA913A;
    text-transform: uppercase;
    font-weight: 800;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  .padding-events{
    width: 85%;
    margin-left: auto;
    margin-right: auto;
  }
`

