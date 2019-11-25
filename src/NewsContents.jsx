import React from 'react';
import Articles from "./Articles.jsx";
import ThumbNews from "./ThumbNews.jsx";
import styled from "styled-components";

const Div = styled.div`
  width: 76.7%;
  padding: 15px;
  display: inline-block
`;

const NewsContents = ({newsContents: {thumbnews = {}, newslist}}) => {
  return(
    <Div>
      <ThumbNews url={thumbnews.imageUrl} text={thumbnews.text}/>
      <Articles newslist={newslist}/>
    </Div>
  )
};

export default NewsContents;