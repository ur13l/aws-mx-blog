import styled from "styled-components"

/**
 * LayoutWrapper content
 */

export default styled.div`
  .post-footer {
    display: grid;
    grid-template-columns: 50% 50%;
    align-content: center;
    * {
      align-self: center;
    }
  }

  .post-footer-tags {
    justify-self: left;
  }

  .post-footer-social {
    justify-self: end;
    display: flex;
    align-content: center;
    * {
      align-self: center;
    }
  }
  .social {
    font-size: 30px;
    padding: 12px;
  }

  a {
    color: inherit;
  }
  
  /** It prevents the grid item to overflow with text*/
  .content-item1 *{
    min-width: 0;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (max-width: 992px) {
    .post-footer {
      grid-template-columns: 100%;
      justify-content: center;
    }

    .post-footer-tags {
      justify-self: center;
    }

    .post-footer-social {
      justify-self: center;
    }
  }
`
