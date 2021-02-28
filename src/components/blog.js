import React from 'react';
import PageLayout from './page-layout';
import styled from 'styled-components';
import 'react-multi-carousel/lib/styles.css';
import Title from './title';
import PostItem from './PostItem';
import Paginator from './paginator';
import { graphql } from 'gatsby';

/**
 * Styled div of Blog Page
 */
const BlogWrapper = styled.div`
  background-color: #ffffff;
  min-height: 100vh;

  .post-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 12px;
  }

  .cover {
    grid-row: 1 / span 2;
  }

  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .my-masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
    background: white;
    margin-bottom: 30px;
  }

  .post-container > * {
    padding-bottom: 24px;
    margin-bottom: 36px;
  }

  @media screen and (max-width: 768px) {
    .entry-container {
      grid-template-columns: 1fr;
    }
  }
`;

const Blog = ({
  data: {
    posts: {
      postsByCreatedAt: { items: posts },
    },
  },
  pageContext: { numPages, currentPage },
}) => (
  <BlogWrapper>
    <PageLayout title="AWSMX Blog" location="/blog">
      <div className="container">
        <div className="blog-container">
          <div className="entry-container">
            <Title title="Blog" subtitle="AWS MX" />
            {/*cover*/}
            <div className="post-container">
              {posts.map((post, i) => (
                <PostItem post={post} key={i} i={i} isCover={i === 0} />
              ))}
            </div>
            <Paginator
              numPages={numPages}
              currentPage={currentPage}
              baseRoute={'/publicaciones/'}
            />
          </div>
        </div>
      </div>
    </PageLayout>
  </BlogWrapper>
);

/**
 * Exporting blog
 */
export default Blog;

/**
 * Query to retrieve every entry from blog
 */
// eslint-disable-next-line no-undef
export const postsQuery = graphql`
  query($nextToken: String, $limit: Int!) {
    posts {
      postsByCreatedAt(
        type: "Post"
        sortDirection: DESC
        limit: $limit
        nextToken: $nextToken
      ) {
        items {
          id
          title
          content
          excerpt
          slug
          createdAt
          featured_media
          tags {
            items {
              tag {
                name
              }
            }
          }
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
    }
  }
`;
