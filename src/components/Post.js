import React, { useLayoutEffect, useState } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import PageLayout from "./page-layout"
import htmlToText from "html-to-text"
import SideNav from "./sidenav"
import Moment from "react-moment"
import "moment/locale/es"
import Wrapper from "../styles/Post"
import PostFooter from "./PostFooter"
import { Disqus } from "gatsby-plugin-disqus"

const Post = ({ data: { wordpressPost: post } }) => {
  const [url, setUrl] = useState()
  useLayoutEffect(() => {
    setUrl(window.location.href)
  }, [])

  console.log(post);
  return (
    <Wrapper>
      <PageLayout
        title={"Title placeholder"}
        description={"Description placeholder"}
        location={post.slug}
        pageTitle={htmlToText.fromString(post.title)}
        image={post.featured_media.link}
      >
        <div className="content-item1">
          <div className="title-container">
            <h1>{htmlToText.fromString(post.title)}</h1>
            <p className="no-margin accent-text-color">
              <Moment format="LL" locale="es">
                {post.date}
              </Moment>
            </p>
            <p className="no-margin accent-text-color">
              Por: {post.author.name}
            </p>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: post.content,
            }}
          />
          {
            post.id &&
            <Disqus
              config={{
                url,
                identifier: post.slug,
                title: post.title,
              }}
            />
          }

          <PostFooter post={post} url={url}/>
        </div>
        <div className="content-item2">
          <SideNav/>
        </div>
        <div className="content-item3"></div>
      </PageLayout>
    </Wrapper>
  )
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Post

export const postQuery = graphql`
    query($id: String!) {
        wordpressPost(id: { eq: $id }) {
            id
            title
            content
            slug
            date
            tags {
                id
                name
                description
                slug
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
            author {
                name
            }
        }
        site {
            siteMetadata {
                title
                url
            }
        }
    }
`
