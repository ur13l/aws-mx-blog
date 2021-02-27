import React, { Component } from "react"
import PageLayout from "./page-layout"
import SEO from "./SEO"
import styled from "styled-components"
import SideNav from "./sidenav"
import Title from "./title"
import PostItem from "./PostItem"
import Paginator from "./paginator"
import "react-multi-carousel/lib/styles.css"

/**
 * Styled div of Tag Page
 */
const TagWrapper = styled.div`
  background-color: #ffffff;
  min-height: 99%;

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
`

const Tag = ({
  data: {
    posts: {
      postsByTag: { items },
    },
  },
  pageContext: { tagName, numPages, currentPage, slug },
}) => {
  console.log(items)
  return (
    <TagWrapper>
      <PageLayout location="/blog">
        <SEO title={`${tagName} | Rocktech R+D`} />
        <div className="container">
          <div className="blog-container">
            <div className="entry-container">
              <Title title={tagName} subtitle="AWS MX"></Title>
              {/*cover*/}
              <div className="post-container">
                {items.map((item, i) => (
                  <PostItem post={item.post} key={i} i={i} isCover={i === 0} />
                ))}
              </div>
              <Paginator
                numPages={numPages}
                currentPage={currentPage}
                baseRoute={"/publicaciones/" + slug + "/"}
              />
            </div>
            <SideNav></SideNav>
          </div>
        </div>
      </PageLayout>
    </TagWrapper>
  )
}

/**
 * Exporting tag
 */
export default Tag

/**
 * Query to retrieve every entry from blog
 */
// eslint-disable-next-line no-undef
export const postsQuery = graphql`
  query($nextToken: String, $limit: Int!, $id: ID!) {
    posts {
      postsByTag(limit: $limit, nextToken: $nextToken, tagID: $id) {
        items {
          post {
            id
            title
            content
            excerpt
            slug
            createdAt
            featured_mediaSharp {
              childImageSharp {
                # Try editing the "maxWidth" value to generate resized images.
                fluid(maxWidth: 468) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tags {
              items {
                tag {
                  id
                  name
                }
              }
            }
            authors {
              items {
                author {
                  id
                  firstName
                  lastName
                }
              }
            }
          }
        }
      }
    }
  }
`
