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
    height: 300px;
    margin-top: 70px;
  }
  
  .posts-and-side-content {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }
  
  .collaborators {
    height: 200px;
  }
  
  .communities {
    height: 200px;
  }
  
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
    
    .featured-post {
      height: 550px;
    }

    .posts-and-side-content {
      flex-direction: row;
    }

    .side-content {
      min-width: 300px;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    .container {
      max-width: 100%;
      padding: 0 50px;
    }

    .posts-and-side-content {
      flex-direction: row;
      padding: 0 100px;
    }
    
    .side-content {
      min-width: 400px;
    }
  }
`

export default wrapper;