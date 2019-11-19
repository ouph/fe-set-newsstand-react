import React from 'react';
import Articles from "./Articles";
import ThumbNews from "./ThumbNews";

const NewsContents = ({newsContents}) => {
  const thumbs = newsContents.thumbnews || {};
  return(
    <div style={{width: '76.7%', padding: '15px', display: 'inline-block'}}>
      <ThumbNews url={thumbs.imageUrl} text={thumbs.text}/>
      <Articles newslist={newsContents.newslist}/>
    </div>
  )
};

export default NewsContents;