import React from 'react'
import styled from "styled-components";

const Div = styled.div`
  padding: 18px 0;
  float: left;
  width: 100%;
  background-color: #eee;
`;
const SubDiv = styled.div`
  display: inline-block;
  padding: 5px 10px;
  border: 1px solid #ccc;
  background-color: #fff;
  font-size: 12px;
  cursor: pointer;
`;

const Subscribe = ({id, isSubscribe, clickHandler}) => {
  return (
    <>
      <Div>
        {isSubscribe ?
          <SubDiv onClick={() => clickHandler('unsubscribe', id)}>해지</SubDiv>
          :
          <SubDiv onClick={() => clickHandler('subscribe', id)}>구독</SubDiv>
        }
        <SubDiv>기사보기</SubDiv>
      </Div>
    </>
  );
};

export default Subscribe;