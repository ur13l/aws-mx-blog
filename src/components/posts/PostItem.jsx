import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Wrapper, WrapperImg,ImgStyles, ContentWrapper, Title, Excerpt } from './styles';
import { strip } from '../../utils/textUtils';

const PostItem = ({ post }) => {
  const { node: postInfo } = post;
  const { slug, title, featured_media, date, author, excerpt } = postInfo;

  return (
    <Wrapper>
      <Img fluid={featured_media.localFile.childImageSharp.fluid} style={WrapperImg} imgStyle={ImgStyles} />
      <ContentWrapper>
        <Title>{strip(title)}</Title>
        <Excerpt>{strip(excerpt)}</Excerpt>
      </ContentWrapper>
    </Wrapper>
  )
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired
}

export default PostItem;
