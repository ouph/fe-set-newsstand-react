import React, {Fragment} from 'react';
import styled from "styled-components";

const NewsNameWrap = styled.ul`
  width: 17%;
  margin: 0;
  padding: 15px;
  display: inline-block;
  vertical-align: top;
  border-right: 1px solid #d4d4d4;
  list-style: none;
  text-decoration: none;
  font-size: 13px;
  font-weight: bold;
  color: #8c8c8c;
`;
const Item = styled.li`
  line-height: 1.8em;
  cursor: pointer;
`;

const NewsName = ({newsData, clickHandler, selectedItemId}) => {
  const titles = newsData.map(
    v => <Item key={v.id}
               onClick={() => clickHandler(v.id)}
               style={selectedItemId === v.id ? {color: '#03cf5d'} : {}}>
          {v.company}
        </Item>
  );
  return (
    <Fragment>
      <NewsNameWrap>
        {titles}
      </NewsNameWrap>
    </Fragment>
  );
};

export default NewsName;