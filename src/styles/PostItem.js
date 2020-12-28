import styled from "styled-components"

export default styled.div`
  display: inline-block;
  width: 100%;

  a {
    color: black;
  }
  
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

  .link-blog {
    padding: 0 15px;
  }
  
  .img-container, .img-container Img, .img-container .gatsby-image-wrapper {
    height: 200px;
  }

  .img-cover {
    .gatsby-image-wrapper {
      height: 200px; 
    }
  }

  /*
  ************
  Media Queries
  *************
  */
  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .img-cover {
      .gatsby-image-wrapper {
        height: 400px;
      }
    }
  }
`