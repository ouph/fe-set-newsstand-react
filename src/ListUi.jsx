import React from 'react';
import NewsName from "./NewsName.jsx";
import NewsContents from "./NewsContents.jsx";

const ListUi = (props) => {
  return(
    <>
      <NewsName clickHandler={props.clickHandler} />
      <NewsContents />
    </>
  )
};

export default ListUi;