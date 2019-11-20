import React from 'react';
import styled from 'styled-components';

const TitleWrap = styled.div`
  width: 100%;
  border-bottom: 1px solid #d4d4d4;
  height: 40px;
`;
const Div = styled.div`
  display: inline-block;
  height: 100%;
  padding-left: 15px;
`;
const Title = styled.div`
  margin: 0;
  display: inline-block;
  line-height: 2.9em;
  font-size: 15px;
  font-weight: bold;
  color: #333;
`;
const SubTitle = styled(Title)`
  margin-left: 5px;
  color: #808080;
  &::before {
    content: "\\003e";
    display: inline-block;
    margin-right: 10px;
  }
  &::after {
    content: "";
    width: 1px;
    height: 15px;
    margin-left: 20px;
    display: inline-block;
    vertical-align: middle;
    background-color: #d4d4d4;
  }
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

const Icon = styled.i`
  margin-right: 10px;
  cursor: pointer;
`;
const MyNewsTitle = (props) => {
  return(
    <TitleWrap>
      <Div>
        <Title>뉴스 스탠드</Title>
        <SubTitle>전체 언론사</SubTitle>
      </Div>
      <Div><Title style={{width: '400px'}}>MY 뉴스</Title></Div>
      <Div>
        <Icon onClick={() => props.changeUiHandler("LIST")}>LIST</Icon>
        <Icon onClick={() => props.changeUiHandler("CARD")}>CARD</Icon>
      </Div>
      <div style={{float: 'right'}}>
        <LeftButton onClick={props.prevHandler}/>
        <RightButton onClick={props.nextHandler}/>
      </div>
    </TitleWrap>
  )
};

export default MyNewsTitle;