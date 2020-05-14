
import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import "../styles/global.css"
import TimeAgo from "react-timeago"
import esStrings from "react-timeago/lib/language-strings/es"
import buildFormatter from "react-timeago/lib/formatters/buildFormatter"
import TextTruncate from "react-text-truncate"



// Formatter to be used with the TimeAgo library to show text in spanish.
const formatter = buildFormatter(esStrings)

// PostItemWrapper styled div 
const PostItemWrapper = styled.div`
  display: inline-block;
  width: 100%;
  
  .post-date {
    margin: 0;
    color: #EA913A;
    text-transform: uppercase;
    font-weight: 800;
    text-rendering: optimizeLegibility;
    font-size: 0.7rem;
    line-height: 1.1;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  .author-name {
    margin-top: 12px;
    margin-bottom: 12px;
    color: #7a7a7a;
    text-transform: uppercase;
    font-weight: 800;
    text-rendering: optimizeLegibility;
    font-size: 0.7rem;
    line-height: 1.1;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  .link-blog {
    padding: 0 15px;
  }
  
  .img-container, .img-container Img, .img-container .gatsby-image-wrapper {
    height: 200px;
  }

  a {
    color: black;
  }
`

/**
 * @function PostItem 
 * @author Uriel Infante
 * @param {Object} post
 * @param {Int} i
 * @param {boolean} isCover (default: false)
 * @param {boolean} hiddenDescription (default: false)
 * Component that renders a simple post item.
 */
 const PostItem = ({post, i, isCover = false, hiddenDescription = false}) => {
   var clss ="img-container";
    if (isCover) {
      clss="img-cover"
    }
   return (
    <PostItemWrapper>
      <Link to={`/${post.node.slug}`}>
      <div className={clss}>
        <Img fluid={post.node.featured_media.localFile.childImageSharp.fluid} />
      </div>
      <div className="post-content">
        <TimeAgo
              className="post-date"
              formatter={formatter}
              date={post.node.date}
            />
        {isCover ?
          <h3 dangerouslySetInnerHTML={{ __html: post.node.title }}/> :
          <h4 style={{color:"black"}} dangerouslySetInnerHTML={{ __html: post.node.title }}/>
        }

        {hiddenDescription ? null :
          <><p className="author-name">{post.node.author.name}</p>
          <TextTruncate
            line={3}
            element="span"
            truncateText="…"
            text={post.node.excerpt
              .replace("<p>", "")
              .replace("</p>", "")}
            textTruncateChild=""
            style={isCover ? {fontSize:16} : {fontSize: 16, lineHeight: "normal"}}
          /></>
        }
      </div>
      </Link>
    </PostItemWrapper>
  )
 }

export default PostItem
