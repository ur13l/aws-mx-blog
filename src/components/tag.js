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
  background-color: #FFFFFF;
  min-height:99%;

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
`

/**
 * @class Tag
 * @author Uriel Infante
 * Page class to show all entries with a common tag
 */
class Tag extends Component {

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
    const posts = this.props.data.posts.edges
    const tagName = this.props.pageContext.tagName
    const numPages = this.props.pageContext.numPages
    const currentPage = this.props.pageContext.currentPage
    const slug = this.props.pageContext.slug

    var cover = (<span></span>);
    if(posts.length > 0) {
      cover = (<PostItem post={posts[0]} key="0" i="0" isCover={true} />)
    }
    return (
      <TagWrapper>
        <PageLayout location="/blog">
          <SEO title={`${tagName} | Rocktech R+D`}/>
          <div className="container">
            <div className="blog-container">
              <div className="entry-container">
                <Title title={tagName} subtitle="AWS MX"></Title>
                {cover}
                <div className="post-container">
                  {this.postLoop(posts)}
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
}

/**
 * Exporting tag
 */
export default Tag


/**
 * Query to retrieve every entry from blog
 */
export const postsQuery = graphql`
  query ($id: String!, $skip: Int!, $limit: Int!) {
    posts: allWordpressPost(
      sort: { fields: [date], order: DESC },
      filter: { tags: { elemMatch: { id: { eq: $id } } } },
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
