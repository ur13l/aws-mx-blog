import "react-multi-carousel/lib/styles.css"
import React, { Component } from "react"
import ScrollingLayout from "../components/ScrollingLayout"
import SEO from "../components/SEO"
import SideNav from "../components/sidenav"
import Title from "../components/title"
import PostItem from "../components/PostItem"
import Paginator from "../components/paginator"

import Wrapper from "../styles/blog"

/**
 * @class Blog
 * @author Uriel Infante
 * Page class to show all blog entries.
 */
class Blog extends Component {
  renderPosts = posts =>
    posts.map((post, key) => <PostItem post={post} key={key} i={key} />)

  render() {
    const {
      data: {
        posts: { edges },
      },
      pageContext: { numPages, currentPage },
    } = this.props
    let postsContent = edges;

    const renderContent = postsContent.length > 0;

    const MainPost = renderContent && (
      <PostItem post={postsContent[0]} key="0" i="0" isCover={true} />
    )
    return (
      <Wrapper>
        <ScrollingLayout location="/blog">
          <SEO title="AWS MX Blog" />
          <div className="container">
            <div className="blog-container">
              <div className="entry-container">
                <Title title="Blog" />
                {MainPost}
                <div className="post-container">
                  {/* Getting all posts except the first one already used as MainPost */}
                  {renderContent
                    ? this.renderPosts(postsContent.slice(1))
                    : "No hay entradas disponibles"}
                </div>
                <Paginator
                  numPages={numPages}
                  currentPage={currentPage}
                  baseRoute={"/"}
                />
              </div>
              <SideNav />
            </div>
          </div>
        </ScrollingLayout>
      </Wrapper>
    )
  }
}

export default Blog

/**
 * Query to retrieve every entry from blog
 */
// eslint-disable-next-line no-undef
export const postsQuery = graphql`
  query {
    posts: allWordpressPost(sort: { fields: [date], order: DESC }, limit: 11) {
      edges {
        node {
          id
          title
          content
          sticky
          excerpt
          slug
          date
          author {
            name
          }
          featured_media {
            link
            caption
            localFile {
              childImageSharp {
                # Try editing the "maxWidth" value to generate resized images.
                fluid(maxWidth: 468) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          tags {
            id
            name
          }
          categories {
            id
            name
          }
        }
      }
    }
  }
`
