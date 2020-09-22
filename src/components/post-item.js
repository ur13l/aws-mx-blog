
import React from "react"
import {Link} from "gatsby"
import Img from "gatsby-image"
import "../styles/global.css"
import TimeAgo from "react-timeago"
import esStrings from "react-timeago/lib/language-strings/es"
import buildFormatter from "react-timeago/lib/formatters/buildFormatter"
import TextTruncate from "react-text-truncate"
import Wrapper from '../styles/PostItem';

// Formatter to be used with the TimeAgo library to show text in spanish.
const formatter = buildFormatter(esStrings)

 const PostItem = ({post, i, isCover = false, hiddenDescription = false}) => {
   var clss ="img-container";
    if (isCover) {
      clss="img-cover"
    }
   return (
    <Wrapper>
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
    </Wrapper>
  )
 }

export default PostItem
