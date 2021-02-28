import "react-multi-carousel/lib/styles.css"
import React, { Component } from "react"
import ScrollingLayout from "../components/ScrollingLayout"
import SEO from "../components/SEO"
import SideNav from "../components/sidenav"
import PostItem from "../components/PostItem"
import Paginator from "../components/paginator"
import Wrapper from "../styles/blog"

class Blog extends Component {
  arePostsAvailable = () => {
    const posts = this.getPosts();
    return posts.length > 0;
  }

  getPosts = () => {
    const {
      data: {
        posts: { edges },
      },
    } = this.props
    return edges;
  }

  renderMainPost = () => {
    if (!this.arePostsAvailable()) {
      return null;
    }
    const posts = this.getPosts();
    return(
      <div className="featured-post">
        <PostItem post={posts[0]} key="0" i="0" isFeaturedPost={true} />
      </div>
    );
  }

  renderPosts = () => {
    if (!this.arePostsAvailable()) {
      return "No hay entradas disponibles";
    }
    const {
      pageContext: { numPages, currentPage },
    } = this.props
    // Getting all posts except the first one already used as MainPost
    const posts = this.getPosts().slice(1);
    return (
      <div className="posts">
        {posts.map((post, key) => <PostItem post={post} key={key} i={key} />)}
        <Paginator
          numPages={numPages}
          currentPage={currentPage}
          baseRoute={"/"}
        />
      </div>
    );
  }

  render() {
    return (
      <Wrapper>
        <ScrollingLayout location="/blog">
          <SEO title="AWS MX Blog" />
          <div className="container">
            <div className="main-content">
              {this.renderMainPost()}
              <div className="posts-and-side-content">
                {this.renderPosts()}
                <div className="side-content">
                  <SideNav />
                  {/*TODO: Add collaborators component*/}
                  <div className="collaborators" />
                  {/*TODO: Add communities component*/}
                  <div className="communities"/>
                </div>
              </div>
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
    posts: allWordpressPost(
      sort: { fields: [date], order: DESC },
      filter: { categories: { elemMatch: { name: { eq: "blog" } } } }
      limit: 11
    ) {
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
