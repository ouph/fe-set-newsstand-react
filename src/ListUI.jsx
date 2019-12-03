import React from 'react';
import NewsName from "./NewsName.jsx";
import NewsContents from "./NewsContents.jsx";

const ListUI = (props) => {
  return(
    <>
      <NewsName clickHandler={props.clickHandler} />
      <NewsContents />
    </>
  )
};

export default ListUI;