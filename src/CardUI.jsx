import React, {useState, useContext} from 'react';
import styled from "styled-components";
import {DataContext} from "./pageReducer";
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

const CardUI = () => {
  const [hovered, setHovered] = useState(null);
  const {state} = useContext(DataContext);

  const cards = state.newsData.map(
    ({id, logoImgUrl, subscribe}) => {
      return (
        <Card
          key={id}
          onMouseEnter={setHovered.bind(null, id)}
          onMouseLeave={setHovered.bind(null, null)}
        >
          {hovered === id ?
            <Subscribe id={id} isSubscribe={subscribe} />
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

export default CardUI;