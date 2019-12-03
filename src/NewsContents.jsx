import React, {useContext} from 'react';
import Articles from "./Articles.jsx";
import ThumbNews from "./ThumbNews.jsx";
import styled from "styled-components";
import {DataContext} from "./app";

const Div = styled.div`
  width: 76.7%;
  padding: 15px;
  display: inline-block
`;

const NewsContents = () => {
  const {state: {newsContents: {thumbnews = {}}}} = useContext(DataContext);
  return(
    <Div>
      <ThumbNews url={thumbnews.imageUrl} text={thumbnews.text}/>
      <Articles />
    </Div>
  )
};

export default NewsContents;