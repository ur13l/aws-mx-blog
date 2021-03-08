import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { orange } from "../../styles/colors";

const theme = {
  text_color: orange
}

const Title = styled.h1`
  font-size: 1em;
  color: ${({ theme }) => theme.text_color};
  text-transform: lowercase;
  margin-bottom: 15px
`;

const SectionTitle = ({ titleText }) => {
  return(
    <Title theme={theme}>
      {titleText}
    </Title>
  )
};

SectionTitle.propTypes = {
  titleText: PropTypes.string.isRequired
};

export default SectionTitle;
