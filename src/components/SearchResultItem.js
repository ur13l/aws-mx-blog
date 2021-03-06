//#region Imports Components
import buildFormatter from "react-timeago/lib/formatters/buildFormatter"
import esStrings from "react-timeago/lib/language-strings/es"
import Typography from "@material-ui/core/Typography"
import parse from 'html-react-parser';
import React from "react"
import { Card, CardContent } from "@material-ui/core"
import Img from "gatsby-image"
import TimeAgo from "react-timeago"
import { Link } from "gatsby"
import PropTypes from "prop-types"
//#endregion

//#region Imports Styles
import "../styles/global.css"
import SearchResultItemWrapper from "../styles/SearchResultItem"
//#endregion

//#region Declaration of constants
const formatter = buildFormatter(esStrings)
const selectedItem = () => {
    document.body.style = "overflow:inherit"
    document.documentElement.style = "overflow:scroll"
}
//#endregion

//#region Component function
const SearchResultItem = ({ post }) => {

    const { node: postInfo } = post;
    const { title, featured_media, date, author, slug } = postInfo;

    return (
        <SearchResultItemWrapper>
            <Link 
                to={`/${slug}`}
                onClick={selectedItem}>
                <Card
                    className="card">
                    <div
                        className="card-content">
                        <Img
                            className="image-card-left"
                            fluid={featured_media.localFile.childImageSharp.fluid}/>
                        <CardContent
                            className="content-description-rigth">
                            <Typography
                                className="title-text"
                                variant="body2"
                                color="textPrimary">
                                {parse(title)}
                            </Typography>
                            <div
                                className="bottom-description">
                                <Typography
                                    variant="caption"
                                    className="author-text">
                                    {author.name}
                                </Typography>
                                <Typography
                                    className="date-text">
                                    <TimeAgo
                                        formatter={formatter}
                                        date={date}/>
                                </Typography>
                            </div>
                        </CardContent>
                    </div>
                </Card>
            </Link>
        </SearchResultItemWrapper>
    )
}
//#endregion

//#region PropTypes
SearchResultItem.propTypes = {
    post: PropTypes.object.isRequired
}
//#endregion

//#region Export Component function
export default SearchResultItem;
//#endregion