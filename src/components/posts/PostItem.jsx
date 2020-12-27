import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from "gatsby-image"

const Wrapper  = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  height: 500px;
  min-width: 425px;
  width: 100%;
  margin-top: 30px;
  
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    cursor: pointer;
  }
`;

const ImgStyle = {
  height: "250px"
}

const PostItem = ({ post }) => {
  const { node: postInfo } = post;
  const { slug, title, featured_media, date, author, excerpt } = postInfo;

  return (
    <Wrapper>
      <Img fluid={featured_media.localFile.childImageSharp.fluid} imgStyle={ImgStyle} />
    </Wrapper>
  )
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired
}

export default PostItem;
