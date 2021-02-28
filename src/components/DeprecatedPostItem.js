import "../styles/global.css"
import React from "react"
import { Link } from "gatsby"
import TimeAgo from "react-timeago"
import esStrings from "react-timeago/lib/language-strings/es"
import buildFormatter from "react-timeago/lib/formatters/buildFormatter"
import TextTruncate from "react-text-truncate"
import Wrapper from "../styles/PostItem"
import Image from './common/Image';
import { getFirstAuthorName } from '../utils/TextUtils';

// Formatter to be used with the TimeAgo library to show text in spanish.
const formatter = buildFormatter(esStrings)

function normalizeText(text) {
  return text.replace("<p>", "")
    .replace("</p>", "")
}

const DeprecatedPostItem = ({ post, isFeaturedPost = false, hideDescription = false }) => {
  const { slug, title, featured_media, date, authors, excerpt } = post;

  const renderPostDescription = () => {
    if (hideDescription)
      return null;

    return <><p className="author-name">{getFirstAuthorName(authors)}</p>
      <TextTruncate
        line={3}
        element="span"
        truncateText="…"
        text={normalizeText(excerpt)}
        textTruncateChild=""
        style={isFeaturedPost ? { fontSize: 16 } : { fontSize: 16, lineHeight: "normal" }}
      /></>
  }

  return (
    <Wrapper>
      <Link to={`/${slug}`}>
        <Image className={isFeaturedPost ? "img-cover" : "img-container"} extraStyles={{
          backgroundImage: `url(${featured_media}`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'}
        }/>
        <div className="post-content">
          <TimeAgo
            className="post-date"
            formatter={formatter}
            date={date}
          />
          {isFeaturedPost ?
            <h3 dangerouslySetInnerHTML={{ __html: title }} /> :
            <h4 style={{ color: "black" }} dangerouslySetInnerHTML={{ __html: title }} />
          }
          {renderPostDescription()}
        </div>
      </Link>
    </Wrapper>
  )
}

export default DeprecatedPostItem
