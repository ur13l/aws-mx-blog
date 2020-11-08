import { Link } from "gatsby"
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from "react-share"
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa/index"
import React from "react"


const PostFooter = ({post, url}) => (
  <div className="post-footer">
    <div className="post-footer-item1">
      Tags:
      {post.tags?.map((tag, i) => (
        <Link key={post.id} to={"/categoria/" + tag.slug}>
                  <span>
                    {" " +
                    tag.name +
                    (post.tags.length - 1 === i ? " " : ", ")}
                  </span>
        </Link>
      ))}
    </div>
    <div className="post-footer-item2">
      <span className="">Compártelo:</span>
      <span className="social">
        <FacebookShareButton
          url={url}
          quote={post.title}
          className="social-button facebook"
        >
          <FaFacebookF/>
        </FacebookShareButton>
      </span>
      <span className="social">
        <TwitterShareButton
          url={url}
          title={post.title}
          className="social-button twitter"
        >
          <FaTwitter/>
        </TwitterShareButton>
      </span>
      <span className="social">
        <LinkedinShareButton
          url={url}
          title={post.title}
          className="social-button linkedin"
        >
          <FaLinkedin/>
        </LinkedinShareButton>
      </span>
    </div>
  </div>

)


export default PostFooter
