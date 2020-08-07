import "react-multi-carousel/lib/styles.css"
import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SideNav from "../components/sidenav"
import Title from "../components/title"
import PostItem from "../components/post-item"
import Paginator from "../components/paginator"

import Wrapper from '../styles/blog';

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
   * Render function 
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
      <Wrapper>
        <Layout location="/blog">
          <SEO title="AWS MX Blog"/>
          <div className="container">
            <div className="blog-container">
              <div className="entry-container">
                <Title title="Blog" />
                {cover}
                <div className="post-container">
                  {this.postLoop(posts)}
                </div>
                <Paginator
                  numPages={numPages}
                  currentPage={currentPage}
                  baseRoute={"/"}
                />
              </div>
              <SideNav/>
            </div>
          </div>
        </Layout>
      </Wrapper>
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
  query {
    posts: allWordpressPost(
      sort: { fields: [date], order: DESC },
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
