//#region Imports Components
import buildFormatter from "react-timeago/lib/formatters/buildFormatter"
import esStrings from "react-timeago/lib/language-strings/es"
import Typography from "@material-ui/core/Typography"
import parse from 'html-react-parser';
import React from "react"
import { Card, CardContent, CardMedia } from "@material-ui/core"
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

    const { title, featured_media, createdAt, authors, slug } = post;

    const getTextAuthors = (items) => {
        var textAuthors = "";
        for (let index = 0; index < items.items.length; index++) {
            const element = items.items[index];
            if(index == (items.items.length - 1)){
                textAuthors += `${element.author.firstName} ${element.author.lastName}`;
            }else{
                textAuthors += `${element.author.firstName} ${element.author.lastName},`;
            }
        }
        return textAuthors;
    }

    return (
        <SearchResultItemWrapper>
            <Link 
                to={`/${slug}`}
                onClick={selectedItem}>
                <Card
                    className="card">
                    <div
                        className="card-content">
                        <CardMedia
                            className="image-card-left"
                            image={featured_media}/>
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
                                    {getTextAuthors(authors)}
                                </Typography>
                                <Typography
                                    className="date-text">
                                    <TimeAgo
                                        formatter={formatter}
                                        date={createdAt}/>
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