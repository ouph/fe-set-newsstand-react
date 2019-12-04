import React, {useContext} from 'react'
import styled from "styled-components";
import {DataContext} from "../../pageReducer";

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

const Subscribe = ({id, isSubscribe}) => {
  const {dispatch} = useContext(DataContext);
  const clickHandler = () => {
    dispatch({type: 'changeSubscribe', payload: id});
  };
  return (
    <>
      <Div>
        {isSubscribe ?
          <SubDiv onClick={clickHandler}>해지</SubDiv>
          :
          <SubDiv onClick={clickHandler}>구독</SubDiv>
        }
        <SubDiv>기사보기</SubDiv>
      </Div>
    </>
  );
};

export default Subscribe;