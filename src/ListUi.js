import React, {Fragment} from 'react';
import NewsName from "./NewsName";
import NewsContents from "./NewsContents";

const ListUi = (props) => {
  return(
    <Fragment>
      <NewsName newsData={props.newsData} clickHandler={props.clickHandler} selectedItemId={props.selectedItemId}/>
      <NewsContents newsContents={props.newsContents}/>
    </Fragment>
  )
};

export default ListUi;