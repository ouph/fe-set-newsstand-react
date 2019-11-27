import React, {useState, useContext} from 'react';
import styled from "styled-components";
import {DataContext} from "./app";
import Subscribe from "./Subscribe.jsx";

const CardList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  display: inline-block;
`;
const Card = styled.li`
  width: 16.66%;
  height: 64px;
  display: inline-block;
  border-bottom: 1px solid #d4d4d4;
  border-right: 1px solid #d4d4d4;
  text-align: center;
  box-sizing: border-box;
`;
const Img = styled.img`
  margin: 20px 0;
`;

const CardUi = () => {
  const [hovered, setHovered] = useState(null);
  const {newsData, setNewsData} = useContext(DataContext);

  const clickHandler = (type, id) => {
    const newData = newsData.map(v => v.id === id ? {...v, subscribe: type === 'subscribe'} : v);
    setNewsData(newData);
  };

  const cards = newsData.map(
    ({id, logoImgUrl, subscribe}) => {
      return (
        <Card
          key={id}
          onMouseEnter={() => setHovered(id)}
          onMouseLeave={() => setHovered(null)}
        >
          {hovered === id ?
            <Subscribe id={id} isSubscribe={subscribe} clickHandler={clickHandler} />
            :
            <Img src={logoImgUrl} />
          }
        </Card>
      );
    }
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