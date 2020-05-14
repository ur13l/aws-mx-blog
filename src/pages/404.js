import React from "react"

import SEO from "../components/seo"
import styled from "styled-components"

const NotFoundWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  color: black;
  background: white;
`

const NotFoundPage = () => (
  <NotFoundWrapper>
      <SEO title="Página no encontrada " />
      <h4>404</h4>
  </NotFoundWrapper>
)

export default NotFoundPage
