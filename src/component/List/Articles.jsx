import React, {useContext} from 'react';
import styled from 'styled-components';
import {DataContext} from "../../pageReducer";

const ArticleWrap = styled.ul`
  display: inline-block;
  vertical-align: top;
  margin: 0;
  padding-left: 15px;
  list-style: none;
  line-height: 2em;
  font-weight: bold;
  font-size: 13px;
  color: #555;
`;

const Articles = () => {
  const {state: {newsContents: {newslist = []}}} = useContext(DataContext);
  const articles = newslist.map((v, i) => <li key={i}>{v}</li>);
  return(
    <>
      <ArticleWrap>
        {articles}
      </ArticleWrap>
    </>
  )
};

export default Articles;