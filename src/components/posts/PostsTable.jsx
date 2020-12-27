import React from "react"
import PropTypes from 'prop-types';
import SectionTitle from "../common/SectionTitle";
import DeprecatedPostItem from "../DeprecatedPostItem";
import Paginator from "../paginator";

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
      <SectionTitle titleText="entradas recientes" />
      {posts.map((post, key) => <DeprecatedPostItem post={post} key={key} i={key} />)}
      <Paginator
        numPages={totalNumberOfPages}
        currentPage={currentPage}
        baseRoute={"/"}
      />
    </>
  );
}

PostsTable.propTypes = {
  totalNumberOfPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default PostsTable;
