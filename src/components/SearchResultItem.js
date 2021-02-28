import React from "react"
import { Card, CardContent, CardMedia } from '@material-ui/core';
import styled from "styled-components"
import Typography from '@material-ui/core/Typography';
import htmlToText from "html-to-text"

/**
 * SearchPanelWrapper element, used to set style to a component.
 */
const SearchResultItemWrapper = styled.div`
  .root {
      display: flex;
  }
  .details {
    display: flex;
    flexDirection: column,
  }
  .cardContent{
    background-color: white;
    flex: 1 0 auto
  }
  .image 
  {
    width: 140px;
    height: 140px;
  }
`

const SearchResultItem = ({post}) => {

    const { node: postInfo } = post;
    const { slug, title, featured_media, date, author, excerpt } = postInfo;
    console.log(postInfo);
    return (
        <SearchResultItemWrapper>
            <Card className="root">
                <div className="details">
                    <CardMedia className="image" image="https://picsum.photos/200/300"/>
                    <CardContent className="cardContent">
                        <Typography component="h5" variant="h5">
                            {htmlToText.fromString(title)}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Mac Miller
                        </Typography>
                    </CardContent>
                </div>
            </Card>
        </SearchResultItemWrapper>
    )
}

export default SearchResultItem;