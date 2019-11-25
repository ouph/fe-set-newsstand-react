import React from 'react';
import NewsName from "./NewsName.jsx";
import NewsContents from "./NewsContents.jsx";

const ListUi = (props) => {
  return(
    <>
      <NewsName newsData={props.newsData} clickHandler={props.clickHandler} selectedItemId={props.selectedItemId}/>
      <NewsContents newsContents={props.newsContents}/>
    </>
  )
};

export default ListUi;