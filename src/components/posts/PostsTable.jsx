import React from "react"
import PropTypes from 'prop-types';
import SectionTitle from "../common/SectionTitle";
import PostItem from "./PostItem";
import Paginator from "../paginator";
import { TableWrapper } from './styles'

const PostsTable = ({ totalNumberOfPages, currentPage, posts }) => {
  if (!posts || posts.length === 0) {
    return (
      <>
        No hay entradas disponibles
      </>
    );
  }

  return (
    <>
      <TableWrapper>
        <SectionTitle titleText="entradas recientes" />
        {posts.map((post, key) => <PostItem post={post} key={key} i={key} />)}
        <Paginator
          numPages={totalNumberOfPages}
          currentPage={currentPage}
          baseRoute={"/"}
        />
      </TableWrapper>
    </>
  );
}

PostsTable.propTypes = {
  totalNumberOfPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default PostsTable;
