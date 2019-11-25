import React from 'react';
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
  const cards = newsData.map(
    ({id, logoImgUrl}) => <Card key={id}><img src={logoImgUrl} /></Card>
  );
  return(
    <>
      <CardList>
        {cards}
      </CardList>
    </>
  )
};

export default CardUi;