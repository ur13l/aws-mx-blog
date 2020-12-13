import styled from "styled-components";
import { white } from './colors';

const wrapper = styled.div`
  background-color: white;
  min-height:100vh;
  
  .container {
    margin: 0 auto;
    padding: 0 30px;
    max-width: 100%;
  }
    
  .main-content {
    display: flex;
    flex-direction: column;
  }
  
  .featured-post {
    
  }
  
  .side-content {
    
  }

//.post-container {
//  display: grid;
//  grid-template-columns: 1fr 1fr;
//  grid-gap: 12px;
//}
//
//.cover {
//  grid-row: 1/ span 2
//}
//  
//.post-container > * {
//  padding-bottom: 24px;
//  margin-bottom:36px;
//}
//
//@media screen and (max-width: 768px) {
//  .blog-container, .post-container {
//    grid-template-columns: 12fr;
//  }
//  
//  .entry-container {
//    grid-template-columns: 1fr;
//  }
//}
  /*
  ************
  Media Queries
  *************
   */
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }
`

export default wrapper;