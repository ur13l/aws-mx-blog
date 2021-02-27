import { Link } from "gatsby"
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share"
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa/index"
import React from "react"

const renderTags = post => {
  const { tags, id } = post
  if (!tags) return null
  return tags?.items?.map(({ slug, name }, i) => (
    <Link key={`${id}_${i}`} to={"/categoria/" + slug}>
      <span>{" " + name + (tags.length - 1 === i ? " " : ", ")}</span>
    </Link>
  ))
}

const PostFooter = ({ post, url }) => (
  <div className="post-footer">
    <div className="post-footer-tags">
      Tags:
      {renderTags(post)}
    </div>
    <div className="post-footer-social">
      <span className="">Compártelo:</span>
      <span className="social">
        <FacebookShareButton
          url={url}
          quote={post.title}
          className="social-button facebook"
        >
          <FaFacebookF />
        </FacebookShareButton>
      </span>
      <span className="social">
        <TwitterShareButton
          url={url}
          title={post.title}
          className="social-button twitter"
        >
          <FaTwitter />
        </TwitterShareButton>
      </span>
      <span className="social">
        <LinkedinShareButton
          url={url}
          title={post.title}
          className="social-button linkedin"
        >
          <FaLinkedin />
        </LinkedinShareButton>
      </span>
    </div>
  </div>
)

export default PostFooter
