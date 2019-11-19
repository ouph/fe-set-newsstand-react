import React, {Fragment} from 'react';
import styled from 'styled-components';

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

const Articles = ({newslist = []}) => {
  const articles = newslist.map((v, i) => <li key={i}>{v}</li>);
  return(
    <Fragment>
      <ArticleWrap>
        {articles}
      </ArticleWrap>
    </Fragment>
  )
};

export default Articles;