import React from 'react';
import styled from 'styled-components';

const TitleWrap = styled.div`
  width: 100%;
  border-bottom: 1px solid #d4d4d4;
  height: 40px;
`;

const Button = styled.button`
  height: 100%;
  padding: 0 20px;
  border: 0;
  border-left: 1px solid #d4d4d4;
  background-color: transparent;
  cursor: pointer;
  &::before {
    content: "";
    width: 10px;
    height: 10px;
    display: inline-block;
    border-top: 3px solid #bbb;
    border-left: 3px solid #bbb;
  }
`;
const LeftButton = styled(Button)`
  &::before {
    margin-right: -5px;
    transform: rotate(-45deg);
  }
`;
const RightButton = styled(Button)`
  &::before {
    margin-left: -5px;
    transform: rotate(135deg)
  }
`;

const MyNewsTitle = (props) => {
  return(
    <TitleWrap>
      <div style={{display: 'inline-block'}}>뉴스 스탠드 > 전체 언론사</div>
      <div style={{display: 'inline-block'}}>MY 뉴스</div>
      <div style={{float: 'right'}}>
        <LeftButton onClick={props.prevHandler}/>
        <RightButton onClick={props.nextHandler}/>
      </div>
    </TitleWrap>
  )
};

export default MyNewsTitle;