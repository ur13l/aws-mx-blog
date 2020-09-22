import React, { Component } from "react"
import Layout from "./layout"
import SEO from "./SEO"
import styled from "styled-components"
import SideNav from "./sidenav"
import "react-multi-carousel/lib/styles.css"
import Title from "./title"
import PostItem from "./post-item"
import Paginator from "./paginator"

/**
 * Styled div of Blog Page
 */
const BlogWrapper = styled.div`
  background-color: #FFFFFF;
  min-height:100vh;

  .blog-container {
    display: grid;
    grid-template-columns: 9fr 3fr;
    width: 100%;
    padding-top: 100px;

  }

  .post-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 12px;
    
  }

  .cover {
    grid-row: 1/ span 2
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
.my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
  background: white;
  margin-bottom: 30px;
}

.post-container > * {
  padding-bottom: 24px;
  margin-bottom:36px;
}

@media screen and (max-width: 768px) {
  .blog-container, .post-container {
    grid-template-columns: 12fr;
  }
  
  .entry-container {
    grid-template-columns: 1fr;
  }
}
`

/**
 * @class Blog
 * @author Uriel Infante
 * Page class to show all blog entries.
 */
class Blog extends Component {

  /**
   * @function postLoop
   * @param {Array<Object>} posts
   * @author Uriel Infante
   * Function to iterate over the posts to render on page.
   */
  postLoop = posts => {
    let div = []
    posts.forEach((post, key) => {
      if(key > 0) {
        div.push(<PostItem post={post} key={key} i={key} />)
      }
    })
    return div
  }

  /**
   * @function render
   * @author Uriel Infante
   * Render function of component
   */
  render() {
    var posts = this.props.data.posts.edges
    const numPages = this.props.pageContext.numPages
    const currentPage = this.props.pageContext.currentPage

    var cover = (<></>);
    if(posts.length > 0) {
      cover = (<PostItem post={posts[0]} key="0" i="0" isCover={true} />)
    }
    return (
      <BlogWrapper>
        <Layout location="/blog">
          <SEO title="AWS MX Blog"/>
          <div className="container">
            <div className="blog-container">
              <div className="entry-container">
                <Title title="Blog" subtitle="AWS MX"/>
                {cover}
                <div className="post-container">
                  {this.postLoop(posts)}
                </div>
                <Paginator
                  numPages={numPages}
                  currentPage={currentPage}
                  baseRoute={"/publicaciones/"}
                />
              </div>
            </div>
          </div>

        </Layout>
      </BlogWrapper>
    )
  }
}

/**
 * Exporting blog
 */
export default Blog


/**
 * Query to retrieve every entry from blog
 */
export const postsQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    posts: allWordpressPost(
      sort: { fields: [date], order: DESC },
      limit: $limit,
      skip: $skip
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
                  ...GatsbyImageSharpFluid
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
