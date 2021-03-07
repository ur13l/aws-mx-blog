import React, { useLayoutEffect, useState } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import PageLayout from './page-layout';
import htmlToText from 'html-to-text';
import SideNav from './sidenav';
import Moment from 'react-moment';
import 'moment/locale/es';
import Wrapper from '../styles/Post';
import PostFooter from './PostFooter';
import { Disqus } from 'gatsby-plugin-disqus';

const Post = ({
  data: {
    posts: { getPost: post },
  },
}) => {
  const [url, setUrl] = useState();
  const { id, slug, featured_media, createdAt, authors, content, title } = post;

  useLayoutEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <Wrapper>
      <PageLayout
        title={'Title placeholder'}
        description={'Description placeholder'}
        location={slug}
        pageTitle={htmlToText.fromString(title)}
        image={featured_media}
      >
        <div className="content-item1">
          <div className="title-container">
            <h1>{htmlToText.fromString(title)}</h1>
            <p className="no-margin accent-text-color">
              <Moment format="LL" locale="es">
                {createdAt}
              </Moment>
            </p>
            <p className="no-margin accent-text-color">
              Por: {authors.items[0].author.firstName}
            </p>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
          {id && (
            <Disqus
              config={{
                url,
                identifier: slug,
                title: title,
              }}
            />
          )}

          <PostFooter post={post} url={url} />
        </div>
        <div className="content-item2">
          <SideNav />
        </div>
        <div className="content-item3"></div>
      </PageLayout>
    </Wrapper>
  );
};

Post.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
};

export default Post;

export const postQuery = graphql`
  query($id: ID!) {
    posts {
      getPost(id: $id) {
        id
        title
        content
        slug
        createdAt
        tags {
          items {
            tag {
              id
              name
              slug
            }
          }
        }
        featured_media
        authors {
          items {
            author {
              firstName
              lastName
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        url
      }
    }
  }
`;
