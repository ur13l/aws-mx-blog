import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, WrapperImg, ContentWrapper, Title, Excerpt } from './styles';
import Image from '../common/Image';
import ContentFooter from "./ContentFooter"
import { strip, getFirstAuthorName } from '../../utils/TextUtils';

const PostItem = ({ post }) => {
  const { title, featured_media, createdAt, authors, excerpt } = post;
  const imageStyles = {
    ...WrapperImg,
    backgroundImage: `url(${featured_media}`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }

  return (
    <Wrapper>
      <Image extraStyles={imageStyles} />
      <ContentWrapper>
        <Title>{strip(title)}</Title>
        <Excerpt>{strip(excerpt)}</Excerpt>
        <ContentFooter author={getFirstAuthorName(authors)} postCreationDate={createdAt} />
      </ContentWrapper>
    </Wrapper>
  )
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired
}

export default PostItem;
