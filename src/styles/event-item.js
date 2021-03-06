import styled from "styled-components"

export default styled.div`
  display: inline-block;
  width: 100%;
  
  .post-date {
    margin: 0;
    color: #EA913A;
    text-transform: uppercase;
    font-weight: 800;
    text-rendering: optimizeLegibility;
    font-size: 0.7rem;
    line-height: 1.1;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  .author-name {
    margin-top: 12px;
    margin-bottom: 12px;
    color: #7a7a7a;
    text-transform: uppercase;
    font-weight: 800;
    text-rendering: optimizeLegibility;
    font-size: 0.7rem;
    line-height: 1.1;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }


  .date-name {
    margin-top: 12px;
    font-weight: 600;
    text-rendering: optimizeLegibility;
    font-size: 0.4rem;
    line-height: 1.1;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  .link-blog {
    padding: 0 15px;
  }
  
  .img-container, .img-container Img, .img-container .gatsby-image-wrapper {
    height: 200px;
  }

  a {
    color: black;
  }

  .event-content{
    text-align: end;
  }
  
  .event-item-title{
    color: black !important;
    text-transform: none !important;
  }
`

