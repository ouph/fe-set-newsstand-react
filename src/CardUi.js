import React, {Fragment} from 'react';
import styled from "styled-components";

const CardList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  display: inline-block;
`;
const Card = styled.li`
  width: 16.66%;
  padding: 20px 0;
  display: inline-block;
  border-bottom: 1px solid #d4d4d4;
  border-right: 1px solid #d4d4d4;
  text-align: center;
  box-sizing: border-box;
`;

const CardUi = ({newsData}) => {
  console.dir(newsData);
  const cards = newsData.map(
    v => <Card key={v.id}><img src={v.logoImgUrl} /></Card>
  );
  return(
    <Fragment>
      <CardList>
        {cards}
      </CardList>
    </Fragment>
  )
};

export default CardUi;