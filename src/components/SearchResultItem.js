//#region Imports Components
import buildFormatter from "react-timeago/lib/formatters/buildFormatter"
import esStrings from "react-timeago/lib/language-strings/es"
import Typography from "@material-ui/core/Typography"
import htmlToText from "html-to-text"
import React from "react"
import { Card, CardContent } from "@material-ui/core"
import Img from "gatsby-image"
import TimeAgo from "react-timeago"
import { Link } from "gatsby"
//#endregion

//#region Imports Styles
import "../styles/global.css"
import SearchResultItemWrapper from "../styles/SearchResultItem"
//#endregion

//#region Declaration of constants
const formatter = buildFormatter(esStrings)
//#endregion

//#region Component function
const SearchResultItem = ({ post }) => {

    const { node: postInfo } = post;
    const { title, featured_media, date, author, slug } = postInfo;

    return (
        <SearchResultItemWrapper>
            <Link to={`/${slug}`}>
                <Card
                    className="card">
                    <div
                        className="card-content">
                        <Img
                            className="image-card-left"
                            fluid={featured_media.localFile.childImageSharp.fluid}
                        />
                        <CardContent
                            className="content-description-rigth">
                            <Typography
                                className="title-text"
                                variant="body2"
                                color="textPrimary">
                                {htmlToText.fromString(title)}
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
                                        date={date}
                                    />
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

//#region Export Component function
export default SearchResultItem;
//#endregion