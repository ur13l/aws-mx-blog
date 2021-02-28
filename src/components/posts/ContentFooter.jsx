import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import TimeAgo from "react-timeago";
// eslint-disable-next-line no-unused-vars
import { orange, darkGray } from '../../styles/colors';
import { getDateFormatter } from '../../utils/DateUtils';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  .post-author {
    color: darkGray;
    font-size: 0.9rem;
    line-height: 1.1;
    font-weight: 800;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    margin-right: 10px;
  }
  
  .post-date {
    margin: 0;
    color: orange;
    text-rendering: optimizeLegibility;
    font-size: 0.9rem;
    line-height: 1.1;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
`;

const ContentFooter = ({ author, postCreationDate }) => {
  return(
    <Wrapper>
      <p className="post-author">{author}</p>
      <TimeAgo
        className="post-date"
        formatter={getDateFormatter()}
        date={postCreationDate}
      />
    </Wrapper>
  )
};

ContentFooter.protoTypes = {
  author: PropTypes.string.isRequired,
  postCreationDate: PropTypes.string.isRequired
}

export default ContentFooter;